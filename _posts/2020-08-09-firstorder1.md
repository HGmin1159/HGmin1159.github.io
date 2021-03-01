---
title: \[최적화\] First-Order Method part1 - Gradient Descent
categories: [Convex]
tags: [Convex Optimization]
excerpt: Gradient Descent

---

 $\def\m#1{\mbox{#1}} \def\t#1{\textbf{#1}}$


최적화 알고리즘 바로가기  
- [First Order Algorithm 1 - Gradient Descent](https://hgmin1159.github.io/convex/firstorder1/)   
- [First Order Algorithm 2 - Subgradient Method](https://hgmin1159.github.io/convex/firstorder2/)  
- [First Order Algorithm 3 - Proximal Gradient Descent](https://hgmin1159.github.io/convex/firstorder3/)  
- [Convex Optimization 리뷰](https://hgmin1159.github.io/convex/convex_review/)  

# 1. Gradient Descent

## 0. Intro

머신러닝에서 가장 많이 쓰이는 최적화 방법은 Gradient Descent(경사하강법)일 것이다. 컴퓨터 과학과의 랩실에서 일하고 있는 지인의 말에 따르면 거의 95%에 달하는 알고리즘이 Gradient Descent를 사용해서 최적화를 한다고 한다. 

Gradient Descent는 말 그대로 목적 함수의 경사를 따라서 내려감으로써 최소값을 만드는 값을 찾아내는 기법이다. 방식이 직관적이기도 하고, 범용성 있게 잘 써먹을 수 있는 방법이라 머신러닝이나 데이터사이언스를 배울때 입문단계에서부터 가르치는 내용이기도 하다. 

그러나 CMU Data Sience 대학원의 강의자료로 Gradient Descent를 직접 공부를 해보니 전혀 쉽고 단순한 내용이 아니었다. 따라서 이 포스팅 시리즈를 통해서 Gradient Descent 방법이 가지고 있는 직관과 응용법들에 대해서 공부해 보고자 한다. 

 이 시리즈 뿐만 아니라 Covbex Optimization 카테고리에 있는 거의 모든 내용은 CMU의 Convex Optimization 수업을 참고한 것을 알린다. 

Mathematical Optimization에서 First-Order Method라 함은 목적함수를 한번 미분한 함수값(a.k.a Gradient)를 이용하는 기법들에 대한 것이다. 따라서 아래와 같은 항목으로 나누어 포스트를 할 예정이다. 

1. Gradient Descent
2. Subgradient Method
3. Proximal Gradient Method



## 1. Gradient Descent란?

Gradient Descent는 다음과 같이 정의된다. 

> **Gradient Descent**
>
> For Unconstarined-Mathematical Optimization Problem, 
>
> ​                     $\ \underset{x}{\min} f(x) \\\ \m{where} f(x) \m{ is convex and differentiable}$
>
> Under some appropriate $t_k$, Squence that has below iteration form converges to problem's solution $x^*$ as k goes to infinity
>
> ​                       $x^{k+1} = x^{k} - t_k \nabla f(x^k)$

핵심은 1.제약이 없고, 2.미분가능한, 3. Convex 함수를 목적함수로 가지는 문제에 쓸 수 있다는 점이다. 

이 Gradient Descent는 Taylor Expansion의 연장 선에서 다뤄질 수 있다. 위 함수의 2차 테일러 근사(Second-order Taylor Approximation)을 생각해보자. 

$f(y) \approx f(x) + \nabla f(x)(y-x) + \frac{1}{2}(y-x)^t\nabla^2f(x)(y-x)$

이 함수는 y가 x에 가까울수록 원 함수 값과 유사한 값을 가지게 된다. 이때 $\nabla^2 f(x)$를 $\frac{1}{t}I$로 다시 근사를 해서 보자. 

$f(y) \approx f(x) + \nabla f(x)(y-x) + \frac{1}{2t}(y-x)^t(y-x)$

이는 y에 대한 2차 함수의 모양과 똑같다. 

이렇게 2차 근사된 함수를 최소화 시키는 값은 미분해서 0이 나오는 지점이다. 

$\nabla f(x) + \frac{1}{t}y-\frac{1}{t}x = 0 $

이를 다시 쓰고 정리하면 아래와 같은 식을 얻을 수 있다.

$y = x -t\nabla f(x)$

이렇게 나온 값은 Gradient Descent의 이터레이션 폼과 똑같다. 즉, Gradient Descent는 현재값에서 2차 테일러 근사한 함수를 최소화 시키는 값을 찾고 다시 그 값에서 2차 테일러 근사한 함수를 최소화 시키는 값을 찾아나가는 방식이라고 해석할 수 있다. 

<img src="/assets/img/post/2020-08-09/figure1.PNG" style="zoom:50%;" />



이러한 Gradient Descent의 장단점은 다음과 같다. 

**장점** 

1. 이해하기 쉽고, 각 이터레이션이 단순해 이터레이션 코스트가 적다. 
2. 적절한 조건하에서 매우 빨리 수렴한다. (Strong Convexity)

**단점**

1. 간혹 느린 경우가 있고, 많은 경우에서 Strong Convexity가 만족하지 않는다. 
2. 미분 불가한 함수를 다룰 수가 없다. 



## 2. Convergence Analysis

 그럼 이렇게 해나간 방식이 문제의 근으로 수렴한다고 어떻게 보장할 수 있을까? 만약 Gradient 함수의 Lipschitz Condition with L을 가정한다면 수렴성을 입증할 수 있다. 

> **Theorem**
>
> Unconstrained Differentiable Convex Function f(x)를 최소화 시키는 최적화 문제에 대해 $\nabla f(X)$가 Constant L에 대한 Lipschitz Condition을 가질 시, Step Size t를 $\leq \frac{1}{L}$으로 둠으로 써 아래의 수렴성을 이야기 할 수 있다.
>
> $f(x) - f(x^\ast) \leq \frac{\parallel x_0-x^\ast \parallel_2^2}{2tk}$
>
> t는 상수 이므로 $f(x)-f(x^\ast)$의 간극을 $\epsilon$만큼 줄이고 싶다면 k를 $1/\epsilon$에 비례한 수만큼 줄여내면 된다. 이를 Convergence Rate with O($1/\epsilon$)이라고 표현한다.



pf) 

$\nabla f(x)$가 Lipschitz Condition을 가진다면 다음을 만족한다. 

$\parallel \nabla f(x) -\nabla f(y)\parallel\leq L\parallel x-y \parallel$ and $\nabla^2 f(x) \preceq LI$ 이를 이용해서 논리를 전개하자. 



우선 f(y)를 first-order Taylor expansion 해보자. 

$f(y) = f(x) + \nabla f(x)^t(y-x)+o(y) \qquad (;\m{where }o(y) \m{ is reminder term}) \\\ \ \ \quad =f(x)+\nabla f(x)^t (y-x) + \frac{1}{2}(y-x)^t\nabla^2 f(c) (y-x) \quad \m{(by Taylor theorem)} \\\ \ \ \quad \leq f(x)+\nabla f(x)^t (y-x)+\frac{L}{2}(y-x)^t(y-x) \m{(by Lipschitz condition with constant L)}$

$y = x^+ = x - t\nabla f(x)$를 대입한 후 정리하면 다음과 같다.  

$f(x^+) \leq f(x) - t\nabla f(x)^t \nabla f(x)+\frac{t^2 L}{2}\nabla f(x)^t \nabla f(x) \\\ \ \qquad = f(x)-(1-\frac{tL}{2})t \parallel \nabla f(x) \parallel_2^2 \qquad  (t \leq \frac{1}{L}) \\\ \ \qquad \leq f(x) -\frac{t}{2}\parallel \nabla f(x)\parallel_2^2$

 이 말은 $f(x^+)$가 $f(x)$보다 항상 작음을 의미한다. 



Convex Function의 성질 중 아래의 내용이 있다.  

$f(x^\ast) \geq f(x) +\nabla f(x) (x^\ast-x)$

이를 약간 변환시키면 다음과 같다. 

$f(x) \leq f(x^\ast)+\nabla f(x) (x-x^\ast)$

이를 위의 식에 대입해보자. 



$\ f(x^+) \leq f(x^\ast) +\nabla f(x) (x-x^\ast) -\frac{t}{2}\parallel \nabla f(x)\parallel_2^2 \\\ \qquad \ \ = f(x^\ast)+\frac{1}{2t}(2t\nabla f(x) (x-x^\ast)-t^2\parallel \nabla f(x) \parallel_2^2) \\\ \ \ \qquad =f(x^\ast)+\frac{1}{2t} (\parallel x-x^\ast \parallel_2^2 - \parallel x-x^\ast - t \nabla f(x) \parallel_2^2) \\\ \qquad \ \ =f(x^\ast) + \frac{1}{2t}(\parallel x-x^\ast \parallel_2^2 - \parallel x^+ - x^\ast \parallel_2^2) $

$x^+$ notation 대신 k notation을 대신 써서 정리해보자.

$f(x^{k+1}) -f(x^\ast) \leq \frac{1}{2t}(\parallel x^{k} -x^\ast\parallel_2^2 - \parallel x^{k+1}-x^\ast \parallel_2^2)$

여기에 양변의 k를 0부터 k 까지 더하면 다음과 같이 줄어든다. 

$\sum_{i=0}^{k} \{f(x^{i})-f(x^\ast)\} \leq \sum_{i=0}^k\{ \frac{1}{2t}(\parallel x^{i} -x^\ast\parallel_2^2 - \parallel x^{i+1}-x^\ast \parallel_2^2)\}$  
$\qquad \qquad \qquad \quad  \qquad = \frac{1}{2t} (\parallel x^0-x^\ast \parallel_2^2-\parallel x^{k+1}-x^\ast \parallel_2^2)$  
$\qquad \qquad \qquad \quad  \qquad \leq \frac{1}{2t}\parallel x^0 - x^\ast \parallel_2^2$



$f(x^{k})$는 k가 증가함에 따라서 줄어든다. 따라서 $\forall i \leq k ,f(x^{k}) \leq f(x^{i}) $가 성립한다. 이를 이용해 아래의 식을 다음과 같이 더 줄일 수 있다. 

$\ k (f(x^k)-f(x^\ast))\leq \frac{1}{2t}\parallel x^0-x^\ast\parallel_2^2 \\\  f(x^k)-f(x^\ast)\leq \frac{1}{2tk}\parallel x^0-x^\ast\parallel_2^2 $



즉, $x^0$가 어디에 있던 k를 증가시킴으로써 솔루션 $f(x^\ast)$에 근접해질 수 있다. 



## 3. Strong Convexity

최적화 문제에서는 기존의 Convex Function에 대한 정의보다 더 Convexity한 함수를 정의할 수 있다. 이를 Strong Convexity라고 하며 다음의 정의를 가진다. 

> **Strong Convexity**
>
> f(x) is $\mu$-strong Convex Function if and only if
>
> $f(x)-\mu \parallel x \parallel_2^2$ is convex function

즉, $x^2$ 보다 더 안쪽으로 볼록하다면 Strongly Convex Function이라고 말 할 수 있다. 덫붙여 $\nabla^2 f(x) \succeq \mu I$를 만족한다. 



어떤 함수가 Strongly Convex하다면 스텝사이즈 t를 $\frac{2}{L+\mu}$ 보다 적게 둠으로써 더 빨리 수렴하게 할 수 있다. 즉 다음과 같은 정리를 만족한다. 

> **Theorem**
>
> Unconstrained Differentiable Convex Function f(x)를 최소화 시키는 최적화 문제에 대해 $f(x)$가 L-Lipschitz Convexity와 $\mu$- strong convexity를 만족시, Step Size t를 $\leq \frac{2}{L+\mu}$으로 둠으로 써 아래의 수렴성을 이야기 할 수 있다.
>
> $f(x) - f(x^\ast) \leq \gamma^k\frac{L}{2}\parallel x_0-x^\ast \parallel_2^2$
>
> L은 상수 이므로 $f(x)-f(x^\ast)$의 간극을 $\epsilon$만큼 줄이고 싶다면 k를 $\log 1/\epsilon$에 비례한 수만큼 줄여내면 된다. 이를 Convergence Rate with O($\log 1/\epsilon$)이라고 표현한다.



일반적인 GD의 수렴성은 $O(1/\epsilon)$ 만큼이지만 Strong Convexity한 GD는 log만큼 더 줄어들었다. 즉 기존의 것보다 Exponentially하게 효율적이라고 말할 수 있다. 



## 4. BackTracking Line Search

실제로 구현할때는 $\mu$를 직접 찾아서 구현해줘도 되지만 아래의 Backtracking Line Search 기법을 사용하는 것이 좀 더 널리퍼져있다. 

> **Backtracking Line Search**
>
> 1. Take Initial $t_0$ and Backtracking Hyper-parameter $\alpha \in (0,1/2]$ and $\beta \in (0,1)$ 
>
> 2. Each iteration, check below condition and shrink t as $\beta t$ while condition is true 
>
>    $f(x^+) \geq f(x) - \alpha t \parallel \nabla f(x) \parallel_2^2$
>
> 3. If Condition become false, then Take One Gradient Descent Step
> 4. Repeat 2~3 until converges



이 조건문은 Strong Convexity $\mu$를 임의로 찾아주는 것이라고 말할 수 있다. 이것이 기반하는 것은 아래의 Condition이다. 

> **Polyak-Lojasiewicz Condition**
>
> If $\mu $ and $f(x)$ holds following condition, then f(x) has $\mu$- strong convexity
>
> $\parallel \nabla f(x) \parallel_2^2 \geq 2\mu(f(x)-f(x^\ast))$



Backtracking Line Search를 보면 처음 근과 시작점이 멀때는 스텝사이즈를 비교적 크게하다가 적당히 가까워지면 스텝사이즈를 줄이는 형식이며 줄일때는 Strong Convexity 아래서 수렴성을 만족할때 까지 줄이는 방식이다. 



여기까지 Gradient Descent에 대해서 알아보았다. 다른 기법들에 비해서 단순하면서도 Strong Convexity가 만족시 비교적 빠르게 수렴할 수 있지만, 미분 불가능한 함수를 다룰 수 없고 제약이 있는 경우 다른 방식을 써줘야 한다는 단점이 있다. 



다음 포스팅에서는 이 단점들을 해결해주는 Sub-gradient Method에 대해서 다뤄보자.
