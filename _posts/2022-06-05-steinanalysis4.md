---
title: \[Real Analysis\] Ch4. Hilbert Space
categories: [Analysis]
tags: [Analysis,Mathematics]
excerpt: Hilbert Space  
sidebar:
  - title: "Analysis"
    image: /assets/img/Analysis.png
    image_alt: "image"
    nav: Analysis
author_profile: False
---



# Chapter 4. Hilbert Space

## 1. Space of Square Integrable Function

> **Square Integrable Function Space $L^2$**
>
> The space $L^2(\mathbb{R}^d)$ is a collection of all complex-valued measurable functions that are square integrable i.e. $\int \mid f(x) \mid^2 dx<\infty$
>
> The components of the space is defined as follows.
>
> **Inner  Product :** $\langle f, g\rangle_{L^2} = \int_{\mathbb{R}^d} f(x) \overline{g(x)} dx$
>
> **Norm :** $\parallel f \parallel_{L^2} = (\int_{\mathbb{R}^d} \mid f(x) \mid ^2 dx)^{1/2} = \langle f,f\rangle_{L^2}^{1/2}$
>
> **Metric :** $d(f,g)_{L^2} = (\int_{\mathbb{R}^d} \mid f(x)- g(x) \mid^2 dx )^{1/2} = \parallel f-g \parallel_{L^2}$



The $L^2$ space has following properties.

> **Properties of $L^2$ space**
>
> - $L^2$ space is a vector space
> - $f(x) \overline{g(x)}$ is integrable for $f,g \in L^2$
> -  The inner product has linearity i.e. $\langle af,bg\rangle =a\overline{b}\langle f,g \rangle$
> - The norm has triangle inequality i.e. $\parallel f+g \parallel \leq \parallel f\parallel + \parallel g \parallel$



For the Inner product and norm, there is a famous ineqaulity.

> **Cauchy-Schwartz Inequality**
>
> $\langle f , g \rangle \leq \parallel f \parallel \parallel g \parallel$



And there is a important proposition about the $L^2$ space.

> **Proposition**
>
> - The space $L^2$ is complete in its metric
> - The space $L^2$ is separable in the sense that there is a countable collection $\{f_k\} \subset L^2$ such that their linear combinations are dense in $L^2$.





The Hilbert Space is defined as follow.

> **Hilbert Space**
>
> A set $\mathcal{H}$ is **Hilbert space** if it satisfies the followings:
>
> 1. $\mathcal{H}$ is a vector space over $\mathbb{C}$ or $\mathbb{R}$
> 2. $\mathcal{H}$ is equipped with an inner product.
> 3. $\mathcal{H}$ is complete.
> 4. $\mathcal{H}$ is separable.

The more general definition is just complete vector space endowed with inner product. Some definition doesn't say about separability.



The theory of Hilbert space is all about constructing clear structure for the element with some raws. All of the raws in the Hilbert space is derived form the inner product. One of the most important concept with inner product is orthogonality.

> **Orthogonality**
>
> Two element $f,g \in H$ are said to be **orthogonal** or **perpendicular** if $(f,g)=0$ and denoted as $f \perp g$
>
> A family $\{f_i\} \subset H$ is said to be orthogonal if $(f_i,f_j)=0$ whenever $i\neq j$.
>
> A family $\{f_i\} \subset H$ is said to be normal if $(f_i,f_i)=1$ for all i.
>
> An orthonormal set $\{e_i\}$ is said to be orthonormal basis if the finite linear combinations of $\{e_i\}$ are dense in $H$.
>
> The Fourier Series is defined as $f = \sum_{i=1}^N \alpha_i e_i \in H$ where $(f,e_i) = \alpha_i$.
>
> Notice that $\parallel f \parallel = \sum_{i=1}^N \mid \alpha_i \mid^2$ by using the linearity and orthonormality.

 

  There are important theorem about orthonormal basis

