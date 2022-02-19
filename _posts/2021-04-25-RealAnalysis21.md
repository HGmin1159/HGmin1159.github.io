---
title: \[Real Analysis\] Ch2.Positive Lebesgue measure(1/2)
categories: [Analysis]
tags: [Analysis,Mathematics]
excerpt: Riesz representation theorem
sidebar:
  - title: "Analysis"
    image: /assets/img/Analysis.png
    image_alt: "image"
    nav: Analysis
author_profile: False
---

# 2. Positive Lebesgue Measures

## 0. 들어가기에 앞서

앞선 장에서는 Measure를 특별히 정의하지 않고 일반적인 노테이션으로 표기한 후 르벡 적분의 가장 기본적인 꼴을 살펴보았다. 

그런데 르벡 적분꼴 $\int f d \mu$ 는 measure의 정의에 따라서 값이 바뀐다. 

그렇다면 우리가 가장 관심있는 measure는 일반적으로 적분을 받아들이는 방식인 리만적분의 그것과 동등하게 만들어 주는 measure일 것이다. 즉 $\int f(x) dx = \int f d \mu$가 성립하는 $\mu$가 메인 관심사이다.

단순히 생각하면 Borel Set의 각 구간들에 대한 measure $\mu([a,b])$를 b-a로 정의하면 될 것 같지만 해석학이 항상 그렇듯 그렇게 쉽게 가지는 않는다. 

이 measure를 이끌어내기 위해서는 다음과 같은 플로우가 필요하다.

A. 기초 위상수학 개념

B. Riesz representation Theorem

C. Borel measure와 lebesgue measure

D. Additional Thoery

 미리 부연 설명을 하자면, 위에 기술한 measure의 역할을 하는 lebesgue measure를 유도하기 위해 Riesz representation theorem이 필요하고, 이 Riesz theorem을 증명하기 위해서는 위상수학의 기초 개념들이 필요하다.

 따라서 이 내용들을 차근차근 학습해보자. 

## A. 기초 위상수학 개념

우선 1장에서 미리 봤던 위상공간(topological space)의 정의를 다시 확인하자. 

> **Topological Space**
>
> - Topology $\tau$ in X : A collection of subset of X that satisfies following property
>   - $\phi , X \in  \tau$
>   - For $V_i \in \tau$, $\cap_i V_i \in \tau$               (for only countable and finite $i$) 
>   - For $V_j \in \tau$,$\cup_j V_j \in \tau$             (for any $j$e.g. finite, infinite, countable, uncountable)
>
> - Topological Space : A space X that have topology $\tau$
>
> - Open Set : Members of Topology
> - Continuous Function: 
>   - For topological space M,N, any **open set** V in N and mapping $f:M\rightarrow N$,the function f is called **continous** if $f^{-1}(V)$ is **open set** for every $V \subset N$ 

Topology라 하면 $\sigma$ - algebra와 유사하게 부분집합들의 집합임을 상기하자. 

이러한 Topological space X 아래에서는 추가적으로 다음과 같은 개념들이 정의된다. 

> **Definition**
>
> - **Closed Set** : A set $E \subset X$ is closed if $E^c$ is open
>   - 드모르간의 법칙을 위의 open set의 성질에 사용하면 $(\cap_i V_i)^c = \cup_iV_i^c$ is closed set (i is finite),$(\cup_j V_j)^c = \cap_jV_j^c$ is closed set (j could be arbitrary)의 성질을 얻을 수 있다.
> - **Closure** : A closure Cl(E) is the smallest closed set which contains E
> - **Compact** : A set K is compact if every open cover of K contains a finite subcover. 
> - **Neighborhood** : A set N is a neighborhood of a point p if N is open subset containing point p.
> - **Hausdorff Space** : X is a Hausdorff space if for all p,q in X, there are neighborhood of p and neighborhood of q which are not overlapped each other.  
> - **Locally compact**: X is locally compact if every point of X has a neightborhood whose closure is compact

Closed set, closure, neighborhood, compactness는 기초해석학에서 봤으니 넘어가자. 

