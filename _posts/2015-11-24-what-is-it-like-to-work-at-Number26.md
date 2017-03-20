---
title: What is it like to work as a developer at Number26?
subtitle: An interview with Christian Rebernik, CTO of Number26
date: 2015-11-22 12:30:15
layout: post
author: emma_tracey
categories: [Interviews]
cover_image: christian.png
permalink: what-is-it-like-to-work-at-Number26/
importance: 2
---


[Christian Rebernik][1]{:target="_blank"} is CTO of [Number26][8]{:target="_blank"}. Prior to joining Germany’s first digital bank, he was CTO  at Zanox and Parship. We met Christian at the [Data Natives][2]{:target="_blank"} conference in Berlin and discussed Number26’s tech stack, why its easy to attract developers to FinTech and the company's plans for new features.

<!--more--> 


**Hello Christian! How big is your tech team at Number 26?**

We are currently 20 people - and growing. Our team is made up of developers, data scientists, quality engineers and technical product managers.

**What tech stack do you use?**

Our complete tech stack is based on AWS. We are using their [Elastic Beanstalk][3]{:target="_blank"} and  EC2, with Java on top of it. We are also using NoSQL [DynamoDB][4]{:target="_blank"}. For categorization, we have natural language processing using Python and for machine learning we are using the services of AWS. For event processing we are using [SQS][5]{:target="_blank"}, also from AWS.

**Is it challenging to attract developers to FinTech?**

FinTech is a very hot industry at the moment. You can really have an impact as a developer. For us it's not easy to find the right people, as we set our standards very high. We are on the lookout for people who like our product. This is central to our success - to have a team of people who really like what the company does. When you are developing for yourself, it's a lot more fun.

**What are the biggest technical challenges you face?**

Leveraging technology and data to create a smarter banking system. Besides linking authorization, we are also working on developing contextual information. Imagine, for example, you have a trip to Prague - you want to have an overview of your spending and also to have the opportunity to compare this to previous trips. This is the kind of contextual information we are working on in order to improve the user experience.

**How fast can you implement new ideas?**

Recently a developer came up with the idea of 3D touch, similar to what we have seen on the iPhone. We looked into it and it took us two days to get into production and live for the user. So we can be really fast.

**How does Number26 guarantee security for the user?**

Security and data privacy are essential to us. Because we are digital, we believe we can protect data better than others. Take money transfers for example. There are three levels of security. First, you open the app with fingerprint or username and password. Second, you enter your pin. Finally, an encrypted push notification (as opposed to a more traditional SMS TAN) is sent and can only be confirmed by your phone.  If you lose one of those three items you can't make a transaction. It's more secure than most banks. Security is very important to us - for me as CTO, I want to be able to sleep well at night!

**Traditional banks are built around branches. Number26 disrupts this. Do you envisage this movement away from branches as becoming standard for banking?**

Every year there are fewer and fewer interactions with branches and clerks, and more and more branches are closing, so definitely there is a trend that people do things more online - and even on mobile. Our customers are very happy that they can do things conveniently by mobile but what we see is that people still want a physical place to deposit cash. Cash, especially in Germany, is still very important. We introduced Cash26, a feature that allows you to deposit or withdraw cash in supermarkets. We are offering what our clients asked for not by relying on old banking infrastructures but by rethinking the experience completely.

**[McKinsey][6]{:target="_blank"} recently reported that 90% European banks are investing as little as 0.5% of their total spending on digital. Are you surprised that they aren’t investing more?**

I think they are moving as aggressively as they can, but as a big organization it's not easy to change. They have a legacy - they have these branches, decades-old hierarchies and the costs that are connected to these elements. We don't have that, so for us it's much easier and quicker to move. They will digitalize and try their very best.

**Are you surprised by the success of Number26 in Germany, given the traditional suspicion of German people to technology?**

I am surprised on one hand, but we get the feedback that it is long overdue. Yes we are excited, yes we are surprised, but really, it's also understandable. After all, the premise for our product was that people are unhappy with the way banking works today.

**What are your plans for future growth?**

We launch the overdraft feature on December 1st. The next thing is Maestro card.Then we are looking into smart banking. It's a very exciting time, because change can come within a couple of weeks, rather than a couple of years.

**Thanks Christian!**

* * *

**[Join Honeypot](7) today and receive 4 interview invites or more in three weeks.**

[1]: https://www.linkedin.com/in/crebernik
[2]: http://datanatives.io "Data Natives Conference"
[3]: http://blog.redowlanalytics.com/post/64115269978/amazons-elastic-beanstalk-the-good-the-bad-and-the "The pros and cons of Elastic Beanstalk"
[4]: http://www.networkworld.com/article/2932313/cloud-computing/how-amazon-s-dynamodb-helped-reinvent-databases.html "How DynamoDB helped reinvent databases"
[5]: http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/Welcome.html "SQS Developer Guide"
[6]: http://www.mckinsey.com/insights/business_technology/the_rise_of_the_digital_bank "McKinsey Digital Banking Report"
[7]: https://app.honeypot.io/users/sign_up?utm_source=blog&utm_medium=organic&utm_term=e&utm_content=151106&utm_campaign=dev-no
[8]: https://number26.de/en/ "Number26"
