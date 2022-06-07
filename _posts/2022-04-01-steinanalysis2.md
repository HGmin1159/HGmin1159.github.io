---
title: \[Real Analysis\] Ch2. Integration Theory
categories: [Analysis]
tags: [Analysis,Mathematics]
excerpt: Integration Theory  
sidebar:
  - title: "Analysis"
    image: /assets/img/Analysis.png
    image_alt: "image"
    nav: Analysis
author_profile: False
---



# Ch2. Integration Theory

## 1. Construction of Lebesgue Integral

 The Lebesgue integral is method of integration to define the integral for much more general function than Riemann's integrals. It uses the step function and measures to construct the integration theory. 



The text book defines the Lebesgue integral starting with simple function and expanding it into more general version. So let's see the **Lebesgue integral of simple function**.



> **Definition [The Lebesgue Integral of Simple function]** 
>
> **Simple Function :** $$\phi(x) = \sum_{i=1}^N \alpha_i \chi_{E_j}(x)$$ where $$\alpha_j$$ are real constants and $$E_j$$ are measurable sets of finite measure. For the $$F_k =\{x ; \phi(x)=c_k\}$$, it also could be written uniquely as $$\phi(x) = \sum_{k=1}^M c_k \chi_{F_k}(x)$$
>
> **Lebesgue Integral of Simple function** : For the $$\phi$$ be a simple function like above, the Lebesgue integral is defined by $$\int \phi :=\int_{\mathbb{R}^d} \phi(x) dx = \sum_{k=1}^{M}c_k m(F_k)$$ and $$\int_E \phi := \int_{E} \phi(x) dx = \int_{\mathbb{R}^d} \phi(x) \chi_E (x) dx.$$

Notice that the characteristics function $$\chi_{E_1 \cup E_2}(x) = \chi_{E_1}(x) + \chi_{E_2}(x)$$ and $$\chi_{E_1 \cap E_2}(x) = \chi_{E_1}(x)\chi_{E_2}(x)$$. Because of the equations, the simple function have multiple representations. 



 Using the simple function, we can define the **Lebesgue integral of bounded functions** supported on a set of finite measure. 

 Support is defined by the region where the function has nonzero value i.e. $$supp(f) = \{x \in \mathbb{R}^d:f(x) \neq 0\} = \{x: f(x) <0\} \cup \{x : f(x) >0\}$$. 



There is a important lemma connecting the simple function with bounded function.

> **Lemma 1.2** Let f be a bounded function supported on a set $$E$$ of finite measure.
>
> If $$\{\psi_n\}_{n \in \mathbb{N}}$$ is any sequence of simple functions bounded by M, supported on E and $$\psi_n(x) \rightarrow f(x) \ a.e.$$ on E, then 
>
> 1) There exists $$\underset{n \rightarrow \infty}{\lim} \int \psi_n$$
> 
> 2) If $$f=0$$ a.e. then the $$\underset{n \rightarrow \infty}{\lim} \int \psi_n =0$$

This means that if we find the sequence of simple functions converges to our target function, we can define the integral of the target function by the limit of the integral of the simple functions. Therefore, it is defined as follow.

> **Definition [The Lebesgue Integral of bounded functions supported on a set of finite measure]**
>
>  Let f be a bounded measurable function supported on a set E of finite measure. The Lebesgue integral of $$f$$ is defined by $$\int_{\mathbb{R}} f(x) dx = \underset{n \rightarrow \infty}{\lim} \int_{\mathbb{R}} \phi_n(x) dx $$ whenever $$\{\phi_n\}$$ is sequence of simple functions satisfying follow conditions
>
> 1. $$supp(\phi_n)  \subset  supp(f) \subset E, \forall n \in \mathbb{N}$$.
> 2. $$\mid \phi_n(x) \mid \leq M, \forall x \in E, n\in\mathbb{N}$$.
> 3. $$\phi_n(x) \rightarrow f(x)$$ a.e. on $$E$$ as $$n \rightarrow \infty$$.

If we use the Lemma 1.2 then we can know that any two sequences satisfying the conditions have same values of integrals.

 

> **Definition [The Lebesgue Integral of Nonnegative measurable function]**
>
> $$S_f = \{g : 0 \leq g \leq f$$  and $$g$$ is bounded and supported on a set of finite measure$$\}$$
>
> 1. The Lebesgue integral of $$f$$ is defined by $$\int_{\mathbb{R}^d} f(x) dx =\underset{}{\sup} \int_{\mathbb{R}^{d}} g(x) dx$$.
> 2. The Lebesgue integral of $$f$$ on $$E$$ is defined by $$\int_E f(x) dx = \int_{\mathbb{R}^d} f(x) \chi_E(x) dx. $$