Hausdorff space가 말하고자 하는 바는 어떤 집합 내부의 임의의 두 점을 골랐을때, 그 두 점 사이에 또다른 무수히 많은 점들이 있음을 의미한다. 

Locally compact가 말하고자 하는 바는 집합 X 내부의 각각의 점들은 compact set버전의 neighborhood를 가질 수 있음을 의미한다.

추가적으로, 모든 compact set은 locally compact set 이며 모든 metric space는 hausdorff space이다. 

구체적으로 정수 집합에 Discrete metric을 적용시 각각의 점들이 곧 open set이 되며, 이들은 교집합이 공집합이다. 따라서 정수 공간도 hausdorff space이다. 

사실 이러한 논리 아래서 거의 모든 집합들은 hausdorff space라고 할 수 있다. 



이러한 개념들 아래서 아래와 같은 정리들이 존재한다.

> **Theorem 1.** If K is compact set and F is closed subset of K, then F is compact set too.
>
> **Theorem 2.** Suppose X is a hausdorff space. If K is compact subset of X and $p \in K^c$, then there are Neighborhoods of each p and K whose intersection is a empty set
>
> **Theorem 3.** If $\{K_\alpha\}$ is a collection of compact subset of Hausdorff space and $\cap_\alpha K_\alpha = \phi $, then finite sub intersection of $\{K_\alpha\}$ is also empty set. 
>
> **Theorem 4.** If U is open subset of a locally compact Hausdorff space and K is a compact subset of U,then there exists an open set V whose closure is compact and holds following relation; $K \subset V \subset Cl(V) \subset U$
>
> **Theorem 5.** If K is a compact set and f is coninuous function, then image f(K) is a compact set too.

***

pf1)

If $\{V_\alpha\}$ is an open cover of F and $W = F^c$, then $W \cup (\cup_\alpha V_\alpha)$ covers X. Because X is compact set, it can be reduced to finite cover $W \cup \{\cup_n V_n\}$(notice that W is open cover of X too.) and this $\{\cup _n V_n\}$ can be the finite open cover of F which means F is a compact set.

pf2)

Pick point q in K. Because both p and q are in Hausdorff space, there are disjoint open set $V_p, V_q$. By taking another q, we can make open cover of K $\{V_q\}$ and all of each element is disjoint with some $V_p$.

pf3)

Let $V_\alpha = K_\alpha^c$ and $\{K_{\alpha!}\}=\{K_\alpha\} - K_1$. Because $\cap K_\alpha = K_1 \cap (\cap_{\alpha!} K_{\alpha!})=\phi$, $K_1 \subset \cup_{\alpha !} V_{\alpha}$.

Because $K_1$ is a compact set this $\alpha !$ could be reduced to finite set n. This implies that $K_1 \cap (\cap_n K_n) = \phi$ which makes desired result.

pf4)생략

pf5)

If $\{V_\alpha\}$ is an open cover of f(K), then $\{f^{-1}(V_{\alpha})\}$ is an open cover of K which can be reduced to finite number n i.e. $K \subset f^{-1}(V_1) \cup  f^{-1}(V_2) \cup ... \cup f^{-1}(V_n)$ which means $f(K) \subset \cup_n V_n$ Therefore, $V_{\alpha}$ can be reduced to finite cover. 

***



다음으로 연속함수에 대해서 다음과 같은 중요한 개념이 정의된다. 

> **Definition**
>
> Let f be a real function 
>
> - **Lower semicontinuous** : f is lower semicontinuous if $f^{-1}((a, \infty))$ is an open set for every real a
> - **continuous semicontinuous** : f is upper semicontinuous if $f^{-1}((\infty,b))$ is an open set for every real b

 $f^{-1}((a,\infty)) \cap f^{-1}((-\infty,b)) = f^{-1}((a,b))$ 이다. 만약 두 반연속이 모두 성립시 좌변은 open set과 open set의 교집합이기 때문에 오픈셋이며 따라서 우변도 오픈셋이다. 따라서 두 반연속이 동시에 성립시 임의의 open interval의 preimage는 모두 open set이기 때문에 f는 continuous function이다. 역 또한 쉽게 증명가능하다. 

 특기할만한 예시로 characteristic function of open set은 lower semicontinuous이며 characteristic function of closed set은 upper semicontinuous이다. 

