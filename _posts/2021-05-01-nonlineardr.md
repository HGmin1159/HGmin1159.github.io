---
title: \[Non-linear Dimension Reduction\] Part 1. Reproducing Kernel Hilbert Space
categories: [Dimension]
tags: [차원 축소,Dimension reduction]
excerpt: Reproducing Kernel Hilbert Space
sidebar:
  - title: "Dimensionality Reduction"
    image: /assets/img/dimension.png
    image_alt: "image"
    nav: Dimension
author_profile: False
---

# Nonlinear Dimension Reduction - 1. Reproducing Kernel Hilbert Space

일반적인 통계학에서는 많은 모델들이 선형성을 가정한다. 

여기서 말하는 선형성이란 $$Ax=b$$라는 강한 가정을 넘어서 addition과 scalar multiplication의 성질을 가지는 벡터 공간에서의 선형성을 의미한다.

예컨데, 선형회귀분석이 대표적이며 그외 분산분석, 요인분석 등이 변수간의 선형적인 관계성을 분석하는 기법들이다. 

게다가, 대다수의 분포는 모수를 두개 이하로 가지고 있는데, 이는 보통 로케이션과 스케일을 대표하는 모수들이다. 그런데 스케일이 1차원적으로 계산이 된다는 것은 결국 분포의 선형적인 정보만을 인식한다는 것으로 이해할 수 있다. (b가 로케이션을 A가 스케일을 대변하는 모형 $$Ax+b$$가 결국 선형모델인 것임에 주목하자.)

사실 현실에서 발생하는 많은 관계성이 이러한 일차원적인 관계성에서 크게 벗어나지는 않기에, 선형적 모형을 사용해도 충분히 설명에 들어맞는다. 

그러나 1. 선형적 관계성을 가지지 않는 케이스, 2. 선형 가정된 모형과 현실 데이터의 오차, 3. 전체의 일부인 표본을 관찰하기에 생기는 오차의 세가지 문제를 해결하기 위한 목적으로, 기존의 선형적 모형을 비선형적 모형까지 확대하고자 하는 움직임이 활발하다.

 ![](/assets/img/post/2021-05-01/figure1.jpg)

이러한 비선형적인 접근을 하기 위해 가장 많이 쓰이는 개념이 Reproducing Kernel Hilbert Space이다. 



## 1. Reproducing Kernel Hilbert Space

Reproducing Kernel Hilbert Space(이하 RKHS)는 특정한 성질을 가지는 함수들의 공간이다. 

RKHS는 해석적으로는 다음과 같이 정의될 수 있다. 

> **Definition** $$^{1)}$$
>
> H is called **Reproducing Kernel Hilbert Space** if following hold
>
> 1. H is a subspace of functional space which maps to scalar field 
> 2. H is a Hilbert space.
> 3. For every $$x \in X$$, the **linear evaluation functional**, $$E_x:f \rightarrow f(x)$$ is bounded.

허나 위와 같은 해석은 RKHS를 처음 접해서 이해하기에는 난해한 면이 있다. RKHS는 결국 힐버트 스페이스이므로 이를 구성하는 A. 원소, B.베이시스, C.내적이 핵심 구성요소이다. 거기에 더해, RKHS라는 이름을 얻게된 D.고유의 성질까지 해서 4가지를 이해함으로써 RKHS를 이해해보자. 

#### A. 원소

RKHS는 scalar를 함수값으로 가지는 함수(i.e. functional)들의 집합의 부분집합이다. 

따라서 RKHS의 원소들은 functional이다. 



#### B. 베이시스

 RKHS는 functional 중에서도 특정 함수들의 수열$$\{k_i\}$$를 basis로 가지는 함수들의 집합이다. 

즉, RKHS의 어떤 원소 $$f$$는 $$f(x) = \sum a_i k_i(x) = \sum \alpha k(x,s_i)$$로 표현가능하며 따라서 functional 공간 위의 linear manifold이다. 이를 $$H_0 = \{h : f =\sum \alpha_i k_i \}$$라고  두자. 

여기서 $$k_i(x)$$는 구체적으로 $$k(x, s_i)$$의 형태를 가지는 함수이다. 즉, 인풋으로 한쌍을 가지는 함수에 대해서 한 원소들은 고정시켜 놓은 함수들의 모음이라고 할 수 있다. 

예를 들어 가우시안 커널의 경우 $$k(s_1,s_2) = e^{-r \parallel s_1-s_2 \parallel^2}$$의 형태를 가진다. 일반적으로 RKHS의 커널은 positive definite kernel이다. 

