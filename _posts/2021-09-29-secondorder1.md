---
title: \[Scond-Order Method\] art1 - Newton Rapshon Method
categories: [Convex]
tags: [Convex Optimization]
excerpt: Newton Rapshon Method
sidebar:
  - title: "Convex Optimization"
    image: /assets/img/convex.png
    image_alt: "image"
    nav: Convex_Optimization
author_profile: False
---



# 1. Newton - Rapshon Method

 When finding best parameters, many famous machine learning packages use Adam optimizer and BFGS optimizer. Adam optimizer is an advanced version of Gradient Descent which finds adequate step size with some computing techniques. Meanwhile, the BFGS method is advanced version of Newton-Rapshon Method which estimate a adequate hessian matrix. Therefore, it is not exaggerated to say that Gradient descent and Newton Rapshon method are two essential pillars of Numerical Optimization. 

 We've seen the concept and advanced version of Gradient Descent at last posting (written in Korean). Now, let's figure out what is Newton-Rapshon method. It could be stated as follow.

> **Newton Rapshon Method**
>
> Assume an unconstrained convex optimization problem.
> $$
> \underset{x}{\min} f(x) \quad \{; f(x)\mbox{ is twice differentiable }\}
> $$
> Then for a sequence $\{x^{(k)}\} \mbox{ s.t. }x^{(k)} = x^{(k-1)} -(\nabla^2 f(x^{(k-1)}))^{-1}\nabla f(x^{(k-1)}) , k=1,2,3,...$, $x^{(k)}\rightarrow x^{\ast} \mbox{ as } k \rightarrow \infty $



In the Gradient Descent, we approximate $\nabla^2f(x)$ as $\frac{1}{t}I$ in a quadratic approximation  $f(y) \approx f(x) +\nabla f(x)^t(y-x) +\frac{1}{2}(y-x)^t\nabla^2f(x)(y-x)$ and derive an optimal solution of quadratic polynomial. In the Newton's method, we'll gonna directly derive an optimal solution of it. Therefore, we can guess the relationship between GD and NM. 

 There is another intuition to derive the iterative equation of NM called as Linearized Optimality Condition. 

 We know that the optimality condition for any function f is $x^{\ast}$ s.t. $0 \in \partial f(x^\ast)$ which is called as **subgradient optimality condition** and if the function is convex and differentiable, it could be developed to more familiar condition as $\nabla f(x^{\ast}) =0$. The purpose of optimization can be though as finding adequate direction v which makes $x+v = x^{\ast}$, that is, to find $\nabla f(x+v)=0$. If we apply linear approximation to it, then we can get $\nabla f(x+v) = \nabla f(x) + \nabla^2 f(x)v=0 \Rightarrow v = -(\nabla^2 f(x))^{(-1)}\nabla f(x)$ which makes newton iterative equation $x^+ = x-(\nabla^2 f(x))^{(-1)}\nabla f(x)$.

If the problem is finding Maximum Likelihood Estimator, then it could be developed as follow.
$$
\underset{\theta}{\max} \log L(\theta ; X)
$$

$$
x^+ = x - (\frac{\delta^2}{\delta \theta^2} \log L(\theta;x))^{-1}(\frac{\delta}{\delta \theta} \log L(\theta;X))
\\
x^+ = x - I^{-1}(\theta)S(\theta) \quad (I(\theta)\mbox{ is fisher information and }S(\theta) \mbox{ is score function.})
$$

Statistician call this method as fisher-score method especially. And it shows the connection between Fisher information and Newton's method



# 2. Backtracking Line Search

 Before we talk about the convergence analysis of the NM, we have to see backtracking line search of it first. 

Even though there is no step size t in the original NM, but we need to set step size in practical to find the solution. This is because we cannot say the convergence of pure NM both in practical and theoretical. The concept can be structured as follow. 

> **Pure Newton's Method**
>
> $$x^+ = x - (\nabla^2 f(x))^{-1} \nabla f(x)$$ (might not be converged)
>
> **Damped Newton's Method**
>
> $$x^{+} = x - t(\nabla^2 f(x))^{-1} \nabla f(x)$$

For such t, we use backtracking line search as follow

1. Choose parameters $\alpha \in (0,\frac{1}{2}), \beta\in (0,1)$
2. Take $t=1$, check $f(x +tv) > f(x) +\alpha t \nabla f(x)^tv$
3. While the condition is true, shrink $t$ as $\beta t$
4. Update $x^+$ with NM
5. Repeat 1~4



Only after applying such structure, we can say the convergence of NM. 