$\chi_E(x) = \begin{cases}1 \mbox{ if } x \in E \\\ 0 \mbox{ if } x \notin E \end{cases}$ , let E be an open subset of M

For $(a,\infty)$, 

If $1<a$ ,then $f^{-1}((a,\infty)) =\phi$ which is an open set 

If $0< a \leq 1$ , then $f^{-1}((a,\infty)) = E$ which is an open set

If $a \leq 0$, then $f^{-1}((a,\infty)) = E\cup E^c = M$ which is an open set

반대의 경우에도 유사하게 유도해낼 수 있다. (생략)



다음으로 다음과 같은 중요한 정의가 정의된다. 

> **Definition - Support**
>
> The support of a complex valued function on topological space X is defined as $cl(x : f(x) \neq 0)$
>
> The collection of all continuous complex valued functions on X whose support is compact is denoted by $C_c(X)$

 support는 closure이므로 항상 closed하다. 따라서 closed하면서 compact가 아닌 경우를 생각해보면 $[a,\infty)$가 있는데 support가 이러한 범위인것을 제외한 함수들의 집합을 $C_c(X)$라고 할 수 있겠다. 이를 다시 해석하면 무한대에 달해서도 값이 0이 아닌 함수들은 $C_c(X)$집합에서 제외하게 되며 역으로 $C_c(X)$집합은 무한대에서 banish되는 함수들의 집합이라고 생각할 수 있다.

이에 대해 추가적으로 다음과 같은 노테이션이 등장한다. 

> < relation between functions and sets
>
> K< f if K is a compact subset of X and $f \in C_c(X)$, that $0 \leq f(x) \leq 1$ forall $x \in X$ and that $f(x) = 1$ for all $x \in K$
>
> f<V if V is an open and $f \in C_c(X), 0\leq f \leq 1$, and that the support of f lies in V 

f는 두 케이스 모두에서 0에서 1사이의 값을 가지며, K는 f의 support 내부에 존재하고 V는 f의 support를 포함하는 관계라고 생각 할 수 있다. 이와 관련해서 다음과 같은 중요한 렘마가 있다.

> **Urysohn's Lemma**
>
> Suppose X is a locally compact Hausdorff space, V is open in X, K $\subset$ V, and K is compact. Then there exists an $f \in C_c(X)$ such that $K < f < V$
>
> **Theorem 6**
>
> Suppose $V_i(i=1,2,...n)$ are open subset of a locally compact Hausdorff space X and K is compact set which $K \subset (\cup_n V_i)$. Then, there exists functions $h_i < V_i$ such that $\sum_i h_i(x) =1 \quad \forall x \in K$

Thoerem 4번과 characteristic function을 이용하면 Lemma를 증명할 수 있다(생략). Theorem의 h함수들은 K의 partition unity라고 부르며 compact set K를 감싸는 open cover(finite)와 연결되어 있는 함수들이다. 



## B. The Riesz Representation Theorem

Riesz representation theorem는 일반적으로 다음과 같이 알려져 있다.

> **Riesz Representation Theorem**
>
> In Hilbert space H, for every continuous linear functional L, there exists a unique $g \in H$ such that $L(f) = <f,g>, \forall f \in H$

즉, 모든  linear functional은 inner product로 나타낼 수 있다는 의미이다. 

functional이라 함은 $L:H \rightarrow C^1$을 의미하며 Linear하다는 것은 $L(af+bg)=aL(f)+bL(g)$를 의미한다.



그런데 Measure Theory에서 사용하는 representation theorem은 약간 다르다.

