---
title: \[Basic of Quantum Computer\] Part 3.Complex Number and Quantum Fourier Transformation
categories: [Quantum]
tags: [Quantum computer]
excerpt: Basic concept of the complex number and its usage in the quantum computer]
sidebar:
  - title: "Basic of Quantum Computing"
    image: /assets/img/quantum.png
    image_alt: "image"
    nav: Quantum_eng
author_profile: False
---


## Chapter 3. Complex Number and Quantum Fourier Transformation

 To implement the quantum algorithm, it is essential to understand the concept of the complex number. However, because the field of the data science merely use the complex number, so most of data scientist are not familiar with the complex number.

 Therefore, to explore the quantum computer deeper, let's study the complex number first. 

## 1. The basic of the complex number

**Definition of the complex number**

 The complex number is a extension version of the real number and it is defined as follow.

 $C := \{z \mid z= a+bi,a,b\in R,i^2=-1\}$

 The character "i" in this definition is called as imaginary number and defined as square root of the negative one.

 For this definition, a is called as a real part and denoted as Re(z) and b is called as an imaginary part and denoted as Im(z). Therefore, every real number is complex number with zero imaginary part.

 In the real number space, the two elements in it can be ordered like $1<3$ or $-7.12 < \sqrt{5.66}$.  However, in the complex number space, the order between imaginary number cannot be determined like between $i$ and $-i$ or between $3i$ and $12i$. 

 Therefore, the real space is an order field but the complex space is not an ordered field.

 Moreover, the equation $z_1 = z_2$ is hold if and only if equations $Im(z_1)=Im(z_2)$ and $Re(z_1)=Re(z_2)$  are hold. It gives the intuition that the real part and the imaginary part can be taught as separate region.



**The basic operation of the complex numbers**

1. $0 = 0+0i$
2. $1 = 1+0i$
3. $-(a+bi)=-a-bi$
4. $(a+bi)+(c+di)=(a+c)+(b+d)i$
5. $(a+bi) \times (c+di) = (ac-bd)+(ad+bc)i$
6. $Re((a+bi)\times(c+di))=ac-bd$
7. $Im((a+bi)\times(c+di))=ad+bc$



**The conjugate complex number**

Conjugate means the other part of a pair. Therefore, conjugate complex number can be understand the other part which consist of a pair with an original complex number.

 For a complex number $z = a+bi$, the conjugate of $z$ is denoted as $\bar{z}$ and calculated as $a-bi$

 The reason why such number is important is that because the definition of the complex number is square root of negative one, and both $i$ and $-i$ fit for the definition. 

 The conjugate complex number has following properties

1. $z \bar{z} = a^2+b^2$ ; The product of complex number and its conjugate is non-negative real number
2. $z=0$ iff $\bar{z} =0$
3. $Re(z)=Re(\bar z) = a$
4. $Im(z)=-Im(z)=b$
5. If $Im(z)=0$, then $z=\bar{z}$



 By using the conjugate complex number, we can calculate the inverse of a complex number like below.

$z^{-1}=\frac{1}{z}=\frac{\bar z}{\bar z z} = \frac{a-bi}{a^2+b^2} \\\ \quad =\frac{a}{a^2+b^2} - \frac{b}{a^2+b^2}i$



The basic operation of the conjugate complex number is calculated as follow. 

1. $z = \bar{\bar{z}}$
2. $\overline{z^{-1}}=\frac{1}{\bar{z}}$
3. $\overline{z+w} = \overline{z}+\overline{w}$
4. $\overline{z-w}=\overline{z}-\overline{w}$
5. $\overline{z\times w} = \overline{z} \times \overline{w}$



**Measurement of the complex number**

 The absolute value of the complex number can be defined by using the conjugate complex number as follow

$\mid z \mid = \sqrt{z\overline{z}}$

Therefore, we can apply p-norm in the real space using the definition,

$\parallel z \parallel_p = (\sum_{i=1}^n \mid z_i\mid^p)^{1/p} $

The complex Inner Product is defined as follow (Hermitian inner product).

$\left< z_1,z_2\right>=\sum_{i=1}^n z_{1i}\times \overline{z_{2i}}$

 With the notation of matrix and vector, the inner product can be represented as follow.

$\left< z_1, z_2\right> = z_2^hz_1$ 

Superscript h means conjugate transpose which takes transpose and turn each element the conjugate complex number

Therefore, the L2-norm is defined as follow.

$\sqrt{z_2^hz_1}$

Moreover, by using the relation between Norm and Metric, it can be expanded to Metric 