> **Convergence Analysis of NM**
>
> Newton's method with backtracking line search satisfies the following two-stage convergence bounds
> $$
> f(x^{(k)}) -f ^{\ast} \leq \begin{cases} f(x^{(0)})-f^{\ast} -\gamma k \mbox{ if } k \leq k_0  \\ \frac{2m^3}{M^2} (\frac{1}{2})^{2^{k-k_0+1}} \mbox{ if } k > k_0\end{cases}
> $$
> $\gamma = \alpha\beta^2\eta^2m/L^2 , \eta =\min\{1,3(1-2\alpha)\}m^2/M$
>
> $k_0$ is the number of step until $\parallel \nabla f(x^{k_0+1}) \parallel_2 < \eta$
>
> $f$ is convex and twice differentiable. 
>
> L,M is a Lipschitz constant of $\nabla f(x)$ and $\nabla^2 f(x)$. m is a strong convex constant of $f(x)$.

 Because the structure is too complicated, so let's ignore trivial and detail ones. 

First of all, we can see that not like other algorithm, we can see that the NM has two-stage lower upper bound. Each bound shows the behavior of damped phase and pure phase. In the damped phase,  we could analyze it as follow.

The Damped Phase $(\parallel \nabla f(x^{(k)}) \parallel_2 > \eta)$

$f(x^{(k)})-f^{\ast} \leq f(x^{(0)})-f^{\ast}-\gamma k$

$\Rightarrow f(x^{(k)}) \leq f(x^{(0)}) -\gamma k $

$\Rightarrow \gamma < f(x^{(k-1)}) - f(x^{(k)})$

The relation say the situation which decrement is higher than some criterion. If the step satisfies the criterion, then it can enter the pure phase as follow. 

The Pure Phase $(\parallel \nabla f(x^{(k)}) \parallel_2 < \eta)$

$f(x^{(k)}) -f^{\ast} \leq \frac{2m^3}{M^2}(\frac{1}{2})^{2^{k-k_0+1}}$

Once we enter the pure phase, then it never go out from it. 

The relation shows that if we want to decrease the gap between current value and true value, then we need to take $O(\log \log \frac{1}{\epsilon})$ step. By merging two results and make it simple, we can get follow final result. 

> Newton's method with backtracking line search is $O(\frac{f(x^{(0)})-f^{\ast}}{\gamma}+\log \log \frac{1}{\epsilon})$



We can say three important properties with it. 

1. Local Convergence Rate: we can say the convergence only after it enters some local region.
2. Super Exponential Improvement: It doubly exponentially improve the original result. 
3. Problem Dependence: The performance is highly correlated with L,m,M which is determined value corresponding with a target problem.



# 3. Comparison of GD and NM

 Both GD and NM are target to solve numerical optimization problem. If one of them is dominant over another method, then only one of them would be used. But in reality, it is not. This is because both methods have their own pros and cons. 

 We've studied that Gradient Descent can solve the problem with $O(1/\epsilon)$ and we can improve them to $O(\log 1/\epsilon)$ by using backtracking line search. Meanwhile the Newton Rapshon Method with backtracking line search can solve the problem with $O(\log \log 1/\epsilon)$. 

 For example, if we want to find optima which has 0.000001 as gap of optima value and true value, then we have to iterate $1/0.0001 =10000$ step when using ordinary GD, $\log 1/0.0001  \approx 9$ when using backtracking GD and $\log \log 0.0001 \approx 2$ when using backtracking NM. Even though this is too simply calculated, but the ratio is almost similar with reality.

 This shows that Gradient Descent cannot follow the performance of NM in the aspect of the number of steps. However, each step of NM needs much more larger calculation than GD. This is because the $\nabla ^2 f(x)$ is formed as Matrix in usual and we have to find the inverse matrix $\nabla^2 f(x)$, and do matrix multiplication $(\nabla^2 f(x))^{-1}\nabla f(x)$. All of them are not easy tasks, so Gradient Descent can show better performance than Newton Rapshon method case by case.

 More concrete analytic shows follow results. 

| Criteria                  | Gradient Descent | Newton Rapshon Method     |
| ------------------------- | ---------------- | ------------------------- |
| Memory                    | $O(n)$           | $O(n^2)$                  |
| The number of Step        | $O(1/\epsilon)$  | $O(\log \log 1/\epsilon)$ |
| Computation for each step | $O(n)$           | $O(n^3)$                  |
| Backtracking              | $O(n)$           | $O(n)$                    |
| Conditioning              | Largely Affected | Relatively Small Affected |

- If the hessian matrix of the problem is structured such as diagonal or block diagonal matrix, then the step complexity could be improved much more. 
- Or, we can estimate the hessian matrix rather than exactly derive. It is called as Quasi- Newton's method.

