---
title: \[Scond-Order Method\] Part3 - Primal-Dual Interior-Point Methods
categories: [Convex]
tags: [Convex Optimization]
excerpt: Solving convex problem with inequality constraints
sidebar:
  - title: "Convex Optimization"
    image: /assets/img/convex.png
    image_alt: "image"
    nav: Convex_Optimization
author_profile: False
---

$\def\array#1#2{\left[ \begin{array}{#1} #2 \end{array}\right]}$

# 1. Primal Dual Interior Point Method

 In addition to Barrier Method, there is another method to solve the convex problems with inequality constraints: Primal-Dual Interior Point Method. 

 Compared with barrier method, there are some characteristics in the interior point method. First of all, barrier method runs the newton rapshon method several time along with barrier parameter t, but interior point method runs it only once. Secondly, in the procedure of the barrier method, the target variable have to be in feasible set, but in the interior point method, it don't have to be. In third, it could be more efficient but less intuitive. 

 It is based on the perturbed KKT condition. Let's remark perturbed KKT condition in the barrier method.



> **Perturbed KKT Conditions**
>
> - $\nabla f(x) + \sum u_i \nabla h_j (x) + A^t v =0$
> - $u_i \cdot h_i(x) = - (1/t), i=1,2,...,m$
> - $h_i(x) \leq 0 , Ax=b, u_i \geq 0$



Notice that perturbed KKT condition is modified version of original KKT condition that complementary slackness conditions are lessened.



We can see it as nonlinear system.

$r(x,u,v) = \array{c}{\nabla f(x) + Dh(x)^tu + A^tv \\\ -diag(u)h(x) - (\frac{1}{t})1 \\\ Ax-b} = 0$ where $h(x) = \array{c}{h_1(x) \\\ \vdots \\\ h_m(x)}$ and $Dh(x) = \array{c}{\nabla h_1(x)^t \\\ \vdots \\\ \nabla h_m(x)^t}$

By solving the equation, we can derive primal-dual optimal value.  For this system, let's solve them with the newton's updates $F(y+\nabla y) \approx F(y) + DF(y) \nabla y =0 \Rightarrow \nabla y = -(DF(y))^{-1}F(y)$. 



To solve the equation, there are several methods. 



**Barrier Method Approach**

Solving the problem with barrier method is equivalent with solving the perturbed KKT condition with $u_i$ fixed as $u_i = -\frac{1}{t h_i(x)}$. Therefore, in Barrier Method, we'll omit the second line. 

$r(x,v) = \array{c}{\nabla f(x) -\sum \frac{\nabla h_i(x)}{t h_i(x)} + A^tv  \\\ Ax-b} = 0$

For $F(y) = r(x,v)$, $DF(y)\nabla y = -F(y)$ is as follow.

$DF(y) = \array{cc}{\frac{\nabla f(x) - \sum \nabla h_i(x)/t h_i(x) + A^tv }{\delta x} & \frac{\nabla f(x)  - \sum \nabla h_i(x)/t h_i(x) + A^tv }{\delta v} \\\ \frac{Ax-b}{\delta x} & \frac{Ax-b}{\delta v }}$

​             $= \array{cc}{ \nabla^2 f(x) + \frac{1}{t}\sum_{i=1}^{n}\frac{\delta}{\delta x} \frac{\nabla h_i(x)}{h_i(x)}   & A \\\ A & 0}$



Then, the equation becomes as follow


$$
\nabla y = -\array{cc}{ \nabla^2 f(x) + \frac{1}{t}\sum_{i=1}^{n}\frac{\delta}{\delta x} \frac{\nabla h_i(x)}{h_i(x)}   & A \\\ A & 0}^{-1}\array{c}{\nabla f(x) -\sum \frac{\nabla h_i(x)}{t h_i(x)} + A^tv  \\\ Ax-b}
$$


And by using them we can derive iterative equation as $y^+ = y + \nabla y$.

The above equation generates same results with barrier method with equality constraints. Note previous posting.



**Interior Point Method**

 In the interior point method, it approach the equation without omitting the second line. It will generate following result. 

