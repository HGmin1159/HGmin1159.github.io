// PDF.js is served locally so presentations do not depend on an external viewer.
const vendor = new URL("../vendor/pdfjs/", import.meta.url);
let library;
function loadLibrary() {
  library ||= import(new URL("pdf.min.mjs", vendor).href).then(pdfjs => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdf.worker.min.mjs", vendor).href;
    return pdfjs;
  });
  return library;
}

async function initialize(viewer) {
  const canvas = viewer.querySelector("canvas");
  const stage = viewer.querySelector(".presentation-viewer__stage");
  const status = viewer.querySelector('[role="status"]');
  const input = viewer.querySelector("[data-page]");
  const previous = viewer.querySelector('[data-action="previous"]');
  const next = viewer.querySelector('[data-action="next"]');
  const fullscreen = viewer.querySelector('[data-action="fullscreen"]');
  let pdf, pageNumber = 1, sequence = 0, task, queue = Promise.resolve();

  function controls() {
    input.value = pageNumber;
    input.disabled = !pdf;
    previous.disabled = !pdf || pageNumber <= 1;
    next.disabled = !pdf || pageNumber >= pdf.numPages;
  }

  function render() {
    if (!pdf) return;
    const version = ++sequence;
    task?.cancel();
    controls();
    status.textContent = `Loading slide ${pageNumber}…`;
    queue = queue.catch(() => {}).then(async () => {
      if (version !== sequence) return;
      const number = pageNumber;
      const page = await pdf.getPage(number);
      if (version !== sequence) return;
      const base = page.getViewport({ scale: 1 });
      let scale = Math.max(stage.clientWidth, 1) / base.width;
      if (document.fullscreenElement === viewer) {
        scale = Math.min(scale, Math.max(stage.clientHeight, 1) / base.height);
      }
      const viewport = page.getViewport({ scale });
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.ceil(viewport.width * ratio);
      canvas.height = Math.ceil(viewport.height * ratio);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      canvas.setAttribute("aria-label", `Slide ${number} of ${pdf.numPages}`);
      task = page.render({
        canvas,
        viewport,
        transform: ratio === 1 ? null : [ratio, 0, 0, ratio, 0, 0],
        background: "white"
      });
      await task.promise;
      if (version === sequence) {
        status.textContent = `Slide ${number} of ${pdf.numPages}`;
      }
    }).catch(error => {
      if (error.name !== "RenderingCancelledException" && version === sequence) {
        status.textContent = "This slide could not be displayed. Use Open PDF to view the full presentation.";
        console.error("Presentation render failed", error);
      }
    });
  }

  function goTo(value) {
    if (!pdf) return;
    const number = Number(value);
    if (!Number.isFinite(number)) { controls(); return; }
    pageNumber = Math.max(1, Math.min(pdf.numPages, Math.trunc(number)));
    render();
  }

  previous.addEventListener("click", () => goTo(pageNumber - 1));
  next.addEventListener("click", () => goTo(pageNumber + 1));
  input.addEventListener("change", () => goTo(input.value));
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") { event.preventDefault(); goTo(input.value); }
  });
  viewer.addEventListener("keydown", event => {
    if (event.target.closest("input, button, a")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      goTo(pageNumber + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  fullscreen.hidden = !document.fullscreenEnabled;
  fullscreen.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement === viewer) await document.exitFullscreen();
      else await viewer.requestFullscreen();
    } catch {
      status.textContent = "Fullscreen is unavailable. You can open the PDF in a new tab.";
    }
  });
  document.addEventListener("fullscreenchange", () => {
    fullscreen.textContent = document.fullscreenElement === viewer ? "Exit fullscreen" : "Fullscreen";
    render();
  });
  let resizeTimer;
  new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 100);
  }).observe(stage);

  try {
    const pdfjs = await loadLibrary();
    pdf = await pdfjs.getDocument({
      url: viewer.dataset.pdf,
      cMapUrl: new URL("cmaps/", vendor).href,
      cMapPacked: true,
      standardFontDataUrl: new URL("standard_fonts/", vendor).href,
      wasmUrl: new URL("wasm/", vendor).href,
      iccUrl: new URL("iccs/", vendor).href,
      isEvalSupported: false
    }).promise;
    input.max = pdf.numPages;
    viewer.querySelector("[data-total]").textContent = `/ ${pdf.numPages}`;
    render();
  } catch (error) {
    status.textContent = "The inline viewer could not load. Use Open PDF or Download to access all slides.";
    console.error("Presentation load failed", error);
  }
}

document.querySelectorAll(".presentation-viewer").forEach(viewer => {
  initialize(viewer);
});
