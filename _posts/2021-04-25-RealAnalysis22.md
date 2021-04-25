---
title: \[Math\] Real Analysis - ch2.Positive Lebesgue measure(2/2)
categories: [others]
tags: [Others,Mathematics]
excerpt: Positive Lebesgue Measure 
---

# 2. Positive Lebesgue Measures

## C. Borel Measure와 Lebesgue Measure

**Regularity of Measure**

 이전 포스팅의 Riesz representation theorem의 증명은 불완전했다. 이전번 증명을 다시보면 P4가 만족되는 영역이 open set과 $E;\mu(E)<\infty$에서만이기 때문이다. Rudin의 RCA 책에서는 해당 Theorem의 가정들만 가지고는 P4가 open set과 $E;\mu(E)<\infty$ 이외에서도 만족되는 지에 대해서는 증명이 불가능하다고 한다. 

> Remark 
>
> **P3:** $\mu(E) = \inf \{\mu(V) ; E \subset V, V: open\}$
>
> **P4:** $\mu(E) = \sup \{\mu(K) ; K \subset E, K: compact\}$

 그러나 몇가지 조건이 추가됨으로써, 이 문제를 해결할 수 있다. 그전에 우선 몇가지 개념들을 정의하고 가자. 



> **Definition**
>
> - **Borel Measure**: A measure $\mu$ is a Borel measure if it is defined on the $\sigma$- algebra of all Borel sets in a locally compact Hausdorff space X.
> - **Outer regular**: A set $E$ is outer regular if $\mu(E) = \inf \{\mu(V) ; E \subset V, V: open\}$ for any set E.
> - **Inner regular**: A set $E$ is inner regular if $\mu(E) = \sup \{\mu(K) ; K \subset E, K: compact\}$ for any set E.
> - **Regular**: A Borel measure $\mu$ is regular if  every Borel set in X is both inner regular and outer regular.
> - **$\sigma$-compact**: A set X is $\sigma$-compact if X is a countable union of compact sets.
> - **$\sigma $- finite measure**: A set X is said to have $\sigma $- finite measure if X is countable union of sets $X_i$ with $\mu(X_i) <\infty$.

 이러한 정의하에서 위의 문제는 Borel set의 모든 집합이 outer regular한 것은 알지만 open set과 $\mu(E) <\infty$ 이외의 집합까지 inner regular한지는 모른다는 점이 문제가 된다. 

 그러나 $\sigma$ - compact 가정을 추가함으로써 이 문제를 해결할 수 있다. 여기서 $\sigma $- compact가 finite조건이 아니라 countable 조건임에 유의하자.



> **Theorem 1**
>
> Suppose X is ad locally compact, $\sigma$- compact Hausdorff space. If M and $\mu$ are as described in the statement of RRT, then M and $\mu$ has following properties
>
> - If E $\in$ M and $\epsilon>0$, there is a closed set $F$ and an open set $V$ such that $F \subset E \subset V$ and $\mu(V-F) < \epsilon$
> - $\mu$ is a regular Borel measure on X.
> - If $E \in M$, there are sets A and B such that A is an $F_\sigma, B$ is a $G_\delta, A \subset E \subset B$ and $\mu(B-A)=0$

***

pf)

Let $X = K_1 \cup K_2 \cup ...,$ where each $K_i$ is compact set with $\mu(K_i) <\infty$

If $E \in M$ and $\epsilon>0$, then $\mu(K_i \cap E) < \infty$ and there are open sets $V_n \supset K_n \cap E$ such that $\mu(V_n-(K_n \cap E)) < \epsilon/2n$

Then, $V:= \cup V_n \supset \cup(K_n \cap E) = X \cap E = E$ and $V-E \subset \cup(V_n - K_n\cap E)$

By applying both side $\mu$, $\mu(V-E) \leq \sum \mu(V_n - K_n \cap E) = \epsilon/2$ ----(가)

Now, instead of E and V, substitute it with $E^c$ and $F^c$(; $F^c$ is open set so $F$ is closed set), then we can get $E^c \subset F^c$ and $\mu(F^c-E^c) \leq \epsilon/2$

Then $F^c - E^c = E-F$ and $E^c \subset F^c \Rightarrow F \subset E$ ,so we can get $F\subset E$ and $\mu(E-F) \leq \epsilon/2$ ----(나)