> **Riesz-Markov–Kakutani Representation Theorem**
>
> Suppose X is a locally comact Hausdorff space and let $\Lambda$ be a positive linear functional on $C_c(X)$. Then there exists a $\sigma$-algebra M in X which contains all Borel sets in X, and there exists a unique positive measure $\mu$ on M such that
>
> - P1.$\Lambda(f) = \int_X f d \mu$ for every $f \in C_c(X)$ 
>
> - P2.$\mu(K) < \infty $ for every compact set $K \subset X$
> - P3.For every $E \in M , \mu(E) = \inf\{\mu(V) ; E \subset V , V: open\}$
> - P4.For every $E \in M , \mu(E) = \sup\{\mu(K) ; K \subset E , K: compact\}$
> - P5.If $E\in M, A \subset E$ and $\mu(E) =0,$ then $A \in M$

Positive Linear functional 이라 함은 $f>0$일시 $L(f)>0$인 것을 의미한다. 일반적으로 정의되는 리만적분의 경우 $\int f(x) dx$는 f함수가 양수 일시 적분값도 양수이며 함수를 받아 스칼라값을 반환하므로 positive linear functional이라 할 수 있다. 

따라서 $\Lambda (f) = \int_X f(x) dx$ 로 생각할 수 있으며 결국 P1은 리만적분과 동치인 르벡적분이 존재한다고 증언하는 것이다.   



이를 증명하기 위해서는 굉장히 많은 스텝이 필요하다. 

정말 긴 스텝이라 생략하고픈 욕구가 컸지만, 해석학의 본질이 증명이기에 일단은 정리해봤다.

***

a. 우선은 위를 만족하는 $\mu$가 유일함을 증명하자.

 $\mu_1$과 $\mu_2$가 위를 만족하는 measure라고 가정하자. $\mu$는 함수이므로 정의역의 모든 값을 지정해놓음으로써 정의된다.  그러나 3번과 4번의 성질을 만족하므로, $\mu(K);K :compact$에서의 값만 정의해주면 된다. 

이 K값과 $\epsilon$을 고정시키자. 그러면 $K \subset V$ 이므로 $\mu_2(V) < \mu_2(K)+\epsilon$의 관계식을 만들 수 있다.(supremum)

Urysohn의 렘마를 이용하면 $K\subset f \subset V$인 f가 존재한다. 이들을 이용하면 다음관계를 유도할 수 있다.

$\mu_1(K) = \int_X \chi_K d\mu_1 \leq \int_X f d\mu_1 = \Lambda f = \int_X f d \mu_2 \leq \int_X \chi_V d \mu_2 = \mu_2 (V) < \mu_2(K) +\epsilon$

즉 $\mu_1(K) \leq \mu_2(K)$이다.

위의 과정을 정확히 반대로 하면 $\mu_2(K)\leq \mu_1(K)$를 얻어낼 수 있다. 이들은 곧 $\mu_1(K)=\mu_2(K)$를 함의하며 따라서 $\mu$는 unique하다.

b. 다음으로 위의 성질을 가지는 $\mu$와 M이 존재하는 것을 보이자.

존재성을 보이기 위해서 그냥 정답이 되는 $\mu$와 M을 정의한 후 이들이 성질을 가지고 있음을 확인해나가면 된다. 우선 정답이 되는 $\mu$와 M은 다음과 같다.

$\mu(V) := sup\{\Lambda f: f < V\}$ for every open set V

$M_F:=$ the class of all $E \subset X$ which satisfies property 2,4

$M: = $ the class of all $E \subset X$ such that $E \cap K \in M_F$ for all compact set K

$\mu$를 위와 같이 정의하면 2번 성질 $\mu(E) = \inf \{\mu(V) : E \subset V, V:open\}$은 자동으로 만족된다. P5는 $\mu$- completion이므로 자의적으로 진행하면 된다. 

나머지에 대한 증명은 다음과 같은 스텝으로 이루어져 있다.

