---
title: \[Basic of Quantum Computer \]Part 1.Concept of Quantum Computer and Qubit
categories: [Quantum]
tags: [Quantum Computer]
excerpt: Introduction and fundametals of Quantum computer
sidebar:
  - title: "Basic of Quantum Computing"
    nav: Quantum_eng
author_profile: True
---

## Chapter 1. Concepts of Quantum Computer and Qubits

## 0. What is Quantum Computer?

 Since the first commercial computer ANIAC developed, there are tremendous improvements in computer technologies. For instance, experts say that the computation power of modern smarts phones is one billione times stronger than ANIAC and we are hard to look for someone who don't have their own smart phones. 

 One of the fundamental technologies of this improvement is in nano techonologies used in semi-conductor which make it possible to set billion parts at nail-sized chips. However, the nano technology of semi conductors is reaching the wall that impossible to be overcome theoretically. That is, the computer hardware reached the limit.  

 Nevertheless, there are plenty of subject in the contemporary academic fields which need much more higher computational power than the limit. Handling super-big data or simulating millions of combination are the examples.

 Therefore, the most urgent task of human being is developing new computer which can jump over the limit of the contemporary computers. And this is the quantum computers.

![](/assets/img/post/2020-08-10/figure3.jpg)

 Now, several companies including Google,MS are making the quantum computers and the leader of the technologies is definitely IBM. IBM already makes a 64-qubits quantum computer and experts expect that in 2023, IBM will invent 1000-qubits quantum computer which is regarded as being able to beat super computers.

 If the pratical quantum computer is invented, then the paradigm of data science would be totally changed. For example, the quantum computer can accerlerate the sampling methods which is regarded not practical than the optimization methods because of its slow speed and the algorithms which are too complicated to be used in reality could also be commercially used. 

 To use the quantum computers, we need to know the theories and algorithm of the quantum computer. However, because the quantum computer is the combination of mathematics, physics, engineering and computer science, it is hard to know all of them. 

 Therefore, this series of posting focuses to understand the basic theory of the quantum computer and only specific region of algorithm which is relevant with data science and abandon less interested things like hardware or cryptography.



## 1. The basics of the quantum computer

  The Quantum computer can solve the problems which have to take astronomical times to calculate with the classical computers. This overwhelming power is due to its software not the hardware. That is, the efficiency of the quantum computer is because it solve the problem in totally different direction from classical computers. 

 Let's see factorization. To factorize 100023, the classical computer have to divide them with prime numbers. If the remainder is 0, then the prime number is factor of 100023. It have to do them at least square root of 100023. Because the calculation needs super time, the factorization is one of the hardest problems for the classical computers.

 However, the quantum computer can reduce the time dramaticallu by using the concepts of superposition and observing the entire result in one step. Because modern criptographies are based on factorization, the contemporary cryptosystem would be neutralized mostly. 

![](/assets/img/post/2020-08-10/figure5.png)

 For another example, there is a Deutch's Algorithm. If we want to know whether some specific functions are contant functions or balance functions, we have to see all of the result once at a time.  But the quantum computer, can observe the result just one step. Therefore, the time complexity would become from n to 1.

 That is, the quantum computer can work better with better algorithms. Then someone might wonder that how about just apply the algorithm to the classical computers, but this is impossible because its base is different. 

![](/assets/img/post/2020-08-10/figure6.png)

 The basic unit of the classical computer is a bit which takes a value of either 1 or 0. The classical computer implements them with electronic signal; if the signal is on, then they intepret it as 1 and if else as 0. Then it passes the bit to the gates(;transister, physically) and get some computational results.

 Meanwhile, the basic unit of the quantum computer is Qubit. This qubit contains three unique charateristics; Superposition, Measurement and Entanglement. This Three characteristics is the sources of the high efficiency of the quantum computer. Let's figure it out.



## 2. Charateristics of Qubit

 The experts usually express the bit as a switch and the qubit as a spin. This is inspired by Stern-Gerlach experiment and we can understand almost every part of the characteristics with the experiment. Below is the depict of the experiment, but the interpretation and details might be very different from the physicist and even might be wrong. Nevertheless, it could help the outsiders understand the concepts. 

 Let's imagine a ball-shaped magnetic. There is no visible discriminate line between N pole and S pole so we don't know which direction is N pole. Let's shot this ball to a tunnel of measurement like below.

