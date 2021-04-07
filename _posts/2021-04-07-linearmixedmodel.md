---
title: \[Statistic\] Linear Mixed Model for correlated data
categories: [others]
tags: [Others, method]
excerpt: panel data, linear mixed model 

---

# Linear Mixed Model for correlated data

## 1.Correlated Data 

 Correlated Data is literaly data that samples are correlated with each other. The most famous data type of correlated data is Panel Data. So, before we explore the methods to handle such data, we gonna see first what is Panel Data (or called as longitudinal data or repeated measured data). 



In usual, a data set that we can see is either Time-Series Data or Cross-Sectional Data.

 Time series data is data gathered from one subject over a certain period. For example, a set of annual lowest temperature of NY is time series data. 

![img](https://qph.fs.quoracdn.net/main-qimg-7beac886a9cd47c5ba4324dfd36dc2f6.webp)

 On the contrary, cross-sectional data is data gathered from several subject at just one point of time. For example,  a set of lowest temperature at 1.1.2015 in America's major cities is cross sectional data. 

![img](https://qph.fs.quoracdn.net/main-qimg-e01267e25ece10ca74eb5e3c851de90c-c)

That is, time series data is data in which subject is fixed and cross sectional data is data in which time is fixed. 

 Panel data is data gathered from several subject over a certain period. For example,  a set of annual lowest temperature in America's major cities is cross sectional data.

![img](https://qph.fs.quoracdn.net/main-qimg-86d648a90947bb5f5be061c815f39473-c)

As we could see, cross sectional data and time series data could be seen as a part of panel data.

Then, why don't we just throw away time series data or cross sectional data and instead use panel data only?. That is because, it is statistically hard to analyze panel data. 

 A lot of simple statistical methods need strong assumptions The most famous one of them is iid assumption (identically and independently distributed).  However, as you can see from above data, the max temperatures of NY at 2015 and 2014 are surely correlated with each other, so the assumption are broken. 

 Usually, when we take statistical assumptions, we just closed our eye and just ignore it. But in this cases, the assumption is too obviously broken that we cannot ignore it. Therefore, statitician developed several methods to handle such problem. In this posting, I will introduce such methods manly focused on modeling. 



## 2. Methodology to construct model

**Assumptions of Linear Model**

 The linear model is most famous statistical model and father of many statistical methods. However, to apply linear model to problem, we have to check the assumptions not broken. Below is said to be standard assumption of linear regression model. 

> For linear model $y_i = X_i^t\beta +\epsilon_i$ or $Y = X \beta + \epsilon$
>
> 1. Lineality - $E(\epsilon_i) = 0$ for all i or $E(\epsilon) = 0$ 
> 2. Homoscedasticity - $Var(\epsilon_i) = \sigma^2$ for all i or $Cov(\epsilon) = \sigma^2 I$
> 3. No Autocorrelation - $Cov(\epsilon_i,\epsilon_j) =0$ for all $i \neq j$  or $Cov(\epsilon) = \sigma^2 I$
> 4. Independence between independent variables and error term- $X_i \perp \epsilon_i$ for all i
> 5. No Multicolinearlity

 However, correlated data violates 3th assumption. So we have to edify the model to fit with autocorrelation. In detail, we will construct the model by setting the structure of $Cov(\epsilon)$

 There are three famous methods to mate them : Linear Mixed Model, Covariance Pattern Model, Generalized Estimating Equation.



### A. Linear Mixed Model 

 Mixed model is called "mixed" because it mixes fixed effect and random effect when constructing model.  In this cases, we call coefficients of independent variables and intercept as "effect". Then, "fixed effect" means that this coefficients are constants and "random effect" means taht this coefficients are random variable.

 For example, in the mixed model $y_i= \beta_0 + \beta_1 x_{i1} + \beta_2 x_{i2} + u_0 + u_1 z_{i1} + \epsilon_i$, fixed effects are $\beta_0,\beta_1,\beta_2$ and random effects are $u_0$ and $u_1$.

The reason that apply the random effects is taht it can make structure of covariance of Y. Let's see how could it be done.

Below model is a generalized form of linear mixed model 

> $Y = X \beta + Z \alpha + \epsilon$
>
> $\beta :$ Fixed Effect, constant
>
> $\alpha :$ Random Effect, random variable ; assume $\alpha \sim N(0,D)$
>
> $\epsilon :$ error term, random variable ; assume $\epsilon \sim N(0,R)$ 

This structure is actually one of Bayesian hierachical regression model. This model equation form can be repraise in probability distribution form

>$Y \mid \alpha \sim N(X \beta + Z \alpha ,R)$
>
>$\alpha \sim N(0,D)$

We can not define as $Y \sim N(X\beta +Z\alpha  , R)$ because the distribution contains random variable. So we have to construct conditional form like above. This kind of model is called as "conditional model". 

Now, explore futher and find $E(Y)$ and $Var(Y)$. It can be derive using theorem of iterative expectation and theorem of variance decomposition(or, Law of total variance).

$E(y) = E_{\alpha} (E_\epsilon(y \mid \alpha)) = E_{\alpha}(X \beta + Z \alpha) = X \beta$

$Var(y) = E_{\alpha}(Var_\epsilon(y \mid \alpha)) + Var_{\alpha}(E_\epsilon(y \mid \alpha))$

​               $= E_{\alpha}(R) + Var_\epsilon(X\beta + Z \alpha)$

​                $= R + Z D Z^t$

 So, we can define structured form of covariance as $R + ZDZ^t$ by using random effect. If we set the random effect adequately, then we could get reasonable structure of covariance.

 Generally, analyist don't weigth it on random effects because they are some kind of auxilirary variable to capture autocorrelation. But, sometimes, the random effect itself could be the target of the study.  



### B. Example 1: Random intercept model

By observing the example, we could understand how this structure can work to make covariance. 

Let's consider the medical survey which contains n patients and each patient is examined 3 times. And there are several independent variable X and the result of examination Y. Then we have a model below

 

> Model : $y_{ij} = \beta_1 x_{ij1} + \beta_2 x_{ij2} + u_i + \epsilon_{ij}$  : ith patient's jth examination result

It is helpful to write down actual design matrix of model. 

$\quad y \ \quad= \qquad X\beta \qquad \qquad \quad \ \ +\qquad \qquad Z u \quad \qquad \qquad \qquad + \qquad \epsilon$

$\left[\begin{array}{c} y_{11} \\\ y_{12} \\\ y_{13}\\\ y_{21} \\\ y_{22} \\\ \vdots \\\ y_{n3} \end{array}\right] = \left[\begin{array}{cc}  x_{111}  & x_{112} \\\ x_{121} & x_{122} \\\ x_{131} & x_{132} \\\ x_{211}  & x_{212} \\\ x_{221} & x_{222} \\\ \vdots & \vdots \\\ x_{n31} & x_{n32}\end{array}\right] \left[\begin{array}{c} \beta_{1} \\\ \beta_{2}\end{array}\right]+\left[\begin{array}{c} 1 & 0 & 0& \cdots & 0\\\1 & 0 & 0& \cdots & 0\\\1 & 0 & 0& \cdots & 0\\\0 & 1 & 0& \cdots & 0\\\0 & 1 & 0& \cdots & 0 \\\ \vdots & \vdots &\vdots &\vdots& \vdots \\\ 0&0&0&\cdots&1 \end{array}\right]\left[\begin{array}{c}u_1 \\\ u_2 \\\ u_3\\\ \vdots \\\ u_n\end{array}\right] +\qquad   \left[\begin{array}{c} \epsilon_{11} \\\ \epsilon_{12} \\\ \epsilon_{13} \\\ \epsilon_{21} \\\ \epsilon_{22} \\\ \vdots \\\ \epsilon_{n3} \end{array}\right]$

$(3n \times 1)$       $(3n \times 2)$       $(2\times 1)$               $(3n \times n)$            $(n \times n)$       $(3n \times 1)$

In this model, we will simplify the pattern of covariance as follow. 

$Var(\epsilon) = R = \sigma^2 I$           i.e. $Var(\epsilon_{ij}) = \sigma^2  \quad \forall i,j $

$Var(u) = D = diag(\sigma_i)$ i.e. $Var(u_i) = \sigma_i^2 \quad \forall i$

This is not overly simplified one but reasonable one. It saids that the results of one subject can be  correlated but the results of two subjects are independent with each other.



This model has expectation and variance as follow. 

> $E(y_{ij}) = \beta_1 x_{ij1} + \beta_2 x_{ij2}$
>
> - It is same with normal linear model, so we could translate it as usual.
>
> $Var(y_{ij}) = \sigma^2 + \sigma_i^2$
>
> - Individual result's variance is a form of General Variance($\epsilon_{ij}$) + Subject Variance($u_i$) 
>
> $Cov(y_{ij},y_{ij}) = \sigma_i^2$
>
> - Covariance of results of same subject is modeled with variance of $u_i$
>
> $Cov(y_{ij}, y_{kl}) = 0 \mbox{ where } i \neq k $  
>
> - Covariance of results of different subjects is resulted in 0

Whole covariance matrix is below. Notice that it is block diagonal 

$Cov(Y) = \left[\begin{array}{c} \sigma^2 + \sigma_1^2 & \sigma_1^2 & \sigma_1^2 & 0&0& \cdots & 0\\\ \sigma_1^2 & \sigma^2 + \sigma_1^2 & \sigma_1^2&0&0& \cdots & 0\\\ \sigma_1^2 & \sigma_1^2 & \sigma^2 + \sigma_1^2&0&0& \cdots & 0\\\ 0 & 0 & 0& \sigma^2 + \sigma_2^2 & \sigma_{2}^2 & \cdots & 0\\\ 0 & 0 & 0& \sigma_2^2 & \sigma^2 + \sigma_2^2 & \cdots & 0 \\\  \vdots & \vdots &\vdots &\vdots& \vdots & \ddots & \vdots \\\ 0&0&0&0&0&\cdots&\sigma^2 + \sigma_n^2 \end{array}\right]$

Therefore, by apply random effect in intercept, we could make model for correlated with inner subject.

 Detail  provement of above result is follow.

***

pf)

$E(y_{11}) = E(E(y_{11}\mid u_1)) $

​             $= E(E(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 + \epsilon_{11}\mid u_1)) $

​             $= E(\beta_1 x_{111} + \beta_2 x_{112}  + u_1)$

​             $= \beta_1 x_{111} + \beta_2 x_{112} =X_{11} \beta$

$Var(y_{11}) = E(Var(y_{11} \mid u_1)) + Var(E(y_{11} \mid u_1))$

​                  $= E(Var(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 + \epsilon_{11}\mid u_1)) + Var(E(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 + \epsilon_{11}\mid u_1))$ 

​                  $= E( \sigma^2) + Var(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 )$

​                  $= \sigma^2 + \sigma_1^2$

$Cov(y_{11}, y_{12}) = E(Cov(y_{11},y_{12} \mid u_1)) + Cov(E(y_{11} \mid u_1) , E(y_{12} \mid u_1))$

​                         $=E(Cov(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 + \epsilon_{11},\beta_1 x_{121} + \beta_2 x_{122}  + u_1 + \epsilon_{12}\mid u_1)) $

​                                                                                $+ Cov(E(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 + \epsilon_{11},\beta_1 x_{121} + \beta_2 x_{122}  + u_1 + \epsilon_{12}\mid u_1))$ 

​                         $= E(Cov(\epsilon_{11} , \epsilon_{12})) + Cov(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 ,\beta_1 x_{121} + \beta_2 x_{122}  + u_1 )$

​                         $= E(0) + Cov(u_1 ,u_1 ) = \sigma_1^2$

$Cov(y_{11}, y_{21}) = E(Cov(y_{11},y_{21} \mid u_1,u_2)) + Cov(E(y_{11} \mid u_1) , E(y_{21} \mid u_2))$

​                         $=E(Cov(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 + \epsilon_{11},\beta_1 x_{211} + \beta_2 x_{212}  + u_2 + \epsilon_{21}\mid u_1 , u_2)) $

​                                                                                $+ Cov(E(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 + \epsilon_{11},\beta_1 x_{211} + \beta_2 x_{212}  + u_2 + \epsilon_{21}\mid u_2))$ 

​                         $= E(Cov(\epsilon_{11} , \epsilon_{21})) + Cov(\beta_1 x_{111} + \beta_2 x_{112}  + u_1 ,\beta_1 x_{211} + \beta_2 x_{212}  + u_2 )$

​                         $= E(0) + Cov(u_1 ,u_2 ) = 0$

***



### B. Example 2: Random Coefficient model

Example 1 is the form that the random effects are appled in intercept only like below.

$\left[\begin{array}{c} y_{11} \\\ y_{12} \\\ y_{13} \\\ y_{21} \\\ y_{22} \\\ \vdots \\\ y_{n3} \end{array}\right] = \left[\begin{array}{cc}  x_{111}  & x_{112} \\\ x_{121} & x_{122} \\\ x_{131} & x_{132} \\\ x_{211}  & x_{212} \\\ x_{221} & x_{222} \\\ \vdots & \vdots \\\ x_{n31} & x_{n32}\end{array}\right] \left[\begin{array}{c} \beta_{1} \\\ \beta_{2}\end{array}\right]+\left[\begin{array}{c} 1 & 0 & 0& \cdots & 0\\\ 1 & 0 & 0& \cdots & 0\\\ 1 & 0 & 0& \cdots & 0\\\ 0 & 1 & 0& \cdots & 0\\\ 0 & 1 & 0& \cdots & 0 \\\  \vdots & \vdots &\vdots &\vdots& \vdots \\\  0&0&0&\cdots&1 \end{array}\right]\left[\begin{array}{c}u_1 \\\ u_2 \\\ u_3\\\ \vdots \\\ u_n\end{array}\right] +\qquad   \left[\begin{array}{c} \epsilon_{11} \\\ \epsilon_{12} \\\ \epsilon_{13}\\\ \epsilon_{21} \\\ \epsilon_{22} \\\ \vdots \\\ \epsilon_{n3} \end{array}\right]$

$\left[\begin{array}{c} y_{11} \\\ y_{12} \\\ y_{13}\\\ y_{21} \\\ y_{22} \\\ \vdots \\\ y_{n3} \end{array}\right] = \left[\begin{array}{cc}  x_{111}  & x_{112} \\\ x_{121} & x_{122} \\\ x_{131} & x_{132} \\\ x_{211}  & x_{212} \\\ x_{221} & x_{222} \\\ \vdots & \vdots \\\ x_{n31} & x_{n32}\end{array}\right] \left[\begin{array}{c} \beta_{1} \\\  \beta_{2}\end{array}\right]+\left[\begin{array}{c}u_1 \\\ u_1 \\\ u_1 \\\ u_2 \\\ u_2 \\\ \vdots \\\ u_n\end{array}\right] +\qquad \left[\begin{array}{c} \epsilon_{11} \\\  \epsilon_{12} \\\ \epsilon_{13}\\\ \epsilon_{21} \\\ \epsilon_{22} \\\ \vdots \\\ \epsilon_{n3} \end{array}\right]$



In this cases, covariances of each 1st and 2nd, 1st and 3rd, 2nd and 3rd are considered as same. This is called as sphericity. But it is reasonable to think that 1st one is more correlated with 2nd one than 3rd one. Therefore, it can be seened as assumption or constraints. In repeated measured ANOVA, it is important assumption.

 However, mixed model do not have to be stuck to such constraints.  If we set random effect in coefficients of time, then we could design such case too. 

$\left[\begin{array}{c} y_{11} \\\ y_{12} \\\ y_{13}\\\ y_{21} \\\ y_{22} \\\ \vdots \\\ y_{n3} \end{array}\right] = \left[\begin{array}{cc}  x_{111}  & x_{112} \\\ x_{121} & x_{122} \\\ x_{131} & x_{132} \\\ x_{211}  & x_{212} \\\ x_{221} & x_{222} \\\ \vdots & \vdots \\\ x_{n31} & x_{n32}\end{array}\right] \left[\begin{array}{c} \beta_{1} \\\  \beta_{2}\end{array}\right]+\left[\begin{array}{c} 1 & 0 & 0& \cdots & 0\\\ 1 & 0 & 0& \cdots & 0\\\ 1 & 0 & 0& \cdots & 0\\\ 0 & 1 & 0& \cdots & 0\\\ 0 & 1 & 0& \cdots & 0 \\\  \vdots & \vdots &\vdots &\vdots& \vdots \\\ 0&0&0&\cdots&1 \end{array}\right]\left[\begin{array}{c}u_1 \\\ u_2 \\\  u_3\\\ \vdots \\\  u_n\end{array}\right] + \left[\begin{array}{c} 1 & 0 & 0& \cdots & 0\\\ 2 & 0 & 0& \cdots & 0\\\ 3 & 0 & 0& \cdots & 0\\\ 0 & 1 & 0& \cdots & 0\\\ 0 & 2 & 0& \cdots & 0 \\\ \vdots & \vdots &\vdots &\vdots& \vdots \\\ 0&0&0&\cdots&3 \end{array}\right] \left[ \begin{array}{c} v_1 \\\ v_2 \\\ \vdots \\\ v_n \end{array}\right]+ \qquad   \left[\begin{array}{c} \epsilon_{11} \\\ \epsilon_{12} \\\ \epsilon_{13}\\\ \epsilon_{21} \\\ \epsilon_{22} \\\  \vdots \\\ \epsilon_{n3} \end{array}\right]$

In model form, $y_{ij} =\beta_1 x_{ij1}+ \beta_2 x_{ij2} +u_i + v_{ij} \mbox{T}_{ij} + \epsilon_{ij} $

We again assume $v_{ij} \sim N(0, \tau_i^2)$.



In this case, we could make covariance structured as follow. 

> $E(y_{ij}) = \beta_1 x_{ij1} + \beta_2 x_{ij2}$
>
> - It is same with normal linear model, so we could translate it as usual.
>
> $Var(y_{ij}) = \sigma^2 + \sigma_i^2 + \mbox{T}_{ij}^2 \tau_i^2$
>
> - Individual variance is decomposed with General Variance($\epsilon_{ij}$) + Subject Variance($u_i$) + Time Variance($v_i T_{ij}$)
>
> $Cov(y_{ij},y_{ik}) = \sigma_i^2 + \mbox{T}_{ij}\mbox{T}_{ik} \tau_i^2 $
>
> - Covariance of results of same subject is decomposed with Subject Variance($u_i$) + Covariance weighted in time($v_{ij}$) 
>
> $Cov(y_{ij}, y_{lk}) = 0 \mbox{ where } i \neq l$  
>
> - Covariance of results of different subjects is 0

Below is matrix form of covariance of the model.

$Cov(Y) = \left[\begin{array}{c} \sigma^2 + \sigma_1^2 +T_{11}^2\tau_1^2& \sigma_1^2 +T_{11}T_{12}\tau_1^2& \sigma_1^2 +T_{11}T_{13}\tau_1^2& 0&0& \cdots & 0\\\ \sigma_1^2 +T_{11}T_{12}\tau_1^2& \sigma^2 + \sigma_1^2 +T_{12}^2\tau_1^2& \sigma_1^2+T_{12}T_{13}\tau_1^2&0&0& \cdots & 0\\\ \sigma_1^2 +T_{11}T_{13}\tau_1^2& \sigma_1^2 +T_{12}T_{13}\tau_1^2& \sigma^2 + \sigma_1^2 +T_{13}^2\tau_1^2&0&0& \cdots & 0\\\ 0 & 0 & 0& \sigma^2 + \sigma_2^2 +T_{21}^2\tau_2^2& \sigma_{2}^2 +T_{21}T_{22}\tau_2^2& \cdots & 0\\\ 0 & 0 & 0& \sigma_2^2 \sigma_{2}^2 +T_{21}T_{22}\tau_2^2& \sigma^2 + \sigma_2^2 +T_{22}^2\tau_2^2& \cdots & 0 \\\ \vdots & \vdots &\vdots &\vdots& \vdots & \ddots & \vdots \\\ 0&0&0&0&0&\cdots&\sigma^2 + \sigma_n^2 +T_{n3}^2\tau_n^2 \end{array}\right]$

In this time, the covariance between different time is proportionate with time of examining. Therefore, we could design such variance too.

 Detail  provement of above result is follow.

***

$E(y_{ij}) = E(E(y_{ij} \mid  u_i))$

​            $= E(E(E(y_{ij}\mid u_i,v_i)))$

​             $= E(E(E(\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i+v_iT_{ij} +\epsilon_{ij} \mid u_i , v_i)))$

​             $= E(E(\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i+v_i T_{ij} \mid u_i,v_i))$

​            $= E(\beta_1 x_{ij1} + \beta_2 x_{ij2} + u_i\mid u_i)$

​            $= \beta_1 x_{ij1}+ \beta_2 x_{ij2}$

$Cov(y_{ij},y_{ik}) = Cov(E(y_{ij}\mid u_i),E(y_{ik}\mid u_i))+E(Cov(y_{ij},y_{ik} \mid u_i))$

1) $E(y_{ij} \mid u_i) = E(E(y_{ij} \mid u_i , v_i))$

​                         $=E(\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i+v_iT_{ij} \mid u_i , v_i)$

​                         $=\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i$

2) $Cov(E(y_{ij}\mid u_i),E(y_{ik}\mid u_i)) = Cov(\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i,\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i)$

