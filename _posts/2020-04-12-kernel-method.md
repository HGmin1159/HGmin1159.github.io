---
title: \[차원축소\] Kernel Trick을 활용한 알고리즘 (Polynomial Regression,Kernel PCA,SVM)
categories: [Dimension]
tags: [차원 축소,Dimension reduction]
excerpt: Kernel Trick을 활용한 High-Dimension Mapping Computing의 간소화
---



 통계학에서는 행렬과 벡터를 사용하여 무수히 많은 알고리즘과 분석법을 개발해왔다. 행렬과 벡터는 그만큼 강력한 분석 툴이지만, 큰 약점이 있다면 그것은 태생 자체가 선형구조에 최적화가 되어있기 때문에, 비선형적인 구조를 잡아주는 것은 약하다는 것이다. 

 이러한 비선형성에 대응해주기 위해, 선형 모델은 기존의 디자인 매트릭스 X에 변수들의 자승항들이나 곱셈항을 추가해줌으로써, 어느정도 대응을 할 수 있다. 이는 디자인 매트릭스를 고차원으로 매핑한다고 해석할 수 있다. 

 이번 포스팅에서는 이러한 방식으로 비선형 구조를 추가해준 선형모델들을 다뤄 보려고 한다. 그리고 이러한 비선형 구조를 잡는 것의 핵심은 kernel trick에 있다. 



## 1. Polynomial Regression

기존의 선형모델이 현실에 잘 들어맞지 않는 이유는 모델의 경직성에 있다. 유연성이 떨어지는 만큼 트리 모델에 비해 Polynomial과 Interaction을 잘 잡아주지 못한다고 볼 수 있다.  이를 보완하기 위해서 $x_1x_2$를 통해서 Interaction term을 넣어주고 $x_1^2$을 추가해줌으로써 Polynomial Term을 추가해준다고 볼 수 있다. 

이렇게 비선형 구조를 추가해준 모델을 다음과 같이 정의해보자

> Linear Regression Model 
>
> $y_i = X_i \beta + \epsilon_i$   {$y,\epsilon \in \mathbb{R} , X \in \mathbb{R}^p $}
>
> $ex)y= \beta_0 + \beta_1 x_1 + \beta_2 x_2 $
>
> Polynomial Regression Model
>
> $y_i = \phi(X_i) \beta +\epsilon_i=Z_i \beta + \epsilon_i$  {$y,\epsilon \in \mathbb{R} , \beta,Z \in \mathbb{R}^q, X \in \mathbb{R}^p , \phi: \mathbb{R}^p \rightarrow \mathbb{R}^q$} {$Z := \phi(X)$}
>
> $ex)y= \beta_0 + \beta_1 x_1^2 + \beta_2 x_2^2 + \sqrt2\beta_3x_1x_2$
>
> 여기서 $\phi(X) = \phi(x_{1},x_{2}) = (x_1^2,\sqrt2x_1x_2,x_2^2)$ 이다.

이 두 모델 계수의 Closed Form은 다음과 같이 알려져있다. 

> $\hat{\beta}_{LR} = (X^tX)^{-1}X^tY$
>
> $\hat{\beta}_{PR} = (Z^tZ)^{-1}Z^tY$
>
> $\hat{\beta}_{LR}^{Ridge} = (X^tX + \lambda I)^{-1}X^tY$
>
> $\hat{\beta}_{PR}^{Ridge} = (Z^t Z+\lambda I)^{-1}Z^t Y$

여기서 일반적으로 Z는 X보다 더 높은 차원으로 mapping 된 것이다. 따라서 $Z^tZ$를 구하는 것은 $X^tX$를 구하는 것보다 어렵다고 말 할 수 있다. 그런데 Z(q 차원)가 기본적으로 X(p 차원)에서 나온 것이라면 단순히 $Z^tZ$($q \times q$ 행렬)를 구하는 것보다 좀 더 쉽고 간단한 방법은 없을까? 

바로 Kernel Trick을 이용해서 이를 해낼수 있다. 



## 2. Kernel Trick

Kernel Trick의 배경에 있는 정리는 바로 Mercer's Theorem이다. 

> $K$가 Continuous Non - Negative Definite Kernel이며 Symmetric 할시,  $K(x_a,x_b)$를 다음과 같이 표현할 수 있다. 
>
> $K(x_a,x_b) = \overset{\infty}{\underset{j=1}{\sum}}\lambda_j e_j(x_a) e_j(x_b)$ 
>
> $(\{e_i\}$는 orthonormal basis of $L^2(a,b)$,([a,b]는 K의 domain))

