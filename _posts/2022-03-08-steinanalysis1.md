---
title: \[Real Analysis\] Ch1. Measure Theory
categories: [Analysis]
tags: [Analysis,Mathematics]
excerpt: Measure Theory  
sidebar:
  - title: "Analysis"
    image: /assets/img/Analysis.png
    image_alt: "image"
    nav: Analysis
author_profile: False
---



 These post series are based on "Elias Stein & Rami Shakarchi (2007) Real Analysis - Measure Theory, Integration, Hilbert Spaces"



## 1. Preliminaries

Before we approach the theory of the measure, we'll gonna summarize the basic concepts of the topology. Because the real analysis covers the real space only, so we can see most of the complicated generalized notions in much more simpler form by restricting them into Euclidean space. 

$$\def\inner#1{\left<#1\right>}$$

**Components of the Real space**

 A real space $$\mathbb{R}^d$$ could be defined as a space of d-tuples of real numbers. Therefore, any element i.e. point of the space could be represented as d size tuple $$(x_1,x_2,...,x_d),x_i \in \mathbb{R} \mbox{ for } i =1,2,...,d$$. 

 Usually, we are interesting at checking the size of each element. The basic method to do it in mathematics is by special functions named as **norm**. Norm is defined as a function which maps elements of some space into scalar field $$\mathbb{R}$$ or $$\mathbb{C}$$. There is an axioms that norm have to satisfy, but in this book, we'll see only the standard norm $$\parallel x \parallel_2 := \left(\sum_{i=1}^d x_i^2 \right)^{1/2}$$

 We can summarize the standard components of real space $$\mathbb{R}^d$$ as below. 

> For points $$x,y \in \mathbb{R}^d$$,
>
> **Element :**  $$x= (x_1,x_2,...,x_d) , x_i \in \mathbb{R} \mbox{ for } i=1,2,...,d$$
>
> **Inner Product :** $$\inner{x,y} := \sum_{i=1}^d x_iy_i$$
>
> **Norm :** $$\parallel x \parallel := \left( \sum_{i=1}^d x_i^2 \right)^{1/2}$$
>
> **Metric :** $$d(x,y) := \left( \sum_{i=1}^d (x_i-y_i)^2\right)^{1/2}$$
>
> There is a relation between components that $$\inner{x,x} = \parallel x\parallel^2 , d(x,y) = \parallel x-y\parallel$$



**Sets**

To handle the analytic property and theorem of the Real Analysis, the theory of Set is fundamental one. Most of them is come from Topology. Basic operator of set is summarized below. 

> **Union :** $$A \cup B = \{z ; z\in A \mbox{ or }z \in B\}$$
>
> ​              $$\bigcup_{i=1}^d A_i = \{z ; z \in A_1 \mbox{ or } A_2 \mbox{ or } ... \mbox{ or } A_d\}$$
>
> **Intersection :** $$A \cap B = \{z ; z\in A \mbox{ and } z \in B\}$$
>
> ​                          $$\bigcap_{i=1}^d A_i = \{z ; z \in A_1 \mbox{ and } A_2 \mbox{ and } ... \mbox{ and } A_d\}$$
>
> **Complement :** $$A-B =\{z ; z \in A \mbox{ and }z \notin B\}$$. 
>
> **Metric of sets :** $$d(A,B) = \inf_{x \in A, y \in B} d(x,y)$$
>
> If A is considered as mother set such as $$\mathbb{R}^d$$, then it could be omitted and denoted as $$B^c$$



Most important concepts of the set in analysis is topological properties of the set. Because most of the concepts want to talk about extreme situation, they are defined using epsilon which is very small positive scalar closed to zero but not the zero itself.  

> **Open Ball :** An open ball is defined as a set $$B_{r} (x) = \{y ; \parallel  x-y \parallel < r \}$$
>
> **Open Set  :** A set E is open if $$\forall x \in E, \forall \epsilon >0, B_{\epsilon}(x) \subset E $$. 
>
> **Closed Set :** A set F is closed if a complement $$F^c$$ is open set. 
>
> Because the complement is relative concepts by its mother set, the closeness is also relative concepts. 
>
> **Bounded Set :** A set E is bounded if $$\exists x , \exists r < \infty ,E \subset  B_{r}(x)  $$
>
> **Compact Set :** A set in Euclidean space is compacted if it is bounded and closed. 

We can consider the open set as a set whose every element is surrounded by the set or there is no point in contact with the outside directly.

The last statement is not definition. It is Heine-Borel Theorem which only holds at Euclidean space.  The more exact definition of the compact set is a set is compact if any open cover which covers the set have finite subcover which covers the set. But at least in Euclidean space, we can consider the above theorem as the definition of the compact set. 



There is important theorem of them.