​                                                        $= Cov(u_i,u_i) = \sigma_i^2$

3) $Cov(y_{ij},y_{ik} \mid u_i) = Cov(E(y_{ij} \mid  v_i), E(y_{ik} \mid v_i) \mid u_i)+ E(Cov(y_{ij},y_{ik} \mid v_i) \mid u_i)$

​                                    $= Cov(\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i+v_iT_{ij},\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i+v_iT_{ik} \mid u_i) $

​                                                                      $ +E(Cov(\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i+v_iT_{ij} + \epsilon_{ij},\beta_1 x_{ij1}+ \beta_2 x_{ij2} + u_i+v_iT_{ij}+\epsilon_{ik} \mid v_i)\mid u_i)$

​                                    $= Cov(v_i T_{ij},v_i T_{ik} \mid u_i) + E(Cov(\epsilon_{ij},\epsilon_{ik} \mid v_i) \mid u_i)$

​                                    $= T_{ij}T_{ik} \tau_i^2 + 0$

$\therefore Cov(y_{ij},y_{ik}) = \sigma_i^2 + T_{ij}T_{ik}\tau_i^2$

 $Var(y_{ij}) = Cov(y_{ij},y_{ik}) = \sigma_i^2 + T_{ij}^2 \tau_i^2$

$Cov(y_{ij},y_{lk}) = 0$ (skip.... I'm tired..)

***

These examples are most basic form of mixed model. We could applicate such form to various problem. 



For example, we could add different random effect to model,

> ex) the value of k-th observing result of i-th patient with j-th method.
>
> $y_{ijk} = \beta_0 + \beta_1 x_{ijk } + u_{i} + v_{j} + \epsilon_{ijk}$