> 목표: M과 $\mu$는 모든 집합에서 P2,P3,P4를 만족하며 P1이 성립한다.
>
> $\mu$는 P3를 만족하는 open set에서 정의되어 있다. 
>
> $M_F$는 P2와 P4를 만족하는 집합들로 구성되어 있다. 
>
> (step 1,step 5는 보조 정리이다.)
>
> step 2. compact set $ \subset M_F$, $\mu$ can be defined on compact set K
>
> step 3. open set $\subset M_F$
>
> step 4.,step 6. $M_F$ can be expanded with set operation
>
> step 7. M is a Borel-sigma-algebra containing every set
>
> step 8. $M_F = M$ i.e. M holds P2,P3,P4 for every set
>
> step 9. $\mu$ is a measure for M
>
> step 10. P1 holds



본격적인 증명에 들어가기 전에 몇가지 유용한 관계성을 정리하고 가자.

> T1. $m = \inf \{x_i\} \iff \forall i , \exists \epsilon>0 \mbox{ such that } m\leq x_i <m+\epsilon$
>
> T2. $M = \sup \{x_i\} \iff \forall i , \exists \epsilon>0 \mbox{ such that } M-\epsilon<x_i \leq M$
>
> T3. If $f<V$, then $\Lambda f \leq \mu(V)$ 
>
> T4. If $K < f$ , then $\mu(K) \leq \Lambda f$
>
> T5. If $A \subset B$,then $\mu(A) \leq \mu(B)$.



> step 1. $\mu(\cup_i E_i) \leq \sum \mu(E_i)$

이는 measure가 만족해야 하는 공리이다. 

claim:$\mu(V_1 \cup V_2 )\leq \mu(V_1) +\mu(V_2)$ for open set $V_1,V_2$.

Take g such that $g < V_1 \cup V_2$ and take $h_1,h_2$ which hold theorem6. 

$h_ig < V_i$ so $\Lambda(h_1g) \leq \mu(V_1)$ and $\Lambda(h_2g) \leq \mu(V_2)$ (T3)

Then $\Lambda(g) = \Lambda(h_1g)+\Lambda(h_2g) \leq \mu(V_1)+\mu(V_2) \quad(;h_1+h_2=1)$

 This is true for every g; $\Lambda(g) \leq \mu(V_1 \cup V_2)$,so $\mu(V_1\cup V_2) \leq \mu(\Lambda_1) +\mu(\Lambda_2)$



Now let's expand it to general set $E_i$

Take $V_i$ which makes $\mu(V_i) < \mu(E_i) +2^{-i}\epsilon$ and $\mu(\cup E_i) \leq \mu(V)$ by P2.

Let $V = \cup_i V_i$ and choose $f < V$. Because f has compact support, we can reduce to finite set $f<\cup_{i=1}^n V_i$ which makes following result

$\Lambda f \leq \mu(V_1 \cup V_2 \cup ...\cup V_n) \leq \mu(V_1)+...+\mu(V_n) \leq \sum_{i=1}^n \mu(E_i)+\epsilon \leq \sum_{i=1}^\infty \mu(E_i)+\epsilon$

Therefore, $\mu(\cup E_i) \leq \mu(V) \leq \sum_{i=1}^\infty\mu(E_i) +\epsilon$ 



> step 2. For compact set $K, K \in M_F$ and $\mu(K) = \inf \{\Lambda f : K < f\}$

If K is compact set, then E of $P4(\forall E \in M , \mu(E) = \sup\{\mu(K) ; K \subset E , K: compact\})$ is compact set so K = E which means $\mu(K) = \mu(K)$. Therefore $K \in M_F$ obiously.



Therefore, $\exists V \supset K$ such that $\mu(V) \leq \mu(K) +\epsilon$ (P3 and T1)

And by Uryshon's lemma, there is f such that $K<f<V$ which makes $\Lambda f \leq \mu(V) <\mu(K) + \epsilon$ (T3)   ---(가)



Set $K<f ,0<\alpha<1$ and $V_\alpha = \{x: f(x) >\alpha\}$. Then $K \subset V_\alpha$ and $g  \leq \alpha^{-1} f $ for all $g <V_\alpha$

By using it, we can conclude $\mu(K) \leq \mu(V_\alpha) = \sup \{\Lambda g: g < V_\alpha\} \leq \Lambda(\alpha^{-1}f)$ and as $\alpha \rightarrow 1,$ $\mu(K) \leq \Lambda f $ ---(나)