> **Definition [The Lebesgue Integral of General function case]**
>
> Let $f$ be a measurable function on $\mathbb{R}^d$.
>
> 1)  Define $f^{+}(x) = \max (f(x),0),f^{-}(x) = \max(-f(x),0)$, then $f = f^+-f^-$ and $\mid f\mid = f^+ +f^-$
> 
> 2) $f$ is integrable if $\mid f\mid $ is integrable i.e. $f^{+}$ and $f^-$ is integrable.
>
> In this case, the Lebesgue integral of $f$ is defined by $\int f = \int f^+ - \int f^-$



## 2. Propositions of Lebesgue Integral

So far, we defined the Lebesgue integral. Now, let's see the important propositions and theorems of the integral.

> **Propositions about the Lebesgue Integral**
>
> 1. **Linearity :** $\int (af +bg) = a \int f + b \int g$
> 2. **Additivity :** $\int_{E \cup F} f = \int_E f + \int_F f$ when $E \cap F = \phi $
> 3. **Monotonicity :** If $f \leq g$ , then $\int f \leq \int g$.
> 4. **Triangle Inequality :** $\mid \int f \mid \leq \int \mid f \mid $
> 5. If g is integrable and $0 \leq \mid f \mid  \leq \mid g \mid$, then $f$ is integrable.
> 6. If $f$ is integrable then $\mid f(x)\mid < \infty$ almost everywhere on $x$.
> 7. If $\int \mid f\mid =0$, then $f(x) =0$ almost everywhere on $x$.
> 8. **Fatou's Lemma :** Suppose $\{f_n\}$ is a sequence of non-negative measurable function. If $\underset{n \rightarrow \infty}{\lim} \mid f_n(x) \mid =\mid f(x)\mid$ for almost everywhere on $x$, then $\int \mid f\mid \leq \underset{n \rightarrow \infty}{\lim} \int \mid f_n \mid$.
> 9. Suppose that $f$ is integrable in $\mathbb{R}^d$, then $\forall \epsilon>0$,
>    1. $\exists B$ of finite measure such that $\int_{B^c} \mid f\mid <\epsilon$
>    2. $\exists \delta$ such that $\int_E \mid f \mid <\epsilon$ whenever $m(E) < \delta$.
> 10. If $\{f_n\}$ is a Cauchy sequence in $L^1$, then there exists $\{f_{n_k}\}$ such that $\parallel f_{n_{k+1}}-f_{n_{k}} \parallel_{L^1} < \frac{1}{2^k}$
> 11. **Invariance Property**
>     1. **Translation Invariance :** For $f_h(x) = f(x-h), h \in \mathbb{R}^d, \int_{\mathbb{R}^d}f(x) dx = \int_{\mathbb{R}^d}f_h(x) dx$
>     2. **Dilation Invariance :** $\delta^d \int_{\mathbb{R}^d} f(\delta x)dx = \int_{\mathbb{R}^d}f(x) dx ,\delta >0$
>     3. **Reflection Invariance :** $\int_{\mathbb{R}^d}f(x) dx = \int_{\mathbb{R}^d}f(-x) dx$



There are important theorems used at proving the existence of some function.

> **Bounded Convergence Theorem**
>
> Suppose that $f$ is non-negative measurable function and $\{f_n\}$ is a sequence of non-negative measurable function with $f_n \leq f$, $f_n(x) \rightarrow f(x)$ as $n\rightarrow \infty$ almost everywhere on $x$, then $\underset{n \rightarrow \infty}{\lim} \int f_n = \int f$.

> **Monotone Convergence Theorem**
>
> Suppose that $\{f_n\}$ is a sequence of non negative measurable functions with $f_n(x) \leq f_{n+1}(x)$ almost everywhere $x$ for all $n$ and $f_n(x) \rightarrow f(x)$ as $n \rightarrow \infty$ almost everywhere on $x$, then $\underset{n \rightarrow \infty}{\lim} \int f_n = \int f$.

> **Dominated Convergence Theorem**
>
> Suppose that $\{f_n\}$ is a sequence of measurable functions such that $f_n(x) \rightarrow f(x)$ almost everywhere on $x$. If $\mid f_n(x) \mid \leq g(x)$, there $g$ is integrable, then $\underset{n \rightarrow \infty}\lim \int \mid f_n - f \mid =0$. Consequently, $\underset{ n \rightarrow \infty}{\lim} \int f_n = \int f$ (by $\mid \int (f_n - f) \mid \leq \int \mid f_n -f \mid$)



There is a interesting concept called as **Convolution**. 

> **Convolution** : The convolution operator is well-defined as $(f \ast g) (x)= \int_{\mathbb{R}^d} f(x-y)g(y) dy = \int_{\mathbb{R}^d}f(y)g(x-y) dy$

