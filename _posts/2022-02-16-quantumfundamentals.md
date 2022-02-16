---
title: \[Fundamentals\] Introduction to Function Space
categories: [Quantum]
tags: [Quantum Computer]
excerpt: Exploring function space with Hilbert Space Framwork
---

$\def\ket#1{\mid #1 \rangle}\def\bra#1{\langle #1 \mid}$



 This posting is made for the lecture at the group study of quantum data science. Therefore, the posting only concerns the concepts and structures and do not handle detail proof or parts irrelevant with data science.  

# Introduction to Functional Space

## 1. Hilbert Space

 The functional is defined as a function whose range is in $\mathbb{R}$. Therefore, the functional space means the space whose elements are functions with codomain of real values space. 

 However, it is difficult to imagine how each entry of the functional space consists of unlike the vector space. To be specific, we can easily imagine any element of the vector space by expanding simple elements such as (1,1,2) from (1,1,1) but cannot do such things at functional space. 

Therefore, it is easier to understand the function space based on structural theory called Hilbert space.



 Hilbert space means the complete space endowed with inner product. The elements of the Hilbert space could be any vector including real, complex and function. 

 Completeness is defined with very complicated concepts but we can consider the completeness that there is no hole at the space. The more important concepts for data science is inner product. 

 Inner product could be understand as measurement tool or structural function for space. It is defined as follow. $$\def\inner#1#2{\left<#1,#2\right>}$$



> **Inner product**
>
> For the vector space $$V$$, a scalar field $$F$$ ,  $$a,b \in F$$ and $$x,y \in V$$ , the function $$\inner{\cdot}{\cdot} : V \times V \rightarrow F$$  is an inner product if and only if it has following properties.
>
> - Conjugate Symmetry : $$\inner{x}{y} = \overline{\inner{x}{y}}$$ 
> - Linearity : $$\inner{ax+by}{z} = a\inner{x}{z}+b\inner{y}{z}$$
> - Positive-definiteness : $$\inner{x}{x} > 0$$ for all $$x \in V$$ except $$x=0$$



 The inner product itself is defined using axiom which is called as axiomatic definition. They are ambiguous for beginners too but we can understand them as concepts to express the relation between two elements. It could be developed to express angle between two elements. 

 Defining or endowing the inner product on some spaces means we will apply the inner product to some spaces and calculate the relation between two element using the inner products. We can write them as $$(H,\inner{\cdot}{\cdot})$$ where $$H$$ means target vector space.  



 If we define the inner product on some space, the norm could be defined automatically. The definition of the norm is as follow. 



> **Norm**
>
>  For the vector space $$V$$, a scalar field $$F$$ ,  $$a,b \in F$$ and $$x,y \in V$$, the function $\parallel \cdot \parallel : V \rightarrow \mathbb{R}$ is a norm if and only if it has following properties. 
>
> - Triangle Inequality : $\parallel x+y \parallel \leq \parallel x \parallel+\parallel y \parallel$
> - Absolute Homogeneity : $\parallel ax\parallel  = \mid a \mid \parallel x \parallel$
> - Positive Definiteness : $$ \parallel x \parallel =0 $$ if and only if $$x=0$$



 The purpose of defining the norm is to calculate the magnitude or size of the element of the space. Moreover, every inner product could induce the norm as $$\parallel x \parallel = \sqrt{ \inner{x}{x}}$$



Finally, there is more specific structural function called as metric. The metric is defined to calculate the distance between two elements. 



> **Metric**
>
> For the vector space $$V$$, a scalar field $$F$$ ,  $$a,b \in F$$ and $$x,y \in V$$ , the function $$d(\cdot,\cdot) : V \times V \rightarrow F$$  is a metric if and only if it has following properties.
>
> - Identity : $$d(x,y) =0$$ if and only if $$x=y$$
> - Symmetry : $$d(x,y)=d(y,x)$$
> - Triangle inequality : $$d(x,z) \leq d(x,y) + d(y,z)$$
> - Non negativity : $$d(x,y) \geq 0 $$

 Like inner product, the norm can induce the metric as $$d(x,y) = \parallel x-y \parallel $$



 The complete Inner product space is called Hilbert space and the complete normed space is called Banach space. The complete metric space is called Baire space. We can set following relation between three functions. 

<img src="C:\Users\mhg95\Desktop\temporary posting\assets\img\post\2022-02-16\figure1.png" alt="figure1" style="zoom: 33%;" />

Notice that some norms could be defined without inner product. 

If some space is Hilbert space, then we can apply a lot of theories of Hilbert space onto the space including basis and operator. 



## 2. L-P Space

 There is a lot of functional space. For example, $$C(M,N)$$ is a space of continuous functions mapping elements of M to N. 

