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

## 1. Lebesgue Integral

 The Lebesgue integral is method of integration to define the integral for much more general function than Riemann's things. It uses the step function and measure to construct the integration theory. 



The text book define the Lebesgue integral starting with simple function and expanding it into more general version. So let's see the **Lebesgue integral of simple function**.



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