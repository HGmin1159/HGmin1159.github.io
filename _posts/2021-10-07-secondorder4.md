---
title: \[Scond-Order Method\] Part4 - Quasi Newton Method.
categories: [Convex]
tags: [Convex Optimization]
excerpt: Quasi Newton's Method to accelerate learning.
sidebar:
  - title: "Convex Optimization"
    image: /assets/img/convex.png
    image_alt: "image"
    nav: Convex_Optimization
author_profile: False
---

$\def\array#1#2{\left[ \begin{array}{#1} #2 \end{array}\right]}$

# 1. Quasi Newton Methods

 In the gradient descent method, there is an accelerating method called Stochastic Gradient Descent. It lessens the computation in each step by estimating gradients instead of fully calculating them.  Similarly, Quasi newton's method accelerates newton's method by estimating a hessian matrix. 



 There are several ways to estimate the hessian matrix, but all of them follow the below routine. 

> **Quasi Newton Method**
>
> 1. Solve $B^{(k-1)} s^{(k-1)} = - \nabla f(x^{(k-1)})$ 
> 2. Update $x^{(k)} = x^{(k-1)} + t_k s^{(k-1)}$
> 3. Compute $B^{(k)}$ from $B^{(k-1)}$



To estimate the hessian matrix, we can use the following information. 

> **Secant Equation**  
>
> $\nabla f(x^+) = \nabla f(x)+ B^+s \\ \Rightarrow \nabla f(x^+) -\nabla f(x) =:y= B^+s$

Notice that $s = \nabla x = x^+-x$. And the secant equation is derived with the expression of $\frac{\nabla f(x^+)-\nabla f(x)}{x^+-x} \approx \nabla^2f(x^+) \approx B^+$



Along with the secant equation, the hessian estimator has to satisfy following properties.

> Hessian Estimate Condition
>
> - $B^+ s =y$
> - $B^+$ is symmetric
> - $B^+$ have to be close to $B$
> - $B>0 \Rightarrow B^+>0$



Based on the above equation, there are various algorithms to implement it. 

 

# 2. Method of Estimating Hessian

**SR1 Algorithm (Symmetric Rank - One)**

SR1 algorithm uses below iterative form.

- $B^+ = B + a u u^t$  ($a$ is scalar and $u$ is vector)

If we multiply s on both sides, we can get the following form. 

$B^+ s = y = Bs + a u u^t s$

$\Rightarrow y -Bs = a(u^t s) u$

 Notice that $y - Bs $ and $u$ are vectors and $a(u^ts)$ is a scalar.

Therefore, $u \propto y-Bs $ and we can set $u = y-Bs$  simply. Then above equation becomes as follow

$y -B s = a (y-Bs)^ts (y-Bs)$

The scalar $\alpha (y-Bs)^t s $ have to be one so $a = \frac{1}{(y-Bs)^ts}$

By plugging the above equation, we can get the SR1 hessian update equation.

> **SR1 update equation**
>
> $B^+ = B+ \frac{(y-Bs)(y-Bs)^t}{(y-Bs)^tS}$

Notice that the above form satisfies hessian estimate conditions 1~3. 



In the real computation, we need $B^{-1}$ rather than $B$ itself. Therefore, it is more efficient to update $C=B^{-1}$ instead of $B$

If we set $C = B^{-1}, C^+ = (B^+)^{-1}$ , then we can derive the following expression by using Sherman-Morrison Formula.

$C^{+} = (B^+)^{-1} = (B+\frac{(y-Bs)(y-Bs)^t}{(y-Bs)^tS})^{-1} = C+\frac{(s-Cy)(s-Cy)^t}{(s-Cy)^ty}$



> **Sherman _ Morrison Formula**
>
> $(A+uv^t)^{-1} = A^{-1}-\frac{A^{-1}uv^tA^{-1}}{1+v^tA^{-1}u}$
>
> **Woodbury Formula**
>
> $(A+UCV)^{-1} = A^{-1} -A^{-1}V(C^{-1} +VA^{-1}U)^{-1}V A$



Even though SR1 give us quite a intuitive estimates, but it cannot guarantee the fourth condition $B>0 \Rightarrow B^+ >0$

Therefore, we need another method.



**BFGS Method (Broyden-Fletcher-Goldfarb-Shanno Update)**

To edify the positive definiteness, we can use the BFGS Method. 

The BFGS method has the following iterative equation form.

$B^+ = B + a u u^t + b v v^t$

Like the SR1, multiply s and derive following form.

$y - Bs = a (u^ts)u+b(v^ts)v$

By injecting $u = y$ and $v = Bs$, we can derive following iterative equation

>**BFGS Iterative Equation Form**
>
>$B^+ = B - \frac{Bss^tB}{s^tBs} + \frac{y y^t}{y^ts}$

***

$a(u^ts) = 1 \Rightarrow a=\frac{1}{u^ts}$

$b(v^ts) =-1 \Rightarrow b=-\frac{1}{s^tBs}$

$B^+ = B + a u u^t + bvv^t$

​      $= B+ \frac{1}{y^ts}yy^t - \frac{1}{s^tBs}Bss^tB$

***



Like the SR1 algorithm, we can use Woodbury's formula to derive the following form.

$C^+ = (I-\frac{sy^t}{y^ts})C(I-\frac{ys^t}{y^ts})+\frac{ss^t}{y^ts}$

This formula preserves the positive definiteness of C as follow.

$x^tCx = (x-\frac{s^tx}{y^ts}y)^tC(x- \frac{s^tx}{y^ts}y)+\frac{(s^tx)^2}{y^ts}$

The former term is positive because of the positive definiteness of C and the later term is also positive because it is square of some other term.



**DFP Method (Davidon-Fletcher_Powell Update)**

Similar to the BFGS Method, we can design the C update equation directly.

$C^+ = C + a  u u^t + b vv^t$

And use $s =C^+y$, we can derive following form

> **DFP Update Iterative Equation**
>
> $C^+ = C - \frac{Cyy^tC}{y^tCy}+\frac{ss^t}{y^ts}$



There is Hybrid version of the BFGS method and the DFP method. It estimates two of them like below.

> **Broyden Class**
>
> $B^+ = (1-\phi) B^+_{BFGS}+\phi B^+_{DFP}$


 
 ***
 Boyd,S. & Vandenberghe, L. (2004) Convex Optimization.Cambridge, UK: Cambridge Press  
 Tibshirani,R. "Barrier Method" Convex Optimization, Oct. 2019, Carnegie Mellon University, Pittsburgh