> Positive Semidefinite Kernel
>
> $K$ is positive semidefinite kernel 
>
> $\ \iff \int K(x,y)g(x)g(y)dxdy \geq 0 ,\qquad \forall g \\\ \iff \left[ \begin{array}{ccc} K(x_1,x_1) & K(x_1,x_2) & \cdots \\\ K(x_2,x_1) & \ddots & \\\ \vdots &&  \end{array} \right] \mbox{is Positive Semidefinite Matrix for any collection} \{x_1,x_2,...\} $ 

이게 도대체.. 무슨 말인지.. 

수학 공부가 절실하다. 관련 정의에 대해서는 수학을 좀 더 공부하고 체화를 해봐야겠다. 

$\def \a#1{\textbf{#1}}$

어쨋든 이 Mercer Theorem을 이용하면  커널 펑션이 다음을 대체할 수 있다

> $k(\textbf{x},\textbf{x}') = \left< \phi(\textbf{x}),\phi(\textbf{x}') \right>$ $\{\left< .,.\right>$는 inner product $\}$ 
>
> $K = ZZ^t$

이 것이 함의하는 바는 고차원으로 매핑해주는 $\phi$ 함수가 복잡한 꼴이어도 일정한 조건을 만족한다면 훨씬 간단한 함수로 변형이 가능하다는 것을 함의한다. 

위의 Polynomial 문제를 좀 더 풀어보자 

Polynomial Regression의 Closed Form을 다음과 같이 변형시켜보자

$\hat{\beta} = (Z^t Z+\lambda I)^{-1}Z^t Y \\\ \Rightarrow (Z^tZ+ \lambda I)\hat{\beta} = Z^tY \\\ \Rightarrow\lambda \hat\beta =Z^tY-Z^tZ \\\ \Rightarrow \hat\beta= \frac{1}{\lambda}Z^t(Y-Z) := Z^t\textbf{a}$

$(\a a := \frac{1}{\lambda}(Y-Z))$

그 다음으로 Polynomial Regression의 Cost Function을 분해해보자

$Q(\beta) = (Y - Z\beta)^t(Y-Z\beta) + \frac{\lambda}{2}\beta^t\beta \\\ \qquad = Y^tY -\beta^tZ^tY-Y^tZ\beta + \beta^tZ^tZ\beta + \frac{\lambda}{2}\beta^t\beta \\\ (\hat{\beta} = Z^t\textbf{a}) $ 

$Q(\textbf{a}) = Y^TY - \textbf{a}^tZZ^tY - Y^tZZ^t \textbf{a} + \textbf{a}^t ZZ^tZZ^t\alpha + \frac{\lambda}{2}\textbf{a}^tZZ^t \textbf{a} \\\ \qquad = Y^tY -  \textbf{a}KY^t-Y^tK \textbf{a}+\textbf{a}^tK^2 \textbf{a} +\frac{\lambda}{2}\textbf{a}^tK\textbf{a} $

여기서 K를 Kernel Matrix 혹은 Gram Matrix라고 부른다.

여기의 최적값을 구하기 위해 $\textbf{a}$에 대해 미분을 하면 다음과 같다. 



$\frac{\delta Q(\textbf{a})}{\delta \a a} = 0 - 2Y^tK+2\a a^t K^2 + \lambda \a a^t K =0 \\\ \qquad \Rightarrow \a a^t K + \frac{\lambda}{2} \a a^t = Y^t \\\ \qquad \Rightarrow \a a = (K+\frac{\lambda}{2})^{-1}Y $

 $\hat{\beta} = Z^t \a a \\\ \ \ = Z^t(K+\lambda')^{-1}Y \\\ \ \ =Z^t(ZZ^t +\lambda' I)^{-1}Y$



앞선 예시에서 mapping 함수는 다음과 같다. 

$z_i = \phi(\textbf{x}_i) = \phi(x_{ai},x_{bi}) = (x_{ai}^2,\sqrt2x_{ai}x_{bi},x_{bi}^2)$