$(\parallel z_1-z_2\parallel_p)^{1/p}$

 We can define the inner product as hermitian inner product and can construct the Hilbert space naturally.

 Like Euclidean space $\mathbb{R}^n $(;multiple real world), by using the Cartesian product, we can expand a single complex space $\mathbb{C}$ to a multiple complex space $\mathbb{C}^n$



## 2. Understanding the complex number

**Complex plane and Polar Form**

 If we used the definition of the complex number $z=x+yi,(x,y \in \mathbb{R})$ and the separative property between real part and imaginary part, we can represent the complex number at 2-dimensional coordinate plane.

![](/assets/img/post/2020-08-18/figure1.svg)

 The figure is result of replacing basis (1,0) and (0,1) which are basis of the formal coordinate plane to (1,0) and (0,i). By using this, we can represent every element in $\mathbb{C}$.

 But in this plane, we can use polar expression by using an angle and magnitude as $(r \cos \theta , r \sin \theta)$ and therefore,$z= x+yi = r\cos \theta +ri \sin \theta$. 

 If we tie up $r$ and apply the Euler's formula to $\cos \theta + i \sin \theta$, then we can get follow expression.

$z= x+yi = r e^{i\theta}$

The former form $z = x+ yi$ is called as Cartesian Form and the latter form $z=r e^{i \theta}$ is called as Polar Form.



 In above figure, we can see that the conjugate of $z$ is rotation with $\theta$ in the counterclockwise direction and therefore, we can express it as follow.

$\overline{z} = x-yi = re^{-i\theta}$

And the absolute value of it is follow.

$\mid z \mid = \sqrt{z\times \overline{z}} = \sqrt{r^2e^{i \theta-i\theta}}=r$



 In the Cartesian form, z has 2-dimensional complexity which consist of real part as $x$ and imaginary part as $y$. Meanwhile in the polar form, z can has 2-dimensional complexity which consist of the norm of the complex number as $r$ and the ratio of the imaginary part as $\theta$ 



**Bloch Sphere**

 We could know that one complex number has 2-dimensional complexity consist of real space and imaginary space.

 Because the real world is 3-dimension, to express the real world, there need 3-dimensional vector space. In the quantum computer, they represent the qubit state as Bloch sphere which use two real space and one complex space.

 

Let's see notation of qubit state 

$\mid \psi \rangle = a \mid 0 \rangle + b\mid 1 \rangle ,\quad a,b \in C$

It can be seen as follow  

$\mid \psi \rangle = r_0e^{i\phi_0}\mid 0 \rangle + r_1e^{i\phi_1} \mid 1\rangle \\\ \quad = e^{i\phi_0}(r_0 \mid 0 \rangle + r_1 e^{i\phi_1-i\phi_0}\mid 1 \rangle )$



 In the quantum computer, even if the same coefficient is multiplied at the state, the result would not changed. Therefore, we can eliminate $e^{i \phi _0}$ 

$\ \quad \approx r_0 \mid 0 \rangle + r_1e^{i\phi}\mid 1 \rangle$

We can again use other constraint because of $\parallel \mid \psi \rangle\parallel_2 =1$ 

$\langle \psi \mid \mid \overline \psi\rangle = r_0^2+r_1^2e^{i\phi-i\phi} \\\ \qquad \quad = r_0^2+r_1^2=1$

 $r_0$ and $r_1$ can be expressed with $\cos \theta$ and $\sin \theta$, we can write them as follow.

$\qquad \ \quad = \cos \frac{\theta}{2} \mid 0 \rangle + \sin \frac{\theta}{2} e^{i\phi} \mid 1 \rangle$

Therefore, one Qubit is an element in three-dimensional space which has two dimensional complexity. Particularly, the $e^{i\theta}$ part is called as Quantum Phase. At the result, it can depicted in three dimension as follow. 

![](/assets/img/post/2020-08-18/figure2.png)

This is called as the Bloch Sphere



## 3. Quantum Fourier Transformation



**Fourier Transformation**

 The Fourier Transformation is transforming the wave function to frequency function. It has follow expression.

$\hat{f}(x) = \int_{-\infty}^{\infty} f(t)e^{-2\pi itx} dt$

A sequence of functions $\frac{1}{\sqrt{2\pi}}e^{ 2\pi i n} , (n$ is integer$)$  is known to be complete orthonormal basis in $L^2 ([-\pi,\pi])$. Therefore, follow expression holds.

For all $ f \in L^2([-\pi,\pi]),$ there is a unique representation $f(x) = \underset{k=-\infty}{\overset{\infty}{\sum}} \alpha_k \varphi_k(x) $ where $(\varphi_k = \frac{1}{\sqrt{2\pi}}e^{-2\pi i xk}, \alpha_k \in \mathbb{R})$

 

 If we use the representation, then we can get a Fourier transformation as follow.

