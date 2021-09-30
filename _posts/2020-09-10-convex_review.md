---
title: \[Theory of Optimization\] Convex Optimization의 최적화 기법 총정리
categories: [Convex]
tags: [Convex Optizmiation]
excerpt: Gradient Descent와 Newtown's Method의 정리
sidebar:
  - title: "Convex Optimization"
    image: /assets/img/convex.png
    image_alt: "image"
    nav: Convex_Optimization
author_profile: False
---

 $\def\m#1{\mbox{#1}} \def\t#1{\textbf{#1}}$

최적화 알고리즘 바로가기  
- [First Order Algorithm 1 - Gradient Descent](https://hgmin1159.github.io/convex/firstorder1/)   
- [First Order Algorithm 2 - Subgradient Method](https://hgmin1159.github.io/convex/firstorder2/)  
- [First Order Algorithm 3 - Proximal Gradient Descent](https://hgmin1159.github.io/convex/firstorder3/)  
- [Convex Optimization 리뷰](https://hgmin1159.github.io/convex/convex_review/)  


## 0. 개요

CMU에서 강의한 Convex Optimization의 기법은 Gradient Descent(;이하 GD)와 Newton's Method(;이하 NM)을 주축으로 응용기법까지 총 8가지를 소개하고 있다. 

각각의 기법은 기본 GD와 NM 기법에서 미분이 불가능할때, 제약이 추가되었을때, 계산식에 추정치를 넣을 때의 배리에이션을 준 것으로, 각각 서로 다른 범용성, 속도, 정확성을 가진다. 

앞선 포스팅에서 GD기법의 응용들에 대해서 다뤘지만 NM기법을 하나하나 포스팅하기에는 시간이 없을 것 같아서 기왕이렇게 된 거 강의에서 다룬 모든 최적화 기법을 정리해보려고 한다. 



편의를 위해 차후의 기법에서 다룰 문제를 픽스해두자. 

$\ \underset{x} \min f(x) \\\ \mbox{ subject to }\begin{cases}\  g_i(x) \leq 0 \quad \mbox{for } i=1,2,...,m \\\  h_j(x) = 0 \quad \mbox{for } j=1,2,...,r \end{cases}$

$f(x)$는 목적함수이고, $g_i(x)$는 부등호 제약함수, $h_j(x)$는 등호 제약함수이다. 

 

## 1. Gradient Decsent의 응용

|                    | Gradient Descent                                             | Subgradient Method                               | Projected Gradient Descent                   | Proximal Gradient Descent                                    | Stochastic Gradient Descent                           |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------- |
| 사용처             | 제약이 없는 미분가능한 Convex 목적함수에 대해                | 제약이 없는 미분 불가능한 Convex 목적함수에 대해 | 제약이 있는 경우에 대한 나머지 기법의 응용처 | 미분 불가한 Convex 목적함수의 미분가능 파트를 분리할 수 있을때 | Gradient의 계산량이 너무 많아 Iteration Cost가 높을때 |
| Iteration Equation | $x^+ = x - t \nabla f(x)$                                    | $x^+ = x - t g$                                  | $x^+ = P_C(x-t \nabla f(x))$                 | $x^+ = Prox_t(x- t \nabla u(x))$                             | $x^+ = x-t \nabla f_i(x)$                             |
| Convergence Rate   | $\ O(1/\epsilon)\\\ \mbox{Under Stong Convexity -}  \\\ O(\log 1/ \epsilon)$ | $O(1/\epsilon^2)$                                | .                                            | $\ O(1/\epsilon)\\\ \mbox{Under Stong Convexity -} \\\  O(\log 1/ \epsilon)$ | $O(1/\epsilon^2)$                                     |



### A. Gradient Descent

(포스팅 링크)[https://hgmin1159.github.io/convex/firstorder1/]

가장 기본적인 GD는 문제의 셋팅에서 목적함수가 Convex 함수이자 1번 미분가능하고 제약이 없어야한다. 따라서 다음과 같다.

 

**Problem Form**

$f(x)$ is differentiable and convex function

$g_i(x) \equiv 0 , h_j(x) \equiv 0 \quad \forall i,j $



**Iteration Equation**

$x^+ = x - t\nabla f(x)$



여기서 step size t는 $\nabla f(x)$의 Lipschitz  Constant L의 역수보다 작아야 수렴하고, $f(x)$가 Strong Convex 할시 Strong Convexity Constant $\mu$에 대해 $t<\frac{2}{L+\mu}$로 설정할 시 수렴 속도가 지수적으로 빨라진다. 즉 다음과 같다. 



**Convergence Analysis**

Lipschitz Constant $\Rightarrow O(1/\epsilon)$

Strong Convexity $\Rightarrow O(\log 1/\epsilon)$ 



Step Size t에 대해서는 BackTracking Line Search를 해줄 수 있는데, 그 조건은 아래와 같다. 

$f(x^+) \geq f(x) - \alpha t \parallel \nabla f(x) \parallel_2^2$

$\alpha$는 0~0.5 사이의 수이며 위의 조건이 만족되지 않을때 까지 t 를 $\beta t \quad(\beta \in (0,1))$ 만큼 줄여나간다.  이 경우 Strong Convexity와 같은 효과를 보이며 $O(\log 1/\epsilon)$ 만큼의 속도증가를 보인다. 



### B. Subgradient 

(포스트 링크)[https://hgmin1159.github.io/convex/firstorder2/]



gradient descent는 단순한 형태이면서도 조건아래서 속도가 빠른 좋은 알고리즘이지만, 미분이 가능해야한다는 단점이 있다. Subgradient Method는 목적함수가 미분이 불가하더라도 사용해줄 수 있는 기법으로 다음과 같다. 



**Problem Form**

$f(x)$ is convex function

$g_i(x) \equiv 0 , h_j(x) \equiv 0 \quad \forall i,j $



**Iteration Equation**

$x^+ = x - tg$

where g is Subgradient of f(x) ($g \in \partial f(x)$)



이때 Subdifferential은 다음과 같이 정의된다. 

$\partial f(x) = \{g \mid f(y) \geq f(x) -g^t(y-x) \quad \forall y \in dom(f)  \}$



**Convergence Rate**

$O(1/\epsilon^2)$



이 Subdifferential에는 다양한 연산공식이 있기 때문에 그들을 조합하여 비교적 쉽게 도출해낼 수도  있다. 단, Step Size t가 고정되어있을 경우 수렴을 보장하지 못하기 때문에 t를 무조건 줄여나가줘야한다. 



### C. Projected Gradient Descent

(포스트 링크)[https://hgmin1159.github.io/convex/firstorder3/]

위에서 본 GD나 subgradient method의 경우, 제약이 있을 경우 쓰기 어렵다는 한계를 벗어나지 못했다. 따라서 제약이 있을 때는 제약식을 만족하는 x집합 aka Feasible Set에 Projection 시켜줌으로써 제약을 극복할 수 있다.  즉 다음과 같다. 



**Problem Form**

$f(x)$ is convex function

$g_i(x) \not \equiv 0 \mbox{ or } h_j(x) \not \equiv 0 $



**Iteration Equation**

$x^+ = P_C(x - tg)$

where g is Subgradient of f(x) ($g \in \partial f(x)$)



$P_C(x)$ is projection function which x projceted on to C

$C = \{x \mid g_i(x) \leq 0 , h_j(x) = 0 \quad \forall i,j \} $



Convergecnt Rate의 경우 C Set의 복잡도와 문제의 복잡도에 따라서 변한다. 



C set이 Convex Set을 이룰 경우 Halfplane of Convex Set Theorem에 의해 Convex Set을 둘러쌀수 있는 유한개의 직선(혹은 직면)을 그을 수 있다. 직선을 그을 수 있다면 그에 대한 Orthogonal Projection Matrix를 통해 프로젝션도 쉽게 가능하므로 Convex Set에 대한 Projected GD의 가능성을 말해줄 수 있다. 

 그러나 수학적인 가능성이 있음은 알아도 실제 실현 가능성은 다른 의미기 때문에 형태에 따라 불가능 할 수 도 있다. 



### D. Proximal Gradient Descent

(포스트 링크)[https://hgmin1159.github.io/convex/firstorder3/]

subgradient method는 미분불가한 함수에도 적용가능하지만 느리다는 단점이 있다. 따라서 Proximal GD는 목적함수에서 미분가능한 부분을 분리해낸 다음 그 부분에 대해서만 GD를 진행하는 방식으로 가속화를 하는 기법이다. 즉 다음과 같다. 



**Problem Form**

$f(x) = u(x) + v(x)$ 

where u(x) is convex and differentiable and v(x) is convex and indifferentiable 

$g_i(x) \equiv 0 , h_j(x) \equiv 0 \quad \forall i,j $



**Iteration Equation**

$x^+ = Prox_{v,t}(x - t \nabla u(x))$

where $Prox_{v,t}(x) = \underset{z}{\arg \min} \{ \parallel x- z \parallel_2^2 + v(x) \}$ 



**Convergence Rate**

$O(1/\epsilon)$

이에 대해 Nesterov Accelerate 기법을 취해줄 시 $O(1/\sqrt{\epsilon})$까지 빨라질 수 있다.



### E. Stochstic Gradient Descent

(포스트 링크)[https://hgmin1159.github.io/convex/firstorder3/]

목적함수가 개별 관측치 오차의 합으로 이루어져 있을때는 Gradient 함수도 개별 Gradient의 합으로 이루어져 있다. 따라서 이에 대해 데이터 포인트 하나를 추정치로 사용함으로써 개별이터레이션의 컴퓨테이션 스텝을 비약적으로 낮춰줄 수 있다. 즉 다음과 같다. 



**Problem Form**

$f(x) = \sum_{i=1}^n f_i(x)$

$g_i(x) \equiv 0 , h_j(x) \equiv 0 \quad \forall i,j $



**Iteration Equation**

$x^+ = x - t \nabla f_i(x)$

이때 사용할 데이터 포인트 인덱스 i는 이터레이션에 따라 랜덤으로 선택해주는 것이 일반적이다. 



또, 하나만 사용해주는 것이므로 수렴할때까지는 좀 더 많은 이터레이션이 필요하다. 

**Convergence Rate**

$O(1/\epsilon^2)$



그러나 실제로는 컴퓨테이션 량이 비약적으로 줄어 일반적인 GD보다 이터레이션을 더 많이 돌릴 수 있으므로 시간은 줄어들 수 있다. 

 이때 데이터 포인트 하나가 아니라 m개 만큼의 Gradient 평균치를 추정량으로 사용하는 것을 mini batch SGD라고 불러주며 일반적으로는 mini batch 기법을 더 자주 사용한다. 



## 2. Newton's Method의 응용

|                    | Newton's Method                                    | Equality Constrained  Newton's Method                   | Barrier Method                                            | Primal-Dual Interior Point Method                         | Quasi Newton's Method                       |
| ------------------ | -------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------- |
| 사용처             | 제약이 없는 두번 미분가능한 Convex 목적함수에 대해 | 등호 제약만 있는 두번 미분가능한 Convex 목적함수에 대해 | 부등호 제약만 있는 두번 미분가능한 Convex 목적함수에 대해 | 부등호 제약만 있는 두번 미분가능한 Convex 목적함수에 대해 | Hessian Matrix의 추정을 통한 NM 가속화 방법 |
| Iteration Equation | $x^+ = x - (\nabla^2 f(x))^{-1}\nabla f(x)$        | $x^+ = x - t v$                                         | 아래 참조                                                 | 아래 참조                                                 | $x^+ = x-ts$                                |
| Convergence Rate   | $\ O(\log \log 1/\epsilon) $                       | .                                                       | $O(\log 1/\epsilon)$                                      | $O(\log 1/\epsilon)$                                      | Local Super-Linear                          |





### A. Newton-Rapshon Method

목적함수 $f(x)$가 두번 미분가능할 때는 좀 더 빠른 기법을 사용해줄 수 있다. 그것이 바로 Newton's Method이며 GD에 비해 훨씬 빠른 수렴률을 보여준다.

 

**Problem Form**

$f(x)$ is twice differentiable and convex function

$g_i(x) \equiv 0 , h_j(x) \equiv 0 \quad \forall i,j $



**Iteration Equation**

$x^+ = x - (\nabla^2 f(x))^{-1}\nabla f(x)$



**Convergence Rate**

$O(\log \log 1/\epsilon)$ (Local Convergence Rate)



무려 로그로그 만큼의 빠르기를 보이며 Strong Convexity 아래서의 GD보다도 지수적으로 빠름을 확인 할 수 있다. 

 

**Damp - Pure Newton's Method**

단, Newton's Method는 수렴을 보장하지는 않는다. 따라서 스텝사이즈 t를 붙여준 Damp Newton's Method를 시행 후 일정 조건 아래서 t를 없앤 Fure Newton's Method를 시행해주는 방식으로 수렴을 보장할 수 있다.  즉 다음과 같다.



Damped Phase : $\parallel \nabla f(x^{(k)})\parallel _2 \geq \eta$일시 ($\eta$는 하이퍼 파라미터)

​							 $x^+ = x - t (\nabla^2 f(x))^{-1}\nabla f(x)$

Pure Phase :  $\parallel \nabla f(x^{(k)})\parallel _2 < \eta$일시 

​							$x^{+} = x - (\nabla^2 f(x))^{-1}\nabla f(x)$

즉, Damped Phase로 최적값을 서치해본 후 Pure Phase로 가속화 한다고 이해할 수 있다. 따라서 NM은 Local Convergence 하다고 표현한다. 





## B. Equality - Constrained Newton's Method

기본 NM은 제약식이 없을 때만 풀 수 있다. 그러나 등호 제약식이 있을 때에 한해서는 KKT Condition을 함께 이용해서 풀어줄 수 있다. 

 

**Problem Form**

$f(x)$ is twice differentiable and convex function

$g_i(x)  \equiv 0 , h_j(x):\{ \mbox{Affine Function}\} \quad \forall i,j $

(제약식에 아핀 등호 제약식만 있을때)



**Iteration Equation**

$x^+ = x - tv$

where $v = \underset{z ; Az=0}{\arg \min} \nabla f(x)^t(z-x)+\frac{1}{2}(z-x)^t\nabla^2f(x)(z-x)$

이때 v는 KKT Condition을 이용해서 풀 수 있으며 다음을 만족한다. 

$\left[ \begin{array}{cc} \ \nabla^2f(x) & A^t \\\ A & 0 \end{array}\right] \left[ \begin{array}{c} \ v \\\ w \end{array}\right] = \left[ \begin{array}{c} \ -\nabla f(x) \\\ 0 \end{array}\right] $



Convergence Rate의 경우 KKT를 푸는 것의 복잡도에 종속된다. 



## C. Barrier Method



그렇다면 부등호 제약식이 있는 문제는 어떻게 풀 수 있을까? 

일반적인 문제 폼을 만드는데 있어 제약식을 Feasible Set의 Indicator Function으로 바꿔서 목적함수에 편입시킬 수 있다. 

즉, $f(x) + I_C(x)$로 만드는 것이다.

 이때 부등호 제약식만 있을 경우 $\phi(x) = - \underset{i=1}{\overset{m}{\sum}} log(-g_i(x))$( a.k.a Log-Barrier Function)를 이용해 문제를 Assymptotic하게 풀 수 있다. 

다음을 비교해보자. 

|                                                              | x가 모든 부등호 제약식을 만족 시 $(g_i(x) \leq 0 \quad \forall i)$ | x가 하나의 부등호 제약식을 만족하지 못할때 $(\exists i \mbox{ s.t. }g_i(x) > 0 )$ |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Indicator  Funcition의 경우 $(I_{\{g_i(x) \leq 0 \}})$       | 0                                                            | $\infty$                                                     |
| Log- Barrier Function의 경우 $(-\frac{1}{t} \sum \log (-g_i(x)))$ | c/t ($0 \mbox{ as } t \rightarrow \infty$)                   | 계산이 불가하며, 제약식이 0으로 근접함에 따라 $\infty$로 발산함 |

따라서 Log-Barrier Function은  Indicator Function의 대용으로 쓸 수 있다. 



그러나 실제로 수렴시킬때 t를 정하는 것은 쉽지가 않다. 그렇기 때문에 x를 찾아준 후 t를 교정해나가는 기법을 사용해줄 수 있으며, 이를 Central Path Method라고 말한다.  결과적으로 다음과 같이 요약할 수 있다.



**Problem Form**

$f(x)$ is twice differentiable and convex function

$g_i(x)  \not \equiv 0 , h_j(x)\equiv 0 \quad \forall i,j $

(등호 제약식을 일단 0으로 둬서 알고리즘을 정리한 후 위의 Equality NM기법을 도입해주자.)



**Pseudo Problem Form**

$\underset{x}{\min} t f(x) +\phi(x) $



**Iteration Equation**

1. 초기값 $x= x^{(0)},t = t^{(0)}$와 하이퍼 파라미터 $\mu >1 ,\epsilon$ 설정 

2. $t^{(k-1)}$하에서 x를 NM으로 풀어서 $x^{(k)} = x^\ast (t^{(k-1)})$ 도출

3. $m/t \leq \epsilon$ 체크 후 만족 시 멈추고 불만족 시 $t^{(k)}=\mu t^{(k-1)}$로 키운 후 2번 다시 시행

   

즉 1번에서 Cetral Path에 진입을 해준 후 t를 증가시키면서 Cental Path를 횡단하는 방식이다. 



**Convergence Rate**

$O(\log (1/\epsilon))$ (Central Path 진입은 제외)

그러나 함수가 Sel-Concordant라는 성질을 가지고 있을때, $O(\log \log 1/\epsilon)$의 빠르기로 수렴이 가능하다고 한다. 





## D. Primal-Dual Interior Point Method

Primal Dual Interior Point Method는 Barrier Method에 대한 더 깊은 연구의 결과라고 할 수 있다. 



Barrier Method는 다음과 같은 변형된 KKT Condition을 푸는 문제라고 말 할 수 있다. 

**Perturbed KKT Condition**

1. $\nabla f(x) + \sum u_i \nabla g_i(x) + \sum v_j \nabla h_j(x) = 0 $
2. $u_i h_i(x) = -\frac{1}{t}1$
3. $g_i(x) \leq 0 , h_j(x) = 0 , u_i \geq 0 $

기존의 KKT Condition에서는 2번 Complementary Slackness가 0이어야 했지만 Perutrbed KKT Condition에서는 pseudo하게 $-\frac{1}{t}1$로 바꿔서 푼다.



이때 Barrier Method에서는 $u_i = -\frac{1}{t h_i(x)}$로 고정시켜서 푸는 반면 Primal-Dual Interior Point Method에서는 $u_i$도 함께 최적화 시켜준다. 직접적인 방식은 Dual과 Primal을 감싸는 Surrogated Duality Gap을 구한 다음 이를 최소화 시켜주는 방식으로 진행하는 것이다. 

자세한 내용은 따로 포스팅 하기로 하자. 알고리즘 또한 복잡해서 몇줄로 요약할만한 것이 아니다. 

단 Barrier Method는 스텝 t마다 NM을 써줘 2단 구성의 NM을 돌려야하지만 PDIP Method에서는 한번의 NM만으로 처리가 가능하다. 따라서 Barrier Method보다 덜 직관적이지만 더 효율적이라고 말할 수 있다. 



## E. Quasi-Newton Methods

Stochastic Gradient Descent는 $\nabla f(x)$를 계산하기 쉬운 추정량으로 추정해줌으로써 이터레이션 코스트를 낮추는 방법이다. 이와 유사하게, NM Method에서도 $\nabla^2 f(x)$를 추정해줌으로써 이터레이션 코스트를 비약적으로 낮출 수 있다. 이를 바로 Quasi-Newton Method라고 말한다. 

즉 다음과 같다. 



**Problem Form**

$f(x)$ is twice differentiable and convex function

$g_i(x) \equiv 0 , h_j(x) \equiv 0 \quad \forall i,j $



**Iteration Equation**

1. Solve $B^{(k-1)} s^{(k-1)} = - \nabla f(x^{(k-1)})$
2. Update $x^{(k)} = x^{(k-1)} - t_{k-1}s^{(k-1)}$
3. Compute $B^{(k)}$ from $B^{(k-1)}$

즉, $\nabla ^2 f(x) $를 B로 추정한다. 



이 B를 추정하는 방법에는 여러가지가 있지만 다음과 같은 조건은 필수적으로 만족해야 한다. 

- $B^+ s = y$
- $B^+$ needs to be close to B
- $B^+$ is Symmetric 
- $B^+ \succ 0$

첫번째 조건은 Secant Equation에서 도출된 것으로 $\nabla^2 f(x) $와 $\nabla f(x)$의 관계에 관한 것이다.

두번째 조건은 $B^+$를 안정화 시키기 위한 것으로 이 제한이 없을시 $B^+$가 너무 불완전하게 추정된다. 

세번째와 네번째 조건은 Hessian Matrix이면 가지고 있는 조건이다. 



이를 원칙으로 B를 여러가지 방법으로 추정할 수 있는데, SR1,BFGS,DFP Update 등이 있지만, 다음에 제대로 포스팅해서 설명을 하도록 하겠다. 



**Convergence Rate**

여러가지 조건이 있지만 Locally SuperLinear Rate를 가진다고 알려져있다. 

쉽게말해 국소적으로 $O(\log 1/\epsilon)$ 보다는 빠르고 $O(\log \log 1/\epsilon)$보다는 느리다고 말할 수 있다. 