$\left< \phi(\textbf{x}_i) \cdot \phi(\textbf{x}_j)\right> =z_iz_j^t \\\ \quad = (x_{ai}^2,\sqrt2x_{ai}x_{bi},x_{bi}^2)\left(\begin{array}{c} x_{aj}^2 \\\ \sqrt2x_{aj}x_{bj} \\\ x_{bj}^2 \end{array} \right) \\\ \quad =(x_{ai}x_{aj})^2 +2(x_{ai}x_{aj}x_{bi}x_{bj}) + (x_{bi}x_{bj})^2 \\\ \quad = (x_{ai}x_{aj} + x_{bi}x_{bj})^2 \\\ \quad = ((x_{ai} \ x_{bi})\left( \begin{array}{c} x_{aj} \\\ x_{bj}\end{array}\right))^2 \\\ \quad = (\textbf{x}_i\textbf{x}_j^t)^2 \\\ \quad =k(\textbf{x}_i,\textbf{x}_j)$



$Z = \left[ \begin{array}{c} z_1 \\\ z_2 \\\ \vdots \\\ z_n \end{array}\right] \Rightarrow ZZ^t = \left[ \begin{array}{cccc} z_1z_1^t & z_1z_2^t & \cdots & z_1z_n^t \\\ z_2z_1^t & z_2z_2^t & \cdots & z_2z_n^t \\\ \vdots & \vdots & \ddots & \vdots \\\ z_nz_1^t & z_nz_2^t & \cdots & z_nz_n^t \end{array}\right] \\\ = \left[ \begin{array}{cccc} (x_1x_1^t)^2 & (x_1x_2^t)^2 & \cdots & (x_1x_n^t)^2 \\\ (x_2x_1^t)^2 & (x_2x_2^t)^2 & \cdots & (x_2x_n^t)^2 \\\ \vdots & \vdots & \ddots & \vdots \\\ (x_nx_1^t)^2 & (x_nx_2^t)^2 & \cdots & (x_nx_n^t)^2 \end{array}\right] \\\ = XX^t \odot XX^t \{\odot \mbox{ : hadamard product}\}$ 



복잡한 계산이 필요한 함수 행렬이 쉬운 꼴로 변화되었다. 사실 항이 2개인 2차 다항식을 쉽게 바꾸기 위해서 kernel trick을 사용하지는 않는다. 좀 더 복잡한 꼴로 매핑시키기 마련이며, 대표적인 kernel 함수로는 다음과 같은 꼴들이 알려져있다. 

> ### Polynomial Kernel
>
> $k(x,y) = (\textbf{x}^t\textbf{y} + r)^d $
>
> {d is polynomial degree, r ​is free parametor for handling higher - order influence  }
>
> ### RBF Kernel (Radical Basis Function Kernel) = Gaussian Kernel
>
> $k(\textbf{x},\textbf{y}) = exp(-\gamma\parallel \textbf{x}-\textbf{y} \parallel^2)$
>
> {$\gamma$ is divergence parameter}
>
> ### Laplace Kernel 
>
> $k(\textbf{x},\textbf{y}) = exp(-\alpha \parallel \textbf{x}-\textbf{y} \parallel )$
>
> {$\alpha$ is divergence parameter}

가우시안 커널의 경우 다음과 같은 수식을 따르며 infinite한 차원을 가진다고 한다. 물론 단순하게 무한 차원을 가지는 게 아니라 특수한 형태를 따르며, 또 고차원으로 갈수록 영향이 사라진다. 

$exp(-\frac{1}{2} \mid \textbf{x} - \textbf{y} \mid ^2) = \overset{\infty}{\underset{j=0}{\sum}}\frac{(\textbf{x}^t\textbf{y})^j}{j!}exp(-\frac{1}{2}\parallel \textbf{x}\parallel^2)exp(-\frac{1}{2}\parallel\textbf{y}\parallel^2) \\\ \qquad \qquad \qquad \qquad \approx c + c(\textbf{x}^t\textbf{y})+\frac{c}{2}(\textbf{x}^t\textbf{y})^2+\frac{c}{3!}(\textbf{x}^t\textbf{y})^3 + ... \\\ \qquad c:=exp(-\frac{1}{2}\parallel \textbf{x}\parallel^2)exp(-\frac{1}{2}\parallel\textbf{y}\parallel^2)\mbox{ : constant}$ 

다음으로 Kernel Trick들이 쓰이는 대표적인 기법들에 대해서 알아보자 

***

## 3. Kernel PCA

디자인 매트릭스 X에  대해 PCA를 하는 과정은 다음과 같다. 

