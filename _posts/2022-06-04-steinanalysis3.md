---
title: \[Real Analysis\] Ch3. Differentiation and Integration
categories: [Analysis]
tags: [Analysis,Mathematics]
excerpt: Differentiation  
sidebar:
  - title: "Analysis"
    image: /assets/img/Analysis.png
    image_alt: "image"
    nav: Analysis
author_profile: False
---



# Chapter 3. Differentiation and Integration



## 1. Differentiation of Integrals

  The main goals of this chapter are showing the relation between integration and differentiation called as essential theorem of calculus stating that $F(x) -F(a)= \int_{a}^x \frac{\delta}{\delta y} F(y) dy$ and the condition guaranteeing that there exists $F'$ for an integrable function $F$.

There is an important proposition. 

> **Proposition**. Let $f$ be a continuous function on $\mathbb{R}^d$,then for all $x \in \mathbb{R}^d$,  
> 
> $\underset{m(B)\rightarrow 0 , x \in B}{\lim} \frac{1}{m(B)} \int_B f(y) dy = f(x)$.

***

pf) 

Let fix $\epsilon>0$. For each $x \in \mathbb{R}^d$, there is $\delta>0$ such that $\mid x-y \mid < \delta$ implies $\mid f(x)-f(y) \mid < \epsilon$

If we take a $B$ containing $x$ of radius $\frac{\delta}{2}$, then $\mid y - x \mid < \delta$ for all $y \in B$ and thus

$\mid \frac{1}{m(B)} \int_{B} f(y) dy -f(x)\mid \leq \frac{1}{m(B)} \int_B \mid f(y)-f(x) \mid dy \leq \frac{m(B) \epsilon}{m(B)}= \epsilon$.

***



To develop the relation, we'll define the concept called as Hardy-Littlewood Maximal Function

> **Hardy-Littlewood Maximal Function**
>
> Let $f$ be integrable on $\mathbb{R}^d$. Define its maximal function denoted by $f^{\ast}$ such that  
> 
> $f^{\ast}(x) = \underset{x \in B}{\sup} \frac{1}{m(B)}\int_B \mid f(y) \mid dy , x \in \mathbb{R}^d$.

Check that $\underset{m(B) \rightarrow 0}{\lim} f^{\ast}(x) = \mid f (x) \mid$.

$\def\ud#1#2#3{\underset{#1}{\overset{#2}{#3}}}$

There is another important lemma as follow.

> **Vitali covering Lemma**
>
> Suppose $B = \{B_1,B_2,...,B_N\}$ is a finite collection of open balls. Then $\exists$ a disjoint sub collection  $\{B_{j_1},B_{j_2},...,B_{j_k}\}$ of $B$ that satisfies $m(\underset{j=1}{\overset{N}{\bigcup}}B_j \leq 3^d \ud{l=1}{k}{\sum}m(B_{j_l}))$



About the Hardy-Littlewood Maximal Function, there are theorems.

>  Suppose $f$ is integrable on $\mathbb{R}^d$, then
>
> 1) $f^{\ast}$ is measurable  
> 
> 2) $f^{\ast}(x)$ is bounded almost everywhere on $x$.  
> 
> 3) $f^{\ast}$ satisfies $m(\{x\in \mathbb{R}^d ; f^{\ast}(x) > \alpha \}) \leq \frac{3^d}{\alpha} \parallel f \parallel_{L_1} , \forall \alpha >0$.  



By using the above proposition, we can expand the above proposition into integrable function.

> **Lebesgue Differentiation Theorem**
>
> If $f$ is integrable on $\mathbb{R}^d$, then $\ud{m(B) \rightarrow 0,x \in B}{}{\lim} \frac{1}{m(B)}\int_{B}f(y)dy =f(x)$ almost every where on $x \in \mathbb{R}^d$

***

pf) 

We'll prove the proposition by showing that for a set $E_{\alpha} = \{x \in \mathbb{R}^d ; \ud{m(B) \rightarrow 0 , x \in B}{}{\lim} \mid \frac{1}{m(B)} \int_Bf(y) dy - f(x) \mid > 2\alpha\}$, for each $\alpha>0$$, m(E_{\alpha})=0$