![](/assets/img/post/2020-08-10/figure1.jpg)

 Because the N pole of the tunnel is more poped up, if the N pole of the magnetic is upside, then it will tilt downward and if the N pole is downside, then it will tilt upward

 But what about if the N pole and S pole makes exactly 90' degree? Although many scientist expected that it will move horizontally, but in the experiment, every magnetic tilt either upward and downward.  

 Physicists thought that the direction of the magnetics might be decided before shot. They thought that because the angles might be very subtly tilted to upward or downward, like 89.99999',  they move to that side.

  This explanation can be interpreted as a kind of hidden variable theory. Some variables which were unobservable and hidden determine the direction of the magnetics. This seems resonable.

 However, Copenhagen interpretation, a canonical interpretation of the quantum physics, takes different position with this explanation.

 They regard the state of the magnetic before shotten having a superposition state which means that it is pointing to upside and downside at the same time.  There is no hidden variable and the direction of the magnetic is purly random.

 That is, the state that can be anyone is called as **superposition** state. And not like the bit, qubit can be the superposition state.

>  As an aside, the Schrödinger's cat is to criticize this explanation. There is a cat and some toxic gas in device which emit the gas with probability of 50%. According to Copenhagen interpretation, the cat is dead and alive at the same time. That is, the experiment wanted to talk that, in the visible real world, the explanation is totally unreasonable. Nonetheless, with some real experimental results, the Copenhagen interpretation have overtaken all other explanations and takes the canon.

 Despite the superposition state is represented with uncertainty, it can be controlled. If the magnetic move upward, then the direction of magnetic will be aligned to upward which means that if we shot the magnetic without other touches, then we can get result of moving upward with probability of 100%.

 At this time, let's shot the 100% upward magnetic to tunnel spinned by 90' degree. In this case, we can get the magnetic which tilt downward with 50% and upward 50%. 

 This means that with the **measurement** itself, we can influence the direction of the magnetic and change the state from superposition state to non-superposition state and vice versa. 

![](/assets/img/post/2020-08-10/figure4.png)

 This implies two thing; 1. The measurement itself affects the state of the quantum and 2. Accoding to the direction of the measurement, we can see the state differently.

***

 How can we make the computer with this magnetic?

 The definition of the quantum is something that have phisical state which can be measured discretely. However, the physicist proved that literally everything in the world is discrete not continuous.

  Therefore, the quantum is just something that could be measured. That is, power, speed,mass everything is quantum and magnetic in the above experiment is also quantum.

 If we use the similar substances which has similar property with above magnetics and represent upward as 0 and downward as 1, then we can express the classical bit with quantum.

 However, the difference between this representation and classical bit is it can show superposition of 0 and 1. This is a qubit; the basic unit of the quantum computer.

 Of course, because the qubit can represent 1 and 0 with 100%, they can replace the bit too. Therefore, the quantum computer can do all of the things that the classical computer can do

 Finally, let find out last important chracteristic of the quantum;Entanglement

 Think about two bits in the classical computer. Two bits means two switch. Turning on one of the switches would not affect the other switch. That means two bit move independently.

 However, the quantum computer can change the one qubit by changing the other qubit. For example, let's split a magnetic and make it two. This process preserves the direction of each splitted magnetics. Without changing the direction, let's shot one magnetics to the other side of the earth. In this time, if we observe N pole of our magnetic pointing upside, then we can directly know the direction of other magnetic in the otherside of the earth.

 This kind of phenomenas is called as **Entanglement** and by using it, we can solve various mathematical problem naturally. 

 This example is most simple one and the quantum computer can make diverse types of entanglement.

***

Let's summarize above.

- Quantum physics is dealing with the microworld where the **Measurement** itself affect the state of the subjects
- In this time, the unmeasured state is interpreted as a **Superposition** of several states
- In the quantum world, one quantum can be direcly connected with other quantum and we called it as **Entanglement**.

Consequently, we can say the quantum computer is a computer using these three chracteristics of the quantum world



## 3. Mathematical Representation of Quantum

Until this line, we can understand the basic concepts of quantum computer somehow. However, we cannot imagine concretely how this concepts could be connected with mathematical algorithms. By using the Linear Algebra, we can beautifully connect the concept of quantum and mathematical world

 The qubit and algorithm of the quantum computer can be perfectly represented with linear algebra. In the quantum physics, they ususally use Braket notation which is called as Dirac's notation.

 One qubit can be expressed as follow