(위에서는 $x_i$가 $1 \times n$ 행벡터였지만 아래는 $n \times 1$ 열벡터이다. )

- X를 centerize한다. ($\sum_{j=1}^N x_{ij} =0$)
- 표본 공분산 행렬을 만든다. ($\Sigma = \frac{1}{N}\sum_{i=1}^{N}\textbf{x}_i\textbf{x}_i^t = \frac{1}{N}X^tX$)  $\{\textbf{x}_i = (x_{1i} , x_{2i} ,..., x_{pi} )^t \}$
- EigenDecomposition을 한다. ($\frac{1}{N}X^tX \delta = \frac{1}{N}\sum_{i=1}^{N}\textbf{x}_i\textbf{x}_i^t \delta = \lambda \delta$)



여기서 데이터 포인트 $x$를 고차원으로 매핑해서 PCA를 진행해보자 $(\phi(\textbf{x}) = \textbf{z})$

- 고차원으로 매핑한 변수들의 공분산 행렬 

$\Sigma_{\phi} := \frac{1}{N}\sum_{i=1}^{N}\textbf{z}_i\textbf{z}_i^t \delta =\frac{1}{N}\sum_{i=1}^{N}( \textbf{z}_i \cdot \delta ) \textbf{z}_i = \lambda \delta$

$\Rightarrow \delta = \frac{1}{\lambda N} \sum_{i=1}^{N}(z_i \cdot \delta)z_i = \sum_{i=1}^{N}a_iz_i$ ($a_i = \frac{1}{\lambda N}(z_i \cdot \delta)$)

양변에 $\textbf{z}_j^t$를 곱해보자

$\Rightarrow (z_j \cdot \delta) = \sum_{i=1}^{N}a_i(z_j \cdot z_i)=\sum_{i=1}^{N} a_i k(\textbf{x}_i,\textbf{x}_j)$ $\{k(\textbf{x}_i,\textbf{x}_j) \mbox{ is kernel function}\}$

또한 $a_i$의 정의를 새로 적으면 다음과 같은 식을 얻을 수 있다. 

$\Rightarrow \lambda N a_i = (z_j \cdot \delta) = \sum_{i=1}^{N} a_i k(\textbf{x}_i,\textbf{x}_j)$

위의 식에서 좌변을 이용하면 아이젠 밸류 공식을 다음과 같이 변형시킬 수 있다. 

$K :=\left[ \begin{array}{cccc} k(z_1,z_1) & k(z_1,z_2) & \cdots & k(z_1,z_n) \\\ k(z_2,z_1) & k(z_2,z_2) & \cdots & k(z_2,z_n) \\\ \vdots & \vdots & \ddots & \vdots \\\ k(z_n,z_1) & k(z_n,z_2) & \cdots & k(z_n,z_n) \end{array}\right] $

$K\textbf{a} = \left[ \begin{array}{cccc} k(z_1,z_1) & k(z_1,z_2) & \cdots & k(z_1,z_n) \\\ k(z_2,z_1) & k(z_2,z_2) & \cdots & k(z_2,z_n) \\\ \vdots & \vdots & \ddots & \vdots \\\ k(z_n,z_1) & k(z_n,z_2) & \cdots & k(z_n,z_n) \end{array}\right] \left[\begin{array}{c} a_1 \\\ a_2 \\\ \vdots \\\ a_n \end{array}\right] \\\ \quad = \left[\begin{array}{c} \sum_{i=1}^{N} a_i k(\textbf{x}_1,\textbf{x}_i) \\\ \sum_{i=1}^{N} a_i k(\textbf{x}_2,\textbf{x}_i) \\\ \vdots \\\ \sum_{i=1}^{N} a_i k(\textbf{x}_n,\textbf{x}_i) \end{array}\right] \\\ \quad = \left[\begin{array}{c} \lambda N a_1 \\\ \lambda N a_2 \\\ \vdots \\\ \lambda N a_n \end{array}\right] = \lambda N \textbf{a}$

결과물을 보면 다음과 같은 아이젠 밸류 식의 형태를 도출 할 수 있다. 

$K \textbf{a} = \lambda' \textbf{a} $

이를 통해 $\textbf{a}$를 구할 수 있고 아래의 공식을 역산하여 PCA의 결과물을 구할 수 있다. 

$(\phi(\textbf{x}) \cdot \delta) = \sum_{i=1}^{N} a_i k(\textbf{x}_i,\textbf{x}) $

***