Fix $\alpha>0,\epsilon>0$. There exists a continuous function $g$ supported on a compact set such that $\parallel f-g \parallel_{L^1} < \frac{\alpha \epsilon}{3^{d}+1}$

By the above proposition, $\ud{m(B)\rightarrow 0 , x \in B}{}{\lim} \frac{1}{m(B)} \int_{B} g(y) dy = g(x) \forall x$.

For a ball containing $x$, 

$\frac{1}{m(B)} \int_{B} f(y) dy - f(x) = \frac{1}{m(B)} \int_B \mid f(y)-g(y) \mid dy + \frac{1}{m(B)}\int_B g(y) dy - g(x) +g(x) -f(x)$

Taking both sides the limit and superemum, we can get following inequality.

$\ud{m(B) \rightarrow 0, x \in B}{}{\lim \sup} \mid \frac{1}{m(B)} \int_B f(y) dy - f(x) \mid  \leq (f-g)^{\ast}(x) + \mid g(x) - f(x) \mid$

Let define $F_{\alpha} = \{x \in \mathbb{R}^d ; (f-g)^{\ast}(x) > \alpha\}0$ and $G_{\alpha} = \{x \in \mathbb{R}^d ; \mid g(x) - f(x) \mid > \alpha\}$ then $E_{\alpha} \subset F_{\alpha} \cup G_{\alpha}$

We know that $m(F_\alpha) \leq \frac{3^d}{\alpha} \parallel f -g \parallel_{L^1}$ and $m(G_{\alpha}) \leq \frac{1}{\alpha} \parallel f- g \parallel_{L^1}$ by above theorem and Tchevysev's inequality. 

Therefore, $m(E_{\alpha}) \leq m(F_{\alpha})+m(G_{\alpha}) \leq \frac{3^d+1}{\alpha} \parallel f- g \parallel < \epsilon$.

***

This conclusion could be expanded into a set of locally integrable function. The locally integrable function means that for any compact set $K$, $f(x) \chi_{K}$ is integrable. Notice that it is more general set than the set of integrable function. For example, a constant function $C$ is locally integrable function but not integrable functions on $\mathbb{R}$.



> **Corollary.** If $f$ is a locally integrable function, then $\underset{m(B) \rightarrow 0}{\lim} \frac{1}{m(B)}\int_B f(y)dy = f(x)$ almost everywhere on $x$.





We say that  $x$ is a point of Lebesgue density of $E$, if $\ud{m(B) \rightarrow 0 , x \in B}{}{\lim}\frac{m(B \cap E)}{m(B)} = 1$.

> Suppose $E$ is measurable, then
>
> 1. Almost every point $x \in E$ is a point of Lebesgue density of $E$
> 2. Almost every point $x \notin E$ is not a point of Lebesgue density of $E$

***

pf)

$\frac{m(B\cap E)}{m(B)}=\frac{1}{m(B)} \int_B \chi_{E}(y) dy  \rightarrow \chi_E(x)$ as $m(B) \rightarrow 0$.

***



Let's define the Lebegue set $\mathcal{L}_f$ as a set of $\overline{x}$ such that $\ud{m(B) \rightarrow 0,\bar{x} \in B}{}{\lim} \frac{1}{m(B)}\int_{B}\mid f(y)- f(\bar{x}) \mid dy =0$

Then we can know that if $f$ is continuous at $\bar{x}$, then $\bar{x}$ is in $\mathcal{L}_f$. If $\bar{x} \in \mathcal{L}_{f}$, then $\ud{m(B) \rightarrow 0,\bar{x} \in B}{}{\lim} \frac{1}{m(B)}\int_{B} f(y) dy =f(\bar{x})$

By corollary, if $f$ is locally integrable on $\mathbb{R}^d$, then almost every point belongs to $\mathcal{L}_f$.



## 3.2 Good kernels and Approximation to the identity



There is a concept called by kernels. By using the kernel and convolution, we can handle the functions in much more good conditions.