By using (가),(나), we can get $F \subset E \subset V$ and $\mu(V-F) = \mu(V-E)+\mu(E-F) \leq \epsilon$ which is first property.



Every closed set $F \subset X$ is $\sigma$- compact because $F = \cup (F \cap K_n)$ and $F \cap K_n$ is closed subset of compact set $K_n$

Therefore, a closed set F in first property is a compact set. i.e. there is a closed set F such that $F \subset E$ and $\mu(E-F)<\epsilon$

 It can be rewritten with $\mu(F) \leq \mu(E) < \mu(F) + \epsilon$ which means $\mu(E) = \sup\{\mu(F) ; F \subset E, F: compact\}$ and inner regular.

Outer regularity of E can be shown similarly, so $\mu$ is a regular measure of M



Let $\epsilon = 1/j$, then we can get $F_j,V_j$ such that $F_j \subset E \subset V_j$ and $\mu(V_j-F_j)<1/j$.

Let $A = \cup F_j$ and $B= \cap V_j$ then $B-A \subset V_j - F_j$ whose measure goes to zero.  $\square$

***

여기까지 RRT에서 정의한 measure가 완전한 measure가 될 수 있음을 보였다. 

여기에 추가적으로 가정이 추가된다면 RRT에서 정한 measure뿐만 아니라 좀 더 일반적인 형태들도 regular한 measure가 될 수 있다. 

> **Theorem 2**
>
> Let X be a locally compact Hausdorff space in which every open set is $\sigma$ - compact. Let $\lambda$ be any positive Borel measure on X such that $\lambda(K) <\infty$ for every compact set K. Then $\lambda$ is regular

***

pf)

Let $\Lambda f = \int_X f d \lambda$, for $f \in C_C(X)$. Since $\lambda(K)<\infty$ for every compact K, $\Lambda$ is a positive linear functional on $C_c(X)$ , there is a regular measure $\mu$ such that $\int_X f d \lambda = \int_X f d \mu$

claim is $\lambda = \mu$

 Take an open set $V \in X$. Then $V = \cup K_i,$ where $K_i$ is a compact set.

There is $f_i$ such that $K_i < f_i < V$. Let $g_n = \max ( f_1 ,f_2 ,.. f_n)$. Then $g_n \in C_c(X)$ and $g_n (x)$ monotonously increases to $\chi_V(x)$. 

Therefore, by the monotone convergence theorem imply $\lambda(V) = \lim \int _X g_n d \lambda = \lim \int_X g_n d \mu = \mu (V)$ ---(가)

Now let E be a Borel set in X and choose $\epsilon>0$. By above theorem, there is a closed set F and an open set $V$ such that $F\subset E\subset V$ and $\mu(V-F) <\epsilon$ and $\mu(V) \leq \mu(F) +\epsilon \leq \mu(E) +\epsilon$.

$V-F$ is open ,so (가) can be applied with $V-F$. $\lambda(V-F)<\epsilon$ and $\lambda(V)\leq \lambda(E)+\epsilon$

$\lambda(E) \leq \lambda(V) = \mu(V) \leq \mu(E)+\epsilon$ and

$\mu(E) \leq \mu(V) = \lambda(V) \leq \lambda(E)+\epsilon$ 

which means $\lambda(E)=\mu(E)$ for any borel set E. $\square$

***



**Lebesgue Measure**

 지금까지 구축해낸 르벡적분과 그 measure는 모두 일반화된 공간 locally compact Hausdorff space에서 정의되었다. 이렇게 일반화된 공간을 이제 유클리드 공간 $\mathbb{R}^k$로 줄여서 좀 더 특정지어보자. 

> **Definition: Eucleadean Spaces**
>
> Euclidean k-dimensional space $\mathbb{R}^k$ is the set of all points $x = (\xi_1,\xi_2,...\xi_k)$ whose coordinates $\xi_i$are real numbers with the elementwise addition and scalar multiplication which makes $\mathbb{R}^k$ as a real vector space and whose inner product is $\left< x,y\right> = \sum \xi_i \eta_i$ and$\left| x \right| =\left<x,x\right>^{1/2}$

여기에 더해 다음과 같은 추가적인 개념들을 정의하자.