> **Theorem**
>
> A set $\{e_j\}$ is an orthonormal basis iff
>
> 1) Finite linear combinations in $\{e_j\}$ are dense in $H$
> 2) If $f\in H$ and $\alpha_j = (f,e_j)=0,  \forall j,f=0$
> 3) If $f \in H$ and $S_N(f)=\sum_{j=1}^N \alpha_j e_j$, then $S_N(f) \rightarrow f$ as $N\rightarrow \infty$
> 4) (**Bessel's Inequality**) $\parallel f \parallel^2 \geq \sum_{j=1}^N \mid (f ,e_j) \mid^2$
> 5) (**Parseval's Indentity**) $\parallel f \parallel^2 = \sum_{j =1}^{\infty} \mid ( f, e_j )\mid^2$.



For the separable Hilbert Space, there is a connect called as unitary isomorphic.

> **Unitary Mappings**
>
> Let $H,H'$ be two Hilbert Spaces corresponding to inner products $(\cdot,\cdot)_{H},(\cdot, \cdot)_{H'}$.
>
> A mapping $U:H \rightarrow H'$ is called unitary if 
>
> 1. $U$ is linear i.e. $U(af+bg) = aU(f) +b U(g)$
> 2. $U$ is bijective i.e. if $f \neq g \in H$, then $Uf \neq Ug$
> 3. $U$ preserves norm i.e. $\parallel U (f) \parallel_{H'} = \parallel f \parallel_H$ for all $f \in H$



 Two Hilbert Space are said to be **Unitarily Isomorphic** if there is a unitary map between them.

> Any finite dimensional Hilbert Space is unitarily isomorphic to $\mathbb{R}^n$ or $\mathbb{C}^n$
>
> Any infinite dimensional Hilbert Space is unitarily isomorphic to $l^2 (\mathbb{Z})$.



> **Pre-Hilbert Space**
>
> A set $H_0$ is a pre-Hilbert space if it satisfies all conditions except completeness

Surely, the completion of the pre-Hilbert space is Hilbert Space.

> $H_0$ has $(\cdot,\cdot)_{0}$, then $\exists H$ with inner product $(\cdot,\cdot)$ such that 
>
> 1. $H_0 \subset H$
> 2. $(f,g) = (f,g)_0, \forall f,g \in H_0$
> 3. $H_0$ is dense in $H$ 



## 2. Fourier Series

The Fourier Series is known to be orthonormal basis for the $L^2$ space. Let's see the properties of it.

> **Fourier Series**
>
> For $f \in L^1[- \pi , \pi]$ and $n \in \mathbb{Z}$, the Fourier coefficient of $f$ is defined by $a_n = \frac{1}{2\pi} \int_{- \pi}^{\pi} f(x) e^{-inx} dx= (f,e^{inx})_{L^2}$
>
> The Fourier series of $f$ is defined as $f(x) = \sum_{n \in \mathbb{Z}} a_n e^{inx}$



> **Theorem** 
>
> Suppose that $f \in L^1[- \pi , \pi]$
>
> 1. If $a_n=0$ for all $n \in \mathbb{Z}$ , then $f=0$ almost everywhere.
> 2. $\sum_{n \in \mathbb{Z}} a_n r^{\mid n \mid} e^{inx} \rightarrow f$ for almost everywhere $x$ as $n \rightarrow 1^-$



> **Theorem**
>
> Let $f \in L^2[-\pi ,\pi ]$
>
> 1. **Parseval's Indentity** $\sum_{n \in \mathbb{Z}} \mid a_n \mid ^2 = \frac{1}{2\pi} \int_{-\pi}^{\pi} \mid f(x) \mid ^2 dx = \parallel f \parallel^2$
> 2. The mapping $f \rightarrow \{a_n\}$ is a unitarily isomorphic between $L^2[-\pi,\pi]$ and $l^2(\mathbb{Z})$
> 3. For $S_n(f)(x) = \sum_{n = -N}^N \alpha_n e^{inx}, \int_{-\pi}^{\pi} \mid S_n(f)(x) - f(x) \mid dx \rightarrow 0$



## 3. Subspace and Orthogonal Projection

There is a concept called by subspace which means that a proportion of the space to apply the properties in linear algebra theory.

It is defined as follow.

> **Subspace**
>
> A (linear) subspace $S$ of $H$ is a subset of H and vector space.



The orthogonality is also key concept in the subspace. There is a unique component in the subspace which is defined as follow.

> About the subspace $S$, there exists a unique element $g_0 \in S$ such that $\parallel f- g\parallel = \underset{g \in S}{\inf} \parallel f- g \parallel$ and $f- g_0 \perp S$ 



The orthogonality between space is defined as follows.

> **Orthogonal Complement**
>
> For a subspace $S \subset H$, $S^{\perp}$ is called as orthogonal complement of $S$ and is defined $S^{\perp} = \{f \in H , (f,g)=0,\forall g \in S \}$
>
> 1. $S^{\perp}$ is a subspace of $H$
> 2. $S \cap S^{\perp} = \{0\}$
> 3. $S^{\perp}$ is closed

The closed property could be proved using $0=(f_n,g) \rightarrow (f,g)=0$ i.e. $\lim f_n \in S^{\perp}$

 

The direct sum $\oplus$ of two subspace $A \oplus B$ is defined as $A \oplus B = \{x+y ; x \in A , y \in B\}$

Then notice that $H = S \oplus S^{\dagger}$.



About it, there is a orthogonal projection finding nearest vector in the subspace.

> **Orthogonal Projection**
>
> A mapping $P_S: H \rightarrow S$ is called orthogonal projection if 
>
> 1. $P_S$ is linear
> 2. $P_S(f)=f$ for all $f \in S$
> 3. $P_S(g)=0$ for all $g \in S^{\perp}$
> 4. $\parallel P_s(f) \parallel \leq \parallel f \parallel $

$\def\norm#1{\parallel #1 \parallel}$

## 4. The Linear Operator

The linear operator of Hilbert space is basic calculating tools in the Hilbert space. 

> **Definition**
>
> Let $H_1$ and $H_2$ be Hilbert Space
>
> 1. A mapping $T:H_1 \rightarrow H_2$ is a linear operator if $T(af+bg) = aT(f)+fT(g)$ for all $f,g \in H$ and $a,b \in \mathbb{R}$ or $\mathbb{C}$
> 2. A linear operator $T$ is bounded if there is $M>0$ such that $\norm{T(f)} \leq M \norm{f}$ for all $f \in H$
> 3. The norm of a bounded linear operator $T$ denoted by $\norm{T}$ is defined by $\norm{T} : = \inf \{M; \norm{T(f)} \leq M \norm{f} \mbox{ for all } f \in H\}$



There are important properties about the operator

> **Theorem**
>
> $\norm{T} = \sup \{(Tf,g) ; \norm{f} , \norm{g} \leq 1\}$

If could be proved using Cauchy-Schwartz inequality and set $g = \frac{T(f)}{\parallel T(f) \parallel}$



> **Theorem**
>
> A linear operator $T$ is bounded if and only if $T$ is continuous

It could be proved using Lipsitz continuous and contradiction.



There is a one of the most important theorem in the Hilbert Space

> **Riesz's Representation Theorem**
>
> Let $l$ be a continuous linear functional on $H$, then there exists a unique element $f_0 \in H$ such that $l(f) = (f,f_0)$ for all $f \in H$.

***

pf)