> $$\bigcup_{i } E_i $$ is open if every $$E_i $$ is open
>
> $$\bigcap_{i=1}^n E_i $$ is open if $$E_i$$ is open
>
> $$\bigcap_{i} E_i $$ is closed if every $$E_i$$ is closed 
>
> $$\bigcup_{i=1}^n E_i$$ is closed if $$E_i$$ is closed 

 Beware that the infinite (could be uncountable) union of the open set is open set but infinite intersection of open set might not be open. Simple counterexample is $$E_i = \{x ;  x < 1/i \}$$. For a fixed i, we can find any open ball surrounding a point x < 1/i. As $$i \rightarrow \infty $$, $$E_i \rightarrow \{x ; x\leq 0\}$$ whose point zero is not surrounded by open ball. 

 Closeness theorems could be proved using raw of De-Morgan which states $$(\bigcup_i A_i)^c = \bigcap_i A_i^c $$ at open cases. 

 

There is additional concepts about boundary of the set. 

> **Limit Point :** A point $$x$$ is a limit point of the set E if $$ \forall r >0$$, $$(B_r(x)-\{x\}) \cap E \neq \phi$$.
>
> **Isolated Point :** A point $$x \in E$$ is an isolated point of the set E if $$\forall r >0, B_{r}(x) \cap E = \{x\}$$.
>
> **Interior Point :** A point $$x \in E$$ is an interior point of the set E if $$\exists r >0 \mbox{ such that }B_r (x) \subset E$$.
>
> **Interior :** An interior $$Int(E)$$ of a set $$E$$ is a set of all interior points of $$E$$. 
>
> **Closure :** A closure $$Cl(E) = \overline{E}$$ of a set E is the union of E and its all limit points. 
>
> **Boundary :** A boundary $$\partial E $$ of a set E is $$Cl(E) - Int(E) \mbox{ i.e. } \{z ; z \in Cl(E) , z \notin Int(E)\}$$
>
> **Perfect :** A closed set E is perfect if E does not have isolated points

 



**Rectangles**

 In measure theory, the rectangles is one of the important concepts in that the volume of it could be easily evaluated using the usual formula and sense and almost every region could be approximated using the rectangles. The basic concepts about rectangles in Euclidean space is defined as below. 

> **Rectangles :** A closed rectangle R in $$\mathbb{R}^d$$ is defined as $$R = [a_1,b_1] \otimes [a_2,b_2] \otimes ... \otimes [a_d,b_d]$$ or $$R = \{(x_1,x_2,...,x_d) \in \mathbb{R}^d ; a_j \leq x_j \leq b_j,  \forall j \in \{1,2,...d\}\}$$
>
> **Volume :** A volume of rectangle R is defined as $$\prod _{j=1}^d (b_j-a_j)$$ and denoted as $$\mid R \mid $$.
>
> **Cube :** If every length $$(b_j-a_j)$$ of rectangle is equal for all j, then the rectangle is called as cube.
>
> **Almost disjoint :** If a union of rectangles is said to be almost disjoint if intersect of their interiors is null set i.e. $$\bigcap_i Int(R_i) = \phi$$ . 



 With above definition, we can connect the rectangles into more general subset. 

> **Lemma 1.** If a rectangle is the almost disjoint union of finitely many rectangles i.e. $$R = \bigcup_{k=1}^N R_k$$ ,then the volume of the rectangle is calculated as $$\mid R \mid = \sum_{k=1}^N \mid R_k \mid$$
>
> **Lemma 2.** If $$R , R_1,...R_k$$ are rectangles and $$R \subset \bigcup_{k=1}^N R_k ,$$ then $$\mid R \mid \leq \sum_{k=1}^N \mid R_k \mid$$
>
> **Theorem 3.** Every open subset $$O$$ of $$\mathbb{R}$$ can be written uniquely as a countable union of disjoint open intervals. 
>
> **Theorem 4.** Every open subset $$O$$ of $$\mathbb{R}^d$$, can be written as a countable union of almost disjoint closed cubes. 

First lemma could be understood without other explanation. Lemma 2 is modified version of lemma 1. 



First two theorems are little bit tricky but important. They states that any open subset could be decomposed with simple cubes. With them, we can easily measure the volume of any open subset of Euclidean space. 



**Cantor Set**

The Cantor set is defined as follow. 

$$C_n := \frac{1}{3}(C_{n-1} \cup (2+C_{n-1}))$$ , $$C_0 := [0,1]$$

In above expression, scalar addition and multiplication on set means adding and multiplying the scalar on every element of the set i.e. $$b + C = \{r+x ; x \in C\}, aC = \{ax ; x\in C\}$$

