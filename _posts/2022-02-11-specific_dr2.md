---
title: \[Paper Review\] Sparse Sufficient Dimension Reduction
categories: [Dimension]
tags: [차원 축소,Dimension reduction]
excerpt: Sparse Sufficient Dimension Reduction using Penalty
---



# 1. Sparse Data

 Sparse data means data with too many empty values. This empty values might means zero, null values or very small values. In any cases, we can consider the sparse data as data that does not have much information compared to its size


![](\assets\img\post\2022-02-11\figure1.png)

 There are several patterns how the sparse data generate. First of all, when the data is gathered from experiment or survey, if the procedure of them is not that perfectly handled then the data can contains a lot of zero or empty values. For example, people can check the 0 or 5 without thinking when they fill the surveys. 

Secondly, when the data is gathered from some devices or sensors, if some of them did not work well, then it can generate wrong values like zero.  

Finally, if the data contains so many feature but there are only a few samples, then it generates the sparse values. The most famous examples is data about spaceship launch. There are more than 20000 numbers of features affecting on the success of the spaceship launch but there are about 200 number of launch. We usually refer them as n<<p problem.



 The sparse data can generate many statistical problems. For examples, if the data have too many empty values, we can not trust the results from analysis. Moreover, if the data contain so many useless features, then many statistical method works bad. In addition to its computation times, some procedures containing numerical optimization might not converge or converge at the bad points. 

 Therefore, we have to deal with the sparse data in special methods. There are several approaches to handles them including data imputation or variable selection. Among them, the penalizing methods is known to apply at a lot of methods. 



# 2. Penalizing Methods

 The penalizing methods is injecting L2 or L1 penalty onto optimization problems. Most famous example is linear regression problems. For the ordinary linear regression problems, it usually use the least square estimator to estimate the coefficients of the regression. That is, for the data $$(X,Y)$$ we can set the optimization problem of the linear regression as follow.


$$
\underset{\beta}\min \parallel X\beta - Y \parallel
$$
The penalizing methods is adding norm of the parameters as follow.


$$
\underset{\beta}\min \parallel X\beta - Y \parallel + \parallel \beta \parallel_p
$$
If the p is one, it is called as Lasso regression and if the p is two, it is called as Ridge regression.

 There are theoretical explanations about the effect of the penalty onto sparse data. It could be understood in various approaches including optimization procedure or the analytic form of the estimator. 

 Or, we can understand it as imagining the situation. For example, imagine there are two feature in the data. As the values of $y$ change, the first feature changes dynamically but the second feature is not that changed. Therefore, the estimates of the coefficient of the second feature could be both large and small because its values did not affect the cost function a lot. 

 However, if there is a penalty at the size of the coefficient it self, then the procedure naturally reduce the coefficient of the second feature rather than first feature because reducing the second coefficient is more efficient way to reduce the whole cost functions. 

 As we can see the second feature as uninformative feature in the sparse data, we can understand how the penalizing method can mitigate the sparse problems. 



# 3. Sparse Sufficient Dimension Reduction

 The penalizing methods could be used in many fields such as deep learning, principal components analysis and clustering. However, the fields have to be solved with typical optimization problems form that minimizing some functions. 

 Therefore, we have to change the form of the generalized eigenvalue problems in the previous posting into optimization problems form.

 In the [Li, L. (2007). Sparse sufficient dimension reduction. *Biometrika*, *94*(3), 603-613.](https://academic.oup.com/biomet/article-abstract/94/3/603/263590), it introduce how the SDR methods could be interpreted in the form of the optimization problems. 

 First of all, $\mbox{GEV}(M,\Sigma)$ is a problem to finding the solution of following equation.


$$
M\beta_i = \lambda_i \Sigma \beta_i \\ \mbox{with } \Beta \Sigma \Beta =I
$$
The equation could be solved with maximization problem form as follow.


$$
\underset{B}{\max} tr(B^tMB) \\ \mbox{subject to } B^t\Sigma B = I
$$
  As mentioned at the previous posting, most of SDR problems could be solved by using generalized eigenvalue solver form. The $$M$$ is usually called as kernel matrix of SDR and they are as follow.

- **Sliced Inverse Regression :** $M = \mbox{var} \{E(X \mid Y)\}$
- **Sliced Average Variance Estimator :** $M = E\{\Sigma - \mbox{var} (X \mid Y)\}$
- **Directional Regression : **$$M = (2I-E((Z-\tilde Z)(Z-\tilde Z)^t \mid Y, \tilde Y))$$



Therefore, by adding the penalty term at the above solver, we can implement Sparse SIR, Sparse SAVE, Sparse DR. 



By using the Sparse SDR, we can explicit the essential information about the dependent variable from big data. For example, assume the data have too many features with relatively small samples such as $$1000 \times 1000$$. In that cases, we have to shrink the 1000 numbers of the feature by only using 1000 numbers of the samples. 

Solving it with ordinary methods could yields some problems. First of all, to find the optimal reducing coefficient, we have to decompose $$1000 \times 1000$$ matrix which takes a lot of times. Secondly, when reducing the new data with the estimated coefficients matrix, we have to use whole 1000 features of the new data. Considering most of the feature is useless, the procedure is unnecessary one too. 

However, if we use the Sparse SDR, we can avoid such problems. First of all, because the penalized optimization problems might means they aim to find approximate optimal points, we can shrink the computational time a lot. We can assume the original optimizing procedure contains redundant parts because of uninformative features but the penalized procedure don't have such parts.

 Secondly, if we use the Lasso penalty, most of coefficients in the estimator is returned as zero. Therefore, we don't have to use the uninformative features from raw data which have zero-coefficients. This makes the whole procedure efficiently. We can eliminate useless feature at the reducing procedure. 

 This approach means that we can use the Sparse SDR methods to do some feature selection. Similar procedure also works at the lasso regression. But there is a important difference between them in that the Sparse SDR aims to draw the essential information considering the whole distribution. Remember that the SDR target to find below relations.
$$
Y \perp X \mid \beta^t X
$$
 It leads to following equation.
$$
f(y \mid X ) = f( y \mid \beta^t X)
$$
This means that the Sparse SDR could find more general information from the data. Therefore, the feature selected from Sparse SDR could be used in more diverse fields such as clustering, nonlinear statistics etc..





***

[Li, L. (2007). Sparse sufficient dimension reduction. *Biometrika*, *94*(3), 603-613.](https://academic.oup.com/biomet/article-abstract/94/3/603/263590)
