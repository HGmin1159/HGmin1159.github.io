---
title: \[Basic of Quantum Computer\] Part 7. Security System of the Quantum computer and Quantum Protocol
categories: [Quantum]
tags: [Quantum Computer]
excerpt: Comparing security of quantum and classical computer and Quantum protocol
sidebar:
  - title: "Basic of Quantum Computing"
    nav: Quantum_eng
---

$\def\ket#1{\mid #1\rangle}$

## 1. Security System of the Classical Computer

Quantum computer can show amazing performance for not only speed but also security.

Exaggeratively speaking, it has "theoretically perfect security system". 



**Security System of the Classical Computer**

There is a simple and famous example when handling the security problem: ABE situation. Alice(A) wants to send some messages to Bob(B), but Eve(E) tries to steal the messages.

 For example, suppose that Alice is going to send a message "1225" to Bob to see him at Christmas. Alice is going to write 1225 at a paper, but she is worry that her rival Eve will steal the message. Therefore, Alice  send the message in a way that Bob can understand but Eve cannot.

The most general way is sharing the way to interpret the message with Bob. For example, encode 1225 as 2336 with addition 1 to each element. If the Bob know the encoding method, he can easily interpret the message but Eve cannot interpret it.

Like this way, the information shared by the communication party is called as Key. This procedure is used more or less for almost every cryptography.

 But there is a problem in this method. If Eve is expert on the cryptography, then she can infer the method of encoding and can interpret the message.

![](/assets/img/post/2021-03-13/figure1.PNG)



#### RSA Cryptosystem (Rivest/Shamir/Adlemam cryptosystem)

 Therefore, we need some problem hard to be inferred for outsider but easy to be solved for the party. This can be called as NP-hard problem. NP-hard problem is a concept used at Algorithm which means that the problem needs exponential time to derive some solutions but takes polynomial time to confirm the solutions. The simplest and hardest problem which meet the conditions is a factorization problem. In general, it is hard to find the factor but easy to confirm it. 

 For example, when Alice send the number 1225, they can share a specific number like 1001 and multiply it to the message. In this time, Alice will send the number $1226225(1225\times 1001)$. Bob can understand the number intended by Alice is 1225 by devide 1226225 with 1001.

 To figure out the number 1001, Eve have to do factorization. She have to see the result of deviding the number with prime numbers and examine whether the remainder is zero or not and it takes a lot of time. When the problem become complex, then it is almost impossible to solve the problem. 

![](/assets/img/post/2021-03-13/figure2.PNG)

In reality, people use much more complex system based on the RSA system so they protect the message with multiple layers .



## 2. The Cryptosystem of the Quantum Computer.

#### Adverse of the Quantum Computer and Nuetralization of RSA cryptosystem

 The RSA system can be nuetralized when the quantum computer become commercialized. It is because the quantum computer can solve the factorization problem in polynomial time.

 According to the research of Dr. John Martinis in UCSB, to factorize 2048 bit number, we have to invest $1,000,000 Trillion to make a super computer which has size as large as entire north America and use 1 Trillion GW for ten years. (Contemporary annual electricity products of world is 3000 GW)  

 Meanwhile, if we use the quantum computer, we have to invest $100 billion to make 1cm chip storing 10 million qubit and spend 0.01GW for 16 hours. It takes 0.000001% of money and 0.0003% of electricity and incomparable size of space.

 Therefore, most of the RSA cryptosystem based on the factorization can be destroied. Fortunatively, there is a substitute in the quantum algorithm. 

  