If we follow the rule, then we can get $$C_1 = [0,1/3]\cup [2/3,1], C_2 = [0,1/9] \cup[2/9,1/3] \cup [2/3,7/9] \cup [8/9,1]$$. 

The Cantor set is defined as $$C := \lim_{n \rightarrow \infty} C_n = \bigcap_{i=0}^{\infty}  C_i$$

The visual expression of the cantor set is below.(From wikipedia https://en.wikipedia.org/wiki/Cantor_set )

 <img src="\assets\img\post\2022-03-08\figure1.png" alt="figure1" style="zoom: 100%;" />



There are several interesting properties about the Cantor set. 

> 1. It is not empty set
> 2. It is closed and bounded. Therefore, the cantor set is compact. 
> 3. The cantor set is totally disconnected. That is, between any elements $$x,y \in C$$, there is an element z which is not in the set $$C$$.
> 4. The total length of the Cantor set is zero. 

The last property could be proved as follow. The volum of $$C_k$$ is $$\left( \frac{2}{3}\right) ^{k}$$. And the Cantor set is subset of the $$C_k, \forall k$$. By lemma 2, we can easily know that $$0 \leq \mid C \mid \leq \mid C_k \mid, \forall k$$ . By using the sandwitch lemma, we can know that $$\mid C \mid =0.$$




## 2. The exterior measure

 It is hard to construct a definition or formula about the volume of a set with some irregular shape like pond. But, by stacking the cube, we can build almost every shape of set. Because we can easily calculate the volume of each cube, we can define the volume of any set as a sum of volumes of cubes consisting the set. 



 More exactly, we can measure the volume of any set as by approximating it from outside. This method is called as exterior measure. 

> **Exterior Measure**
>
> The exterior measure $m_{\ast}(\cdot)$ of E is defined as $$m_{\ast} (E) = \inf_{Q_j \in \Omega} \sum_{j=1}^{\infty} \mid Q_j \mid , \mbox{ where } \Omega = \{\{Q_j\} ; E \subset \bigcup_{j=1}^{\infty} Q_j,Q_j \mbox{ is a closed cube}\}$$ 

The exterior measure could be infinity but have to be nonnegative. And the covering method could be replaced with ball or rectangles too. 



There are important application of the exterior measure on several set. 

> **Application 1.** The exterior measure of **a point** is **zero**
>
> **Application 2.**The exterior measure of **a closed cube** is equal to **its volume.**
>
> **Application 3.** The exterior measure of **an open cube** is equal to **volume of its closure**. 
>
> **Application 4.** The exterior measure of **a rectangle R** is equal to **its volume**. 
>
> **Application 5.** The exterior measure of $$\mathbb{R}^{d}$$ is **infinite**. 
>
> **Application 6.** The exterior measure of **the Cantor set** is **zero**. 

 The values of each examples are calculated through the properties of rectangles and cubes. We can see the most of them matching with our intuition or former expectation. 



To apply the exterior measure at more abstract sets, we have to derive additional properties of it. 

> **Proposition 1.**$$\forall \epsilon >0 , \exists \{ Q_{i}\} \mbox{ such that } E \subset \bigcup_{i=1}^\infty Q_{i} \mbox{ and } \sum_{j=1}^{\infty} m_{\ast} (Q_j) \leq m_{\ast} (E) + \epsilon$$
>
> **Proposition 2.** (Monotonicity) If $$E_{1} \subset E_2 ,$$ then $$m_{\ast} (E_1) \leq m_{\ast} (E_2)$$
>
> **Proposition 3.** (Countable Sub-additivity)If $$E = \bigcup_{j=1}^{\infty} E_j ,$$ then $$m_{\ast}(E) \leq \sum_{j=1}^{\infty} m_{\ast} (E_j)$$
>
> **Proposition 4.** If $$E \subset \mathbb{R}^d$$, then $$m_{\ast}(E) = \inf_{O \in \Omega} m_{\ast}(O), \mbox{ where } \Omega = \{O \mbox{: open set} ; E \subset O \}$$
>
> **Proposition 5.** If $$E = E_1 \cup E_2,$$ and $$d(E_1 ,E_2) >0 ,$$ then $$m_{\ast}(E) = m_{\ast}(E_1) + m_{\ast}(E_2)$$
>
> **Proposition 6.** If $$E = \bigcup_{j=1}^{\infty} Q_j$$ where $$\{Q_j\}$$ is set of almost disjoint closed cubes. then $$m_{\ast}(E) = \sum_{j=1}^{\infty} \mid Q_{j} \mid . $$



The book states that even though above propositions hold, we cannot say if $$E$$ is disjoint union of subsets $$E_1$$ and $$E_2$$ in $$\mathbb{R}^d$$, $$m_{\ast} (E) = m_{\ast}(E_1)+m_{\ast}(E_2)$$

