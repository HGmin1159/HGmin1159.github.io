---
title: \[Basic of Quantum Computer\] Part 4. Grover's Algorithm, Deutsch's Algorithm
categories: [Quantum]
tags: [Quantum computer]
excerpt: Oracle, Amplitude Amplification, Grover's and Deutsch's Algorithm
sidebar:
  - title: "Basic of Quantum Computing"
    image: /assets/img/quantum.png
    image_alt: "image"
    nav: Quantum_eng
author_profile: False
---

$\def\ket#1{\mid #1 \rangle}$

## 1. Basic of the quantum algorithms

 As mentioned before, the quantum computer can make improvement compared to the classical computer due to its unique algorithm. 

 When implement them, there are several Quantum routines which are frequently used and show the intuitive reasons of the quantum speedup.

 In the "Schuld,  M.  &  Petrucionne,  F.  (2019).    Supervised  Learning  with  Quantum  Comput-ers,Cham, Switzerland:Springer", they introduce three important quantum routines; Grover Search, Quantum Phase Estimation, Matrix Multiplication. In addition to these routines, I'll introduce a inner product measurement methods at latter posting. 

First of all, let's see Grover's searching algorithm.



### a. Oracle

Oracle is a kind of functions and its named is derived from divine message of ancient Greek myth. 

 Oracle can take any value such as numbers or characters as inputs but only return logical values  0 or 1 as outputs. When dealing with Oracle, we cannot know the exact process of the oracle. That is, the only thing we could know is just the output of them. Therefore, we can call it as a Black Box model.

 Moreover, computer takes everything like character or figure with one and zero. Therefore, we can generalize Oracle in the computer as follow. 

Oracle  $f : \{0,1\}^n \rightarrow \{0,1\}$



 Every operation in the quantum computer is done by Unitary Matrix. Therefore, the Oracle functions are made by the unitary matrix too. They are made like below.

$U_f(\ket x) = \begin{cases} -\ket x \quad \mbox{ if } f(\ket x) = 1 \\\ \ket x  \qquad \mbox{ if } f(\ket x) = 0 \end{cases}$



 This oracle just flip the amplitudes of the result. If the result is one, then it turns it negative direction and if the result is zero, then it turns it to positive direction (unchanged)



 Let's see the example.

Imagine there are three qubits which have states like below.

$\ket \psi = a_1\ket{000} + a_2 \ket{001} + a_3 \ket{010} + a_4 \ket{100} + a_5 \ket{011} + a_6 \ket{101} + a_7 \ket{110} + a_8 \ket{111}$



 If the oracle return 1 on $\ket{010}$ and return 0 on the other cases, then the unitary matrix would be like below. 

$\ket \psi = a_1\ket{000} + a_2 \ket{001} - a_3 \ket{010} + a_4 \ket{100} + a_5 \ket{011} + a_6 \ket{101} + a_7 \ket{110} + a_8 \ket{111}$



 Our purpose is to find the negative qubit state with assumption that we don't know the location of them. Amplitude amplification can do such thing.



### b. Amlitude Amplification

 Let's think $\psi$ has a uniform superposition state which is the result of passing multiple Hadamard gates (Kronecker Gate).

 $\ket \psi = \sum_{j=1}^{8} \frac{1}{\sqrt 8} \ket j$ 

The character "j" in this notation represent the decimal expression of the 3 units binary expression. Let's regard 000,001,...,111 as binary scale and transform it in decimals. Then we can get above expression.



If we pass the qubits to $U_f$, then we can get below states 

$U_f \ket \psi = \frac{1}{\sqrt 8}\ket{000} +\frac{1}{\sqrt 8} \ket{001} - \frac{1}{\sqrt 8} \ket{010} + \frac{1}{\sqrt 8}\ket{100} +\frac{1}{\sqrt 8} \ket{011} + \frac{1}{\sqrt 8} \ket{101} + \frac{1}{\sqrt 8} \ket{110} + \frac{1}{\sqrt 8} \ket{111}$

 At this time, the probabilities of each state are all same. However, by applying some operation, we can change the probabilities which is called as **Amplitude Amplification**

 There are various techniques to do it, but most famous one is **Inversion about the mean** technique

  If we takes the inversion about mean to eight amplitudes, then the amplitude of $\ket{010}$ who has the only negative amplitudes increase and the amplitudes of the other ones decrease. Let's see below figure.