####  The cryptosystem of the Quantum Computer 

 Like the classical cryptosystem, quantum system also share some key. The shared key is not numbers but the direction of measurement. By the direction of the qubit and measurement, the interpretation is changed. (Reference- https://hgmin1159.github.io/quantum/quantum1_eng/) 

![](/assets/img/post/2021-03-13/figure4.PNG)

 First of all, let assume Alice wants to deliver binary numbers 1001 to Bob. Alice and Bob share some measurement direction as 0',90',0',270'. Alice encode her value with predetermined directions. (figure-1)

 Bob can interpret the number with shared key and can know the Alice's number is 1001(figure-2)

 Assume that Eve want to steal the message. Eve have to interpret the qubit with her own key. Suppose that Eve measure the qubit with the direction of 0',0',0',0'. Of course, Eve cannot interpret the number because it is different from the Alice's one. (figure-3) 



 The important difference between the classical computer and quantum computer is, Eve distort the entire message which Alice want to deliver to Bob. Therefore, Eve cannot reverse the state of qubit before she measure them.  (figure-4) 



 The advantage of this system is follow.

- Infinitely many cases - we have seen the measurement key of 0,90,180,270 but the measurement degree can be any number between 0~360. If we consider the dimension and entanglement, then the fidelity of the number can be more.  The number of the key means when solving the cryptosystem, Eve have to consider the cases as many as the number.
- Restricted Trial - In the classical cryptography, people can do some trial and error to capture exact key. This means that they can try to divide some numbers with prime numbers several times. However, in the quantum computer, they cannot do that because the whole information would disappear with just one trial. 
- Capture the interference of 3rd person - If 3rd person tries to do interference, then the information become directly distorted. This means that we cannot see origin information and Alice and Bob can directly know that someone else tries to steal their messages.

With above advantage, we can say that quantum computer cannot be hacked in theoretically. Of course above procedure is not realized yet and there might be a lot obstacles to deal with problems. 



## 3. Quantum Protocol

Exchanging quantum information between quantum computers is not yet practical. Therefore, there are detours to exchange the information. Most famous one of them is Superdense Code and Quantum Teleportation which are called as Quantum Protocol.



#### Superdense Code

Superdense Code is algorithm to deliver two bit by deliver one qubit.

![](/assets/img/post/2021-03-13/figure11.PNG)

 Basic code of the superdense code is above. 

Phase 1. 

- First input $\ket{q_0q_1}$ is $\ket{00}$. By passing this qubits to Bell's circuit, we can make totally entangled qubits.   

  $\ket{00} \Rightarrow \frac{1}{\sqrt 2}(\ket{0}+\ket{1})\otimes\ket{0} \Rightarrow \frac{1}{\sqrt{2}}(\ket{00}+\ket{11})$

- And Alice and Bob share these qubits one by one. 



Phase 2. 

- Alice can deliver the information by manipulate the qubit

The total information represented by one qubit is 2 bit and it is one of the 00,01,10,11. Below table shows manipulating gates and its corresponding result bits.

| Gate  | Result bit |
| ----- | ---------- |
| I     | 00         |
| X     | 01         |
| Z     | 10         |
| Z - X | 11         |

If we pass through X, then qubit turns to follow. 

$ \frac{1}{\sqrt{2}}(\ket{00}+\ket{11}) \Rightarrow  \frac{1}{\sqrt{2}}(\ket{10}+\ket{01})$



Phase 3. 

- Bob then pass inverse Bell's circuit with shared qubit and his own qubit. In this time, the qubit become as follow.

$\frac{1}{\sqrt{2}}(\ket{10}+\ket{01}) \Rightarrow \frac{1}{\sqrt{2}}(\ket{11}+\ket{01}) \Rightarrow \ket{01}$



Phase 4.

- If we measure such qubit, then we can get 01 with 100%

***

If we use this circuit, then we have to deliver N qubits to deliver 2N bits

We can do them in actual by using qiskit and python like below.

```python
from qiskit import QuantumCircuit, execute, Aer
from qiskit.visualization import plot_histogram
circ = QuantumCircuit(2,2)
circ.h(0)
circ.cx(0,1)
circ.barrier()
circ.x(0)
circ.barrier()
circ.cx(0,1)
circ.h(0)
circ.barrier()
circ.measure([0,1],[0,1])
circ.draw(output='mpl',justify='none')
```

![](/assets/img/post/2021-03-13/figure5.PNG)

Circuit is above, If we learn the circuit at QASM simulator, then we can get following result.

```python
job_result = execute(circ, Aer.get_backend('qasm_simulator'))
plot_histogram(job_result.result().get_counts(circ))
```

![](/assets/img/post/2021-03-13/figure6.PNG)

We can see that it returns 10 with 100%



#### Quantum Teleportation

Quantum Teleportation is algorithm to deliver the qubit of Alice to Bob. It has following circuit

![](/assets/img/post/2021-03-13/figure7.PNG)

Phase 1 

- $\ket{q_0}$ is target qubit that Alice wants to deliver. Let's represent it as follow $\ket{q_0} = a\ket{0}+b\ket{1}$

- Alice and Bob share two perfectly entangled qubit each other as follow.

  $\ket{q_0}\otimes\ket{00} \Rightarrow \ket{q_0}\otimes\frac{1}{\sqrt{2}}(\ket{0}+\ket{1})\otimes\ket{0} \Rightarrow \ket{q_0}\otimes\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})$



