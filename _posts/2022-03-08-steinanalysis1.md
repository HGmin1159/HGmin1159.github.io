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


## 3. Measurable sets and the Lebesgue measure

 Now we can define the concept of the Lebesgue measure using exterior measure. 

> **Definition. [Measurable Set]**
>
>  A set E of $\mathbb{R}^d$ is (Lebesgue) measurable, if $$\forall \epsilon >0 , \exists O :$$ open set such that $$E \subset O$$ and $$m_{\ast}(O-E) < \epsilon$$
>
> **Definition. [Lebesgue Measure]**
>
> If $$E$$ is measurable, we define its measure $$m(E)$$ by $$m(E) = m_{\ast}(E)$$.



 In the [W. Rudin (1987), Real and Complex Analysis], it defines the measurable space and set as a space that have $\sigma$ - algebra and the member of $\sigma$- algebra. For example, the probability space $(\Omega,F,p)$ is also measurable space where $$\Omega$$ is sample space, $$F$$ is its $\sigma$ - algebra and $$p$$ is probability measure function.

 Therefore, we can regard the measurable set of above definition as measurable set in Lebesgue sense. 



 The measurable set and Lebesgue measure have following properties.

> **Property 1.** Every open set in $$\mathbb{R}^d$$ is measurable.
>
> **Property 2.** If $$m_{\ast} (E) = 0,$$ then $$E$$ is measurable.
>
> **Property 3.** A countable union of measurable sets is measurable.
>
> **Property 4.** Closed set is measurable. 
>
> **Property 5.** The complement of a measurable set is measurable
>
> **Property 6.** A countable intersection of measurable sets is measurable



There is an important theorem of measure. 

> **Theorem. [Countable Additivity]**
>
>  If $$\{E_j\}_{j \in \mathbb{N}}$$ is a sequence of mutually disjoint measurable sets and $$E = \bigcup_{j \in \mathbb{N}} E_j$$, then $$m(E) = \sum_{j \in \mathbb{N}} m(E_j)$$
>
> **Corollary.**
>
> Suppose $$\{E_j\}_{j \in \mathbb{N}}$$ is a sequence of measurable sets and $$E = \bigcup_{j\in \mathbb{N}} E_j$$ and $$F = \bigcap_{j \in \mathbb{N}} E_j$$
>
> 1. If $$\{E_{k} \subset E_{k+1}, k \in \mathbb{N}\}$$, then $$m(E) = \lim_{j \rightarrow \infty} m(E_j)$$
> 2. If $$\{E_{k+1} \subset E_{k}, k \in \mathbb{N}\}$$ and $$m(E_1) < \infty$$, then $$m(E) = \lim_{j \rightarrow \infty} m(E_j)$$



 The general definition of measure is defined axiomatically. That is, the set function mapping $\sigma$- algebra to non-negative real number could be worked as measure if it satisfies below three axioms 

> **Non-negativity:** For all $$E$$ in $$\Sigma$$m we have $$\mu(E) \geq 0$$.
>
> **Null empty set:** $$\mu(\phi) =0$$
>
> **Countable additivity** : For all countable collections $$\{E_k\}_{k=1}^{\infty}$$ of pairwise disjoint sets in $$\Sigma$$, $$\mu(\bigcup_{k=1}^{\infty} E_k) = \sum_{k=1}^{\infty} \mu(E_k)$$

As we have seen, the property of exterior measure and Lebesgue measure satisfies first two axioms of measure. The countable additivity theorem of Lebesgue measure says that the Lebesgue measure also satisfies the third axiom of measure. 



But as we said above, to say the theorem holds, we need secondary lemma that if $$F$$ is closed, $$K$$ is compact and they are disjoint, then $$d(F,K) >0$$.  



For the measurable sets, there are useful concepts for analytic proof of additional theorem. 

> **Theorem [Well approximation for measurable sets]**
>
> Suppose E is measurable, then $$\forall \epsilon >0$$
>
> 1) $$\exists O:$$ open set with $$E \subset O$$ and $$m(O-E) \leq \epsilon$$  
> 2) $$\exists F :$$ closed set with $$F \subset E$$ and $$m(E-F) \leq \epsilon$$  
> 3) If $$m(E)$$ is finite, then $$\exists K : $$ compact set with $K \subset E$ and $$m(E-K)\leq \epsilon$$  
> 4) If $$m(E)$$ is finite, $$\exists F = \bigcup_{j=1}^N Q_j, (Q_j$$ is a closed cube$$)$$ such that $$m ( E \triangle F) \leq \epsilon$$.  
>
> $$(\mbox{where } E \triangle F = (E-F) \cup (F-E))$$  

