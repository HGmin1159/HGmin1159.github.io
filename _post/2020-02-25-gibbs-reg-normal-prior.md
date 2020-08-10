---
title: \[베이즈통계\] 베이지안 인퍼런스 - Gibbs Sampling to Normal Prior Regression
categories: [Bayesian]
tags: [베이지안,Bayesian]
excerpt: 정규 사전분포를 가진 회귀분석에 대한 깁스 샘플링
---

# 문제 Blocked Gibbs Sampler를 이용하여 Normal Prior가 가정된 회귀계수를 추정하라

## 1.우선 회귀모델과 파라미터들을 설정해주자 


>## $y = X\beta+\epsilon$  
>$\beta_k \sim N(0,\lambda)$  
>$\lambda \sim IG(a,b)$  
>$Var(\epsilon)=\tau$ 
>$\tau \sim IG(c,d)$  
>$a,b,c,d$는 상수


#### 이 경우 데이터는 다음과 같이 형성된다.  

$p(\beta,\lambda,\tau|D)$  
$\propto p(D|\beta,\lambda,\tau)p(\beta,\lambda,\tau)$  
$=p(D|\beta,\tau)p(\beta|\lambda)p(\lambda)p(\tau)$  
$=\prod_{i=1}^{n} N(y_i;X\beta,\tau )\prod_{k=1}^{p}N(\beta_k;0,\lambda)IG(\lambda;a,b)IG(\tau;c,d)$  
$\propto (\frac{1}{\sqrt{2\pi\tau}})^nexp(-\frac{1}{2\tau}(y-X\beta)^T(y-X\beta)) \times (\frac{1}{\sqrt{2\pi\lambda}})^pexp(-\frac{1}{2\lambda}\beta^T\beta)$  
$\times \frac{1}{\lambda}^{a-1}exp(-\frac{b}{\lambda})\times \frac{1}{\tau}^{c-1}exp(-\frac{d}{\tau})$

***

#### Full Conditional Distribution을 찾기 위해 정리하면 다음과 같다.  

#### 1.$\beta$의 FCD체크하기

$p(\beta|D,\lambda,\tau)$  
$\propto exp(-\frac{1}{2\tau}(-2y^TX\beta+\beta^TX^TX\beta)-\frac{1}{2\lambda}\beta^T\beta)$  
$= exp(-\frac{1}{2}\beta^T(\frac{1}{\tau}X^TX+\frac{1}{\lambda}I)\beta+\frac{1}{\tau}y^TX\beta)$  
<br>
<br>
x가 다중 정규분포를 따를시 확률밀도 함수는 다음과 같다.
$\propto exp(-\frac{1}{2}(x-\mu)^T\Sigma^{-1}(x-\mu)) \propto exp(-x^T\Sigma^{-1}x+\mu^T\Sigma^{-1}x)$  
<br>
이를 이용할시 $\beta$는 다음과 같은 모수를 따르는 다중 정규분포로 추론할 수 있다.  
<br>
$\Sigma=(\frac{1}{\tau}X^TX+\frac{1}{\lambda}I)^{-1} , \mu=\frac{1}{\tau}(\frac{1}{\tau}X^TX+\frac{1}{\lambda}I)^{-1}X^Ty$  
<br>
따라서 다음과 같은 분포를 따른다.  
$p(\beta|D,\lambda,\tau) \propto N(\beta;\frac{1}{\tau}(\frac{1}{\tau}X^TX+\frac{1}{\lambda}I)^{-1}X^Ty,(\frac{1}{\tau}X^TX+\frac{1}{\lambda}I)^{-1} )$
<br>
<br>

#### 2.$\lambda$ 의 FCD 체크하기 
$p(\lambda|D,\beta,\tau)$  
$\propto (\frac{1}{\sqrt{2\pi\lambda}})^pexp(-\frac{1}{2\lambda}\beta^T\beta)\frac{1}{\lambda}^{a-1}exp(-\frac{b}{\lambda})$  
$= (\frac{1}{\lambda})^{a+\frac{p}{2}-1}exp(-\frac{1}{\lambda}(\frac{1}{2}\beta^T\beta+b))$
<br>
따라서 다음과 같은 분포를 따른다.  
$p(\lambda|D,\beta,\tau) \propto IG(\lambda;a+\frac{p}{2},\frac{1}{2}\beta^T\beta+b)$
<br>
<br> 