(가)와 (나)의 결론을 종합하면 $\mu(K) = \inf \{\Lambda f : K < f\}$를 유도할 수 있다. 



> step 3. Every open set satisfies P4

Let's take some $\alpha$ which satisfies $\alpha < \mu(V)$ and take  some $f < V$ with $\alpha < \Lambda f$

If V is any open set contains the support K of f, then $\Lambda f \leq \mu(V) $ and it can be reduced to $\Lambda f \leq \mu(K)$

Thus, $\alpha < \Lambda f < \mu(K) < \mu(V)$ which makes $\mu(V) = \sup \{\mu (K) : K \subset V, K: compact\}$(P4)



> step 4. $\mu(\cup E_i) = \sum(\mu(E_i))$ for disjoint $E_i$ and if $E_i \in M_F$ then $\cup E_i \in M_F$ too.

(생략)



> step 5. If $E \in M_F$ and $\epsilon <0 $, there is a compact K and an open V such that $K\subset E \subset V$ and $\mu(V-K) < \epsilon$

$M_F$에는 P3 와 P4를 만족하는 open set과 compact set으로 이루어져 있다. 이들의 정의를 이용하면

$\mu(V) -\epsilon/2 < \mu(E) < \mu(K) + \epsilon/2$를 유도할 수 있다.

$V-K$는 open set 이므로 step4를 이용하면 $\mu(K)+\mu(V-K) = \mu(V) < \mu(K)+\epsilon$를 만들 수 있다. 양변에 $\mu(K)$를 빼면 원하는 결과를 얻을 수 있다. 



> step 6. If $A,B \in M_f$,then $A-B,A \cup B$ and $A \cap B$ is in $M_F$ too.

Let's take $\epsilon >0$ and $K_1 \subset A \subset V_1, K_2 \subset B \subset V_2$ which satisfies step 5.

Then $A-B \subset V_1 - K_2 \subset (V_1-K_1) \cup (K_1- V_2) \cup (V_2 - K_2)$

take both sides $\mu$, then we can get

$\mu(A-B) \leq \mu(K_1 - V_2) +2\epsilon$

$K_1 - V_2$ is compact subset of $A-B$ which means $A-B$ satisfies P4

Similalry other terms are working too.



> step 7. M is a $\sigma$ - algebra in X which contains all Borel sets.

Let K be an arbitrary compact set in X

If $A \in M$, then $A^c \cap K = K - (A\cap K),$ which $K ,(A \cap K) \in M_F$(by step2 and definition of M) so $A^c \cap K \in M$(by step 6)

By definition, $A^c \in M$ too which is one of the axioms of $\sigma $- algebra. ---(가)



Let $A = \cup_{i=1}^{\infty} A_i$ where $A_i \in M$, and make disjoint subset $\{B_n\}$ that $B_1 = A_1 \cap K , B_n =(A_n \cap K) - \cup_{i=1}^{n-1}B_{i}$

All of $\{B_i\}$ is in $M_F$ (by definition of M and step 6) and $A \cap K = \cup B_i $ is in $M_F$ too (by step 4)

Therefore A is in M which is one of the axioms of $\sigma$ - algebra ---(나)



Let C be any closed subset, then $C \cap K$ is compact set which means $C \cap K$ is in $M_F$ thus $C \in M$ ---(다)



가와 나를 통해 M이 $\sigma$ algebra임을 보였고, (다)에서 입증한 closed subset을 (가),(나)를 이용해 모든 open interval로 만들 수 있다. 따라서 M은 borel set을 포함한 sigma- algebra가 된다. 



> step 8. $M_F$ consists of precisely those sets $E \in M$ for which $\mu(E) < \infty$

If $E \in M_F$, then $E \cap K \in M_F$ for any compact set (by step2 and step6) therefore, E is in M which means $M_F \subset M$

Suppose $E \in M$ and $\mu(E) < \infty$ and choose $\epsilon>0$.  Take an open set V and a compact K such that $K \subset E \subset V$ and $\mu(V-K) < \epsilon$