It states that the Lebesgue measure of some set have equal values with little bit bigger sets and little bit smaller sets. We can regard the property stating some kinds of continuity of measure. 

 <img src="\assets\img\post\2022-03-08\figure1.png" alt="figure2" style="zoom: 100%;" />

 Even though we have to study more, but we can infer the reason the book weight on the interior closed set and exterior open set not interior open set and exterior closed set as follow. If we think about largest interior open set and smallest exterior closed set of some set $$E$$, then we can easily find the sets whose boundary perfectly match with original set regardless of the original set.

 But if we imagine the smallest exterior open set of some closed set, then we hardly imagine the set because boundary of the exterior set have to approach to the boundary of the original set but it can not reach it. This means that the former conditions (interior closed set and exterior open set) are more difficult than latter conditions (interior open set and exterior closed set). 

 Analytically stating, for closed set $$F$$ and open set $$O$$, if $$O \subset E \subset F$$, then we can find $$O$$ and $$F$$ which satisfy the relation $$cl(O) = cl(E) = cl(F)$$ but if $$F \subset E \subset O$$,then there is no $$O$$ and $$F$$ which satisfies the relation $$cl(O) = cl(E)=cl(F)$$ 

 Therefore, if we make the definition of the measure which satisfies the latter conditions, then it might not satisfies the former conditions. But if we make definition of the measure satisfying the former conditions, then it naturally satisfies the latter conditions. 



 The Lebesgue measure has peculiar property about invariance. It is invariant with transaction, dilation and reflection. We can state them as below. 

> **Invariance Property of Lebesgue Measure**
>
> 1) **Transaction Invariance (Location Invariance)**
>    - For a measurable set $$E \subset \mathbb{R}^d$$ and any point $$h \in \mathbb{R}^d$$ , measure of $$E+h = \{x+h ; x \in E\}$$ equals with the measure of $$E$$ i.e. $$m(E+h)=m(E)$$.  
> 2) **Dilation Invariance (Scale Invariance)**
>    - For a measurable set $$E \subset \mathbb{R}^d$$ and some scalar $$\delta \in \mathbb{R}^+$$, measure of $$\delta E = \{\delta x ; x \in E\}$$ equals with $$\delta^d$$ times of the measure of E i.e. $$m(\delta E) = \delta^d m(E)$$  
> 3) **Reflection Invariance**
>    - For a measurable set $$E \subset \mathbb{R}^d$$, measure of $$- E = \{-x ; x \in E\}$$ equals with the measure of E i.e. $$m(- E) = m(E)$$





## 4. $\sigma$- algebra and Borel Sets

> **Definition**
>
> **$$\sigma$$-algebra** : A $$\sigma$$-algebra of set is a collection of subsets of $$\mathbb{R}^d$$ closed under 1. countable union, 2. countable intersection and 3. complements.
>
> **Borel $$\sigma$$-algebra :**The Borel $$\sigma$$- algebra in $$\mathbb{R}^d$$ denoted as $$B_{\mathbb{R}^d}$$ is the smallest $$\sigma$$-algebra that contains all open sets of $$\mathbb{R}^d$$.
>
> **Borel set :** The Borel set is a element of the Borel $$\sigma$$-algebra.



 We can easily infer that every closed sets and clopen sets(half closed and half open set) is also in the Borel $$\sigma$$-algebra because every closed set is a complement of some open set and clopen set is complement of open set on closed set or vice versa. Notice that countable intersection of open set (denoted as $$G_{\delta}$$) and countable union of closed set($$F_{\sigma}$$) could be neither open set nor closed set. Therefore, all of these set is in the Borel $$\sigma$$- algebra. 



 With above definition, the following statement is equivalent.

> **Theorem. [Equivalence of Lebesgue Measure]**
>
> Let $$E$$ be a subset of $$\mathbb{R}^d$$, then the followings are equivalent.
>
> 1. $$E$$ is measurable.
> 2. For every $$\epsilon >0$$, $$\exists O:$$ open set with $$E \subset O$$ s.t. $$m_{\ast}(O-E)\leq \epsilon$$.
> 3. For every $$\epsilon >0$$, $$\exists F:$$ closed set with $$F \subset E$$ s.t. $$m_{\ast}(E-F)\leq \epsilon$$.
> 4. There exists a $$G_{\delta}$$ set $$\tilde{G}$$ with $$E \subset \tilde{G}$$ such that $$m_{\ast}(\tilde{G}-E)=0$$
> 5. There exists a $$F_{\sigma}$$ set $$\tilde{F}$$ with $$\tilde{F} \subset E $$ such that $$m_{\ast}(E-\tilde{F})=0$$
> 6. For each set $$A \subset \mathbb{R}^d$$, $$m_{\ast}(A) = m_{\ast}(A \cap E)+m_{\ast}(A \cap E^c)$$
>
> If we assume the $$m(E) < \infty$$, then below statement could be included at above relation.
>
> 7. For every $$\epsilon>0, \exists F = \bigcup_{j=1}^N Q_j (Q_j \mbox{ is a closed cube})$$ such that $$m_{\ast}(E \triangle F )\leq \epsilon$$