![](/assets/img/post/2020-08-10/figure10.PNG)


$\mid \Psi \rangle = \left[ \begin{array}{c} \ \psi_1 \\\ \psi_2\end{array} \right] ;(\psi_1^2 + \psi_2^2 = 1)  $

 In other words, we represent the direction(;state) of the qubit with unit vector in 2-dimentional space.

 Then, someone might think that by expressing [0,1] as 0 and [0,-1] as 1, we can combine 2-dimensional plane and quantum world. But, unfortunately, the quantum computer takes little bit different approach with this one. Concretely, like below 

$\mid 0 \rangle = \left[ \begin{array}{c} \ 1 \\\ 0 \end{array} \right], \mid 1 \rangle = \left[ \begin{array}{c} \ 0 \\\ 1 \end{array} \right]$

 If we draw them at 2-dimensional plane, then it shows totally different way that we normally expect in the coordinate plane. Thus, let's forget about it and think as learning brand new plane.

 How can we express the superposition state with above notation? Let's see below 

$\mid \Psi \rangle = \left[ \begin{array}{c} \ \psi_1 \\\ \psi_2\end{array} \right] = \psi_1\mid 0\rangle + \psi_2\mid 1\rangle]$

 That is, we can see it as the mixed state of the state of 0 with $\psi_1$ and the state of 1 with $\psi_2$. This is called as Probability Amplitude. If we take square of them, then we can calculate the probabilities of outcome from each state.

 Then how about state of 50:50 probability?

$\mid \psi \rangle = \frac{1}{\sqrt{2}} \mid 0 \rangle + \frac{1}{\sqrt{2}} \mid 1 \rangle $

 If we express it above, then because the square of each amplitudes is 1/2, so we can say the probability is 50:50. But, let's see other example. 

$\mid \psi \rangle = \frac{1}{\sqrt{2}} \mid 0 \rangle - \frac{1}{\sqrt{2}} \mid 1 \rangle $

 In this case too, if we take square, we can get 50:50. 

 In quantum cumputing, this two states are different states with each other. In the previous example, if we shot the magnetic with N-upside, we can get 50:50. But if we shot the magnetic with S-upside, then we can see same result too.

 That is, in reality, N pole can takes many directions. Therefore, we will discern this cases. And for the above states, we named them as below. 

$\mid + \rangle =  \frac{1}{\sqrt{2}} \mid 0 \rangle + \frac{1}{\sqrt{2}} \mid 1 \rangle $ , $\mid - \rangle =  \frac{1}{\sqrt{2}} \mid 0 \rangle - \frac{1}{\sqrt{2}} \mid 1 \rangle $

 This states cannot be discriminated with 0' degree tunnel. But with 90' degree tunnel, we can perfectly discriminate two states.

 Therefore, by seeing two states as different states, we can store deeper information in one qubit.

 However, the reality is 3-dimension not 2-dimension. Therefore, it would be more appropriate to use 3-dimensional vector rather than 2-dimensional vector.

 Nevertheless, we use 2-dimensional vector by introducing complex number i. By using complex plane, we can represent 3-dimentional space with 2-dimensional vector. Therefore, we can again name the special representation like below.

$\mid i \rangle =  \frac{1}{\sqrt{2}} \mid 0 \rangle + \frac{i}{\sqrt{2}} \mid 1 \rangle $ ,$\mid -i \rangle =  \frac{1}{\sqrt{2}} \mid 0 \rangle - \frac{i}{\sqrt{2}} \mid 1 \rangle$

  We can summarize the quantum state as follow.

![](/assets/img/post/2020-08-10/figure2.PNG)

 This is called as Bloch Sphere Representation

 In summary, the quantum state have the generalized form as below.

$\mid \psi\rangle = \cos \theta \mid 0 \rangle + \sin \theta e^{i \phi} \mid 1 \rangle (; a^2 + b^2 =1)$

 The $e^{i \phi}$ is complex number which norm is 1 and is called as Quantum Phase specially. We will see the concept of complex number in the quantum computer at other posting.


***

 Until now, we see the concepts of the quantum computer and basic unit qubit. In the next posting, we'll gonna see the basic quantum gates and circuits.

