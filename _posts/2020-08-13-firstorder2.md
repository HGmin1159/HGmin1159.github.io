---
title: \[First-Order Method\] Part2. Subgradient Method
categories: [Convex]
tags: [Convex Optimization]
excerpt: Subgradient Method
---

 $\def\m#1{\mbox{#1}} \def\t#1{\textbf{#1}}$





# 2. Subgradient Method

## 0. Intro

머신러닝에서 가장 많이 쓰이는 최적화 방법은 Gradient Descent(경사하강법)일 것이다. 컴퓨터 과학과의 랩실에서 일하고 있는 지인의 말에 따르면 거의 95%에 달하는 알고리즘이 Gradient Descent를 사용해서 최적화를 한다고 한다. 

Gradient Descent는 말 그대로 목적 함수의 경사를 따라서 내려감으로써 최소값을 만드는 값을 찾아내는 기법이다. 방식이 직관적이기도 하고, 범용성 있게 잘 써먹을 수 있는 방법이라 머신러닝이나 데이터사이언스를 배울때 입문단계에서부터 가르치는 내용이기도 하다. 

그러나 CMU Data Sience 대학원의 강의자료로 Gradient Descent를 직접 공부를 해보니 전혀 쉽고 단순한 내용이 아니었다. 따라서 이 포스팅 시리즈를 통해서 Gradient Descent 방법이 가지고 있는 직관과 응용법들에 대해서 공부해 보고자 한다. 

 이 시리즈 뿐만 아니라 Covbex Optimization 카테고리에 있는 거의 모든 내용은 CMU의 Convex Optimization 수업을 참고한 것을 알린다. 

Mathematical Optimization에서 First-Order Method라 함은 목적함수를 한번 미분한 함수값(a.k.a Gradient)를 이용하는 기법들에 대한 것이다. 따라서 아래와 같은 항목으로 나누어 포스트를 할 예정이다. 