![](/assets/img/post/2020-09-23/figure1.PNG)

 

 The operator $U_{\psi}$ of inversion about mean is below. 

$U_\psi = 2\ket \psi \langle \psi \mid - I_{2^n} \quad (\ket \psi \mbox{ is hadamard state}) \\\ \quad = H^{\otimes n} (\mid 0 \rangle^{\otimes n} \langle 0 \mid ^{\otimes n} - I^{\otimes n})H^{\otimes n}$

This is called as Grover diffusion operator

 The operator gives us some intuition in that it is similar with the projection matrix. 

![](/assets/img/post/2020-09-23/figure2.PNG)

 If we use them, then we can get more practical algorithms.



## 2. Grover's Searching Algorithm

**The searching algorithm of the classical computer**

 The amplitude amplification is used in various regions. One of them is searching. First of all, let's see the searching algorithm in the classical computer.

 Imagine there are 100 boxes and each box contain one type of the various chocolates. One of the boxes contains a mint chocolate and I want to find the box and eat it. As assuming the process that opening the boxes one by one, the case which takes shortest steps is finding the mint chocolate at first box and the case which takes  longest steps is cannot finding the chocolate until opening the 99th box. 

 Therefore, it takes at least one step and at most 99 steps. We can said that if the set of the box is S and the size of the set is n, then the time complexity function of the classical searching is O(n). If we regard the opening the box and checking the types of the chocolates as oracle, then we can interpret them as repeating the Oracle n times. 

![](/assets/img/post/2020-09-23/figure3.PNG)

  If there are additional informations about the set, then we can find it faster. For example, let's assume that the boxes are sorted based on the order of the name of the chocolates. Assume that we open the 50th box, check the name of the chocolate and figure it out it is Orange. Then we could know that the mint chocolate is contained at one of the 1~50th box. 

 For the next step, if we open 25th box and the chocolate in it is Hazel nut, then we can know that the mint chocolate will be in the 25~50th box. Like this way, we can search the location of the specific value more efficiently. This way is called as Binary Search. And because it takes step as $m(;m-1< \log_2 n < m)$, its time complexity function is $O(\log n)$. Therefore, it makes some exponential improvement. However, the binary search needs premise that the set have to be sorted. 

 Meanwhile, the Grover's searching algorithm in the quantum computer has $O(\sqrt{n})$ as time complexity function. It means the Grover's algorithm shows the Quadratic Improvement. Let's figure it out.



**Grover's Algorithm**

![](/assets/img/post/2020-09-23/figure4.PNG)

 The process of the Grover's algorithm is like below.

1. Check the size N of the set S and find n such that $2^{n-1} \leq N\leq2^n$
2. Construct or derive the oracle matrix $U_f$ which works to reverse the amplitudes of the basis ket. This can be defined or found in database.
3. Measure the state after applying $U_f U_{\psi}$ with $\sqrt{2^n}$ times. The measured state means the location of the target ket



 The classical searching algorithm applies the Oracle to each boxes and the Grover's algorithm applies the Oracle to entire boxes at once. 

It is based on the amplitude amplification and it have to be applied multiple times. By applying multiple times, the amplification's performance can be enhanced and it makes the gab between the probabilities increasing. 

 Obviously, there are errors to return non-target kets, and this error probability is $O(\frac{1}{N})$ 



## 3. Deutsch - Jozsa Algorithm

 Deutsch's algorithm is suggested at early age of the quantum algorithm. Even though its practical usage is not that high, the algorithm is first example that the quantum algorithm can show astronomical speedup compared to the classical computer. Deutsch-Jozsa Algorithm is multiple version of the Deutsch algorithm.

 The target problem of the algorithm is below.