> **Definition**
>
> - **translate**: the translate of E by x is the set $E+x = \{y+x \mid y \in E\}$
> - **k-cell** : W is a k-cell if $W= \{x: a_i < \xi_i < b_i , i=1,2,...k\}$
> - **Volumns**: Volumns of k-cell W is defined as $vol(W) = \prod(\beta_i-\alpha_i)$
> - **$\delta$-box**: $\delta$-box with corner a is defined as $Q(a;\delta) = \{x:\alpha_i \leq \xi_i < \alpha_i +\delta , i =1,2,...k\}$



이제 다음과 같은 개념을 정의하자. 

$P_n$ : The set of all $x \in \mathbb{R}^k$ whose coordinates are integral multiples of $2^{-n}$

$\Omega_n :$ the collection of all $2^{-n}$ boxes with corners at points of $P_n$

Integral multiples of x라 함은 x의 정수배 집합을 의미한다.  

이에 대해 다음과 같은 성질들이 존재한다. 

- If n is fixed, each $x \in \mathbb{R}^k$ lies in one and only one member of $\Omega_n$
- If $Q\in \Omega_n , Q' \in Omega_r$ and r< n, then either$ Q' \subset Q''$ or $Q' \cap Q'' = \phi$ holds
- If $Q \in \Omega_r$, then $vol(Q)=2^{-rk}$ and if n> r, the set $P_n$ has exactly $2^{(n-r)k}$ points in Q
- Every nonempty open set in $\mathbb{R}^k$ is countable union of disjoint boxes belonging to $\Omega_1 \cup \Omega_2 \cup \Omega_3 \cup ...$

이 성질들은 그림을 통해서 쉽게 파악할 수 있다. 

![](/assets/img/post/2021-04-25/figure1.jpg)



> **Theorem**
>
> There exists a positive complete measure m defined on a $\sigma$-algebra M in $\mathbb{R}^k$, with the following properties:
>
> - (a) $m(W) = vol(W)$ for every k-cell W
> - (b) M contains all Borel sets in $\mathbb{R}^k$
> - (c) m is translation-invariant i.e. m(E+x) = m(E) for every E in M and every x in $\mathbb{R}^k$
> - (d) If $\mu$ is any positive translation-invraiant Borel measure on $\mathbb{R}^k$ sucht that $\mu(K) <\infty$ for every compact set K, then there is a constant c sucht that $\mu(E) = cm(E)$ for all Borel sets $E \subset \mathbb{R}^k$
> - (e) To every linear transformation T of $\mathbb{R}^k$ in to $\mathbb{R}^k$ corresponds a real number $\Delta (T)$ such that $m(T(E)) = \Lambda(T) m(E)$ for every $E \in M$.

이렇게 정의된 measure와 sigma algebra의 원소를 Lebesgue measure, Lebesgue measurable sets라고 말한다. 이는 유클리드 공간에서 정의 되기 때문에 리만적분의 역할을 할 수 있는 measure이다. 

성질 d와 e는 치환적분의 그것과 밀접한 관련이 있다. 

***

pf)

 For f: any complex function on $\mathbb{R}^k$ with compact support, define $\Lambda_n f = 2^{-nk}\sum_{x \in P_n}f(x)$

 Suppose $f \in C_c (\mathbb{R}^k), \epsilon>0$ and W which is an open k-cell which contains the support of f. Because f is a continuous function defined on compact set, it is uniformly continuous on support. 

This can makes $g,h$ such that $g,h$ is step function and $g<f<h$ and $h-g<\epsilon$.

By using definition of $\Lambda_n$ and property "If $Q \in \Omega_r$, then $vol(Q)=2^{-rk}$ and if n> r, the set $P_n$ has exactly $2^{(n-r)k}$ points in Q", we can conclude that for n > N, $\Lambda_N g = \Lambda_n g \leq \Lambda_n f \leq \Lambda_n h = \Lambda_N h$ and $\Lambda_N(h-g) \leq \epsilon \times vol(W)$.

As n goes to infinity, $\epsilon$ goes to 0 so by sandwich lemma, we can prove the existence of $\Lambda f := \lim \Lambda_n f$ for $f \in C_c(R^k)$.

여기까지 증명을 통해 $\Lambda f = \lim \Lambda_n f = \lim [2^{-nk}\sum_{x \in P_n}f(x)]$의 존재를 증명했으며 좌변의 linear functional 이므로 르벡적분으로 나타낼 수 있고 우변은 리만적분의 형태이므로 최종적으로 리만 적분에 준하는 르벡적분이 존재하는 것을 보였다. 

