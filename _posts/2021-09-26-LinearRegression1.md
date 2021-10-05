---
title: \[Linear Regression\]basic of Linear Regression
categories: [Statistical_Learning]
tags: [linear regression, linear algebra, projection]
excerpt: basic concept of linear regression
sidebar:
  nav: "Statistical_Learning"
---

<div style="text-align: center"><font size = '6em'> Linear Regression Model</font></div>



  <div style="text-align: right"> 2021.09.12 </div>

$\def\nsum{\overset{N}{\underset{i=1}{\sum}}}$

$\def\psum{\overset{p}{\underset{i=1}{\sum}}}$

$ \def \norm#1{\parallel #1 \parallel}$

### 1. Linear Regression model

$ Matrix\ form :  Y = X\beta + \epsilon $	

$ Scalar\ form : y_i = f(x_i) + \epsilon_i = \beta_0 + \sum_{j=1}^px_{ij}\beta_j + \epsilon_i $

$\epsilon_i \sim iid$  $ N(0,\sigma^2)$



-  $X = (X_1, \cdots , X_p)$ : Input, Predictor variables
-  $Y$ : Output, Response variable
-  $\beta$  : Unknown parameter
-  $\epsilon$  : error term.  

### 2. Least Square estimate of $\textbf{\beta}$ 

- Minimize the Residual sum of squares (RSS)

$\underset{\beta}{argmin}\space RSS(\beta) = \overset{N}{\underset{i=1}{\sum}}(y_i - \beta_0 - \overset{p}{\underset{j=i}{\sum}}x_{ij}\beta_j)^2$

$=(y - X\beta)^T(y - X\beta) = \norm{y - X\beta}^2$

- estimation & prediction when $X$ is  non-singular

  > $\hat{\beta}^{LSE} = (X^TX)^{-1}X^T\textbf{y}  \space\space \sim\space N(\beta,(X^TX)^{-1}\sigma^2)$ 
  >
  > $\hat{y}= X\hat{\beta}^{LSE} =X(X^TX)^{-1}X^T\textbf{y} = \textbf{Hy}$
  >
  > $\textbf{e} = y-\hat{y} = \textbf{(I-H)y}$
  >
  > $\frac{(N-p-1)\hat{\sigma^2}}{\sigma^2}\space\sim\chi^2_{N-p-1}$, $ where\space \space\space\hat{\sigma^2} = \overset{N}{\underset{i=1}{\sum}}\frac{(y_i - \hat{y}_i)^2}{(N-p-1)}  (=s^2)$
  >
  > $\hat{\beta}, \sigma^2$ are independent to each other
  
  

### 3. Further discussion about Linear regression

![figure1](/assets/img/posts/2021-09-26/figure1.jpeg)

- Column space and Null space

  > Column space of A is a space spanned by columns of A
  >
  > Null space of A is a space spanned by x which satisfies $Ax = 0$
  >
  > Null space and Row space are orthogonal to each other 

- Hat matrix

  > $H = X(X^TX)^{-1}X^T$ 
  >
  > Hat matrix is projection marix to column space of $X$ 
  >
  > $H$ is symmetric($H^T = H$) and idempotent($H^2 = H$)
  >
  > $(I-H)$ is projection matrix to Null space of $X$ , and this is also symmetric and idempotent

- ANOVA decomposition of regression model

  > $SST = \nsum (y_i - \bar{y})$ , $df = N$
  >
  > $SSR = \nsum(\hat{y}_i - \bar{y}_i)$ , $df = p+1$
  >
  > $SSE = \nsum(y_i - \hat{y}_i)$ , $df = N-p-1$
  >
  > $SST^2 = SSR^2 + SSE^2$

- Gauss Markov Theorem

  > $Var(\hat{\theta}^{LSE})\le Var(\overset{\sim}{\theta})$
  >
  > LSE of $\beta$ achieves minimum MSE among all **linear unbiased estimators**
  >
  > but this does not mean that $\hat{\beta}^{LSE}$ is the best estimator among all class

### 4. Test statistics from Linear Regression

- $T$ statistic -> 유도

  > $H_0: \beta_j = 0 $  vs $H_1:\beta_j \neq 0$
  >
  > $T = \frac{\hat{\beta}j_j^{LSE} - \beta_j}{\sqrt{\sigma^2 C_{jj}}} \space \sim t(n-p-1)$ where $C_{jj}$ is $j$th diagonal element of $(X^TX)^{-1}$
  >
  > reject $H_0$ if $T > t_{0.975, n-p-1} $ or  $T < t_{0.025, n-p-1} $

- F statistic -> 유도

  > $H_0: \beta_1 =\beta_2 =\cdots=\beta_p = 0 $  vs $H_1:not H_0 $
  >
  > $F = \frac{V_1 / k1}{V_2 / k_2}\sim F(k1,k2) $, where $V_1 = SSE_{reduced} - SSE_{full}, \space\space\space V_2 = SSE_{full}$, $k_1 and\space k_2$ are corresponding  $df$
  >
  > reject $H_0$ if $F > F_{0.05}$



### 5. Multiple Regression from Simple Univariate Regression

- When all columns of $Z $ is orthogonal, LSE fitting results are like below

  > $\hat{\beta} = (Z^TZ)^{-1}Z^Ty = (z_0^Tz_0)^{-1}z_0^Ty+\cdots+(z_p^Tz_p)^{-1}z_p^Ty $
  >
  > which is same as take summation of Simple Univariate Regression results

- By using this, Multiple Regression can be fit by Succesive orthogonalization (called Gram-Schmidt precedure)

  > $z_0 = x_0 = 1$
  >
  > $z_1 = x_1 -z_0\gamma_{01}$ 
  >
  > ​      $\vdots$
  >
  > $ z_p = x_p - (\overset{p}{\underset{i=0}{\sum}}z_{i}\gamma_{ip} )$ ,  where $\gamma_{ij} = (z_i^Tz_i)^{-1}z_i^Tx_j$ , single univariate regression coef on $x_j$ by $z_i$
  >
  > because all $z_i$  are orthogonal to each other, all $\hat{\beta}$ coef is fitted by univariate regression

- equations above can be expressed like below

  > $x_0 = z_0$
  >
  > $x_1 = \gamma_{01}z_0 + z_1$
  >
  > ​      $\vdots$
  >
  > $x_p = \gamma_{0p}z_0 +\gamma_{1p}z_1 +\cdots +\gamma_{p-1\space p}z_{p-1} +  z_p$

- these can be expressed as matrix form , which is called QR decomposition

  > $\left[x_0 \space x_1 \space \cdots x_p\right] = \left[z_0 \space z_1 \space \cdots z_p \right]$ $\left[\begin{array}{ccccc} 1 & \gamma_{01}&\gamma_{02}& \cdots &\gamma_{0p} \\\ 0&1&\gamma_{12}&\cdots&\gamma_{1p} \\\ 0&0&1&\cdots&\gamma_{2p} \\\ \vdots & \vdots & \vdots &\ddots&\vdots  \\\ 0&0&0&\cdots&1 \end{array}\right]$
  >
  > ​                    $X= Z\Gamma$
  >
  > ​                         $= ZD^{-1}D\Gamma$       where $ D = diag(\norm{z_0},\cdots,\norm{z_p}) $
  >
  > ​                         $=QR$

-  Backward fitting by QR decomposition needs lower computing power