이는 다음과 같이 정의된다.

> **Positive Definite Kernel**
>
> For a function $$\kappa: S \times S \rightarrow \mathbb{R}$$, the function is positive definite if for any finite subset $$\{s_1,s_2,...s_m\}$$ of $$S,$$ the $$m \times m$$ matrix$$\{k(s_i,s_j) : i,j = 1,2,...,m\}$$ is positive definite.

가우시안 커널의 경우 positive definite 커널이다. $$\def\inn#1{\left<#1 \right>} \def\norm#1{\parallel#1 \parallel}$$



#### C. 내적

RKHS의 내적은 다음과 같이 정의된다. 

For $$f = \sum \alpha_i k_i , g = \sum \beta_i k_i$$,  the inner product is defined as $$\left< f,g \right> = \sum \sum \alpha_i \beta_j k(s_i,s_j)$$

이 자체는 사실 내적이 아니며, 커널이 positive definite할때 비로소 내적의 공리들을 만족한다.  

**Inner product Axioms**

**ㄱ. Commutativity :** $$\left< f,g\right> = \left< g,f\right>$$  

Let  $$f = \sum \alpha_i k_i , g = \sum \beta_i k_i$$,

$$\left< f,g \right> = \sum \sum \alpha_i \beta_j k(s_i,s_j) =\sum \sum  \beta_j \alpha_i k(s_j,s_i) = \left<g,f\right>$$

두번째 등호는 $$k$$가 symmetric해야 성립할 수 있음에 유의하자. $$k(s_i,s_j)$$가 positive definite하므로 당연히 symmetric하다.

**ㄴ. Linearity :** $$\inn{af+bg , h} =a\inn{f,h} + b \inn{g,h}$$ 

Let $$f = \sum \alpha_i k_i , g = \sum \beta_i k_i, h= \sum \gamma_i k_i$$

$$\inn{af+bg,h} = \sum \sum (a \alpha_i+b\beta_i)\gamma_i k(s_i,s_j) = a\sum \sum  \alpha_i \gamma_i k(s_i,s_j) + b \sum \sum  \beta_i \gamma_i k(s_i,s_j) = a \inn{f,h}+b\inn{g,h}$$

이는 $$k$$와 무관하게 성립된다. 애초에 구성된 꼴이 bilinear function의 형태였기 때문이다. 

**ㄷ. Positivity :** $$\inn{f,f} > 0 $ if $f \neq 0$$

Let $$f = \sum \alpha_i k_i$$

$$\inn{f,f} = \sum \sum \alpha_i \alpha_j k(s_i,s_j) = A^t K A > 0$$ if $$A\neq 0$$ 

이는 $$k$$의 positive definite 성질을 그대로 활용한 것이다. 

따라서 RHKS는 일반적인 함수공간의 내적과는 조금 다른 내적이 적용된다. 기존의 함수내적은 $$\int f(x)g(x) dx$$ 꼴로 일반적인 인풋이 x로써 공유되지만 RHKS의 내적은 커널이 결정되는 원소 $$s_i$$에 대해 서로 인풋이 얽혀서 $$k(s_i,s_j)$$의 형태로 계산되는 것에 주목하자. 

추가적으로 앞서 정의된 $$H_0$$에 complete 성질을 추가해주기 위해서 $$H = \{f \mid \norm{f} <\infty\}$$라는 조건을 추가해서 Hilbert space를 완성하자. 



#### D. 고유의 성질

RKHS에는 내적이 곧 함수값이 되는 매우 좋은 성질이 있다. 즉 다음과 같다. 

Let $$f = \sum \alpha k_i$ and $S_x(t) = k(t,x)$$  

$$\inn{f,S_x} = \inn{f,k(\cdot ,x)}= \sum \alpha_i k(x,s_i) = f(x)$$

그러나 위의 유도는 x가 베이시스 커널을 구성하는 원소일때만 성립한다. 이러한 제약은 Riesz representation theorem을 이용하여 일반적으로 확대할 수 있다. 즉 해당공간에 대한 bounded linear functional $$f(x)$$에 대한 내적 쌍 $$\inn{f,g_x}$$가 항상 존재한다.

따라서 이를 일반화 시켜서 evalueation functional이라고 부르며 이러한 성질을 reproducing property라고 부른다. 