$\hat{f}(x) = \int_{-\infty}^{\infty} f(t)e^{-2\pi itx} dt$

​          $=\int_{-\infty}^{\infty} \underset{k=-\infty}{\overset{\infty}{\sum}} \alpha_k \varphi_k(t) e^{-2\pi itx} dt$

​          $=\underset{k=-\infty}{\overset{\infty}{\sum}}\int_{-\infty}^{\infty} \alpha_k \frac{1}{\sqrt{2\pi}}e^{2\pi i k} e^{-2\pi itx} dt$

​          $=\frac{1}{\sqrt{2\pi}}\underset{k=-\infty}{\overset{\infty}{\sum}}\alpha_k\int_{-\infty}^{\infty} e^{2\pi i t(k-x)} dt$

 The latter part $\delta_k(x) = \int_{-\infty}^{\infty} e^{2\pi i t(k-x)} dt$ works as Dirac-delta function as follow

$\delta_k(x) = \begin{cases} \infty \mbox{ if }k=x \\ 0 \ \ \mbox{ if } k \neq {x} \end{cases}$

 Therefore, we can derive the function that give us hint about basis function's period and amplitude.

 To use more intuitive way, we can see follow.

$f(t) = \sum_{i=0}^{N} \eta_i (\cos(2\pi tk_i)+i\sin(2\pi tk_i))$

$\eta_i $ is amplitude and $k_i$ is period.



It means that by using the Fourier transformation, we can decompose (or analyze) target data in trigonometric functions. 

 If value of some output is none-zero, then the output is amplitude and the input is period

 ![](/assets/img/post/2020-08-18/figure3.png)

 

**Quantum Fourier Transfrom**

 In the quantum physics, because the state of the quantum before observation is wave, so it can be represented by the wave function. 

 Therefore, Fourier transformation in the quantum computer can be understood as analyzing the quantum state in the frequency form.

 But in the actual algorithm, the Fourier transformation rather work for different purpose.



 Every n- qubits' state can be written like below.

$\mid \psi \rangle = \underset{j=0}{\overset{2^n-1}{\sum}} a_j \mid j \rangle_n = \underset{j=0}{\overset{N}{\sum}} a_j \mid j \rangle_n$

 The $\alpha_j$ is a probability amplitude and $\mid j \rangle_n$ is basis. There are $2^n$ possible states and $\mid j \rangle_n \in R^{2^n}$



 The Quantum Fourier Transformation (QFT) on it worked as below. 

$QFT_n : \mid \psi \rangle = \underset{j=0}{\overset{N-1}{\sum}} a_j \mid j \rangle _n \rightarrow \underset{j=0}{\overset{N-1}{\sum}} b_j \mid j \rangle_n$

where $b_j = \frac{1}{\sqrt{N}}\underset{k=0}{\overset{N-1}{\sum}} a_k e^{\frac{2\pi jki}{N}} = \frac{1}{\sqrt{N}}\underset{k=0}{\overset{N-1}{\sum}} a_k \omega^{jk} \quad \mbox{where }\omega = e^{\frac{2\pi i}{N}}$

 Because this calculation only contains linear transformation, it can be represented as matrix.이러한 연산은 인풋의 선형 변환으로만 이루어져 있으므로 행렬을 통해서 표현할 수 있다. 

![](/assets/img/post/2020-08-18/figure4.PNG)



 The result of QFT onto n-qubits is below.

![](/assets/img/post/2020-08-18/figure5.PNG)



 Let's see the transformation above. The probabilities of each state are unchanged but the amplitudes of them are changed. Concretely, n-qubit phase is $2 \pi i \frac{x}{2^n}$ , thus it rotates by $\phi = \frac{x}{2^n}$. In the Bloch Sphere, it rotate by $\frac{x}{2^n}$ with z- axis fixing z=0.

 We can express them in the circuit like below. $CR_k $ gate is controlled $Z^{1/K}$ gate which rotate by $180/2^{k}$ with z-axis

![](/assets/img/post/2020-08-18/figure6.PNG)

 That is, we can assign each qubit to binary angles.

***

 By using the Quantum Fourier Transformation, we can generate various algorithms. In the next posting, we'll gonna see these algorithms.

***
 Sutor, R. (2019). Dancing With Qubits. Birmingham,UK:Packt  
 Bernhardt, C. (2019). Quantum computing for everyone. Boston, Massachusetts:The MIT Press