> **Good Kernels**
>
> Let $$\{k_{\delta}\}_{\delta>0}$$ be a collection of integrable functions, we say $$k_{\delta}$$ are good kernels if for $$\delta>0$$
>
> 1. $\int k_{\delta}(x) dx = 1$
> 2. $\int \mid k_{\delta}(x) \mid dx \leq A$ for some $A >0$ independent of $\delta$
> 3. For every $\eta >0$, $\int_{\mid x \mid \geq \eta} \mid k_{\delta}(x) \mid dx \rightarrow 0$ as $\delta \rightarrow 0$.

There is a weaker concept than the Good kernels.

> **Approximation to the Identity**
>
> Let $$\{k_{\delta}\}_{\delta>0}$$ be a collection of integrable functions, we say $$k_{\delta}$$ are approximations to the idenity if for $$\delta>0$$
>
> 1. $$\int k_{\delta}(x) dx = 1$$  
> 
> 2. $$\mid k_{\delta}(x) \mid  \leq A \delta^{-d}$$ for some $$A >0$$ independent of $$\delta$$ for all $$x \in \mathbb{R}^d$$  
> 
> 3. $$\mid k_{\delta}(x) \mid  \leq \frac{A \delta}{\mid x \mid ^{d+1}}$$ for some $$A >0$$ independent of $$\delta$$ for all $$x \in \mathbb{R}^d$$



As a pointwise limit of $k_{\delta}$ as $\delta \rightarrow \infty$, we define Dirac Delta Function, denoted by $\delta(x)$ by $\delta(x) = \begin{cases}\infty \mbox{ if }x =0 \\\ 0 \mbox{ otherwise }  \end{cases}$ and $\int \delta(x) dx =1$.

Remark that $(f \ast \delta) (x) = \int f(y) \delta(x-y)dy = f(x)$ and therefore, $(f \ast k_{\delta})(x) \rightarrow f$ as $\delta \rightarrow 0$ pointwisely for a bounded function $f$.



The following two functions are approximation to identity.

**Example. (Poisson Kernel)**

Let $P_{y}$ be the Poisson kernel defined by $P_{y}(x)=\frac{1}{x}\frac{y}{x^2+y^2}, x \in \mathbb{R}$.

**Example. (Fejer Kernel)**

Let $F_N, N \in \mathbb{N}$ be the Fejer kernel defined by $F_N(x) = \begin{cases} \frac{1}{2 \pi N} \frac{\sin^2(Nx/2)}{\sin^2(x/2)} \quad \mbox{ if } \mid x \mid \leq \pi \\\ 0 \qquad \qquad \qquad  \mbox{ o.w. }\end{cases}$



Now, we'll expand the result $(f\ast k_{\delta}) \rightarrow f$ into integrable function and uniform continuous.

> **Lemma**
>
> Suppose $$f$$ is integrable and $$x \in \mathcal{L}_f$$. Let $$A(r)=\frac{1}{r^d} \int_{\mid y \mid \leq r} \mid f(x-y)-f(x) \mid dy$$ whenever $$r>0$$. Then $$A(r)$$ is continuous for $$r>0$$ and $$A(r) \rightarrow 0$$ as $$r \rightarrow 0$$. Moreover, $$A(r)$$ is bounded.

By using the lemma, we can prove a following theorem.

> **Theorem (Pointwise Convergence)**
>
> Let $$f$$ be integrable and let $$\{k_{\delta}\}$$ be an approximation to the identity. Then $$(f \ast k_{\delta})(x) \rightarrow f(x)$$ as $$\delta \rightarrow 0$$ for $$x \in \mathcal{L}_f$$. The limit hold for almost every $$x$$.

***

pf)

Fix $x \in \mathcal{L}_f$. 

A direct computation gives $\mid (f\ast k_{\delta})(x) -f(x) \mid \leq \int \mid f(x-y) -f(x) \mid k_{\delta}(y) \mid dy$

Let define $F_{\delta}(x,y) = \mid f(x-y) - f(x) \mid \mid k_{\delta}(y)\mid$.

