---
title: \[최적화\] First-Order Method part3 - Proximal Gradient Descent
categories: [Convex]
tags: [Convex Optimization]
excerpt: Proximal Gradient Descent and Stochastic Gradient Descent
---

 $\def\m#1{\mbox{#1}} \def\t#1{\textbf{#1}}$



# 3. Proximal Gradient Descent

## 0. Intro

머신러닝에서 가장 많이 쓰이는 최적화 방법은 Gradient Descent(경사하강법)일 것이다. 컴퓨터 과학과의 랩실에서 일하고 있는 지인의 말에 따르면 거의 95%에 달하는 알고리즘이 Gradient Descent를 사용해서 최적화를 한다고 한다. 

Gradient Descent는 말 그대로 목적 함수의 경사를 따라서 내려감으로써 최소값을 만드는 값을 찾아내는 기법이다. 방식이 직관적이기도 하고, 범용성 있게 잘 써먹을 수 있는 방법이라 머신러닝이나 데이터사이언스를 배울때 입문단계에서부터 가르치는 내용이기도 하다. 

그러나 CMU Data Sience 대학원의 강의자료로 Gradient Descent를 직접 공부를 해보니 전혀 쉽고 단순한 내용이 아니었다. 따라서 이 포스팅 시리즈를 통해서 Gradient Descent 방법이 가지고 있는 직관과 응용법들에 대해서 공부해 보고자 한다. 

 이 시리즈 뿐만 아니라 Covbex Optimization 카테고리에 있는 거의 모든 내용은 CMU의 Convex Optimization 수업을 참고한 것을 알린다. 

Mathematical Optimization에서 First-Order Method라 함은 목적함수를 한번 미분한 함수값(a.k.a Gradient)를 이용하는 기법들에 대한 것이다. 따라서 아래와 같은 항목으로 나누어 포스트를 할 예정이다. 

