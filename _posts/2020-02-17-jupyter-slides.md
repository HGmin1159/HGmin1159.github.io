---
title: \[기술\]주피터 노트북으로 슬라이드쇼 만들기
categories: [Technique]
tags: [기술,Technique]
excerpt: nbconvert,rise,reveal.js에 대한 설명
---

 주피터 노트북은 아나콘다에서 제공하는 파이썬 코드 편집기이다.  

 다른 편집기에 비해 주피터 노트북이 가지고 있는 장점은 무엇보다도 파이썬 코드를 입력하면서 마크다운을 함께 넣을 수 있다는 점이다.  

 파이썬과 마크다운을 함께 쓸 수 있다는 것은 코드가 함께 들어있는 정돈된 문서를 만들 수 있다는 것을 의미한다. 

 그렇다면 이렇게 잘 정돈된 문서(Document)를 잘 꾸며서 발표에 사용해도 적절할 텐데, 주피터 노트북에서는 이러한 기능을 함께 제공한다. 이 포스팅은 그 방법에 대해서 소개하려고 한다.  

***

## 1. 슬라이드쇼  만들기

주피터 노트북에서 슬라이드 쇼를 만들기 위해서는 노트북의 자체기능을 이용하면 된다.  

- 우선 아래와 같이  View -> Cell Toolbar -> Slideshow 를 통해 슬라이드 설정 모드로 바꾼다.

![figure5](/assets/img/post/2020-02-17/figure5.png)

- 다음으로 셀별로 슬라이드의 역할을 정해준다. 

![figure6](/assets/img/post/2020-02-17/figure6.png)

- 슬라이드는 다음과 같은 구조로 만들어 진다.

![figure7](/assets/img/post/2020-02-17/figure7.png)

![figure8](/assets/img/post/2020-02-17/figure8.png)

- 각 슬라이드의 역할은 다음과 같다.

**a. slide: 슬라이드쇼에서 1페이지를 차지하게 된다.**

**b. sub-slide : 슬라이드 1페이지의 보조로서 사용할 수 있게 된다.  위의 그림의 붉은 색 화살표에서 아래버튼을 누름으로써 접근할 수 있게 된다.**

**c. fragment : 다른 슬라이드에 종속되며 처음에는 보여지지 않다가 버튼을 누르면 ppt의 '나타나기' 애니메이션 방식으로 드러나게 된다.**

**d. skip : 코딩에만 사용되는 부분으로 슬라이드에서는 보여지지 않고 넘어가게 된다.**

**e. notes : 발표자의 컴퓨터에만 보이게 하여 발표자가 추가설명 등을 참고할 수 있게 해주는 설정이다.**

- 주의 해야할 점은 그림 등을 그리는 코드를 짠 후 노트북에서 실행시켜서 결과를 보이질 않을 경우 슬라이드 쇼로 만들어도 그림이 보이진 않는다. 

***

이렇게 주피터 노트북에 슬라이드 설정을 담은 다음 아래와 같은 방법들로 슬라이드쇼로 변환 시킬수 있다. 

***

## 2. nbconver 이용하기

nbconvert는 주피터의 파일 형식(.ipynb)를 다른 포맷으로 변환시켜주는 패키지 이다.  다른 패키지와 마찬가지로 셀에서 pip 명령어를 이용하여 설치하면 되고, 프롬프트에서 명령어를 실행해주면 된다.  

nbconvert가 제공하는 변환 포맷은 다음과 같다. 

![figure4](/assets/img/post/2020-02-17/figure4.PNG)

발표,출판,협업,공유 등을 위해 노트북을 pdf, Latex, HTMl, py 등으로 변환 시킬 수 있다. 

프롬프트에서 사용해주는 명령어는 다음과 같다. 

```
jupyter nbconvert --to포맷이름 노트북이름.ipynb
```

포맷부분을 --to slides로 해주면 만들어 놓은 주피터 노트북을 pdf 슬라이드 형태로 바꾸어 준다.



더 자세한 내용은 아래의 링크를 참고하면 된다.