> Whether the function $f:\{0,1\}^n \rightarrow \{0,1\}$ is a balanced function or a constant function?



 The balanced function is a function that half of the inputs are mapped to zero and the other half of the input are mapped to one. The constant function maps every input to either one or zero. This too are kinds of the Oracle. 

 

 In the classical computer checking the $2^n$ inputs, the best case is returning zero at the first step and returning one at the second step. In this cases, we can directly know that they are not constant function. In the worst case, the returned values until $2^{n-1}$ are all same values. In this case, we can determine them at $2^{n-1}+1$ step. Moreover, if the function is constant, then we have to check until $2^{n-1}+1$. However, the time complexity of the Deutsch's algorithm is $O(1)$



**Hadamard Math**

  This dominant efficiency comes from the superposition of the quantum states using the hadamard gate

$H \ket 0 = \frac{\sqrt 2}{2}(\ket 0 + \ket 1)$

$H \ket 1 = \frac{\sqrt 2}{2}(\ket 0 - \ket 1)$

 We can rewrite them as follow for $u \in \{0,1\}$

$H \ket u = \frac{\sqrt 2}{2} (\ket 0 +(-1)^u \ket 1) = \frac{\sqrt 2}{2} \underset{v \in \{0,1\}}{\sum} (-1)^{uv} \ket v$

 Multiplying -1 does not affect the probabilities but affect the amplitudes. Physicist said this as Phase Change.



 We can generalize above result as follow 

$H^{\otimes n} \ket u = H\ket u_1 \otimes H \ket u_2 \otimes ... \otimes H \ket u_n= \frac{1}{\sqrt{2^n}} \underset{v \in \{0,1\}^n}{\sum} (-1)^{u\cdot v} \ket v$

 In the Deutsch - Jozsa Algorithm, we use $\ket u = \ket{00...001}$ with n+1 qubits. In this case, because of $u \cdot v = v_{n+1}$, we can write them as follow.

$H^{\otimes n +1} \ket {00...01} = \frac{1}{\sqrt{2^{n+1}}} \underset{v \in \{0,1\}^{n+1}}{\sum} (-1)^{v_{n+1}} \ket v  $

​                               $= H^{\otimes n} \ket 0 ^{\otimes n} \otimes H \ket 1$





**Deutsch - Jozsa Algorithm**

![](/assets/img/post/2020-09-23/figure5.PNG)

 Left side part of the $U_f$ describes the above circumstance. The $U_f$ work as follow

$U_f (\ket x ^{\otimes n} \otimes \ket y) = \ket x ^{\otimes n} \otimes \ket {y \oplus f(x)}$



Each of the $\ket x^{\otimes n}$ and $\ket y$ is follow.

$\ket x^{\otimes n} = H^{\otimes n} \ket 0 ^{\otimes n} = \frac{1}{\sqrt {2^n}}\underset{x \in \{0,1\}^n}{\sum} (-1)^{f(x)} \ket x$

$\ket{y} = H \ket 1 = \frac{1}{\sqrt 2} (\ket 0 - \ket 1)$  



If we apply $U_f$, then we can get follow result 

$U_f (\ket x ^{\otimes n} \otimes \ket y) = ( \frac{1}{\sqrt {2^n}}\underset{x \in \{0,1\}^n}{\sum}\ket x) \otimes (\frac{\sqrt 2}{2} \ket{f(x)} - \frac{\sqrt 2}{2}\ket{1\oplus f(x)})$



If $f(x)$ is zero, then $(\frac{\sqrt 2}{2} \ket 0 - \frac{\sqrt 2}{2}\ket{1})$ 

If $f(x)$ is one, then $(\frac{\sqrt 2}{2} \ket 1- \frac{\sqrt 2}{2}\ket 0)$