거기에 추가적으로 위의 증명은 $f \in C_c(\mathbb{R}^k)$에서만 증명이 되었는데 이 영역이 리만적분이 정의될 수 있는 최대영역을 함의하고 있다. 리만적분은 bounded function on a compact set which is continuous almost everywhere in a sense of lebesgue measure의 영역에서만 정의될 수 있기 때문이다. 

이제 추가적으로 다른 성질들을 증명해보자. Riezs representation theorem을 통해 위에서 구한 $\Lambda$의 measure m과 sigma-algebra M을 정의하자. 

(a)

Let W be the open cell 2.19(4), let $E_r$ be the union of those boxes beloning to $\Omega_r$ whose closure is subset of W. 

$cl(E_r)$ is closed bounded set so it is a compact set. By using urysohn's lemma, we can drow $f_r$ such that $cl(E_r) < f_r < W$ and let $g_r = max\{f_1,f_2,...,f_r\}$.

Then we can make $vol(E_r) \leq \Lambda f_r \leq \Lambda g_r \leq vol(W)$ and as r goes to infinity, $E_r \rightarrow W$ so $vol(W)=\lim vol(E_r)=\lim \Lambda g_r$.

$g_r (x) \rightarrow \chi_w (x)$ 

By monotone convergence theorem, $vol(W) = lim \Lambda g_r = \lim \int g_r dm \int \lim g_r dm = \int \chi_w dm = m(W)$



(b)

$\mathbb{R}^k$는 theorem 2의 조건을 만족하는 공간이다. 따라서 M은 모든 Borel sets을 포함한다. 즉 (b)가 성립한다.



(c)

만약 어떤 positive borel measure $\lambda$에 대해 모든 박스 E에 대해 $\lambda (E) = m(E)$ 가 성립할시 성질 "Every nonempty open set in $\mathbb{R}^k$ is countable union of disjoint boxes belonging to $\Omega_1 \cup \Omega_2 \cup \Omega_3 \cup ...$" 을 이용해 박스를 뭉쳐서 open set을 만들 수 있으므로 모든 open set E에 대해 $\lambda(E) = \mu(E)$임을 이야기 할 수 있다. 

만약 모든 open set E에 대해 $\lambda(E) = \mu(E)$가 성립시, measure가 regular한 성질을 이용해 모든 Borel set E에서 $\lambda (E) = \mu(E)$임을 이야기 할 수 있다. Borel set이 measure의 전체 정의역이므로 결국 box에서만 같다는 것을 증명하면 두 measure가 같음을 보일 수 있다. 

 Take arbitrary x in $\mathbb{R}^k$, then $m(E+x)=vol(E+x)=vol(E)=m(E)$ for all boxes E. Therefore, m is translate invariant.



(d)

Let $\mu$ be any positive translation-invraiant Borel measure on $\mathbb{R}^k$ sucht that $\mu(K) <\infty$ for every compact set K.

Let $Q_0$ be a 1-box and $c= \mu(Q_0)$,then $Q_0$ is union of $2^{nk}$ disjoint $2^{-n}$ boxes and because $\mu$ is translation invariant, $2^{nk}\mu(Q) = \mu(Q_0)$ and $m(Q_0)=1$

Then we can get $2^{nk}\mu(Q) = \mu(Q_0)=c m(Q_0)=c \cdot 2^{nk} m(Q)$ for any small box Q. Therefore, $\exists c$ such that $\mu(Q) = c m(Q)$ for any such measure $\mu$.



(e)

Since T is one to one linear mapping, T is homeomorphism and T(E) is a Borel set too. 

Therefore, we can construct a positive Borel measure $\mu$ on $\mathbb{R}^k$ by $\mu(E)=m(T(E))$

Because T is a linear mapping, $\mu(E+x) = m(T(E+x)) =m(T(E)+Tx)=m(T(E))=\mu(E) \quad (\because vol(Tx)=0)$

It means $\mu$ is translation invariant and by using (d) we can prove (e).

Because $\mu(E) = m(T(E)) = c m(E)$, we can derive c = $m(T(E))/m(E)$ for just one E. With the provement of (d), we know that it is $\mu(Q_0)$ which means volume of unit cube measured by $\mu$ $\square$

***



## d. Additional Theory 

여기까지 해서 유클리드 공간에서의 르벡적분을 정의해냈다. 이제 르벡 적분에 대한 몇가지 중요한 점들을 공부해보자.

**르벡적분의 불완전성**

