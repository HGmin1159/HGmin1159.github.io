---
layout: splash
permalink: /

header:
  image: /assets/img/main.png

feature_row1:
  - image_path: /assets/img/avatar.jpg
    alt: "placeholder image 4"
    title: "H.G Min"
  - url: "/assets/CV.pdf"
    btn_label: "My CV"
    btn_class: "btn--primary"
    excerpt: "**Yonsei University** <br> - **Master's degree** expected in Applied Statitstics <br> - **Bachelor's degree** in Applied Statistics <br> - **Consulting Assistant** in Institute of Statistics and DataScience"
  - url: "/assets/SOP.pdf"
    btn_label: "My SOP"
    btn_class: "btn--primary"
    excerpt: '**Intersting Field** <br> - Dimension Reduction <br> - Quantum Computing <br> - Optimization'
feature_row2:
  - image_path: /assets/img/quantum.png
    alt: "placeholder image 4"
    title: "Quantum Computing"
    excerpt: '양자컴퓨터 알고리즘'
    url: "/categories/quantum/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/dimension.png
    alt: "placeholder image 3"
    title: "Dimension Reduction"
    excerpt: '차원축소'
    url: "categories/Dimension/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/convex.png
    alt: "placeholder image 1"
    title: "Convex Optimization"
    excerpt: '최적화 이론'
    url: "/categories/Convex/"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: /assets/img/bayes.png
    alt: "placeholder image 2"
    title: "Bayesian Statistics"
    excerpt: '베이즈 통계학'
    url: "categories/Bayesian/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/others.png
    alt: "placeholder image 6"
    title: "Others"
    excerpt: '해석학 등 기타 내용'
    url: "/categories/others/"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center"%}
{% include feature_row id="feature_row1" %}
{% include feature_row id="feature_row2" %}
{% include feature_row id="feature_row3" %}
