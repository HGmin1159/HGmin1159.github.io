---
layout: splash
permalink: /

header:
  image: /assets/img/mintwall.jpg

feature_row1:
  - image_path: /assets/img/avatar2.jpg
    alt: "placeholder image 4"
    title: "H.G Min"
  - url: "/assets/CV.pdf"
    btn_label: "My CV"
    btn_class: "btn--primary"
    excerpt: "**Yonsei University** <br> - **Master's degree** expected in Applied Statitstics <br> - **Bachelor's degree** in Applied Statistics <br> - **Consulting Assistant** in Institute of Data Science"
  - url: "/assets/SOP.pdf"
    btn_label: "My SOP"
    btn_class: "btn--primary"
    excerpt: '**Fields of Interest** <br> - **Dimensionality Reduction** <br> - **Quantum Machine Learning** <br> - **Theory of Optimization**'

feature_row2:
  - image_path: /assets/img/quantum.png
    alt: "placeholder image 4"
    title: "Quantum Computing"
    excerpt: 'Theory and Experiment of Quantum Computing'
    url: "/categories/quantum/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/dimension.png
    alt: "placeholder image 3"
    title: "Dimension Reduction"
    excerpt: 'Theory and Experiment of Dimension Reduction'
    url: "categories/Dimension/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/convex.png
    alt: "placeholder image 1"
    title: "Convex Optimization"
    excerpt: 'Theory and Experiment of Convex Optimization'
    url: "/categories/Convex/"
    btn_label: "Read More"
    btn_class: "btn--primary"
    
feature_row3:
  - image_path: /assets/img/bayes.png
    alt: "placeholder image 2"
    title: "Bayesian Statistics"
    excerpt: 'Theory and Experiment of Bayesian Statistics'
    url: "categories/Bayesian/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/Analysis.png
    alt: "placeholder image 6"
    title: "Analysis"
    excerpt: 'Real, Complex and Functional Analysis'
    url: "/categories/others/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/others.png
    alt: "placeholder image 6"
    title: "Others"
    excerpt: 'Other Data Science Methodology'
    url: "/categories/others/"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center"%}
{% include feature_row id="feature_row1" %}
{% include feature_row id="feature_row2" %}
{% include feature_row id="feature_row3" %}