We can merge the result and rewrite them

 $(-1)^{f(x)}\frac{\sqrt 2}{2} (\ket 0 -\ket 1)$



 The probability of the state is transferred to the former part with entanglement. So we can write it as follow.

$U_f (\ket x ^{\otimes n} \otimes \ket y) = ( \frac{1}{\sqrt {2^n}}\underset{x \in \{0,1\}^n}{\sum} (-1)^{f(x)} \ket x)(\frac{\sqrt 2}{2} \ket 0 -\frac{\sqrt 2}{2} \ket 1)$

 The latter part is a constant. In the former part, the Oracle f(x) is contained in the form as $(-1)^{f(x)}$. 



Now, let's apply the hadamard gate again. We can use the formula of the hadamard gate mentioned above.

$H^{\otimes n}(\frac{1}{\sqrt {2^n}}\underset{x \in \{0,1\}^n}{\sum} (-1)^{f(x)} \ket x) = \frac{1}{2^n}\underset{x \in \{0,1\}^n}{\sum} (-1)^{f(x)} \underset{v \in \{0,1\}^n}{\sum} (-1)^{x\cdot v}\ket v$



If the f(x) is constant, then we can take it out because f(x) = c like below. 

​                                                         $=\frac{1}{2^n}(-1)^{f(0)} \underset{v \in \{0,1\}^n}{\sum} [ \underset{x \in \{0,1\}^n}{\sum} (-1)^{x\cdot v}]\ket v$

 If $\ket v = \ket {0}^{\otimes n}$, then $\forall x, x \cdot v = 0 $ and $[ \underset{x \in \{0,1\}^n}{\sum} (-1)^{x\cdot v}] = 2^n$

 If $\ket v \neq \ket 0^{\otimes n}$, then for the combination of x, the half of the $x \cdot v$ is zero and the half of the $x \cdot v$ is one.  Therefore, $ [\underset{x \in \{0,1\}^n}{\sum} (-1)^{x\cdot v}] = 0$

 Therefore, we can get following result. 

$H^{\otimes n}(\frac{1}{\sqrt {2^n}}\underset{x \in \{0,1\}^n}{\sum} (-1)^{f(x)} \ket x) = (-1)^{f(0)}\ket{0}^{\otimes n}$

 If we measure them, then the result if $\ket{0}^{\otimes n}$ with 100%



If the f(x) is balanced, then it becomes as follow.

​                                                      $=\frac{1}{2^n}\underset{v \in \{0,1\}^n}{\sum} [ \underset{x \in \{0,1\}^n}{\sum}(-1)^{f(x)} (-1)^{x\cdot v}]\ket v$

For the $\ket v = \ket 0^{\otimes n}$, because $(-1)^{x \cdot v} =(-1)^0=1$, we can write them as follow.

​                                                      $=\frac{1}{2^n}\underset{v \in \{0,1\}^n}{\sum} [ \underset{x \in \{0,1\}^n}{\sum}(-1)^{f(x)} ]\ket v$

And because half of them is zero, so $(-1)^{f(x)} =(-1)^0 =1$, and half of them is one, so $(-1)^{f(x)} =(-1)^1 =-1$

Therefore  $[ \underset{x \in \{0,1\}^n}{\sum} (-1)^{f(x)}] = 0$ and the probability of measuring $\ket 0 ^{\otimes n}$ is zero



 To sum up, if the f(x) is constant, then the probability of measuring $\ket 0 ^{\otimes n}$ is 100% and if the f(x) is balanced, the probability of measuring $\ket 0 ^{\otimes n}$ is zero. Therefore, we can determine the property of the function with Deutsch's algorithm



 Until now, we have seen the Grover's algorithm and Deutsch's algorithm. This two algorithms are two of the most simple algorithms and good examples to understand how the probability transfer and the amplitude amplification works.

***
 Sutor, R. (2019). Dancing With Qubits. Birmingham,UK:Packt
 Bernhardt, C. (2019). Quantum computing for everyone. Boston, Massachusetts:The MIT Press
