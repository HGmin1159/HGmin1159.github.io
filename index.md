---
layout: splash
permalink: /

header:
  image: /assets/img/mintwall.jpg
  
intro: 
  - excerpt: "Welcome. This blog was created to organize my studies and use them in lectures and group studies. The posts on this blog deal with theories, implementations, and my intuitions in various fields. My email address is mhg9511@gmail.com. If you find any errors or have some issues, please contact me."

feature_row1:
  - image_path: /assets/img/quantum.png
    alt: "placeholder image 4"
    title: "Quantum Computing"
    excerpt: 'Theory and Experiment of Quantum Computing'
    url: "/categories/quantum/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/Analysis.png
    alt: "placeholder image 6"
    title: "Analysis"
    excerpt: 'Real, Complex and Functional Analysis'
    url: "/categories/Analysis/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/img/Advanced.png
    alt: "placeholder image 6"
    title: "Advanced Statistical Theory"
    excerpt: 'Advanced Statistical Theory to reach stars'
    url: "/categories/Advanced/"
    btn_label: "Read More"
    btn_class: "btn--primary"
    
feature_row2:
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
  - image_path: /assets/img/bayes.png
    alt: "placeholder image 2"
    title: "Bayesian Statistics"
    excerpt: 'Theory and Experiment of Bayesian Statistics'
    url: "categories/Bayesian/"
    btn_label: "Read More"
    btn_class: "btn--primary"
    
feature_row3:
  - image_path: /assets/img/avatar2.jpg
    alt: "placeholder image 4"
    title: "H.G Min"
  - url: "/assets/CV.pdf"
    btn_label: "My CV"
    btn_class: "btn--primary"
    excerpt: "**University of North Carolina at Chapel Hill** <br> - Ph.D. student in Biostatistics (2023~) <br> **Yonsei University** <br> - Master's degree in Statitstics (2020~2023) <br> - Bachelor's degree in Applied Statistics (2014~2020) <br> **Yonsei Institute of Data Science** <br> - Consulting Assistant (2021) <br> - Chief Consulting Assistant (2021~2023) <br> **Korea Quantum Computing** <br> - Researcher (2022~2023)" 
  - url: "/assets/SOP.pdf"
    btn_label: "My SOP"
    btn_class: "btn--primary"
    excerpt: '**Fields of Interest** <br> - **Dimensionality Reduction** <br> - **Quantum Machine Learning** <br> - **Optimization** <br> - **Nonparametric Statistics**'
    
---

{% include feature_row id="intro" type="center"%}
{% include feature_row id="feature_row1" %}
{% include feature_row id="feature_row2" %}
{% include feature_row id="feature_row3" %}