최적화 알고리즘 바로가기  
- [First Order Algorithm 1 - Gradient Descent](https://hgmin1159.github.io/convex/firstorder1/)   
- [First Order Algorithm 2 - Subgradient Method](https://hgmin1159.github.io/convex/firstorder2/)  
- [First Order Algorithm 3 - Proximal Gradient Descent](https://hgmin1159.github.io/convex/firstorder3/)  
- [Convex Optimization 리뷰](https://hgmin1159.github.io/convex/convex_review/)  



## 1. Subgradient의 개념

Gradient Method는 1.제약이 없는 2.미분가능한 3.Convex Optimization Problem에 대해서 푸는 방법이다. 즉 아래와 같다. 

> **Gradient Descent**
>
> For Unconstarined-Mathematical Optimization Problem, 
>
> ​                     $\ \underset{x}{\min} f(x) \\\ \m{where} f(x) \m{ is convex and differentiable}$
>
> Under some appropriate $t_k$, Squence that has below iteration form converges to problem's solution $x^*$ as k goes to infinity
>
> ​                       $x^{k+1} = x^{k} - t_k \nabla f(x^k)$



위를 통해서 볼때, Gradient Descent가 적용될 수 있는 상황은 상당히 제한적이라고 말할 수 있다. 1. 제약도 없어야 하고, 2. 미분가능해야 하며 3. Convex Function 이어야 한다. 다행히 우리가 다루는 대부분의 목적함수는 Convex Function이다. 그러나 목적함수가 미분가능해야 한다는 점은 치명적이라고 할 수 있다. Subgradient method는 이렇게 미분이 불가능한 목적 함수에 대해서도 사용할 수 있는 방법이다. 



우선 Subgradient의 정의 부터 살펴보자. 

> **Subgradient**
>
> Subdifferential of $f(x)$ at $x^0$ is denoted by $\partial f(x^0)$ and is defined as follow
>
> $\partial f(x^0) = \{g \mid f(y) \geq f(x^0)+g^t(y-x^0) \quad \forall y \}$
>
> Subgradient is an element of subdifferential



이것이 어떤 것을 의미하는지 알아보자. 미분가능한 Convex Function은 다음과 같은 성질을 가진다. 

$f(y) \geq f(x) + f'(x)(y-x) \quad \forall x,y $

이것이 의미하는 바는 Convex Function은 항상 임의의 점에서 그은 접선보다 더 큰 값을 가진다는 것을 의미한다. 이 폼을 응용하면 Gradient Descent의 형태가 나온다. 

Subgradient는 이 폼을 미분 불가능한 함수에까지 확장 시켜서 $\nabla f(x^0)$를 대체하는 값을 찾아내는 것이라고 볼 수 있다. 덧붙여 미분가능한 곳에서는 그냥 $\partial f(x^0) = \{\nabla f(x^0)\}$임에 유의하자.

![](/assets/img/post/2020-08-12/figure.png)

따라서 Subgradient method는 다음과 같이 정의된다. 

> **Subgradient Method**
>
> For Unconstarined-Mathematical Optimization Problem, 
>
> ​                     $\ \underset{x}{\min} f(x) \\\ \m{where} f(x) \m{ is convex }$
>
> Under some appropriate diminishing $t_k$, Squence that has below iteration form converges to problem's solution $x^*$ as k goes to infinity
>
> ​                       $\ x^{k+1} = x^{k} - t_k g_k \m{ where } g_k \in \partial f(x_k)$

 Gradient Descent와는 다르게 미분가능하다는 조건이 빠지고 스텝사이즈가 무조건 줄어들어야하는 조건이 추가되었지만 스텝사이즈는 자의적으로 정해줄 수 있으므로 실질적으로는 조건이 상당히 완화되었다고 볼 수 있다. 

 목적함수가 미분가능하지 않아도 된다는 점은 매우 다양한 확장을 가능케 한다. 실제로 어떤 확장이 가능할지에 대해서 알아보자. 



## 2. Subgradient Calculus

Subgradient는 개별 함수마다 찾아줘야 하지만 다행히 성질상 아래의 연산들이 가능하다. 

> **Subgradient Calculus**
>
> 1. $\partial (\lambda f) =\lambda \partial f$
>
> 2. $\partial (f_1 +f_2)= \partial f_1+\partial f_2$
>
> 3. $g(x) = Ax + b$에 대해 
>
>    $\partial g(x) = A^t \partial f(Ax+b)$
>
> 4. $f(x) = \underset{i=1,2,..., m}{\max} f_i(x)$에 대해
>
>    $\partial f(x) = conv(\underset{i:f_i(x)=f(x)}{\bigcup} \partial f_i (x))$
>
> 5. $f(x) = h(g(x)) = h(g_1(x),g_2(x),...,g_k(x)) $ where g is convex and h is nondecreasing
>
>    $\partial f(x) = \subset \{p_1q_1+...+p_kq_k : p \in \partial h(g(x)).q_i \in \partial g_i(x)\}$



4번의  conv(A)은 A 집합의 Convex Hull,즉 A 집합의 모든 원소 쌍의 Linear Segment의 모임으로 확장한 것이다. 

좀 더 문장으로 해석해보면 특정 x값에서 최대값이 되는 함수들의 subgradient의 linear segment(선분 위의 집합)라는 의미인데 다른 함수와 겹치는 것 없이 하나의 함수가 최대값을 차지하는 구간은 그냥 그 함수의 subgradient(그 구간에서 미분가능할시 그냥 Gradient이다.)이며 여러 개의 함수가 동시에 최대값을 가질때는 그 함수들의 subgradient 집합의 convex hull 이라는 의미이다. 



예시를 통해서 좀 더 구체적으로 보자. 



**ex) L1-Penalty**

L1-Penalty는 머신러닝에서 매우 많이 사용되는 penalty 중 하나이며 L2-penalty에 비해 특수한 장점이 있으므로 사랑받고 있다.

L1-penalty의 정의는 $\parallel \beta \parallel_1 = \sum_i \mid \beta_i \mid$이다.

이때 $\mid \beta_i \mid = max(\beta_i,-\beta_i)$라고 표현할 수 있다. 

따라서 위의 공식을 활용하면 아래와 같이 전개할 수 있다. 

$\partial \parallel \beta \parallel_1 =\partial \sum _i \mid \beta_i \mid \\\ \qquad \quad = [\partial\mid \beta_i\mid]_i \\\ \qquad \quad = [\partial \max(\beta_i,-\beta_i)]_i$



$\partial \max(\beta_i,-\beta_i)$를 계산해보자. 

$\beta_i$가 0보다 크다면 $\max(\beta_i,-\beta_i)=\beta_i \neq -\beta_i$이다. 따라서 아래와 같은 전개가 가능하다.

$Conv(\underset{i:f_i(x)=f(x)}{\bigcup} \partial f_i (x)) = Conv (\partial \beta_i) = Conv(\{\nabla \beta_i\}) = Conv(\{1\})=1$

$\beta_i$가 0보다 작다면 $\max(\beta_i,-\beta_i)=-\beta_i \neq \beta_i$이다. 따라서 아래와 같은 전개가 가능하다.

$Conv(\underset{i:f_i(x)=f(x)}{\bigcup} \partial f_i (x)) = Conv (\partial (-\beta_i)) = Conv(\{\nabla (-\beta_i)\}) = Conv(\{-1\})=-1$

$\beta_i$가  0이라면 $\max (\beta_i,-\beta_i) = \beta_i =-\beta_i$이다. 따라서 아래와 같은 전개가 가능하다. 

$Conv(\underset{i:f_i(x)=f(x)}{\bigcup} \partial f_i (x)) = Conv (\partial (-\beta_i)\cup \partial(\beta_i)) \\\ \qquad = Conv(\{\nabla(\beta_i)\cup \nabla (-\beta_i)\}) = Conv(\{1,-1\})=[-1,1]$

(-1~1의 linear segment는 결국 -1과 1사이의 모든 값이다.)

이를 정리하면 결국 아래와 같다. 

$\partial \mid \beta_i \mid = \begin{cases} \ \ \ \ 1 \quad \m{ if } \beta_j>0 \\\ [-1,1] \m{ if } \beta_j =0 \\\ -1 \m{ if } \beta_j < 0 \end{cases} $

따라서 $\parallel \beta \parallel_1$의 subgradient를 알 수 있게 되었다. 



**ex) Indicator function of Convex Set**

Convex Optimization에서 Indicator function은 통계학에서 일반적으로 쓰이는 형태와는 조금 다르게 정의된다. 

$I_C(x ) = \begin{cases} \ 0 \qquad  \m{ if } x \in C \\\ \infty  \ \quad \m{ if } x \notin C\end{cases}$

이를 이용하면 일반적인 Convex Optimization Problem을 다음과 같이 변형시킬 수 있다.

$\ \underset{x}{\min} f(x) \\\ \m{ subject to } g_i(x)\leq 0 ,h_j(x)=0 \quad \forall i,j  $ $ \Rightarrow $ $\ \underset{x}{\min} f(x) + I_C(x) \\\ \m{ where } C = \{x \mid g_i(x) \leq 0 , h_j(x) =0 \}$



즉, 제약식을 모아서 x의 Feasible set 꼴로 전환을 시킨것이다.  이러한 방식으로 제약이 있는 최적화 문제는 제약이 없는 문제로 변형을 시킬 수 있다. 또 부등호 제약식이 Convex Function이고 등호 제약식이 Affine Function이므로 Feasible Set은 Convex Set이 된다. 



이 경우 Indicator Function의 Subdifferential은 어떻게 될까? Subdifferential의 정의를 이용해서 생각보다 쉽게 유도해낼 수 있다. 

$I_C(y) \geq I_C(x) + g^t(y-x) \quad \forall y,$를 만족하는 g에 대해

$\begin{cases} \ \m{if } y \in C , 0 \geq 0 + g^t(y-x) \\\ \m{if } y \notin C, \infty \geq 0 + g^t (y-x) \end{cases}$

두번째는 g가 어떤 값이든 만족하게 되고 g는 모든 y에 대해서 성립해야하므로 아래와 같이 표현 할 수 있다. 

$\partial I_C(x)= \{g \in R^n \mid g^tx\geq g^ty \quad \forall y \in C\} = N_C(x)$

이러한 형태를 가지는 집합을 특별히 C의 Normal Cone이라고 부른다. Normal Cone은 각을 잘 이용해서 그리면 다음과 같은 모양을 가진다. 

<img src="/assets/img/post/2020-08-12/figure1.PNG" style="zoom: 67%;" />

지금까지 Subgradient가 주로 쓰이는 두 가지 예시를 보았고, 좀 더 중요한 활용 예시는 많지만 다음에 천천히 다루자.



## 3. Optimality Condition



 앞서서 First-Order Optimality Condition을 살펴보았다. 그러나 이는 목적함수가 미분가능할때만 성립한다는 단점이 있다. 따라서 Subgradient를 이용해서 좀 더 일반화된 최적값 조건을 유도 할 수 있다. 

> **Subgradient Optimality Condition**
>
> For any f 
>
> $\qquad \qquad f(x^0) = \underset{x}{\min} f(x) \iff 0 \in \partial f(x^0)$

이는 최적화 문제에 있어서 f의 형태가 Convex Function이 아닐때에도 쓸 수 있는 가장 일반적으로 적용할 수 있는 최적값 조건이다. 이에 대한 증명은 매우 간단하다. 

$0 \in \partial f(x^0)$이라는 말은 $x^0$에서 g=0인 subgradient가 있다는 말이므로 아래와 같이 적을 수 있다.

$f(y) \geq f(x^0)+0^t(y-x^0)= f(x^0) \quad \forall y$ 

즉 정의역 안에 있는 모든 y에 대해서 $x^0$는 더 작은 값을 가진다. 따라서 $x^0$는 최소값을 만드는 최적화 문제의 근이다. 



**First-Order Optimality**

이 Subgradient Optimality Condition이 성립하면 First-Order Optimality Condtion도 성립한다. 이 증명은 Subgradient Calculus를 연습하기 좋은 내용이므로 한번 살펴보자. 

$\underset{x}{\min} f(x) + I_C(x)$에 Subgradient Optimality Condition을 적용해보자. 

$0 \in \partial \{f(x) + I_C(x)\} \\\ \quad=\partial\{f(x)\} +\partial\{I_C(x)\} \\\ \quad = \{\nabla f(x)\} + N_C(x) $



즉 $\{\nabla f(x)\} +N_C(x) $안 에 0이 들어 있으므로 다음과 같이 쓸 수 있다. 

$- \nabla f(x) \in N_C(x) = \{g \mid g^tx \geq g^ty \quad \forall y \in C\}$

$ -\nabla f(x)^t x \geq -\nabla f(x)^t y \quad \forall y \in C$

$\nabla f(x)^t(y-x) \geq 0 \quad \forall y \in C$





**Lasso Optimality Condition**

Lasso regression이 Ridge regression에 비해서 가지는 특징은 Lasso에서는 패널티 파라미터를 늘림에 따라 계수가 완전히 0이 될 수 있다는 점이다.  

이는 머신러닝을 접하면 많이 들을 수 있는 얘기지만, 어째서 계수가 0이 될 수 있는지에 대한 설명은 부족했다. 그 이유가 바로 Subgradient Optimality Condition에 있다.



Lasso Regression의 목적함수는 다음과 같다. 

$\underset{\beta}{\min} \frac{1}{2}\parallel y-X\beta \parallel_2^2 + \lambda \parallel \beta \parallel_1$

여기에 Subgradient Optimality를 적용하자. 

$0 \in \partial(\frac{1}{2} \parallel y- X\beta \parallel_2^2+\lambda \parallel \beta \parallel_1 ) \\\  \qquad \iff 0 \in -X^t(y-X\beta)+\lambda \partial\parallel\beta\parallel_1 \\\ \qquad \iff X^t(y-X\beta)=\lambda v$



v는 $\parallel \beta \parallel_1$의 Subgradient이다. 이를 정리하면 다음과 같은 결과를 얻을 수 있다. 

$\begin{cases} \ X_i^t(y-X\beta)=\lambda \cdot sign(\beta_i) \qquad \m{if }\beta_i \neq 0 \\\ \mid X_i^t(y-X\beta)\mid \leq \lambda  \qquad \qquad \quad \ \ \m{ if } \beta_i =0 \end{cases}$

따라서 $\beta$를 찾는 과정에서 주어진 값이 $\lambda$보다 작아지면 $\beta_i$를 0으로 보내버릴 수 있다. 

주어진 값을 잘 보면 $X_i^t\epsilon$이므로 실제 데이터에서 에러가 0이 되는 경우는 없음을 생각하면 해당 변수의 값에 Dependent한 값이며 psedo하게 얘기하면 잔차와 해당변수의 공분산이라고 말할 수 있다. 

따라서 이 psedo-공분산 값이 너무 작아 별 관계가 없다면 계수를 0으로 보낼수 있다고 해석할 수 있다. 

 

## 4. Subgradient Method



 위에서 Subgradient Method는 다음과 같이 정의했다. 

> **Subgradient Method**
>
> For Unconstarined-Mathematical Optimization Problem, 
>
> ​                     $\ \underset{x}{\min} f(x) \\\ \m{where} f(x) \m{ is convex }$
>
> Under some appropriate diminishing $t_k$, Squence that has below iteration form converges to problem's solution $x^*$ as k goes to infinity
>
> ​                       $\ x^{k+1} = x^{k} - t_k g_k \m{ where } g_k \in \partial f(x_k)$



이는 일반적으로 적용가능한 방법이지만, 제약사항이 몇 가지 있다. 

1. 우선 이터레이션 과정에서 감소하는 것을 보장하지 않는다.  따라서 $f(x^{(k)}_{best}) = \underset{i=0,1,...,k}{\min} f(x^{(i)})$의 스텝으로 $x^{k}$를 계속 확인해야 한다. 

2. 수렴을 보장하기 위해서는 스텝사이즈를 무조건 줄여 나가야 한다. 이때 아래의 룰을 따라야한다. $\sum t_k^2 < \infty , \sum t_k = \infty$ 이것이 함의하는 것은 $t_k$가 줄긴 주는데 너무 빨리 줄어서는 또 안된다는 것을 의미한다. 
3. Gradient Descent의 Convergence Rate가 $O(1/\epsilon)$임에 반해 Subgradient method의 Convergence Rate는  $O(1/\epsilon^2)$이다. 따라서 GD에 비해 더 느리다. 포스팅에서 다룰 예정인 기법중 이보다 느린 기법은 없다. 



따라서 Subgradient Method는 좀 더 범용적이지만 성능이 그렇게 좋지는 않은 기법이라고 말할 수 있다. 



Step Size에 대해 다음과 같은 Search 방법이 있다. 

> **Polyak Step Sizes**
>
> 최적값 $f^*$를 알고 있을때 최적 스텝사이즈는 다음과 같이 계산될 수 있다.
>
> $t_k = \frac{f(x^{k-1})-f^*}{\parallel g^{k-1}\parallel_2^2}$



목적함수의 목표치를 알고 있다면 스텝사이즈를 쉽게 계산할 수 있다는 의미이다. 이는 유명한 알고리즘인 Set의 교집합을 찾는 알고리즘에서 적용할 수 있다. 이에 대해서는 다음에 시간이 날때 좀 더 보고 또 하나의 중요한 기법을 보자. 



> **Projected Subgradient Method**
>
> $\underset{x}{\min} f(x) \m{ subject to } x \in C$에 대해 다음의 이터레이션 폼은 최적값으로 수렴한다. 
>
> $x^{(k)} = P_C(x^{k-1}-t_k \cdot g^{k-1})$
>
> 여기서 $P_C(x)$는 x를 C 집합으로 Projection 시켜주는 함수이다. 



즉 Projection을 알고리즘적으로 쉽게 시켜줄 수 있는 C라면 제약함수를 이런 방식으로도 극복할 수 있음을 말한다. 

Feasible Set C는 일반적으로 행렬을 통한 Linear System 안에 있다면 어떻게든 프로젝션을 구상할 수 있다. 또 Convex Set은 유한개의 Linear System으로 감싸 질 수 있음이 증명되어 있다. 

 따라서 모든 Convex Set은 Linear System으로 표현할 수 있기 때문에 이론상으로는 Projection이 가능하지만 사실 Linear System이 조금만 복잡해져도 이러한 Projection을 하는 것이 매우 어려워 진다고 한다. 



여기까지 Subgradient-Method에 대해 살펴보았다. 다음 포스팅에서는 이 보다 좀 더 잘쓰이는 알고리즘으로 보이는 Proximal Gradient Descent를 살펴보자. 

 ***
 Boyd,S. & Vandenberghe, L. (2004) Convex Optimization.Cambridge, UK: Cambridge Press
 Tibshirani,R. "Subgradient Method" Convex Optimization, Oct. 2019, Carnegie Mellon University, Pittsburgh