여기까지 공부해냈으면 르벡적분이 모든 상황에서 정의가능한 완벽한 정리로 보인다. 하지만 몇가지 반례들이 이를 불가능 하게 한다. 

구체적으로, 르벡 적분이 정의되는 집합인 lebesgue measurable set은 실수의 부분집합을 모두 포함하지는 못하며, measurable set 내부에는 Borel set이 아닌 set이 존재한다. 즉 다음과 같다.

$\mbox{Borel }\sigma \mbox{- algebra} \subset \mbox{Lebesgue measurable }\sigma\mbox{-algebra} \subset \mbox{every possible subset of euclidean space}$

다시 말해, 만약 세 개가 다 같았다면 우리는 Borel space를 정의함으로써 유클리드 공간에서의 적분을 이야기 할 수 있었겠지만 반례들이 존재하므로 추가적인 가정들을 해줘야 한다 것이다. 



명제 1) Lebesgue measurable set이면서 Borel set이 아닌 set이 존재한다. 

Lebesgue measurable set의 정의 중에는 lebesgue measurable set의 집합이 모든 borel set을 포함한다고 한다.(b) 하지만 그 역은 성립하지 않는다. 

이 예시로는 Cantor sets이 존재한다. 

$C = [0,1] \setminus \cup_{n=0}^{\infty} \cup_{k=0}^{3^n-1} \left( \frac{3k+1}{3^{n+1}},\frac{3k+2}{3^{n+1}} \right)$

![](/assets/img/post/2021-04-25/figure2.PNG)

해당 집합은 measurable 하며 measure zero이지만 Borel set이 아니다.

자세한건  생략하자.



명제 2) 유클리드 공간 내부에는 measurable 하지 않은 영역이 존재한다. 

이는 다음과 같은 정리에서 유도될 수 있다. 

> **Theorem**
>
> If $A \subset \mathbb{R}$ and every subset of A is Lebesgue measurable then m(A)=0

위 정리의 대우를 말하자면 어떤 영역의 measure가 0이 아니라면 그 영역은 반드시 measurable 하지 않은 영역을 포함한다는 의미이다. 

***

pf)

Let Q be a set of all rational number and E be a set that contains exactly one point from each coset of Q

Then $(E+r)\cap (E+s) =\phi$ if $r \in Q s \in Q, r\neq s$ and $\forall x \in R, x$ lies in $E + r$ for some $r \in Q$

Let's take some t in Q and $A_t = A \cap (E+t)$ ($A^t$ is measurable).

For a compact set $K \subset A_t$, let $H = \cup_r (K+r)$ where $r \in [0,1]\cap Q$

Then, H is bounded so $\mu(H) <\infty$

Since $K \subset E+t$ each $K+r$ is disjoint set. Thus, $m(H) = \sum_r m(K+r) = \sum_r m(K) $ but r is infinite countable set, so m(K) have to be zero. By using regularity of m, we can get $m(K)=m(A_t)=0$  

Because A is countable disjoint union $A_t, m(A)=m(\cup_t A_t) = \sum_t m(A_t) = 0 $$\square$

***



**Determinants**

성질 (e)에 나오는 $\Delta(T)$는 linear transformation mapping T의 determinant로 알려져 있다. 해당 determinant는 T에 연계되는 행렬T의 determinant이다. 즉 $\Delta(T) = \mid \det T \mid$가 성립한다. 

 이를 증명해보자.

***

pf)

$T = T_1T_2$에 대해 $\Delta(T) = \frac{m(TE)}{m(E)}=\frac{m(T_1(T_2E))}{m(T_2E)}\frac{m(T_2E)}{m(E)}=\Delta(T_1)\Delta(T_2)$가 성립한다.

또한 $T= T_1 T_2$에 대해 $Det(T)=Det(T_1)Det(T_2)$가 성립하므로 어떠한 Linear operator의 factor들에 대해 $\Lambda(T_1)=Det(T_1)$을 보임으로써 증명을 완성할 수 있다. 

 모든 Matrix는 다음과 같은 세가지 기본 행렬의 유한개 곱으로 이루어져 있다. 

$e_i : i$th standard basis for $\mathbb{R}^k$

$Type1: \{Te_1,...,Te_k\}$ is a permutation of $\{e_1,e_2,...e_k\}$ (Exchanging matrix)

$Type2 : Te_1 = \alpha e_1, T e_i=e_i$ (Scaling matrix)

