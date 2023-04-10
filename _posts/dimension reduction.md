## Advanced PCA 1. PCA, Kernel PCA, Sparse PCA



 Principal Component Analysis is one of the most popular methods used in dimension reduction. Therefore, a lot of advanced or applied versions of PCA are developed. In these posting series, we'll introduce various kinds of PCA. We'll mainly focus on the target problem, algorithms, examples and properties of the methods. 

 

 Before we see them, let's see the concept of dimension reduction first. 



### Why we need Dimension Reduction?

 The dimension reduction is a field to study shrinking big data into smaller data containing essential information of the original data. Why we have to shrink the size of data? If the data's size (dimension) is too large, it can lead to numerous issues. People have called this phenomena by curse of dimensionality. 



#### Curse of Dimensionality

> 1. Needs Huge Resources
> 2. Big Sparsity Problem
> 3. Banishing Central Points
> 4. Etc..



 First of all, when dealing with large data sets, significant memory and computational power are required. Additionally, the computational complexity of many algorithms increases even quadratically or exponentially with the size of the data, exacerbating the issue. 

 Secondly, big data often results in big sparse problems, which can arise due to unintentional omission of values or actual measurements resulting in a value of 0 during the data collection process. The first scenario may be caused by malfunctioning measuring instruments, while the second may occur when events, along with their variables, are rare, such as in the case of cancer. 

![스크린샷 2023-04-10 오후 3.35.08](/Users/minhyeong-gyu/Library/Application Support/typora-user-images/스크린샷 2023-04-10 오후 3.35.08.png)

Reference : https://www.youtube.com/watch?v=EXHR2-hECRM&t=547s&ab_channel=12Math

 The third problem pertains to probability problems. Let's say we have $n \times p$ data about patients and their features, with all of the features following a normal distribution. If we consider a patient to be normal at feature A when the observation falls within $2 \sigma$, i.e., $o_{iA} \in (\mu-2 \sigma,\mu+ 2\sigma)$, the probability of a patient being normal is approximately 95%. However, the probability of a patient being normal at all 50 features decreases rapidly to 0.0769. This means that the ratio of normal samples in the data decreases significantly as the number of features increases. For example, if we investigate 100 different diseases in patients, it is highly unlikely that we will find any normal patients. This means that every individual has their own unique biological properties. Therefore, if we build a predictive or testing model, it could fail to capture the overall pattern due to this issue.

 

### Essense of Dimension Reduction

 We can say that the dimension reduction aim to solve the curse of dimensionality. However, as a graduate student majoring in dimension reduction, I want to broaden this view into more general. 

 Let assume there is $n \times p$ , matrix data. 

 The narrowest meaning of dimension reduction is reducing the dimension $p$ in to $q$ where $q$ is much smaller than $p$. There are two strategy to do that. The first one is **Feature Selection** that selecting $q$ numbers of variables and eliminating $p-q$ numbers of variables. There are various criteria according to the data and purpose. The second one is **Feature Extraction** that making $q$ numbers of new variables using existing $p$ numbers of variables. 

 There are little bit general concepts that reducing the sample size $n$ into $m$. Because it aims to shrink the size of the data, it can be regarded as dimension reduction too. **Clustering** or **Sample Selection** are representative methods for it. 

 To be more general, the dimension reduction handle even unstructured data such as sound,text and image. Because the data is recored in the various shapes of the form besides matrix form, the concept of reduction becomes much more general such as bit size, resolution etc... However, people usually regard the unstructured data as tabular data with special structure and execute applied versions of dimension reduction methods used at the tabular data.  

 

 Finally, in the most essential and philosophical aspect, and with exaggeration, the dimension reduction can be considered as statistics itself. It is about deriving essential information from the given data. For instance, mean and variance is a result of dimension reduction that reducing the data into just a number. Complicated model such as deep learning or kernel methods can be regarded as a dimension reduction too because they contain a procedure mapping the input data into feature space where the information of data is well-organized. This point of view is not just my imagination. 



<img src="/Users/minhyeong-gyu/Library/Application Support/typora-user-images/image-20230410163533891.png" alt="image-20230410163533891" style="zoom: 67%;" />



 This is a preface of "**An Introduction to Envelopes**" written by the R.D Cook, one of the greatest statisticians of these day. The quote is from Ronald Fisher, the father of statistics, who built skeleton of almost every part of statistics. Thus, even the most prominent statisticians believe that the fundamentals of dimensionality reduction align with the field of statistics as a whole.



### Principal Component Analysis (PCA)

 The PCA is one of the most important methods of feature extraction. 

Let assume we have $n$ samples data matrix $D:n \times p$ which is generated from the random vectors $X$ in $\mathbb{R}^p$. We want to find the much smaller random vector $Z = f(X)$ in $\mathbb{R}^q$ which preserve the information as many as possible. 

 For instance, if the random vectors are $(X_1,X_2,X_1)$, we don't have to use all of three variables and only use $(X_1,X_2)$. In this case, the reducing function is $f(X_1,X_2,X_3) = (X_1,X_2)$. This is quite a trivial case. 

 For little bit nontrivial case, if the random vectors are $(X_1,X_2,X_1+X_2)$, the only information we needs is just $(X_1,X_2)$. We can recover third variable $X_1+X_2$ using the first two variables whenever we want. 

 Now let's be more complicated. If the random vectors are $(X_1,X_2,X_1+X_2,X_1+X_2+X_3)$, we need $(X_1,X_2,X_3)$. Notice that the third variables $(X_1+X_2)$ can be perfectly recovered using $X_1$ and $X_2$ but the fourth variable cannot be perfectly recovered without $(X_3)$.  If we need to reduce the dimension of $Z$ to 2, consider excluding $X_3$ and instead using $(X_1,X_2)$, since $X_1$ and $X_2$ are involved in three of the original variables, whereas $X_3$ is only involved in the fourth variable.





## Advanced PCA 2. Probabilistic PCA, Contrastivce PCA, Probabilistic Cobstrsative PCA, Spatial PCA



## Advanced PCA 3. Binary PCA