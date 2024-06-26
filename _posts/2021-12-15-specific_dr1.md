---
title: \[Paper Review\] Sufficient Dimension Folding for Tensorial Data
categories: [Dimension]
tags: [차원 축소,Dimension reduction]
excerpt: Sufficient Dimension Folding Theory and Techniques to reduce the dimension of tensorial data.
sidebar:
  - title: "Dimensionality Reduction"
    image: /assets/img/dimension.png
    image_alt: "image"
    nav: Dimension
author_profile: False
---

# [Sufficient Dimension Folding] Part 1. Sufficient Dimension Folding for Regression Mean Function

## 0. Sufficient Dimension Folding

The sufficient dimension reduction is a really good method to capture sufficient predictor space for the target. However, it only concerns the 1d-vectorized predictor. When we want to use the methods onto a 2d matrix, we usually vectorize our matrix. That is, we abandon the structure and return the result as a 1d array. For example, when we analyze pixel data, we flatten the pixel matrix into vectors, apply dimension reduction methods and get a data matrix. 

The sufficient dimension folding (SDF) aims to capture such structural information. They can be applied to raw matrices directly and can exploit essential information of the data. Unlike the sufficient dimension reduction method which shrinks the original $p \times 1$ vector into the $r \times 1$ vector, sufficient dimension folding shrinks the original $p \times q$ matrix into the $r \times d$ matrix. Also, because each predictor is not a vector, the data matrix has a shape of 3d-array.

![](\assets\img\post\2021-12-15\figure1.png)

There are several methods of SDF such as folded SIR, folded SAVE, folded DR. Such structure can also be used at conditional mean folding subspace such as folded OPG and folded MAVE. 

Let's see the fundamentals of sufficient dimension folding.

## 1. Central Folding Subspace

Before seeing the detailed structure, let $S(M)$ denote a column space of a matrix M and let $P_M = M(M^tM)^{-1}M$ denote the orthogonal projection matrix onto $S(M)$.

We will consider target random variable $Y (1 \times 1)$ and feature random matrix $X(p \times q)$. $\{y_i ,\textbf{x}_i\},i=1,2,...,n$ are iid random samples from $(Y,X)$

For them, we will consider the following structure.
$$
Y \perp X \mid A^t X B \\\ \mbox{where } A \in \mathbb{R}^{p \times d} \mbox{ and } B \in \mathbb{R}^{q \times r}
$$
Notice that A matrix abstract the raw feature of X and B matrix abstract the column feature of X. Each $S(A)$ and $S(B)$ is called a left dimension folding subspace for $Y \mid X$ and a right dimension folding subspace for $Y \mid X$ respectively. As we did in the SDR subspace, we will define $S_{Y \mid \circ X}$ and $S_{Y \mid X \circ}$ as the intersection of all left and right dimension folding subspaces for $Y \mid X$. The subspace $S_{Y \mid X \circ } \otimes S_{Y \mid \circ X} =:S_{Y \mid \circ X \circ}$ is defined as the **Central Dimension Folding Subspace** which is our main target. 



 If we use the $vec(\cdot)$ notation which is isomorphism between matrix space, then we can rewrite the above expression as follow
$$
Y \perp X \mid A^tXB \\\
\Leftrightarrow Y \perp vec(X) \mid vec(A^tXB)\\\
\Leftrightarrow Y \perp vec(X) \mid (B \otimes A)^t vec(X)
$$
Therefore, we can see the relation between $S_{Y \mid vec(X)}$ and $S_{Y \mid \circ X \circ}$.

However, because the exact relation is $S_{Y \mid vec(X) }\subset S_{Y \circ X \circ}$, the original paper claimed that $S_{Y \mid vec(X) }$ can reduce the information more but if we want to preserve the data structure, then $S_{\circ X \circ}$ is better method. 

Moreover, the original paper also claimed the concept of Kronecker Envelope which is defined as follows. 


> $\mbox{For a random matrix }U \in \mathbb{R}^{(d_R d_L) \times k}, \mbox{ the smallest Kronecker product }S_{U \circ} \otimes S_{\circ U} \mbox{ satisfying } \\\ S(U) \subset S_{U \circ} \otimes S_{\circ U} \mbox{ almost surely} \mbox{ is Kronecker Envelopes and written as }\epsilon^{\otimes}(U)$


Based on the theory, we can develop various SDR methods.



## 2. Method to find Kronecker Envelopes

We can develop folded versions of SIR,SAVE and DR by using the Kronecker envelopes. Because $\beta := (B\otimes A)^t$ could work as ordinary sufficient dimension reduction estimator, we can find dimension folding estimator by finding $S(\beta) \in S_{Y \mid vec(X)}$ and its envelopes $\beta_1$ and $\beta_2$ satisfying $\beta = \beta_1 \otimes \beta_2$.

We will use following setting 

>$U: P_RP_L \times k$ random matrix
>
>$\alpha_0,\beta_0:$ Basis matrices of $S_{\circ U},S_{U\circ}$
>
>$m_L,m_R:$ Dimensions of $S_{\circ U},S_{U\circ}$
>
>$L_2^{k_1 \times k_2}(\Omega_W) =\{f:\Omega_W \rightarrow \mathbb{R}^{k_1\times k_2} \mid E \parallel f(W) \parallel^2 < \infty\}$



First of all, we need the following theorem. (Proof is in Ref.2)