$\mid (f \ast k_{\delta})(x) -f(x) \mid = \int_{\mid y \mid \leq r}F_{\delta}(x,y)dy + \ud{k=0}{\infty}{\sum} \int_{2^k \delta \leq \mid y \mid \leq 2^{k+1}\delta}F_{\delta}(x,y) dy$

Since $\mid K_{\delta}(x) \mid \leq c \delta^{-d}$, we have $\int_{\mid y \mid \leq \delta} F_{\delta}(x,y) dy \leq c A(\delta)$.

$$\begin{align*}\int_{2^k \delta \leq \mid y \mid \leq 2^{k+1}\delta}F_{\delta}(x,y) dy &\leq \frac{c \delta}{(2^k \delta)^{d+1}} \int_{\mid y \mid \leq 2^{k+1}}\mid f(x-y)-f(x) \mid dy \\ &= \frac{c2^d}{2^k }  A(2^{k+1}\delta)\end{align*}$$

$\Rightarrow \mid (f \ast k_{\delta})(x) -f(x) \mid \leq cA(\delta) + c2^d \sum_{k=0}^{\infty}2^{-k}A(2^{k+1}\delta)$



Let $\epsilon>0$ be given, $A(r)$ is bounded.

Thus, there exists $N \in \mathbb{N}$ such that $\sum_{k\geq N}2^{-k} < \frac{\epsilon}{3Mc2^d}$

For this $N$, $A(r) \rightarrow 0$ as $r \rightarrow 0$.

We can fix $\eta>0$ such that if $r < \eta$, $A(r) < \frac{\epsilon}{3Mc2^d}$.

Thus $\delta < \frac{\eta}{2^N}$, then $A(2^{k+1}\delta) < \frac{\epsilon}{3Nc2^d}$ and $A(\delta) < \frac{\epsilon}{3C}$

Therefore, $(f\ast k_{\delta})(x) -f(x) \leq cA(\delta)+c 2^d \ud{k=0}{N-1}{\sum} 2^{-k}A(2^{k}\delta) +c 2^d \ud{k\geq N}{\infty}{\sum} 2^{-k}A(2^{k}\delta)   < \frac{\epsilon}{3}+\frac{\epsilon}{3}+\frac{\epsilon}{3} = \epsilon.$

***



The theorem could be expanded into uniform continuity.

> **Theorem (Uniform Convergence)**
>
> Let $f$ be integrable and let $\{k_{\delta}\}$ be an approximation to the identity. Then for each $\delta>0$, the function $(f \ast k_{\delta})(x) = \int f(x-y)k_{\delta}(y)dy$ is integrable and $\parallel (f \ast k_{\delta})-f \parallel \rightarrow 0$ as $\delta \rightarrow 0$

***

pf)

Note that $\mid (f \ast k_{\delta})(x) - f(x) \mid \leq \int \mid f(x-y) -f(x) \mid k_{\delta}(y) \mid dy$.

By Tonelli theorem, $\parallel (f \ast k_{\delta}) - f \parallel \leq \int \mid k_{\delta}(y)  \int \mid f(x-y)-f(x) \mid dx dy$.

Let $\epsilon>0$ be given. $f_{h}(x) = f(x-h) \rightarrow f$.

We can find $\eta >0 $ such that if $\mid y \mid < \eta$, then $\parallel f- f_y \parallel < \frac{\epsilon}{2A}$ and $\int \mid k_{\delta}(x) \mid dx \leq A$.

Remark that $\int_{\mid x\mid \geq \eta}\mid k_{\delta}(x) \mid dx \rightarrow 0$ as $\delta \rightarrow 0$.

For this $\eta >0$, we can find $r >0$ such that if $\delta < r$,then $\int_{\mid x \mid \geq \eta} \mid k_{\delta}(x) \mid dx < \frac{\epsilon}{4 \parallel f \parallel}$

Moreover, if $\delta < r$, then