could analyze a independent variable with fixed effect and random effect at the same time,

> ex) the value of k-th observing result of i-th patient.
>
> $y_{ij} = \beta_0 + \beta_1 x_{ij} + u_{i} + v_{i}x_{ij} + \epsilon_{ij}$
>
> In this case, the coefficient of $x_{ij}$ is $(\beta_1+ v_i)$and it means that the effect of $x_{ij}$($\beta_1$) can be differed in subjects with $v_i$.

or could add random effect to interaction term. 

> ex)the value of k-th observing result of i-th patient with j-th method.
>
> $y_{ijk} = \beta_0 + \beta_1 x_{ijk } + u_{i} + v_{j} + \tau_{ij} + \epsilon_{ijk}$
>
> We can construct the correlated relation with i-th patient and j-th method.



### C. Analysis with R

We could design such mixed model in R by using package "lme4".

```
library(lme4)
lmer(formula, data = NULL, REML = TRUE, control = lmerControl(),
     start = NULL, verbose = 0L, subset, weights, na.action,
     offset, contrasts = NULL, devFunOnly = FALSE, ...)
# Form of fomula
 y ~ x1 + x2 + (1|z1) + (1|z2) + (t|z1) + (x1|z1) + (1|z1:z2)
# y: dependent variable
# x1 + x2: give fixed effect in x1,x2.
# (1|z1) + (1|z2): give random intercept effect in z1 and z2. 
# (t|z1): give random coefficient effect to t with z1 
# (x1|z1) : give random coeeficient effect to x1 with z1 
# (1|z1:z2) : give random intercept effect to interaction of z1 and z2
```



And we could interpret results as follow.

![](assets/img/post/2021-04-07/figure1.jpg)



### d. Additional Strength

1. It could be used Generalized linear model too.

Generalized linear model is generalized version of linear model which has the follow form.

> $Y_i \sim exponential family$
>
> $g(E(Y_i)) = X_i^t\beta$

We call g(.) as link function. With proper link function, we could design various model.

For example, logistic regression has the form as follow.

> $y_i \sim Bernoulli (\theta_i)$
>
> $\log \frac{\theta_i}{1-\theta_i} = X_i^t \beta \iff \theta_i = (1+exp(-X_i^t \beta))^{-1}$



Even in this case, we could add random effect as follow.

> $y_i \mid \theta_i \sim Bernoulli (\theta_i)$
>
> $\theta_i\mid \alpha_i = (1+exp(-X_i^t \beta - Z_i^t \alpha_i))^{-1}$
>
> $\alpha_i \sim N(0,\sigma_i^2)$



Moreover, mixed model have the strength that could handle missing data easily and can make personalized prediction but I'm not gonna say it deeper. 