> **Theorem 1**
>
> Suppose that variances of each entry of random matrix U is finite and measurable with respect to a random vector W and that A is a nonrandom and nonsingular matrix.
>
> For global minima $(a^{\ast},b^{\ast},f^{\ast})$ for  $E \parallel AU - A(b \otimes a)f(W) \parallel^2$, 
> $$
> span(b^{\ast} \otimes a^{\ast}) = \epsilon^{\otimes}(U)
> $$

***

Proof)

Since $span(\beta_0 \otimes \alpha_0 ) =\epsilon^{\otimes}(U)$ and the elements of U are measurable with respect to W, there is a random matrix $\phi(W) \in L_2^{m_Lm_R \times k}(\Omega_W)$ such that $U = (\beta_0 \otimes \alpha_0 ) \phi(W),$ which is equivalent to $AU = A(\beta_0 \otimes \alpha_0) \phi(W)$.

Therefore, the minimizer $(\alpha^{\ast},\beta^{\ast},f^{\ast})$ have to satisfy $AU = A(\beta^{\ast} \otimes \alpha^{\ast}) f(W)$ almost surely.

***



Therefore, by using the above theorem, we can develop the following several folded SDR algorithms. Remark that each multiplication AU is kernel matrix of SDR.

> Folded SIR
>
> - $A = \Sigma^{1/2}$
> - $W = Y$
> - $U = \Sigma^{-1}E(vec(X) \mid Y)$
>
> Folded SAVE
>
> - $A = \Sigma^{1/2}$
> - $W = Y$
> - $U = \Sigma^{-1}[\Sigma - var(vec(X) \mid Y)]\Sigma^{-1/2}$
>
> Folded DR
>
> - $A = \Sigma^{1/2}$
> - $W = (Y,\tilde{Y})$
> - $U = \Sigma^{-1}[2\Sigma - E[\left(vec(X)-var(\tilde X)\right)\left(vec(X)-var(\tilde X)\right)^t  \mid Y,\tilde Y)]\Sigma^{-1/2}$

The original paper proved that if the SDR $\beta$ is exhaustive, then the envelope of it is also exhaustive.



## 3. Estimation

However, the above structure is not that easy to optimize. There is an unusual operator $\otimes$ and a matrix valued function $f$. Moreover, the number of parameters is usually over a thousand. But the original paper separated the algorithm into three simple least squares parts. 

First of all, we need the notion of a commutation matrix which makes $K_{r_1,r_2}vec(A) = vec(A^t)$ for $A(r_1 \times r_2)$. If we use them, then we can get other properties that $A\otimes B = K_{r_1,r_3}(B \otimes A) K_{r_4 r_2}$ and $K_{r,1} = K_{1,r} = I_r $ for any integer $r$.

> **Lemma**
>
> For matrices $A(r_1 \times r_2)$ and $B(r_3 \times r_4)$, $vec(A \otimes B) = \Pi [vec (A) \otimes vec(B)]$ where $\Pi = I_{r2} \otimes [(I_{r_4} \otimes K_{r_1,r_3})K_{r_3r_4,r_1}].$

> **Theorem 2**
>
> 1. For fixed $f \in L_2^{m_Rm_L \times k}(\Omega_W), \alpha\in \mathbb{R}^{p_L \times m_l},$ the minimizer of objective function of theorem 1 over $\beta \in \mathbb{R}^{p_R \times m_R}$ is $\beta =[E(V_2^t V_2)]^{-1}E(V_2^t V_1)$ , where $V_1 =vec(AU), V_2 = (f^t \otimes A) \Pi [vec(\alpha) \otimes I_{p_R m_R}]$
> 2. For fixed $f \in L_2^{m_Rm_L \times k}(\Omega_W),\beta \in \mathbb{R}^{p_R \times m_R},$ the minimizer of objective function of theorem 1 over $\alpha\in \mathbb{R}^{p_L \times m_l}$ is $\beta =[E(V_2^t V_2)]^{-1}E(V_2^t V_1)$ , where $V_1 =vec(AU), V_2 = (f^t \otimes A) \Pi [I_{p_Lm_L} \otimes vec(b)]$
> 3. For fixed $\alpha\in \mathbb{R}^{p_L \times m_l},\beta \in \mathbb{R}^{p_R \times m_R},$ the minimizer of objective function of theorem 1 over $f \in L_2^{m_Rm_L \times k}(\Omega_W)$ is $f(w) =V_2^t V_2^{-1}[V_2^t V_1(w)]$ , where $V_1(w) =vec(AU(w)), V_2 = I_{p_Rp_L} \otimes [A(\beta \otimes \alpha)]$

The proof is in Ref.2.

Therefore, by using the above method, we can find optima efficiently.



We have seen the concepts of sufficient dimension folding. In the next post, I'll focus on the folding version of the central mean subspace; Folded OPG and Folded MAVE.




***

**Reference **

**- Ref.1 - Yuan Xue(2012),[Sufficient Dimension Folding Theory and Methods](https://getd.libs.uga.edu/pdfs/xue_yuan_201212_phd.pdf)**

**- Ref.2 - BING LI, MIN KYUNG KIM AND NAOMI ALTMAN(2010) [ON DIMENSION FOLDING OF MATRIX- OR ARRAY-VALUED STATISTICAL OBJECTS](https://projecteuclid.org/journals/annals-of-statistics/volume-38/issue-2/On-dimension-folding-of-matrix--or-array-valued-statistical/10.1214/09-AOS737.full)**