The most important functional space of the data science is Lp space. Lp space is a space of p-th power integrable functions. Let's figure out why the Lp space is important space. 



 First of all, the word integrable means there exists a values of Lebesgue integration, not the Riemann integration. Therefore, Lp space means **L**ebesgue **p**-th power integrable function **space**. There are posting about Lebesgue Integration in Korean at https://hgmin1159.github.io/others/RealAnalysis11/. Please check it.

 Simply speaking, the Lebesgue Integration is made to set the definition of the integration as perfect as possible. Riemann Integration can not cover every function. For example, the Riemann integration is not defined at a function mapping every rational number into one and every irrational number into zero. However, the Lebesgue integration could be defined at such function too. 

 This means that we can handle more integrable functions by using the definition of the Lebesgue Integration than Riemann Integration.



 The Lp space is defined as follow.



>  **Lp Space**
>
> A space with measurable functions whose integration values of p-th power of the function is finite. That is, $$\{f:A \rightarrow \mathbb{R} ; \int_A \mid f \mid^p d \mu  < \infty \}$$

 The reason why the Lp space is defined as above is that the inner product between functions could be defined like above. The Lp norm of the function is defined as follow. 



> **Lp Norm**
>
> $$\parallel f \parallel_p  = (\int _A \mid f \mid ^p d \mu )^{1/p}$$

It satisfies every axioms of norm. Moreover, by using the above norm, we can define the metric between two functions. 

> **Lp Distance**
>
> $$d(f,g) = (\int_A \mid f-g \mid ^p d\mu )^{1/p}$$

 Because the definition of the norm is same with the Lp space, we can easily imagine that every Lp space is normed space. And because the Lp space is complete, we can conclude that Lp space is Banach space endowed with Lp norm. The graphical depiction of the Lp norm would help understanding the concepts. 

<img src="C:\Users\mhg95\AppData\Roaming\Typora\typora-user-images\image-20220216172547204.png" alt="image-20220216172547204" style="zoom: 67%;" />



If the p goes to infinity, then it is transformed as $$\parallel f \parallel_{\infty} = \underset{x\in A}{\max} f(x) $$. 



Among the Lp space, two kinds of the space are considered as most important. The first one is L1 space because it covers the function as it is. The second one is L2 space. It is because, L2 norm could be induced with special inner product as below. 



> **L2 inner product**
>
> $$\inner{f}{g} = \int_A f \overline{g} \ d\mu$$

 Because $x \overline{x} = \mid x \mid ^2$, we can develop following relation $$\inner{f}{f} = \int_A f \overline{f} d\mu = \int_{A} \mid f \mid ^2 d \mu = \parallel f \parallel_2$$. 

 Therefore, unlike other Lp space, L2 space could be endowed with inner product and it is Hilbert space too. 





## 3. Basis Representation

  A Hilbert space is separable if and only if any elements of the space could be represented using orthonormal sequence. This means that every elements in the separable Hilbert space could be represented as follow.



>  The Hilbert space $$H$$ is separable if and only if for any element $$f \in H$$, there is an orthonormal sequence $$\{f_i\} , i=1,2,...,n$$, such that $$f = \sum_{i=1}^{n}\inner{f}{f_i} f_i$$.

 If the n is finite, it is said that the dimension of the Hilbert space is finite and if the n is infinite, it is said that the dimension of the Hilbert space is infinite. Ordinary functional Hilbert space is infinite dimensional. The sequence $\{f_i\}$ is called as basis of the Hilbert space. 



 It is proved that every finite dimensional Hilbert space is separable and $$L^2([- \pi ,\pi])$$ is separable too. Therefore, if we only play at the L2 space, then we can confidently use the basis theory.



 Moreover, we can understand that the function $$f_n = \sum_{i=1}^n \inner{f}{f_i} f_i$$ converges to any function $$f \in L^2$$ as $$n$$ goes to infinity. This means that if we use large enough n, then we can approximate target function $$f$$ somehow with finite numbers of basis. Therefore, we can express any function of the Hilbert space with coordinate as usual real vector space. 



> **Coordinate Representation**
>
> For any function $$f \in H$$ with finite spanning system $$\{f_i\},i=1,2,...,n$$, there is a coordinate representation $[f] = (\alpha_1, \alpha_2 ,... , \alpha_n), \alpha_i = \inner{f}{f_i}$ such that $$f \approx \sum_{i=1}^{n} \alpha_i f_i$$.



 There is a famous theorem called as Riesz representation theorem. There are two Riesz representation theorem. The first one is about Lebesgue Measure which is resulted to Riemann Integration and the second one is about Hilbert space theory which would be handled at this posting. 

> **Riesz Representation Theorem**
>
> For a linear functional A on the Hilbert Space H, there is a unique element $$\alpha$$ in the H such that $$A(f) = \inner{f}{\alpha}$$ for any $$f \in H$$

It means that any linear functional is eventually connected with inner product. This beautiful theorem could be used at various fields.



To develop the coordinate representation theorem, we have to use the more specific structural theory : Reproducing Kernel Hilbert Space. 



## 4. Reproducing Kernel Hilbert Space