One of the most interesting fact or the Convolution is the function could be differentiated whenever one of the $f$ and $g$ could be differentiable.







## 3. Fubini Theorem.

The Fubini Theorem is one of the most important theorems in integral theory stating that the integrating functions in multidimensional Euclidean space  is same with integrating each dimension sequentially.

Before proving it, we have to define the slice of function as follow.

> Let $\mathbb{R}^d = \mathbb{R}^{d_1}\times \mathbb{R}^{d_2}$. Let $f$ be a measurable function on $\mathbb{R}^d$ and $E\subset \mathbb{R}^d$ be a measurable set.
>
> 1) The slice of $f$ corresponding to $y \in \mathbb{R}^{d_2}$ is a function $f^{y}$ of $x \in \mathbb{R}^d$ variable, given by $f^{y}(x) = f(x,y)$
> 
> 2) The slice of $E$ corresponding to $y \in \mathbb{R}^{d_2}$ is a set $E^{y}$ given by $E^{y} = \{x \in \mathbb{R}^{d_1} ; (x,y) \in E\}$



Then the Fubini Theorem states as follow.

> **Fubini Theorem**
>
> Suppose that $f(x,y)$ is integrable on $\mathbb{R}^{d_1} \times \mathbb{R}^{d_2}$, then for almost every $y \in \mathbb{R}^d$
>
> 1) The slice $f^y$ is integrable on $\mathbb{R}^d$
> 
> 2) The function defined by $\int_{\mathbb{R}^{d_1}} f^{y}(x) dx$ is integrable on $\mathbb{R}^d$
> 
> 3) $\int_{\mathbb{R}^d}(\int_{\mathbb{R}^d} f^{y} dx) dy = \int_{\mathbb{R}^d}(\int_{\mathbb{R}^d} f^{y}dy)dx = \int_{\mathbb{R}^d}f$

The proof of the Fubini Theorem takes long steps. Below one is a summary of the proof.

Let define $F$ as a set of function which satisfies above conditions. We'll show that $L^1 \subset F$

1. $F$ has linearity property. Let $f_j \in F, j=1,2...,N.$ $f = \underset{j=1}{\overset{N}{\sum}} \alpha_j f_j \in F$ for any constant $\alpha_j \in \mathbb{R}$.
2. $F$ has monoton convergence theorem i.e. $\{f_j\} \subset F$ be monotone and converges pointwise to $f$ (a.e.), for an integrable function $f$, then $f \in F$.
3. Let $E$ be a $G_{\delta} = \underset{j \in \mathbb{N}}{\bigcap} O_j$ set of finite measure, then $\chi_E \in F$
4. Let $E$ be a measurable set with $m(E)$, then $\chi_E \in F$
5. Let $E$ be any measurable set of finite measure, then $\chi_E \in F$
6. Let $f$ be integrable in $\mathbb{R}^d$, then $f \in F$ 



There is little bit different version of the Fubini Theorem.

>**Tonelli Theorem**
>
>Suppose $f(x,y)$ is a nonnegative measurable function on $\mathbb{R}^{d_1}\times \mathbb{R}^{d_2}$. Then almost every $y \in \mathbb{R}^d$,
>
>1) The slice $f^y$ is integrable on $\mathbb{R}^d$
>
>2) The function defined by $\int_{\mathbb{R}^{d_1}} f^{y}(x) dx$ is integrable on $\mathbb{R}^d$
>
>3) $\int_{\mathbb{R}^d}(\int_{\mathbb{R}^d} f^{y} dx) dy = \int_{\mathbb{R}^d}(\int_{\mathbb{R}^d} f^{y}dy)dx = \int_{\mathbb{R}^d}f$

Notice that the conclusion of both theorem is the same, but the conditions are little bit different. The Fubini theorem states that any integrable function could be decomposed with the integrations of two domains of the function and the Tonelli theorem states that any non-negative function could be decomposed with the integrations of two domains of the function



Now, we'll expand the conclusion into more general version. There are propositions about it.

> 1. Let $E = E_1 \times E_2 \subset \mathbb{R}^{d_1}\times \mathbb{R}^{d_2}$ be a measurable subset and $m_{\ast}(E_2) >0$, then $E_1$ is measurable.
> 2. If $E_j\subset \mathbb{R}^{d_j} , j =1,2$ are measurable, then $E_1 \times E_2$ is measurable and $m(E_1 \otimes E_2) = m(E_1)m(E_2)$ and therefore, if one of the measures of two sets is zero, then $m(E_1 \otimes E_2)=0$.
> 3. Suppose $f$ is measurable on $\mathbb{R}^d$, then the function $\hat{f}(x,y) = f(x)$ and $\tilde{f}(x,y) = f(x-y)$ is measurable on $\mathbb{R}^{d_1}\times \mathbb{R}^{d_2}$ too.