$r(x,u,v) = \array{c}{r_{dual} \\\ r_{cent} \\\ r_{prim}} = \array{c}{\nabla f(x) + Dh(x)^t u + A^t v \\\ -diag(u) h(x) - \frac{1}{t} \textbf{1} \\\ Ax -b}$

Then the equation would be 

$DF(y) = \array{ccc}{\nabla^2f(x) + \sum_{i=1}^{m}u_i \nabla^2h_i(x) & Dh(x)^t & A^t \\\ -diag(u) Dh(x) & - diag(h(x)) & 0 \\\ A & 0 &0 }$

By using them, we can design newton's iterative equation as below.


$$
\nabla y = -\array{ccc}{\nabla^2f(x) + \sum_{i=1}^{m}u_i \nabla^2h_i(x) & Dh(x)^t & A^t \\\ -diag(u) Dh(x) & - diag(h(x)) & 0 \\\ A & 0 &0 }^{-1}\array{c}{\nabla f(x) + Dh(x)^t u + A^t v \\\ -diag(u) h(x) - \frac{1}{t} \textbf{1} \\\ Ax -b}
$$


And likewise, we can design the newton's update $y^+ = y + \nabla y$

The  newton's equation with above matrix is called as **Primal - Dual Interior Point Method**





# 2. Implementation of Interior Point Method

Because it has really complicated structure, it might not work well in reality. Therefore, we have to use additional theorems to implement it. 



**Surrogate Duality Gap**

In the Barrier method, the duality gap is $\frac{m}{t}$ (t is barrier parameter on objective function). Therefore, we use $\frac{m}{t}$ as criteria to fit appropriate t to make it under the predetermined tolerance $\epsilon$. 

 Similarly, we need criterion to fit the interior point method. Let's see below.

$g(u^{\ast},v^{\ast}) = f(x^{\ast}) + u^{\ast t}h(x)+ v^{\ast t}(Ax^{\ast}-b)$

​                 $= f(x^{\ast}) +  u^{\ast t}h(x)$

$\Rightarrow g(u^\ast , v^\ast) - f(x^{\ast}) \leq -u^{\ast t}h(x) =: \eta$

The value $\eta$ is called as a surrogate duality gap. However, it is only theoretical value because it cannot guarantee $r_{dual} =0$ and $r_{prim} =0 $ in reality. Therefore, we use combination of them as criteria; $\eta, (\parallel r_{prim}\parallel_2^2 + \parallel r_{dual} \parallel_2^2)$. 



**Backtracking Line search**

When using interior point method, we have to use backtracking line search to guarantee feasibility as follow.

>  start with $s_{\max} \leq 1 (; s_{\max} = \min \{1, \min\{-u_i/\nabla u_i : \nabla u_i <0\})$
>
> - This will makes $u_i+s_{\max}\nabla u_i >0$ (Dual feasibility)
>
> With parameters $(\alpha, \beta) \in (0,1)^2$, set $s= 0.999 s_{\max}$ and $s= \beta s$ until $\begin{cases} h_i(x^+) <0  \mbox{ (Primal Feasibility)}\\\ \parallel r(x^+,u^+, v^+) \parallel _2 \leq (1-\alpha s) \parallel r(x,u,v)\parallel_2 \mbox{ (Central Pass})\end{cases}$



By using two techniques, we can implement interior point method as follow

> 1. Set initial value $x^{(0)} \mbox{ such that } h_i(x^{(0)})<0, u^{(0)} >0 , v^{(0)}, \eta^{(0)} = - h(x^{(0)})^t u^{(o)}$
> 2. Compute update direction $\nabla y = -(DF(y))^{-1}F(y)$
> 3. Use backtracking line search to determine a step size s
> 4. Update $y^+ = y + s \cdot \nabla y$
> 5. Compute $\epsilon+ = -h(x^+)^t u^+$
> 6. Repeat 2~5 and stop if $\eta^+ \leq \epsilon$ and $ (\parallel r_{prim}\parallel_2^2 + \parallel r_{dual} \parallel_2^2)^{1/2} \leq \epsilon$