$$T_x(f) = f(x) = \inn{f,s_x}$$

 따라서 reproducing kernel hilbert space는 reproducing 해주는 kernel(내적)을 가지고 있는 힐버트 공간이라는 의미가 된다. 



 ## 2. Statistical Operators in RKHS$$^{2)}$$

RKHS는 굉장히 많은 영역에서 활약할 수 있는 개념이지만 특히 통계학의 확률 공간에서는 굉장히 큰 역할을 할 수 있다. 

다음과 같은 확률공간을 생각해보자. 

- $$(\Omega, \mathbb{F},P)$$:확률공간,$$\Omega$$는 실험공간이며 $$\mathbb{F}$$는 Borel set, P는 Probability Measure
- $$X:\Omega \rightarrow \Omega_x$$
- $$H_X$$: X를 input으로 가지는 함수들의 RKHS

위와 같은 설정아래서 다음과 같은 것들이 정의될 수 있다. 

### A. Statistical Operators 

**Mean Element of X in H**

이 공간에서 우리는 다음과 같은 프로세스를 통해 $$E(f(X)),f\in H_X$$를 만들어주는 Kernel을 정의할 수 있다. 

$$E(f(X)) = E(\inn{f,k(\cdot , X)}) = \inn{f,f_0} = : \inn{f,E(k(\cdot , X))}$$ for all $$f \in H_X$$

첫번째 등호는 reproducing property를 사용한 것이며 두번째 등호는 좌변이 f에 대한 linear functional임을 이용하여 Riesz representation theorem을 사용한것이다. 마지막으로 이렇게 찾을수 있는 임의의 원소 $$f_0$$를 $$E(k(\cdot , X))$$라는 함수로 정의한 것이다. 

Riesz representation theorem을 사용하기 위해서는 linear functional이 bounded한것을 보여야 한다. 이는 다음과 같이 보일 수 있다. $$\mid E(\inn{f, k( \cdot,X)}) \mid \leq E(\norm{f} \norm{k(\cdot, X)}) = \norm{f} E(\inn{k(\cdot ,X),k(\cdot , X)}^{1/2}) \leq\norm{f}E(k(X,X))^{1/2}$$

따라서 $$E(k(X,X)) < \infty$$라는 가정아래서는 위와 같이 전개할 수 있다.

이렇게 정의한 $$E(K(\cdot , X))$$는 $$H_X$$ 내부의 원소로 Mean Element라고 하며 $$\mu_x$$로 표기된다. 

$$\inn{f,\mu_x} = E(f(X))$$임에 주목하자.



**Second Moments Operator**

다음으로 random operator $$A: \Omega \rightarrow B(H_X,H_X)$$를 생각해보자. $$B(H_X,H_X)$$라 함은 mapping: $$H_X \rightarrow H_X$$ 인 bounded operator 공간이다. 즉 확률성을 가지고 있는 오퍼레이터 집합이다. 정확하게는 Input Borel set $$\omega$$에 대해 $$A(\omega)$$가 operator가 되지만 $$\omega$$는 생략하고 그냥 A로 표기하자.

이에 대해서 위와 유사하게 $$E(\inn{f,Ag}) =: \inn{f,E(A)g}$$를 정의하자. 이 경우 A가 어떠한 오퍼레이터가 됬던 $$E(A)$$는 유니크하며 잘 정의된다는 것이 증명되어 있다. 

이러한 $$A \in B(H_X,H_X)$$ 중에서도 $$k(\cdot , X) \otimes k( \cdot , X)$$를 뽑자. 여기서 tensor product는 $$(f \otimes g )h = f \inn{g,h}$$로 정의된다. 

이에 대해서 다음을 정의할 수 있다. 

$$E(\inn{f , k(\cdot , X) \otimes k( \cdot , X)} g) = \inn{f, A_0g} =: \inn{f , E(k(\cdot , X) \otimes k(\cdot, X))g}$$ for all $$f,g \in H_X$$

첫번째 등호는 riesz representation theorem이며 두번째는 정의가 된것이다. 

앞선 경우와 마찬가지로 좌변이 bounded 함을 보이자.

$$E(\inn{f , k(\cdot , X) \otimes k( \cdot , X)} g)  =E(\inn{f,k(\cdot,  X)} \inn{g,k(\cdot,  X)})) \leq E(\norm{f} \norm{g} \norm{k(\cdot, X)}^2)=\norm{f} \norm{g} E(k(X,X)) < \infty$$

위와 마찬가지로 $$E(k(X,X)) < \infty$$라는 가정 아래서 위와 같이 전개 할수 있다. 