최적화 알고리즘 바로가기  
- (First Order Algorithm 1 - Gradient Descent)[https://hgmin1159.github.io/convex/firstorder1/]  
- (First Order Algorithm 2 - Subgradient Method)[https://hgmin1159.github.io/convex/firstorder2/]  
- (First Order Algorithm 3 - Proximal Gradient Descent)[https://hgmin1159.github.io/convex/firstorder3/]  
- (Convex Optimization 리뷰)[https://hgmin1159.github.io/convex/convex_review/]  

## 1. Proximal Gradient Descent

아래의 함수를 생각해보자. 

$f(x) = g(x) + h(x)$

- g is convex and differentiable
- h is convex but not necessarily differentiable



Gradient Descent는 목적함수가 미분가능해야 하고 미분이 불가능할시 더 느린 Sub-gradient Method를 사용해야 한다. 

그런데 만약 목적함수의 일부는 미분가능하지만 일부는 미분 불가능할때 다른 방법이 없을까? 



$g(x)$에 대해서만 Quadratic Approximation을 취할 시 다음과 같은 전개가 가능하다.

$ x^+ = \underset{z}{\arg \min}\  \hat f(z) \\\ \quad = \underset{z}{\arg \min}  \ \hat g(z) + h(z) \\\ \quad  = \underset{z}{\arg \min} \ g(x) + \nabla g(x)^t(z-x) + \frac{1}{2t} \parallel z-x\parallel_2^2 + h(z) \\\ \quad  = \underset{z}{\arg \min} \frac{1}{2t} \parallel z - (x-t \nabla g(x)) \parallel_2^2 + h(z)$

이때의 $x^+$는 말하자면 g에대한 Gradient Descent Step을 하는 동시에 h(z)도 함께 줄여주는 Step이라고 말할 수 있다. 



따라서 이를 이용해 새로운 함수를 정의해보자. 

$\mbox{prox}_{h,t}(x) = \underset{z}{\arg \min} \frac{1}{2t} \parallel x-z\parallel_2^2 + h(z)$

이 함수는 특정 h 함수와 step t에 대해 인풋값 x에 최대한 가까우면서도 h(z)를 줄여주는 함수를 찾는 것이라고 말할 수 있다. 

이를 이용해서 Proximal Gradient Descent를 정의할 수 있다. 

> **Proximal Gradient Descent**
>
> $x^{(k+1)} = \m{prox}_{h,t_k}(x^{(k)}-t_k\nabla g(x^{(k-1)}))$ ,k=1,2,3,..

Proxy라 함은 대리,위임이라고 번역되며 따라서 Proximal GD는 미분가능한 부분은 GD를 하고 미분 불가한 부분은 Proxy Function을 이용해서 대신 최적화해주는 것이라고 말할 수 있다. 

$G_t(x)=\frac{1}{t} (x-\m{prox}_{ht}(x-t\nabla g(x)))$를 정의함으로써 좀더 익숙한 폼인 $x^{(k+1)} = x^{(k)} - t_k G_{t_k}(x^{(k)})$를 사용할 수 있다. 



이러한 Proximal GD는 사실 그냥 빙빙 돌아가서 푸는 것처럼 보일 수 있겠지만 다행히 h의 형태에 따라서 간단하거나 Closed Form이 있는 Proxy function을 유도해낼 수 있기 때문에 효율적인 방식이다. 

예시를 살펴보자. 



**ex) ISTA(; Iterative Soft Thresholding Algorithm)**

Lasso Regression의 목적함수를 생각해보자. 

$f(\beta) = \frac{1}{2}\parallel y-X\beta \parallel_2^2 + \lambda \parallel \beta \parallel_1$

전반부는 미분가능하며 후반부는 미분이 불가능하다. 이에 대한 Proxy function은 다음과 같다. 

$\m{Prox}_t(\beta) = \underset{z}{\arg \min} \frac{1}{2t} \parallel \beta - z\parallel_2^2 + \lambda \parallel z \parallel_1$

이는 매우 잘알려져 있는 최적화 문제의 전형인 Soft-Thresholding의 형태이다. 이때는 최적값에 대한 Closed Form이 존재하는데 다음과 같이 정의된다. 

$S_{\lambda t}(\beta) = \underset{z}{\arg \min} \frac{1}{2t} \parallel \beta - z\parallel_2^2 + \lambda \parallel z \parallel_1 \\\ \qquad \ = \begin{cases} \beta_i -\lambda \quad \m{if }\beta_i > \lambda \\\ 0 \\\ \beta_i +\lambda \quad \m{if }\beta_i < -\lambda \end{cases}$

이를 Soft Thresholding Operator라고 부른다. 



따라서 이를 이용하면 다음과 같은 Proximal GD를 설계할 수 있다.

$\beta^+ = S_{\lambda t}(\beta +t X^t(y-X\beta))$

Lasso Regression을 풀때는 이러한 방식으로 푸는 것이 전형이며 이전 챕터에서 다룬 Sub-Gradient를 이용하는 것보다 훨신 빠른 수렴 속도를 보여준다.

![](/assets/img/post/2020-08-31/figure1.PNG)

**ex+) Soft Thresholding Operator의 유도 과정**

Soft Thresholding은 다음과 같은 목적함수를 가진다. 

$\min \frac{1}{2} \parallel y-\theta \parallel_2^2 + \lambda \parallel \theta \parallel_1$

즉 $\theta$가 각각의 데이터 포인트 y에 최대한 가깝지만 너무 큰 값이 나오지 않도록 설정해주는 문제라고 할 수 있다. 

이 최적값은 Sub-gradient Optimality Condition을 이용해 바로 도출할 수 있다. 

$0 \in \partial ( \frac{1}{2} \parallel y-\theta \parallel_2^2 + \lambda \parallel \theta \parallel_1) \\\ \qquad = -\mid y -\theta \mid + \lambda \partial \parallel \theta \parallel_1 $

$\Rightarrow \mid y-\theta\mid \in \lambda \partial \parallel \theta \parallel_1$



L1-penalty에 대한 Subgradient는 다음과 같다. 

$\partial \parallel \theta \parallel_1 = \begin{cases} \{1\} \qquad \mbox{ if } \theta_i >0 \\\ \{-1\} \quad \mbox{ if } \theta_j<0 \\\ [-1,1] \quad \mbox{if } \theta_j = 0 \end{cases}$

앞의 것과 조합하면 결론적으로 다음과 같은 함수를 얻을 수 있다. 

$[S_{\lambda}(y)]_i = \begin{cases} \ y_i -\lambda \quad \m{if } y_i > \lambda \\\ 0 \ \quad \qquad \m{if } -\lambda < y_i < \lambda \\\ y_i +\lambda \quad \m{if } y_i < -\lambda \end{cases}$



## 2. Analysis about Proximal Gradient Descent



**Back Tracking Line Search**

Proximal GD에서도 Backtracking Line Search를 할 수 있다. 

임의의 $\beta \in (0,1)$을 뽑고 다음 과정을 시행한다. 

1. Let $t = t_{init}$

2. Check $g(x^+) > g(x) - t\nabla g(x) G_t(x) + \frac{t}{2}\parallel G_t(x)\parallel_2^2$

3. If true, shrink $t=\beta t$ and check again else perform Proximal GD step.



**Convergence Analysis**

$\nabla g$가 Lipschitz Condition at L 일시 아래를 만족한다. 

> Theorem
>
> step size t가 1/L 보다 적을 시 다음을 만족한다. 
>
> $f(x^{(k)}-f^\ast \leq \frac{\parallel x^{(0)}-x^\ast\parallel_2^2}{2tk})$ 
>
> 즉 Convergence Rate $O(1/\epsilon)$으로 수렴한다. 

이는 Gradient Descent와 같은 정도의 수렴 속도지만 Proxy Function을 돌리는 비용은 계산하지 않은 것이다. 



**Generalized Gradient Descent**

Proximal GD는 사실 Generalized GD라고 불리기도 한다. 즉, GD의 일반화 된 폼인것이다. 

예컨데 f =g +h 에 대해 

$h(x)=0$일시 일반적인 Gradient Descent가 되고

$h(x)=I_C(x)$일시 Projected Gradient Descent가 되며

$g(x) =0 $일시 Sub-gradient Method  혹은 Proximal Minimization Algorithm이 된다. 



**Projected Gradient Descent**



$I_C(x)$에 대한 Proxy function은 다음과 같다. 

$\m{prox}_t(x) = \underset{z}{\arg \min} \frac{1}{2t}\parallel x-z\parallel_2^2 + I_C(x) \\\ \ \quad \qquad =\underset{z \in C}{\arg \min} \parallel x-z\parallel_2^2 \\\ \ \quad \qquad =P_C(x)$

즉 Proximal GD는 Projected GD와 같은 형태가 된다. 

$x^+ = \m{prox}_t(x-t\nabla g(x)) \\\ \quad = P_C(x-t\nabla g(x))$



## 3. Accelerated  Proximal Gradient Method

이러한 Proximal GD에 대해서는 여러가지 가속기법이 개발되어왔다. 아래의 내용은 Yurii Nesterov가 제안한 알고리즘이다. 



> **Accelerated Proximal Gradient Method**
>
> $v = x^{(k-1)} + \frac{k-2}{k+1} (x^{(k-1)}-x^{(k-2)})$
>
> $x^{(k)} = \m{prox}_{t_k} (v - t_k \nabla g(v))$

이는 이전 두 스텝에 대해 관성을 적용한 값으로 감소의 모멘텀을 주는 것이라고 말할 수 있다. 

이 알고리즘의 Convergence Rate는 $O(1/\sqrt{\epsilon})$이다. 

![](/assets/img/post/2020-08-31/figure2.PNG)

**Back Tracking Line Search**

이 알고리즘은 고유의 Backtracking 기법이 있는데 다음과 같다. 

임의의 $\beta \in (0,1)$를 뽑고 $t_0 =1$로 고정 시킨후 다음을 시행한다. 

1. Let $t = t_{k-1}$
2. Check $g(x^+) > g(v) - \nabla g(v)^t(x^+-v) + \frac{1}{2t}\parallel x^+-v\parallel_2^2$
3. If true, shrink $t=\beta t$ and check again else perform Proximal GD step.





## 4. Stochastic Gradient Descent

많은 머신러닝 기법의 목적함수는 데이터 포인트마다의 코스트를 더한 꼴이다. p-norm을 이용한 목적함수는 모두 이를 따른다. 

즉 다음과 같다. 

$\underset{x}{\min} \frac{1}{m} \sum_{i=1}^m f_i(x)$

이때의 Gradient는 $\nabla ( \frac{1}{m} \sum_{i=1}^m f_i(x)) =  \frac{1}{m} \sum_{i=1}^m \nabla f_i(x)$이다. 

이때 Gradient를 모두 구하는 게 아니라 추정값을 사용함으로써 각각의 iteration cost를 극적으로 낮출 수 있다. 



$ \nabla (\frac{1}{m} \sum_{i=1}^m f_i(x))$는 m 이 커질수록 $E(\nabla f(x))$에 근접한다. (Law of Large Number)

이때 역으로 $E(\nabla f(x))$에 대해 그냥 데이터 포인트 하나에서의 경사 $\nabla f_i(x)$ 추정량으로 둘 수 있다. 이는 비효율적인 추정량이지만 비편향적인 추정량이다. 정리하면 다음과 같다. 



GD : $x^+ = x -t \nabla( \frac{1}{m} \sum_{i=1}^m f_i(x))$

SGD : $x^+ = x -t \nabla f_{i_k}(x)$

이 경우 각 이터레이션마다의 코스트가 비약적으로 줄어든다. 



이러한 SGD에는 몇가지 유의사항이 있다.

1. 추정량의 index

   이는 Random하게 둘 수 도 있고 Cyclic하게 둘 수 도 있다. Random하게 둘시 경사에 대한 비편향 추정치를 보장하며 Cyclic하게 둘 경우 모든 데이터를 다 탐색하여 한바퀴 돈다면 True한 경사를 얻어낼 수 있다. 

2. Step Size가 무조건 Diminishing해야한다. Fixed Step Size로는 수렴을 보장할 수 없다. 

3. 똑같은 상황의 GD에 비해 Convergence Rate가 나빠진다. 

   Lipschitz Condition 아래에서 GD는 $O(1/\epsilon)$, SGD는 $O(1/\epsilon^2)$의 수렴율을 가진다. 

   Strongly Convex 아래에서 GD는 $O(log(1/\epsilon))$, SGD는 $O(1/\epsilon)$만큼의 수렴율을 가진다. 

   특히 Strongly Convex 조건에서는 지수적으로 효율이 나빠짐을 알 수 있다. 



 따라서 일반적으로는 데이터 포인트를 하나만 쓰기보다는 샘플링을 해서 조금 더 효율적인 추정량을 사용한다. 이를 **Mini Batches Gradient Descent**라고 말하며 이와 대비해서 모든 데이터포인트를 사용하는 것(일반적인 GD)을 **Full Batches Gradient Descent**라고 말한다.

이 경우 사용한 샘플 개수만큼 이터레이션 코스트가 늘어나지만 추정치의 분산을 낮춰 Convergence Rate를 개선해준다. 



이론상에서는 Fixed Step Size가 수렴을 보장하지 않지만 실전에서는 Fixed Step Size를 많이 사용한다고 한다. 이에 대한 수렴율 비교는 다음과 같다. 

아래는 각 기법에 대한 Convergence Rate이다. Full Batch가 다른것에 비해 압도적으로 빨리 수렴했으며 Stochastic은 추정량의 불안정성으로 인해 흔들림이 큰것을 확인할 수 있다. 

![](/assets/img/post/2020-08-31/figure3.PNG)

아래는 각 기법의 전체 코스트이다. 전체로 따졌을때는 Stochastic 기법이 Full Batches에 비해 더 빠르게 수렴하는 것을 알 수 있다.

![](/assets/img/post/2020-08-31/figure4.PNG)



지금까지 First Order Method에 대해서 살펴보았다. 우선 가장 기본이 되는 Gradient Descent를 살펴본 후, 좀 더 범용성 있게 쓰이고 Convex Optimization 분야 전체에서 사용되는 개념인 Sub-Gradient에 대해서 공부해보았다. 그리고 마지막으로 이들에 대한 실전적인 기법인 Proximal GD와 Stochastic GD에 대해서 살펴보았다. 



이들은 머신러닝 이론의 기본이 되는 기법들이니 잘 공부해두자. 

