---
title: \[Basic of Quantum Computer\] Part 6. Starting Qiskit
categories: [Quantum]
tags: [Quantum Computer]
excerpt: Installing qiskit and constructing basic circuit Qiskit
sidebar:
  - title: "Basic of Quantum Computing"
    nav: Quantum_eng
---

## 0. What is Qiskit?

 Qiskit is a python package developed by IBM. It is open source quantum computing framework which is designed to approach the quantum computer using cloud system and constructing the quantum circuits.

 The research of the quantum computing is done with the process that researcher send the pre-designed circuits to IBM and IBM operates the received cirtuit with their quantum computer. Qiskit is the framework to control these processes. 

 Qiskit contains various abilities but this posting focuses on construction of the quantum circuits. We'll gonna see 1. start the qiskit, 2. design circuit, 3. request experiments and 4. get the results

 In actual, Qiskit provides a lot better tutorials than this posting. Check it https://qiskit.org/documentation/getting_started.html



## 1. Starting Qiskit

 Qiskit is best working with Jupyter notebook of Anaconda. Therefore, we have to install the notebook at https://www.anaconda.com/products/individual 



Qiskit is distributed with name "qiskit". So it can be easily installed by typing "pip install qiskit" in prompt like below.

```
pip install qiskit
pip install qiskit[visualization]
```

 

Now, we can call qiskit by "import qiskit" in the jupyter notebook



To approach real quantum computer, we have to get authorities at the IBMQ. With follow link(https://quantum-computing.ibm.com/) , sign in IBMQ.





Let's copy API token in the red lectangular in the below figure. 

![](/assets/img/post/2021-03-11/figure1.png)

 The copied code can be saved in the local and we can emit the process next time.

```
from qiskit import IBMQ
IBMQ.save_account('MY_API_TOKEN')
# copied code have to be typed at MY_API_TOKEN
```



## 2. Designing Circuit

#### A.  Importing Qiskit

 To import qiskit, we need to type following command.

```
from qiskit import QuantumCircuit, execute, Aer
```



#### B. Making circuit instance

 Quantum circuits are not that complex. Therefore, we can save them in one instance. 

 The command to build a instance to store the circuit is below.

```
circ = QuantumCircuit(n_input,n_output)
```

- n_input represents the number of input qubits and n_output represents the number of output qubit

- If there is only one number in the argument, it automatically set the input and output with same number

  

#### C. Adding measure

 We can add the measurement with below command. 

```
circ.measure(i,j)
```

- Character i means index of qubit. It start with zero 

- Character j represent the location of the bits which store the measurement result of i qubits

  

#### ㄹ. Visualizing Circuit

We can visulalize them with follow command.

```
circ.draw(output='mpl',justify='none')
```

- It visualize circ instance.

- By adding "output='mpl'", it shows more fancy plot by using the package "matplotlib"

  

ex)

The result of above command is below.

![](/assets/img/post/2021-03-11/figure2.PNG)



#### D. Testing circuit

We can use a real quantum computer or use simulator. The relevant command is below.

```
result =execute(circ,Aer.get_backend('qasm_simulator')).result()
```

- Inject designed circuit in the "circ" 
- By using Aer.get_backend(), we can assign computer or simulator.
  - There are simulator named as "qasm_simulator" or "statevectorsimulator" 
  - By using "imbq.jobs", we can use real quantum computer of IBM

- If there is no additioanl options, they iterate 1024 times 

  

#### ㅂ. Adding gates

 We can add other gates in the same way like adding measurement. It is added from front of the circuits.

```
# Pauli Gate : Apply to n_q qubit
circ.id(n_q)
circ.x(n_q)
circ.y(n_q)
circ.z(n_q)

# Cliford Gate : Apply to n_q qubit
circ.h(n_q)
circ.s(n_q)
circ.sdg(n_q)
circ.t(n_q)
circ.tdg(n_q)
circ.rx(n_q)
circ.ry(n_q)
circ.rz(n_q)

# Control and Swap Gate : Apply to n_q1 and n_q2 qubit
circ.cx(n_q1,n_q2)
circ.cy(n_q1,n_q2)
circ.cz(n_q1,n_q2)
circ.ch(n_q1,n_q2)
circ.swap(n_q1,n_q2)

# Tripple Gate : Apply to n_q1,n_q2 and n_q3
circ.ccx(n_q1,n_q2,n_q3)
circ.cswap(n_q1,n_q2,n_q3)

# Special Gate 
circ.measure(n_q)
circ.reset(n_q)
circ.x(n_q).c_if(n_c,0)

# Barrier
circ.barrier()
```



#### ㅂ. Visualizing

 The results of the quantum algorithm are results of 1024 shots at usual. So for the simple algorithm, histograms are working well.

```
from qiskit.visualization import plot_histogram
counts  = result.get_counts()
plot_histogram(counts)
```

![](/assets/img/post/2021-03-11/figure3.PNG)

 Moreover, we can visualize two experiments at once.

```
legend = ['First execution', 'Second execution']
plot_histogram([counts, second_counts], legend=legend)
```



At final, we can draw the bloch sphere like below.

```
from math import sqrt, pi
from qiskit_textbook.widgets import plot_bloch_vector_spherical
coords = [3*pi/4,3*pi/4,1] # [Theta, Phi, Radius]
plot_bloch_vector_spherical(coords) # Bloch Vector with spherical coordinates
```

![](/assets/img/post/2021-03-11/figure4.PNG)



 