[nbconver 공식 문서 링크](https://nbconvert.readthedocs.io/en/latest/index.html)



***

## 3. Rise와 reveal.js 이용하기

#### reveal.js 란?

reveal.js는 자바스크립트와 html을 기반으로 하여 만들어진 프레젠테이션 포맷으로 기술자들의 프레젠테이션 툴이라고 할 수 있다. 

기존에 가장 많이 쓰이던 프레젠테이션 툴인 마이크로소프트 ppt에 비한 장점은 무엇보다 프레젠테이션에 코드를 넣어 실행 시킬 수 있다는 점이다. 예를 들어 직접 짠 인터랙티브 플룻을 프레젠테이션 하면서 보여줄 수 있고 실시간으로 자료를 받아서 그 분석물을 피로할 수 도 있다. 

다만 단점은 ppt가 보편화 되어있는 만큼 ppt만큼 많은 탬플릿이 있지는 않다는 점과 어디까지나 개발자들이 만들다 보니 디자인을 꾸미려면 html,css,자바스크립트 등을 알아야 한다는 점이다. 

아래는 reveal.js의 설치링크이다. 나 같이 컴퓨터와 안 친한 사람이라면 이것을 바로 사용하는 것이 아니라 후술할 rise를 이용하는 것을 추천한다.

[reveal.js 설치 링크](https://github.com/hakimel/reveal.js)

 아래는 reveal.js의 홍보링크이다. 홍보자료 또한 reveal.js로 만들어져 있으므로 응용력을 알 수 있다. 

[reveal.js 홍보 링크](https://revealjs.com/#/)

 또한 reveal.js의 개발자 측에서는 gui 인터페이스로 reveal.js를 만들 수 있도록 툴을 제공하고 있다.  유료이긴 하지만 소정의 돈을 주고 쉬이 만들 수 있다는 장점이 있다. 

[reveal.js 쉽게 사용하기](https://slides.com/)



***

#### Rise 활용하기

주피터 노트북에서는 만들어진 슬라이드를 이 reveal.js 형식으로 변환 시킬 수 있다. nbconvert에서도 제공하는 기능이긴 하지만 좀 더 특화되있는 패키지인 RISE(**R**eveal.js **I**Python **S**lideshow **E**xtension )를 사용하면 좀더 편하게 사용가능 하다. 

[Rise Docs 링크](https://rise.readthedocs.io/en/maint-5.6/)

- 우선 아래의 명령어를 통해 Rise를 설치해주자

```
conda install -c conda-forge RISE
```

- 슬라이드쇼 설정을 마친 주피터 노트북(ipynb)으로 들어간다.
- alt+r을 누른다.
- ???
- profit!

정말 간단한 방법으로 주피터 노트북으로 프레젠테이션을 해줄 수 있다. 사실 전술한 방법들은 그저  이 방법을 설명하기 위한 플로우에 불과하고 종국에는 모두 이방법을 쓰면 된다. 

그러나 Rise를 이용하여 alt+r을 해주면 제일 깔끔한 탬플릿만 사용할 수 밖에 없게 된다. 다른 탬플릿도 써주기 위해서는 rise의 설정을 건드려줄 필요가 있다. 

이를 위해서는 nbextension이라는 패키지를 설치해서 세부설정을 조정해줄 수 있다. 

```
pip3 install jupyter_contrib_nbextensions
jupyter contrib nbextension install
```

![figure9](/assets/img/post/2020-02-17/figure9.PNG)

그럼 주피터 노트북의 메인페이지에 저런 항목이 새로 생기게 된다. 

![figure10](/assets/img/post/2020-02-17/figure10.PNG)

nbextension 항목에 들어간 다음 disable~ 항목을 체크해제해주고 rise항목을 클릭하면 아래에 Rise의 세부설정을 고칠 수 있게 된다. 

Rise를 커스터마이즈 하는 방법은 아래의 링크에 설명되있다.  

[Rise cutomize docs](https://rise.readthedocs.io/en/maint-5.6/customize.html)



***

지금까지 주피터 노트북으로 슬라이드쇼를 하는 방법을 살펴보았다. 사실은 주피터 노트북으로 슬라이드쇼를 만들어도 스타일 적인 면에서는 ppt에 밀리기에 정말 중요한 경우에는 마이크로소프트 ppt를 사용하는 것이 나을 것 이다. 그래도 격식을 차릴 필요가 덜한 상황에서 주어진 시간이 적을 경우에는 이 방식이 가장 효율적인 것 같다. 