Define $S = \{f \in H ; l(f)=0\} \subset H$

Note that $S$ is cloed set. 

Let's take $h \in S^{\perp}$ with $\norm{h} =1$

Define $f_0 = \overline{l(h)}h$ and pick $f \in S$, then $l(f)h-l(h)f \in S$ because $l(f) =0$.

Then we can see following relation

$(l(f)h-l(h)f, h) =0 \Rightarrow l(f) = l(h)(f,h) = (f,\overline{l(h)}h) = (f,f_0)$

***



Every bounded operator has dual operator called as adjoint operator.

> **Adjoint Operator**
>
> Let $T: H \rightarrow H$ be a bounded linear operator, then there exists a unique bounded linear operator $T^{\ast}$ called by adjoint operator.
>
> 1. $(T(f),g)=(f,T^{\ast}(g))$ for all $f,g \in H$
> 2. $\norm{T} = \norm{T^{\ast}}$
> 3. $(T^{\ast})^{\ast} = T$



If $T = T^{\ast}$, then it is called as a **Hermitian Operator**. If it is real, then it is called as a **Symmetric Operator**

Also, $(TS)^{\ast}=S^{\ast}T^{\ast}$ by $(TSf,g) = (Sf,T^{\ast}g) = (f,S^{\ast}T^{\ast}g)$

There is a useful equation called as **polarization identity**.

$(T(f),g) = \frac{1}{4}((T(f+g),f+g)-(T(f-g),f-g)+i(T(f+ig),f+ig)-i(T(f-ig),f-ig))$



Each operator is actually connected with the element directly. There is a essential component called as eigenvalue and eigenvector for operator.