## 5. Measurable Functions

To make definition easily, we can use concepts of charateristic function and simple function. They have very clear and usefull properties and could approximate general functions. Moreover, we will define measurablility on functions which means that inputs and outputs of function could be measured stably.



> **Definition**
>
> 1. **Characteristic Function**
>
>    A characteristic function $$\chi$$ on a set $$E$$ is defined by $$\chi_{E}(x) = \begin{cases} 1 \mbox{ if } x\in E \\ 0 \mbox{ o.w }\end{cases}$$
>
> 2. **Step Function**
>
>    A step function $$f$$ is defined by $$f = \sum_{k=1}^N \alpha_k \chi_{R_k}$$ where $$\alpha_k \in \mathbb{R}, R_k :$$ Rectangles in $$\mathbb{R}^d$$.
>
> 3. **Simple Function**
>
>    A simple function f is defined by $$f = \sum_{k=1}^N \alpha_k \chi_{E_k}$$ where $$\alpha_k \in \mathbb{R}, E_k$$: Measurable set in $$\mathbb{R}^d$$
>
> 4. **Measurable Function**
>
>    A function $$f: E \rightarrow \mathbb{R}$$ is measurable if $$\forall O$$:open set $$\subset \mathbb{R}^d, f^{-1}(O)$$ is a measurable set.
>
> 5. **Almost Everywhere**
>
>    A function $$f$$ is said to have a property P almost everywhere(a.e.) on set $$E$$ if $$m(x \in E ; f(x) \mbox{ does not have property P})=0$$.





The measurable function have some properties like below.

> **Property**
>
> 1. A finite-valued function f is measurable iff $$f^{-1}(O)$$ is measurable for all open set $$O \subset \mathbb{R}$$ iff $$f^{-1}(F)$$: is measurable for all closed set $$F \subset \mathbb{R}$$.
> 2. If $$f$$ is continuous on $$\mathbb{R}^d$$, then $$f$$ is measurable. If $$f$$ is measurable and finite-valued, and $$g$$ is continuous, then $$g \circ f$$ is measurable.
> 3. Suppose $$\{f_n\}$$ is a sequece of measurable functions, then $$\sup f_n, \inf f_n,\lim \sup f_n, \lim \inf f_n$$ are measurable.
> 4. Suppose $$\{f_n\}$$ is a sequence of measurable functions and $$f(x) := \lim_{n\rightarrow \infty} f_n(x) , x\in E$$, then $$f$$ is measurable.
> 5. If $$f$$ is measurable, then $$f^k , k \geq 1$$  are measurable. 
> 6. If both $$f$$ and $$g$$ are a.e. finite-valued measurable functions, $$f+g$$ and $$fg$$ are measurable.
> 7. If $$f$$ is measurable and $$f(x) = g(x)$$ a.e. then $$g$$ is measurable. 



 As we said above, we can approximate measurable function $$f$$ with simple functions.

> **Theorem [Approximation by Simple fucntions]**
>
>  Suppose $$f$$ is a measurable function on $$\mathbb{R}^d$$, then there exists a sequence of simple functions $$\{\phi_{k}\}$$ that satisfies $$\mid \phi_{k} \mid \leq \mid \phi_{k+1} \mid$$ and $$\lim_{k \rightarrow \infty}\phi_{k}(x) = f(x) , \forall x \in \mathbb{R}^d$$.
>
> **Theorem [Approximation by Step fucntions]**
>
>  Suppose $$f$$ is a measurable function on $$\mathbb{R}^d$$, then there exists a sequence of step functions $$\{\phi_{k}\}$$ that satisfies $$\mid \phi_{k} \mid \leq \mid \phi_{k+1} \mid$$ and $$\lim_{k \rightarrow \infty}\phi_{k}(x) = f(x)$$ for almost everywhere on $$\mathbb{R}^d$$



By using the concepts of measurable functions and measure zero, we can say strong analytic concepts in little bit weak sence. 

> Egorov's Theorem. 
>
> Suppose that $$\{f_k\}$$ is a sequence of measurable functions defined on a measurable set $$E$$ with $$m(E) < \infty$$, and assume that $$f_k \rightarrow f$$ a.e. on $$E$$. Given $$\epsilon>0$$, we can find a closed set $$A_\epsilon \subset E$$ such that $$m(E-A_{\epsilon}) \leq \epsilon$$ and $$f_k \rightarrow f$$ uniformly on $$A_{\epsilon}$$
>
> Rusin's Theorem.
>
> Suppose $$f$$ is measurable and finite valued on $$E$$ with $$E$$ of finite measure then $$\forall \epsilon>0 , \exists F_\epsilon$$ with $$F_{\epsilon}\subset E$$ and $$m(E-F_{\epsilon})<\epsilon$$ and $$f \mid _{F_{\epsilon}}$$ is continuous



