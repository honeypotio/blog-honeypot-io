---
title:   What is it like to work at Wercker?
subtitle:
date:    2016-11-02 09:03:27
layout:  post
author:  hugo_duksis
categories: [Interviews]
cover_image: wercker-cto.png
permalink:  what-is-it-like-to-work-at-wercker/
importance: 2
---
[Andy Smith](https://www.linkedin.com/in/termie) is CTO at Wercker, an Amsterdam-based tech company providing a continuous delivery system using containers. Andy joined Wercker two and half years ago and oversaw the transition of the platform from LXC to Docker. When hiring developers, Andy pays special tribute to open source contributions, valuing a broad
portfolio of open source projects.

<!--more--> 

![wercker-box.png](/assets/images/wercker-box.png)

## How was the transition from LXC to Docker?

In the early days Wercker was using LXC, but as Docker came to the forefront - which was around the time I joined the company - we switched everything over. This was my original task when joining Wercker -- figuring out how we could switch to Docker. We were early adopters, and Docker has grown quite a lot since then. 


Switching to Docker was harder than expected. Back then, you’d see the documentation and think “Oh, cool! We can use Docker for all these projects!” However, in reality, it was broken in certain ways, so when we started implementing Docker, we didn’t realise how much trouble we were going to be in. The underlying implementation didn’t take very long, but working around all the issues took a lot longer. Nowadays, infrastructure is still a massive priority to keep it all going. 


## What tech stack are you currently using?

On a base level, we’re running AWS. Well, we’re running [CoreOS](https://coreos.com/) on AWS, and we’re running [Kubernetes](http://kubernetes.io) on top of that, as well as raw Docker. On the frontend, we’re using Node, and on the very frontend, we’re using React. We tend to use a lot of features from all those different products. We also have our own scheduling software written, but that is pretty much it! From the bottom to top: AWS, CoreOS, Kubernetes, Docker, Node and React. Oh! And all of our backend code is written in Go. 

![wercker-office-3.jpg](/assets/images/wercker-office-3.jpg)

## Is the tech stack going to change in the near future?

Yeah, we’re moving as fast as we can to become Cloud Agnostic. We want to focus on Kubernetes because they have a large install base and there is an active moving community. Ideally, we want to ask people to run Kubernetes only. On the Node versus Go side, nearly all new API’s are written in Go, so by using Kubernetes, it should be pretty easy for us to set up new services. 

Also, we're current fully on AWS, and it just doesn't make sense to lock ourselves in. There are a lot of people who want to use Wercker, but not all of them are on AWS. If we could provide them with a product that only requires Kubernetes, we would be closer to meeting their needs with minimal changes on our end. It's a lot less code for use to write in the future. However, we're not actively moving on from AWS right now, just considering our options for making our product more useful to more people.


## What value do open source contributions bring Wercker? 

We have something called “the Step Marketplace”, which is where the community helps create pre-built tool sets. If you’re a Scala developer using SBT (or any other Scala toolkit), and there happens to be other Scala developers using Wercker who have already provided a solution for that, you will be able to use the things others have already build. You build a pipeline that provides a description of every single task. There are several steps making up each task for building your service. It’s very easy! Using Go as an example, most things happen the same way, and there’s a lot of pre-built steps available to make your life easier. 


## Have you ever had any problems with the quality of the contributions? 

We’ve definitely experienced that several things stopped being maintained. However, we have some new stuff in the works, which aims to reinvigorate the community. This should make it easier for publishers to maintain stuff as well as provide better control and visibility of the steps, encouraging people to maintain steps. The fun part of open source is that it’s easy to use, and we want to show people that their work is being used and appreciated. 


## How big is your team?

Wercker has around 15 employees right now. We’ve hired a lot of people recently, so we will probably be 20 by the end of the month. Not everyone is a developer though. We have four people working on the commercial side of the organisation, we have two HR people, and the remaining bunch are mostly developers. 

![wercker-office-1.jpg](/assets/images/wercker-office-1.jpg)


## What is the interview process like at Wercker? 
In terms of the hiring process itself, we tend to ask candidates to come to the office where we have a small programming task for them to do. It usually takes half a day, but it’s a really good way for us to gauge how they interact with people.


## Do open source contributions play a role in your hiring process?

I personally prefer hiring people that work with open source. It’s the easiest way of seeing how someone works, who they work with and what kind of stuff they are able to do. My preference will always be the person who has a large portfolio of open source projects, that let’s them show me a pull request they’ve submitted, fixing the issues in the comments. 


What I’ve been adding recently to my list of requests is to show me some of your good bug reports and the issues that you’ve posted, which proves that you are able to communicate with other people. I believe those are the two main qualities I look for in a developer: A) that you’ve worked on various projects and B) that you can communicate and respond well to criticism from pull requests. Everything else can be learned very quickly! 


## How would you describe the office culture at Wercker?

Everyone works from an office. People can work from home if they need to, but we have a very nice office and it’s just easier to work together this way. Most people in the SF office live in the same neighbourhood, so the commute is easy. There’s actually not a lot of work being done from home. I think people are quite sociable, and they will get more work done if there’s other people around. 


The SF team mainly works on the backend, so we don't have to have meetings with the frontend team in Amsterdam as often, but people are working on the backend in Amsterdam, too. I guess, to some degree the teams are a little bit separated. There’s definitely communication issues due to to timezones when everyone is trying to work on the same thing at the same time, and it’s difficult ensuring perfect alignment of everybody’s KPIs. 


However, we do use a bunch of tools to make work and communication easier, making it easier when somebody is working remote. Obviously we use a chat, Slack, which is probably the most popular one nowadays. We also use GitHub, and we have different channels for hosting information. We have meetings - even on a subteam level. 


![wercker-office-2.jpg](/assets/images/wercker-office-2.jpg)


## Who typically uses Wercker?
Our users are sort of a mix of startup and corporate. Startups is a given, but there is a vision amongst some larger companies to ditch old build tools and tech and instead go for something more modern. These would typically be our ideal customers. We want to grow with a startup or within a larger company. 


Another place we've seen some surprising growth has been in design consultancies. In simple terms developers would be able to go and build something for a company, without having to use that company’s servers. Instead they would set up their own stuff and use our software services on a day-to-day, setting up the pipelines in Wercker for easy maintenance of the product they are building. 


## What is your vision for the development of the product over the next couple of years?

We're working on really nailing down the performance and reliability of the system as we improve the ability for the community to share their tools with each other and take on the needs of bigger enterprises.

* * *