> **Diagonalized**
>
> Suppose $\{\phi_k\}$ is an orthogonal basis of $H$, a bounded linear operator $T: H \rightarrow H$ is said to be diagonalized with respect to the basis if $T(\phi_j) =\lambda_k \phi_k$ where $\lambda_k \in \mathbb{C}$ for all k.
>
> The basis $\phi_k$ is called as eigen vector and $\lambda_k$ is called as eigenvalue.

For the eigenvalues, there are important properties

>Let $T : \mathcal{H} \rightarrow \mathcal{H}$ be a diagonalized bounded linear operator
>
>1. $\norm{T} = \sup \mid \lambda_k \mid$
>2. $T^{\ast}$ corresponds to $\{\overline{\lambda_k}\}$
>3. $T$ is Hermitian if and only if $\lambda_k$ is real for all $k$.
>4. $T$ is unitary if and only if $\mid \lambda_k \mid =1$ for all $k$.
>5. $T$ is orthogonal projection if and only if $\lambda_k$ is either 1 or 0 for all $k$.



> **Integral Operator**
>
> A linear function $T:L^2 \rightarrow L^2$ is called an integral operator if it can be defined by 
>
> $T(f)(x) = \int_{\mathbb{R}^d}k(x,y)f(y)dy$ for some $k$ on $\mathbb{R}^d \otimes \mathbb{R}^d$

> **Hilbert Shmidt Operator**
>
> If $T$ is integral operator whose kernel $k$ is in $L^2(\mathbb{R}^d \otimes \mathbb{R}^d)$
>
> This is equivalent with the Hilbert Schmidt norm is finite i.e. $\norm{T}_{HS}^2 := \sum \norm{T(e_k)}^2 <\infty$



The Hilbert Schmidt Operator has following properties.

> Let $T$ be a Hilbert Schmidt operator on $L^2 (\mathbb{R}^d)$ with kernel $k(x,y)$
>
> 1. If $f \in L^2$, then the function $y \rightarrow k(x,y)f(y)$ is integrable for almost every on $x$.
> 2. If $T$ is bounded , then $\norm{T} \leq \norm{k}_{L^2} = \norm{T}_{HS}$
> 3. The adjoint $T^{\ast}$ has the kernel $\overline{k(y,x)}$





##  5. The Compact Operator

> **Compact Operator**
>
> Let $H$ be an infinite dimensional Hilbert space. A linear operator $T:H \rightarrow H$ is said to be compact if $cl(T(B)) = cl(\{T(f) ; f \in B\})$ is compact.

Notice that the space $cl(T(B))$ is a function set. Therefore we cannot say the compactness of the set by closedness and boundedness using Heine-Borel Theorem. To check the compactness, we have to use the definition of the compactness i.e. $E$ is compact if for all open covering $E \subset \bigcup_j O_j$ have finite subcovering $E \subset \bigcup_{i=1}^N O_{j_i}$. Or, we can use the sequential compactness that $E$ is compact if for all sequence $\{f_n\} \subset E$, there is a subsequence converging into $E$ i.e. $\exists \{f_{n_j}\} \subset \{f_n\}$ such that $f_{n_j} \rightarrow f \in E$.

There are useful properties of the Compact Operator.

> **Proposition**
>
> 1. $T$ is compact if $cl(T(B))$ is sequential compact
> 2. A compact operator is bounded
> 3. If $T$ is of finite rank, it is compact
>
> Let $T$ be a bounded linear operator on $H$, then
>
> 4. If $S$ is compact on $H$, then $TS$ and $ST$ are also compact.
> 5. If $\{T_k\}$ is a family of compact linear operator with $\norm{T_k - T}\rightarrow 0$, then $T$ is compact.
> 6. If $T$ is compact, then there is a sequence $\{T_k\}$ of linear operators of finite rank such that $\norm{T_k-T} \rightarrow 0$.
> 7. $T$ is compact if and only if $T^{\ast}$ is compact.
> 8. Assume $T$ is diagonalizable. Then if $\mid \lambda_k \mid \rightarrow 0$, then $T$ is compact.
> 9. Every Hilbert-Schmidt Operator is  compact.



Finally, there is another important theorem used a lot.

> **Spectral Theorem**
>
> Suppose $T$ is a compact symmetric operator on $H$. Then there is an orthogonal basis $\{\phi_k\}$ for $\{H\}$ that consists of eigenvector of $T$. Moreover, if $T(\phi_k) = \lambda_k \phi_k$, then $\lambda_k \rightarrow 0$ as $k \rightarrow \infty$.