$Type3: Te_1 = e_1+e_2, Te_i=e_i$ (Summation matrix)

ex) $T_1 =\left[ \begin{array}{cccc} 0 & 1&0&0\\\ 1&0&0&0&\\\ 0&0&1&0 \\\ 0&0&0&1  \end{array} \right]$$,T_2=\left[ \begin{array}{cccc} \alpha & 0&0&0\\\ 0&1&0&0&\\\ 0&0&1&0 \\\ 0&0&0&1  \end{array} \right]$$,T_3=\left[ \begin{array}{cccc} 1 & 0&0&0\\\ 1&1&0&0&\\\ 0&0&1&0 \\\ 0&0&0&1  \end{array}\right]$

따라서 위 세개에서 $\Delta(T) = det(T)$임을 증명하면 된다. 

Let Q be the unit cube 

$Type1:$

T(Q) = Q, so $\Delta(T) = \frac{m(TQ)}{m(Q)}=1$ and Det(T) = 1 obiously.

$Type2 :$

$m(TQ)= \mid \alpha\mid m(Q)$ so $\Delta(T) = \mid \alpha \mid$ and $Det(T) =\alpha$ obiously.

$Type3 :$

Let $Q = \{\xi_1,\xi_2,...\xi_k\}$ then

$TQ = \{(\xi_1,\xi_2,...\xi_k):$ where $\xi_2 \in (\xi_1,\xi_1+1)$ and $\xi_i \in (0,1)\}$

Let $S_1 = \{x \in TQ ; \xi_2<1\}$ and $S_2 = \{x \in TQ ; \xi_2 \geq1\}$

Then $S_1 \cup S_2 = TQ$ and $S_1 \cup (S_2-e_2) = Q$ and $S_1 \cap (S_2-e_2)$

And we can get $\Delta(T)=m(S_1 \cup S_2 ) =m(S_1)+m(S_2-e_2)=m(Q) =1$ and Det(T) = 1 obiously. $\square$

***



**Continuity Properties of Measurable Functions**

**Continuity Properties of Measurable Functions**

 함수의 연속성 개념은 Lebesgue measure의 구축에 있어서 핵심적인 역할을 했다. 또한 measurable function과 continuous function은  정의가 유사한 형태로 이루어진다. 따라서 함수의 두 성질에는 밀접한 관련이 있을것임을 예측할 수 있다. 

 이에 대해서 다음 두가지 중요한 정리가 있다.

> **Lusin's Theorem**
>
> Suppose f is a complex measurable function on $X, \mu(A)<\infty, f(x) =0$ if $x \not{\in} A$ and $\epsilon>0$. 
>
> Then there exists a $g \in C_c(X)$ such that $\mu(\{x:f(x)\neq g(x)\})<\epsilon$ and $\sup_{x \in X} \mid g(x) \mid \leq \sup_{x \in X} \mid f(x)\mid$
>
> **Corollary**
>
> For $\mid f \mid \leq 1$, there is a squence $\{g_n\}$ such that $g_n \in C_c(X), \mid g_n \mid \leq 1$ and $f(x) = \lim_{n \rightarrow \infty} g_n(x) a.e.$

> **The Vitali-Caratheodory Theorem**
>
> Suppose $f \in L^1(\mu),f$ is real-valued and $\epsilon >0 $. Then there exists functions $u$ and $v$ on X such that $u \leq f \leq v$, u is upper semicontinuous and bounded above, $v$ is lower semicontinuous and bounded below and $\int_X (v-u)d\mu <\epsilon$

증명은 생략하자.

두 정리가 말하고자 하는 바는 measurable function에 근사할 수 있는 연속함수들이 존재한다는 것이다. 

Lusin's Theorem은 monotone convergence를 의미하며 Vitali theorem은 sandwich convergence를 의미한다. 

***

여기까지 borel measure와 lebesgue measure에 대해서 알아봤다. 

2장의 주요 목표는 우리가 사용하게 될 르벡 measure에 대한 이론적 구조를 탄탄하게 만드는 것에 있는것 같다. 

나머지 챕터는 조금 더 실제에 다가와있는 내용들이라 2장보다는 덜 지루할 것 같다. 

다음 포스팅의 내용은 아마 Hilbert space에 대해 몇가지 챕터를 뭉쳐서 다루게 될것이다.

***

walter rudin,[real and complex analysis],McGrawHill