이렇게 정의한  $$E(k(\cdot , X) \otimes k(\cdot, X))$$는 $$H_X$$에 대한 operator이며 Second moment operator라고 부르며 $$M_{xx}$$로 표기된다. 

$$\inn{f,M_{xx} g} = E(\inn{f,k(\cdot,  X)} \inn{g,k(\cdot,  X)})) =E(f(X)g(X))$$임에 주목하자. 



**Variance Operator**

이제 위의 두가지 operator를 활용하여 Variance operator $$\Sigma_{xx}$$를 $$\Sigma_{xx} = M_{xx} - \mu_x \otimes \mu_x$$로 정의할 수 있다. 

이 경우 이 operator를 이용한 내적은 다음과 같이 전개된다.

$$\inn{f,\Sigma_{xx}g} = \inn{f, (M_{x}-\mu_x \otimes \mu_x)g}$$ 

​                  $$= \inn{f,M_{xx}g}-\inn{f,(\mu_x \otimes \mu_x)g}$$

​                  $$=\inn{f, M_{xx}g} - \inn{f,\mu_x \inn{\mu_x,g}} = \inn{f, M_{xx}g} - \inn{f,\mu_x} \inn{\mu_x,g}$$

​                  $$=E(f(X)g(X))-E(f(X))E(g(X))$$

​                  $$=Cov(f(X),g(X))$$



**Covariance Operator**

 같은 probability space에서의 두 확률변수 $$X,Y:\Omega \rightarrow \Omega_Y$$에 대해 다음과 같은 RKHS와 operator를 정의할 수 있다.

$$H_X:$$ X를 인풋으로 갖는 함수들의 RKHS, 커널은 $$k_x$$ ; $$H_Y : $$ Y를 인풋으로 갖는 함수들의 RKHS, 커널은 $$k_Y$$

$$\mu_x = E(k_x(\cdot, X))$ ; $\mu_y = E(k_y(\cdot , Y))$$

$$M_{xy} = E(k_x(\cdot,X)\otimes k_y(\cdot , Y))$$

$$\Sigma_{xy} = M_{xy} - \mu_x \otimes \mu_y$$

$$M_{xy} ,\Sigma_{xy} : H_y \rightarrow H_x$$

이 오퍼레이터들이 어떠한 역할을 하는 지 보자. 

$$\inn{f,M_{xy}g} = E(\inn{f,[k_{x}(\cdot , X)\otimes k_{y}(\cdot,Y)]g}) = E(\inn{f,k_{x}(\cdot,X)}\inn{g,k_y(\cdot ,Y)}) = E(f(X)g(Y))$$

$$\inn{f,\Sigma_{xy} g} = Cov(f(X),g(Y))$$

즉 이를 통해서 서로 다른 확률변수 간의 공분산도 유도해낼 수 있다. 



## 3. Anaytic and Statistical Property of the Operators

- 위에서 나온 개념들이 의미하는 것은 어떠한 함수 f에 대한 기댓값이나 공분산행렬을 구할 때 내적과 오퍼레이터로 해석적으로 도출할 수 있다는 점이다.
- 이렇게 구성을 하기 위해서는 $$E(k(X,X)) < \infty$$라는 가벼운 가정이 필요하다.
- $$E(k(X,X)) < \infty$$가 성립을 한다면 $$H_x \subset L^2(P_x)$$이다. 

***

pf) remark. $$L^2(P_x)$$는 $$P_x$$를 measure로 사용했을때 square-integrable한 함수들의 집합이며 매우 넓은 범위까지 커버가 가능한 함수공간이다. 즉 $$\{f : \int f^2 d P_x = E(f^2(X)) < \infty\}$$이다. 

claim: If $$k(X,X)<\infty$$, then for all $$f \in H_x, f$$ is square integrable 

$$E(f^2(X)) = E(\inn{f, k(\cdot , X)}^2) \leq E(\norm{f}^2 \norm{k(\cdot,X)}^2) = \norm{f}^2E(k(X,X)) \leq \infty$$

따라서 f는 $$L^2(P_x)$$ 내부에 존재한다. 

***

- Kernel을 잘 설정한다면 $$H_x \subset L^2(P_x)$$를 넘어서 $$cl(H_x) \approx L^2(P_x)$$까지 만들어 낼 수 있다. 이를 dense modulo constant개념이라 하며 다음과 같이 정의된다. 이는 해석학의 dense개념이나 머신러닝의 universality 개념과 거의 일치한다. 여기서는 두개의 차이가 있어도 되지만 항상 상수만큼만 차이가 나는 현상을 의미하며 그렇기에 dense modulo (나눗셈의 나머지) constant라고 부른다.

  For each $$f \in H_x$$, there is a sequence $$\{f_n\}$$ such that $$Var(f_n(X)-f(X)) \rightarrow 0$$ as $$n \rightarrow \infty$$