$$\begin{align*} \parallel (f \ast k_{\delta})- f \parallel & \leq \int_{\mid y \mid < \eta} \mid k_{\delta}(y) \mid (\int \mid f(x-y)-f(x) \mid dx )dy +\int_{\mid y \mid \geq \eta} \mid k_{\delta}(y) \mid (\int \mid f(x-y)-f(x) \mid dx )dy \\ & < \frac{\epsilon}{2}+\frac{\epsilon}{2} = \epsilon \end{align*}$$

***



## 3. Differentiability

Now, we'll see the conditions to hold the equation $F(b)-F(a) = \int_{a}^b F'(x) dx$. To see them, we use another concept called as Bounded Variation.

> **Bounded Variation**
>
> Let $F: [a,b] \rightarrow \mathbb{R}$
>
> 1. $P = \{x_0,x_1,...,x_n\} = \{x_j ; j =0,1,..,N\}$; **partition** of $[0,1]$ if $a = x_0 < x_1 < ... < x_N = b$
> 2. $\tilde{P} = \{x_j ; 1,2,...,M\}$ ; **Refinement** of $P$ if $\tilde{P}$ is a partition of $[a,b]$ and $P \subset \tilde{P}$.
> 3. For a partition $P$ of $[a,b]$, $V(F,P) = \ud{j=1}{N}{\sum} \mid F(x_j)-F(x_{j-1}) \mid  =:  \ud{j=1}{N}{\sum}  \mid \Delta F_j \mid$ is called by **Variation** of $F$ on $P$.
> 4. $F$ is of **Bounded Variation** on $[a,b]$ if the set $\{V(F,P) ; P \mbox{ is a partition of }[a,b]\}$ is bounded about $P$.
> 5. $T_F(a,b) = \sup \{V(F,P) ; P \mbox{ is a partition of }[a,b]\}$; **Total Variation** of $F$ on $[a,b]$ 
> 6. $BV[a,b]$ ; the set of all functions on $[a,b]$ that are of bounded variation



Remark that $V(F,P) \leq V(F,\tilde{P})$ and if $F \in BV[a,b]$, then $F$ is bounded at $[a,b]$.

Let's see the details of the Bounded Variation.

> 1. Let $F:[a,b] \rightarrow \mathbb{R}$ be monotone, then $F \in BV[a,b]$ and $T_F(a,b) = \mid F(b)-F(a)$
> 2. Let $F: [a,b]\rightarrow \mathbb{R}$ be continuous and differentiable on $[a,b]$, then $F \in BV[a,b]$
> 3. Let $F,G \in BV[a,b]$ and $c \in \mathbb{R}$, then
>    1. $F+G, cF,FG \in BV[a,b]$
>    2. $T_{F+G}[a,b] \leq T_F[a,b] + T_G[a,b]$
>    3. $T_{cF}[a,b] =  \mid c \mid T_{F}[a,b]$
> 4. Let $F \in BV[a,b]$ and $c \in (a,b)$,then $F\in BV[a,c] \cap BV[c,d]$ and $T_{F}[a,b] = T_F[a,c]+ T_{F}[c,b]$
> 5. Let $F:[a,b] \rightarrow \mathbb{R},F \in BV[a,b]$ iff there are two increasing functions $G,H$ such that $F=G-H$.
> 6. Let $F:[a,b] \rightarrow \mathbb{R}$ be continuous $F \in BV[a,b]$ iff $F$ is difference of two continuous increasing functions $F = G-H$.

We have seen which functions satisfy the Bounded variations.





Now, we'll see how the conditions are connected with the differentiability. We need additional lemmas. 

> 1. Let $F:[a,b] \rightarrow \mathbb{R}$ be a monotone function. Then $F$ has at most countably many discontinuity.
>
> 2. Let $G$ be a real-valued continuous function and $E$ be the set of points $x$ such that $G(x+h) > G(x)$ for some $h= h_x>0$
>    1. If $E$ is non-empty,then it must be open and hence $E=\underset{j \in \mathbb{N}}{\bigcup} (a_j,b_j)$
>    2. If $(a_j,b_j)$ is finite set, then $G(b_j)-G(a_j)=0$
>    3. The set $E$ is either $\phi$ or open. 