#### 3.$\tau$의 FCD 체크하기 
$p(\tau|D,\beta,\lambda)$  
$\propto (\frac{1}{\sqrt{2\pi\tau}})^nexp(-\frac{1}{2\tau}(y-X\beta)^T(y-X\beta))\frac{1}{\tau}^{c-1}exp(-\frac{d}{\tau})$ 
$= (\frac{1}{\tau})^{c+\frac{n}{2}-1}exp(-\frac{1}{\lambda}(\frac{1}{2}(y-X\beta)^T(y-X\beta)+d))$
<br>
따라서 다음과 같은 분포를 따른다.  
$p(\tau|D,\beta,\lambda) \propto IG(\tau;c+\frac{n}{2},\frac{1}{2}(y-X\beta)^T(y-X\beta)+d)$

***


R에 내장된 자료 중 mtcars 데이터에는 연비와 그에 영향을 미치는 10개의 변수들이 저장되어 있다. 이 데이터를 활용하여 회귀분석을 진행해보자

```r
data(mtcars)
head(mtcars)
y_dt = as.matrix(mtcars[,1])
x_dt = mtcars[,2:11]
n = dim(x_dt)[1]
x_dt =cbind(rep(1,n),x_dt)
x_dt = as.matrix(x_dt)
```

이제 데이터의 차원과 각종 모수의 초기값을 설정 해주자  

```r
iter = 10000

n = dim(x_dt)[1]
p = dim(x_dt)[2]

a = 0.01
b = 0.01
c = 0.01
d = 0.01

beta_temp = c()
for (i in 1:p){
  beta_temp = append(beta_temp,i)
}

lambda_temp = 1
tau_temp = 1

beta_post = beta_temp
lambda_post = lambda_temp
tau_post = tau_temp

```

이제 Gibbs Sampler를 이용하여 표본을 추출해보자  

```r
for (i in 1:iter){

# beta 추출하기 
cov = solve(t(x_dt)%*%x_dt/tau_temp+diag(1,nrow=p,ncol=p)/lambda_temp)
mean = cov%*%t(x_dt)%*%y_dt/tau_temp
beta_temp = mvrnorm(1,mean,cov)
  
# lambda 추출하기
lambda_temp = rinvgamma(1,a+p/2,b+t(beta_temp)%*%beta_temp/2)

# tau 추출하기
error = y_dt-x_dt%*%beta_temp
tau_temp = rinvgamma(1,c+n/2,d+t(error)%*%error/2)

# posterior sample에 데이터 추가하기

beta_post = rbind(beta_post,beta_temp)
lambda_post = append(lambda_post,lambda_temp)
tau_post = append(tau_post,tau_temp)
}
```

Posterior Sample 의 히스토그램을 그리면 다음과 같다.  

```r
p1 <- ggplot() + geom_histogram(aes(beta_post[5000:10000,1]))  + ggtitle("beta1 히스토그램") +xlab("beta1")
p2 <- ggplot() + geom_histogram(aes(beta_post[5000:10000,2]))  + ggtitle("beta2 히스토그램")+xlab("beta2")
p3 <- ggplot() + geom_histogram(aes(beta_post[5000:10000,3]))  + ggtitle("beta3 히스토그램")+xlab("beta3")
p4 <- ggplot() + geom_histogram(aes(beta_post[5000:10000,4]))  + ggtitle("beta4 히스토그램")+xlab("beta4")
p5 <- ggplot() + geom_histogram(aes(lambda_post[5000:10000]))  + ggtitle("lambda 히스토그램")+xlab("lambda")
p6 <- ggplot() + geom_histogram(aes(tau_post[5000:10000]))  + ggtitle("tau 히스토그램")+xlab("tau")
grid.arrange(p1,p2,p3,p4,p5,p6,nrow=3)
```

![](/assets/img/post/2020-02-25/figure1.PNG)

수렴정도를 보기위해 시계열 그림을 그리면 다음과 같다.

```r
p1 <- ggplot() + geom_line(aes(1:1000,beta_post[1:1000,1]))  + ggtitle("beta1 ts.plot") +xlab("beta1")
p2 <- ggplot() + geom_line(aes(1:1000,beta_post[1:1000,2]))  + ggtitle("beta2 ts.plot")+xlab("beta2")
p3 <- ggplot() + geom_line(aes(1:1000,beta_post[1:1000,3]))  + ggtitle("beta3 ts.plot")+xlab("beta3")
p4 <- ggplot() + geom_line(aes(1:1000,beta_post[1:1000,4]))  + ggtitle("beta4 ts.plot")+xlab("beta4")
p5 <- ggplot() + geom_line(aes(1:1000,lambda_post[1:1000]))  + ggtitle("lambda ts.plot")+xlab("lambda")
p6 <- ggplot() + geom_line(aes(1:1000,tau_post[1:1000]))  + ggtitle("tau ts.plot")+xlab("tau")
grid.arrange(p1,p2,p3,p4,p5,p6,nrow=3)
```

![](/assets/img/post/2020-02-25/figure2.PNG)

수렴을 잘 해낸것 처럼 보인다.  