- **$$H_x,H_y$$가 $$L^2(P_x),L^2(P_y)$$에 대해 dense modulo constant할시, covariance operator $$\Sigma_{xy}=0 \iff X \perp Y$$가 성립한다.** 

  일반적으로 covariance가 0이면 두 변수가 독립이라는 명제는 두 변수가 정규분포를 따를 경우에만 가능하다.  그러나 covariance operator가 0일시 두 변수가 어떠한 분포를 따르던지 독립이라고 이야기 할 수 있다. 따라서 RKHS에서는 훨씬더 일반적인 독립성에 대해서 이야기 해줄수 있다.

***

pf) 정확하게는 엄밀한 증명은 아니고 도식적 증명에 가깝다.

$$(\Rightarrow)$$Suppose $$\Sigma_{xy}=0$$, then $$Cov(f(X),g(Y))=\inn{f,\Sigma_{xy}g} =0$$ which means $$E(f(X)g(Y))=E(f(X))E(g(Y))$$   -----(A)

$$E(I(X \in A)) = Pr(X \in A)$$ and $$E(I(X \in A)I(Y \in B)) = E(I(X\in A, Y \in B)) = Pr(X \in A, Y \in B)$$

Obiously, $$I(X \in A)$$ is in $$L^2(P_X)$$, therefore, we can derive $$Pr(X \in A, Y \in B) = Pr(X \in A)Pr(X \in B)$$   ------(B)

But (A) is satisfied with $$f \in H_x$$ and (B) is satisfied with $$f \in L^2(P_x)$$

The condition dense modulo constant can edify this gap.

$$(\Leftarrow)$$Suppose $$X \perp Y$$, then $$f(X) \perp g(Y)$$ for all $$f\in H_x,g \in H_y$$,  which means $$Cov(f(X),g(Y))=\inn{f,M_{xy}g} =0$$ for any f and g.

To be more concrete proof, let $$f = M_{xy}g$$, then $$\inn{M_{xy}g,M_{xy}g}= \norm{M_{xy}g}=0$$ and by axiom of norm and inner product, $$M_{xy}g =0$$ for any function $$g$$ which means $$M_{xy}$$ have to be 0

***

- 일반적으로 RKHS $$H_x$$는 그 영역을 더욱 좁혀서 $$cl(ran(\Sigma_{XX}))$$에서 정의한다. 만약 $$f \in ran(\Sigma_{XX})^{\perp}$$일시, $$\inn{f, \Sigma_{XX}f} =0$$이며 즉 $$Var(f(X))=0$$을 의미하는 데, 이 경우 $$f(X)$$는 상수가 되어버린 것이며 통계학적으로 의미가 없기 때문이다. 이때 $$cl(ran(\Sigma_{xx})) = cl(span[k_X(\cdot, x)-\mu_x : x \in H_x])$$임이 알려져 있다.
- 이러한 제약은 굉장히 귀찮으므로 $$ran(\Sigma_{xx})^{\perp} = \{0\}$$을 가정하곤 한다. 이 경우 $$\Sigma_{xx}$$가 Invertible Operator임을 의미한다. 
- 그러나 이러한 가정 하에서도 $$\Sigma_{xx}^{-1}$$은 bounded하지 않을 수 있다. 그러나 다행히, 많은 통계적 모형에서는 $$\Sigma_{xx}^{-1}$$을 그대로 사용하는 것이 아니라 $$\Sigma_{xx}^{-1}A$$의 형태로 사용하며 대부분의 경우 이 operator는 bounded하다.
- Operator A가 만약 bounded compact self-adjoint operator일시 Hilbert-Schmidt Theorem에 의해 eigen function과 eigen value로 decomposition이 가능하다. 



여기까지 Reproducing Kernel Hilbert Space에 대해서 알아봤다. 다음 포스팅에서는 이 오퍼레이터들의 행렬폼을 알아본후 kernel PCA에 대해서 다루려고 한다.


***
Debnath, L.& Mikusinski, P. (2005). Introduction to Hilbert Space.London,UK.:Elsevire Academic Press   
Li, B. (2018). Sufficient Dimension Reduction. Boca Raton,FL:CRC Press.