> **Theorem** If $F$ is continuous and of bounded variation on $[a,b]$, then $F$ is differentiable almost everywhere.



> **Corollary**
>
> If $f$ is increasing and continuous, then $F'$ exists almost everywhere.
>
> Moreover, $F'$ is measurable, nonnegative and $\int_a^b F'(x)dx \leq F(b) -F(a) \leq 2 \max F$.
>
> Particulary, if $F$ is bounded on $\mathbb{R}$, $F'$ is integrable.



There is an important concept about continuity.

> **Absolutely Continuous Function**
>
> A function $F$ defined on $[a,b]$ is said to be absolutely continuous, if for any $\epsilon>0$, $\exists \delta>0$ such that for $a\leq a_1<b_1\leq a_2 <b_2 \leq...\leq a_N < b_N = b$, $\ud{j=1}{N}{\sum}(b_j -a_j) < \delta$ implies $\ud{j=1}{N}{\sum}\mid F(b_j)-F(a_j)\mid <\epsilon$

There are properties about the absolutely continuous function.

> Let $F,G$ be a absolutely continuous function on $[a,b]$. Then
>
> 1. $F$ is uniformly continuous.
> 2. $F \in BV[a,b]$
> 3. $F+G,FG$ are also absolutely continuous.
> 4. $\mid F \mid^{a}$ are absolutely continuous for $a \in \mathbb{R}$.
> 5. When $f$ is integrable, then $F(x) = \int_{-\infty}^x f(y) dy$ is absolutely continuous.



> **Lemma.** Let $E$ be a set of finite measure, and let $B$ be a Vitali covering of $E$. For any $\delta >0$, we can find finite many balls $B_j\in B, j=1,2,...,N$ such that $\ud{j=1}{N}{\sum}m(B_j) \geq m(E)-\delta$
>
> **Corollary** Let $E$ be a set of finite measure and let $B$ be a Vitali covering of $E$. For any $\delta >0$, we can find finitely many balls $B_j$ such that $m(E-\ud{j=1}{N}{\bigcup} B_j)<2 \delta$

> **Theorem**
>
> If $F$ is absolutely continuous on $[a,b]$, then $\exists F'(x)$ a.e. $x$. Moreover, if $F'(x) =0$ a.e. $x$, then $F$ is constant.



By using the above lemma and theorem, we can derive the conclusion about the relation between integration and differentiation

> **Theorem**
>
> If $F$ is absolutely continuous on $[a,b]$, then $F'$ exists almost everywhere, and is integrable. Moreover, $F(x)-F(a)=\int_{a}^{x}F'(y)dy, a\leq x \leq b$. Conversely, if $f$ is integrable on $[a,b]$, then there exists an absolutely continuous function $F$ such that $F'=f$ almost everywhere.



The remaining part is differentiation about Jump function.

> Let $\{x_n\}$ denote the points at which $F$ is discontinuous and let $\alpha_n=F(x_n^+)-F(x_n^-)>0$ denote the jump of $F$ at $x_n$.
>
> For each $n \in \mathbb{N}$, we can find $0 < \theta_n <1$ such that $F(x_n)=F(x_n^-)+\alpha_n \theta_n$.
>
> Then define the jump function associated to $F$ by $J_F(x) = \underset{n \in \mathbb{N}}{\sum} \alpha_n j_n(x)$ where $j_n(x) = \begin{cases}0 \mbox{ if  } x< x_n \\ \theta_n \mbox{ if } x= x_n \\ 1 \mbox{ if } x > x_n\end{cases}$.

> **Lemma**. Suppose that $F: [a,b] \rightarrow \mathbb{R}$ is increasing
>
> 1. $J_F(x)$ is discontinuous at the points $\{x_n\}$ and has a jump at $x_n$ equal to that of $F$
> 2. $F-J_F$ is increasing and continuous.

> **Theorem**
>
>  If $J_F$ is the jump function, than $J_F(x)$ exists and vanishes almost everywhere on $x$.

> **Theorem**
>
> If $F$ is of bounded variation on $[a,b]$, then $F$ is differentiable almost everywhere.