Because $E \in M, E \cap K \in M_F$ which means there is a compact set H  such that $H \subset E \cap K$ and $\mu(E \cap K) < \mu(H) + \epsilon$

Since $E \subset (E \cap K)  \cup (V -K), \mu(E) \leq \mu(E \cap K) + \mu(V-K) < \mu(H) + 2\epsilon$

which means that $\mu(E) = \sup \{\mu(H); H \subset E,H:compact\}$ and $E \in M_F$

Therefore, $M \subset M_F$ and $M_F \subset M$ so $M_F = M$



> step 9. $\mu$ is a measure for M

(생략)



> step 10. For every $f \in C_c(X), \Lambda f = \int_X f d \mu$

$\Lambda $는 linear operator이기 때문에 $\Lambda(f) \leq \int_X f d \mu $만 증명한다면 $\Lambda(-f) \leq -\int_X f d \mu \Rightarrow \Lambda(f) \geq \int_X f d \mu$가 성립되기에 등호를 증명할 수 있다. 

K를 $f \in C_c(X)$의 support로 두고 [a,b]를 f의 치역을 포함하는 영역으로 두자. 그런 다음 [a,b] interval을 $\epsilon$간격 내부에 들어오도록 잘라내자. 즉 다음과 같다.

$y_0 < a< y_1 < ... < y_n=b$ and $y_i - y_{i-1} < \epsilon$

그런 다음 영역 $E_i$를 $y_i$ interval과 연동되도록 다음과 같이 정의하자.

$E_i = \{x: y_{i-1} < f(x) \leq y_i\} \cap K$

이렇게 만들어진 $E_i$는 dishoint borel set 이며 $\cup E_i = K$이다. 또한 1.$y_i - \epsilon < f(x)$ for all $x \in E_i$이다. 

 P3를 이용해 다음과 같은  open set을 뽑자. 2.$\mu(V_i) < \mu(E_i) + \epsilon/n$ and 3.$f(x) \leq y_i + \epsilon$ for all $x \in V_i$ $V_i$는 $E_i$를 포함하는 미세하게 더 큰 구간 이기 때문에 위와 같은 부등호를 뽑을 수 있다. 

이에 대해 Theorem 6를 이용하여 다음과 같은  $h_i$를 뽑아내자.

4.$h_i < V_i , \sum h_i =1$ on K  so $K<\sum h_i$and  5.$\mu(K) \leq \Lambda (\sum h_i ) = \sum \Lambda h_i$

이제 위의 정보를 활용하여 다음을 유도해낼 수 있다. 

$\Lambda f = \sum \Lambda (h_if) \leq \sum (y_i+\epsilon)\Lambda h_i$  (by 3.) 

​     $= \sum( \mid a \mid +y_i +\epsilon)\Lambda h_i - \mid a \mid \sum \Lambda h_i$

​     $\leq \sum( \mid a \mid +y_i +\epsilon)(\mu(E_i)+\epsilon/n) - \mid a \mid \mu(K)$ (by below procedure and 5.)

[$\Lambda h_i < \mu(V_i) <\mu(E_i)+\epsilon/n$ (by 4,2)]

​      $= \sum(y_i -\epsilon) \mu(E_i)+2 \epsilon \mu(K) + \frac{\epsilon}{n} \sum ( \mid a \mid +y_i +\epsilon)$ 

​      $\leq  \int_X f d \mu + \epsilon [2 \mu(K) + \mid a \mid + b + \epsilon]$

Let epsilon go to zero, then we can get desired result.

***

 

지금까지 Riesz representation theorem을 증명하기 위해 포스팅하나를 다 썼다. 그런데 사실 이렇게 길게 썼음에도 불구하고 이 증명은 불완전하다. P4가 성립하는 것을 open set과 compact set에서는 보였지만 $E;\mu(E)<\infty$가 아닌 set에서도 성립하는 지는 보이지 않았기 때문이다. 

이에 대해서는 다음 포스팅에서 다시 보도록 하자.



***

walter rudin,[real and complex analysis],McGrawHill