Phase 2

- Alice pass the her qubit and shared qubit into inverse Bell's circuit. In this time, following qubit become below. 

$\ket{q_0}\otimes\frac{1}{\sqrt{2}}(\ket{00}+\ket{11})\\ \Rightarrow \frac{a}{\sqrt{2}}\ket{0}\otimes(\ket{00}+\ket{11})+\frac{b}{\sqrt{2}}\ket{1}\otimes(\ket{11}+\ket{01})\\ \Rightarrow \frac{1}{2}[\ket{00}(a\ket{0}+b\ket{1})+\ket{01}(b\ket{0}+a\ket{1})+\ket{10}(a\ket{0}-b\ket{1})+\ket{11}(-b\ket{0}+a\ket{1})]$

- In this time, the hardamard gate makes the qubit as follow. 

 $\ket{0} \rightarrow \frac{1}{\sqrt 2}(\ket{0}+\ket{1}),\ket{1} \rightarrow \frac{1}{\sqrt 2}(\ket{0}-\ket{1})$



 Phase 3

- Alice send the result of measuring the qubit to Bob. If the result is 00, then Bob have to takes I gates to $\ket{q_2}$ and if 01 then X, if 10 then Z and if 11,then  takes ZX gates to $\ket{q_2}$  
- That is, if the result is 00, then Bob's qubit is $(a\ket{0}+b\ket{1})$, so remain unchanged and if it is 01, then Bob's qubit is $(b\ket{0}+a\ket{1})$, so takes X gate.
- With above procedure, Bob can change his qubit into $\ket{q_0} = a\ket{0}+b\ket{1}$

***

Let's do this.

To implement it, we need c_if method. To use them we have to use ClassicalRegister() function as below.

```python
from qiskit import QuantumRegister, ClassicalRegister
qr = QuantumRegister(3, name="q")    
crz = ClassicalRegister(1, name="crz") 
crx = ClassicalRegister(1, name="crx") 
```



And then let's make random state as below. There is a function in qiskit to experiment.

```python
from qiskit_textbook.tools import random_state
from qiskit.extensions import Initialize
from qiskit.visualization import plot_bloch_multivector
psi = random_state(1)
init_gate = Initialize(psi)
init_gate.label = "init"
plot_bloch_multivector(psi)
```

![](/assets/img/post/2021-03-13/figure9.PNG)

Now let's make circuit with them. 

```
circ = QuantumCircuit(qr,crz,crx)
circ.append(init_gate, [0])
circ.barrier()
circ.h(1)
circ.cx(1,2)
circ.barrier()
circ.cx(0,1)
circ.h(0)
circ.barrier()
circ.measure(0,crz)
circ.measure(1,crx)
circ.barrier()
circ.z(qr[2]).c_if(crz,1)
circ.x(qr[2]).c_if(crx,1)
circ.draw(output='mpl',justify='none')
```

![](/assets/img/post/2021-03-13/figure8.PNG)



We need Statevector Simulator to check the state of the qubit. And let's use Bloch sphere to see the exact state of it.

```python
backend= Aer.get_backend('statevector_simulator')
result = execute(circ, backend).result()
psi  = result.get_statevector()
plot_bloch_multivector(psi)
```

![](/assets/img/post/2021-03-13/figure10.PNG)

We can see that state of third qubit is exactly same with state of first random qubit.



