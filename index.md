---
layout: splash
permalink: /

header:
  image: /assets/img/main.png

feature_row1:
  - image_path: /assets/img/dimension.png
    alt: "placeholder image 2"
    title: "Dimension Reduction"
    excerpt: '차원축소와 관련된 학술정보 모음'
    url: "categories/Dimension/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/convex.png
    alt: "placeholder image 2"
    title: "Convex Optimization"
    excerpt: '최적화 이론과 구현 모음'
    url: "/categories/Convex/"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row2:
  - image_path: /assets/img/bayes.png
    alt: "placeholder image 2"
    title: "Bayesian Statistics"
    excerpt: '베이즈 통계학과 관련된 학술정보 모음'
    url: "categories/Bayesian/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/quantum.png
    alt: "placeholder image 2"
    title: "Quantum Computing"
    excerpt: '양자컴퓨터 알고리즘 모음'
    url: "/categories/quantum/"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: /assets/img/Technology.png
    alt: "placeholder image 2"
    title: "Technique"
    excerpt: '분석, 발표, 정리 등에 유용한 툴 모음'
    url: "/categories/technique/"
    btn_label: "Read More"
    btn_class: "btn--primary"  
  - image_path: /assets/img/project.png
    alt: "placeholder image 2"
    title: "Project"
    excerpt: '대회, 논문 구현 등 프로젝트 모음'
    url: "/categories/project/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/others.png
    alt: "placeholder image 2"
    title: "Others"
    excerpt: '수학, 도메인 지식 등 잡식 모음'
    url: "categories/others/"
    btn_label: "Read More"
    btn_class: "btn--primary"
    
---

{% include feature_row id="intro" type="center"%}
{% include feature_row id="feature_row1" %}
{% include feature_row id="feature_row2" %}
{% include feature_row id="feature_row3" %}
