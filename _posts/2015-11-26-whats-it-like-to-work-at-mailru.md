---
title: Whats it like to work as a developer at Mail.Ru?
subtitle: An interview with Dennis Anikin, Director of Engineering of Cloud and Email Service
date: 2015-11-26 15:44:15
layout: post
author: emma_tracey
categories: Developer
cover_image: anikin.jpg
permalink:  what's-it-like-to-work-at-mailru
importance: 2
---

[Mail.Ru][1]{:target="_blank"} launched in 1998 and today is the largest email service in Russia. As of October 2015, it had 62.6 million monthly users. The email service delivers 600 million messages per day and has a data storage of over 30 petabytes. At [Highload 2015][2]{:target="_blank"}, we sat down and chatted to [Dennis Anikin][3]{:target="_blank"}, the Director of Engineering of Cloud and Email Service. He told us about Mail.Ru's plans to migrate their email service and the advantages of Tarnatool, their open-source NoSQL database management system.

**What experience do you have with mail systems and cloud storage?**

I’ve been doing email services all my life pretty much.  Before Mail.Ru, I worked for Yandex and RBC, both in email services.  Now I’m the Director of Engineering of Cloud and Email Service at Mail.Ru. It's the sixth largest email service in the world.

**What is the team setup like at Mail.Ru?**

In my team, we are about 70 people, the majority of whom are software engineers and engineering managers. The team also includes quality engineers and security engineers.

**How is the Mail.Ru team organized?**

We are organized into small teams, each having a team lead reporting to a manager, who operates across teams. Managers are tasked with a particular duty and must use multi-team resources to complete that. The software engineering teams are full-stack but there are role-specific teams, such as quality assurance and security.

**How do you motivate your team?**

People can lose motivation if they don’t see how their work fits into the larger goals of the company. I try to develop my people in line with making our services faster and more stable.

**Can you tell us about the tech stack of Mail.Ru email service?**

Email service is a very complicated thing! The user’s browser is HTML and Javascript. Directly under this is Perl, Python, Go, C and C++. For the mission critical tasks we are using C and C++. We process requests from the message list, the main page on email, through our custom web-server. For the majority of the less-demanding pages, we are using Apache plus Perl. For mission critical things inside Perl, we are using C++ through [XS][4]{:target="_blank"}. Our message storage is all home-written. It is divided into three separate pieces, one piece is for storage of big files, another piece is meta-information and the third thing in the storage layer is a full text search engine. We have a search engine inside our email service. This search engine is also self-written.

![mail.ru group structure](/assets/images/mailru.png)

**Tarantool is Mail.Ru’s open-source NoSQL database management system. Can you tell us some history of the project?**

Tarantool is an in-memory database. The project started as a graph database for one of our social networks.  With time it began to develop. We can’t widely use other databases such as MySQL, because we need a system which works fast and has a low total cost of ownership.

**What are the advantages of Tarantool?**

It is faster than most other in-memory databases. Tarantool is a real database with transactions, replication and stored procedures. We’ve also run tests to compare it with Couchbase and Redis – the results are available [online][5]{:target="_blank"}.  Today there are many companies using Tarantool, but it's still not too well-known since we have not advertised it yet.

**Tarantool was built by just 10 engineers. How is it faster than MySQL, when so many more engineers were involved?**

Many other database vendors are focused on features, but we are focused on performance. We are very passionate about optimization and we try to get every last drop of performance out of servers.
**Aside from Tarantool, do you have any other open source projects?**

We have some open source projects listed on the open source section of our [wesbite][6]{:target="_blank"}. The most important one is [maps.me][7]{:target="_blank"}. It’s one of the biggest mobile map applications in the world. In coordination with OSM, a project dedicated to providing crowdsourced mapped data of the world, opening maps.me’s source code became an important step in changing the ecosystem of the development of mapping apps.

**What is the total storage size of your cloud and email services?**

Our cloud and email service is 30 petabytes each, so altogether they are 60 petabytes of information.

**You are currently trying to migrate your email storage. How and why?**

Our current email storage needs to be more efficient. It consists of big attachments, which we partially store on machines with 16 disks with 2 terabytes of storage each.  We need to move it to 24 by 4 terabyte disks. This move could save us millions of dollars and make our system much faster. For our email and cloud storage, we are not using SSD discs. We are using normal spinning discs. They are 10 times cheaper than SSD. Even for meta-information we are not using SSD. The main advantage of magnetic is price – this is what makes our cloud service so affordable.

**What do you think Mail.Ru does better than Gmail?**
I think speed, efficiency and uptime are our key strengths. It’s difficult to compare interfaces and user experience formally but most Russians prefer Mail.Ru. We are six times bigger than Gmail in Russia in terms of the monthly audience. That is some indication for us about the success of our product.

**From where do you recruit your developers?**

The main source of talent for us is new grads from universities. We have special teaching programs with three Moscow universities, to both attract students to the Mail.Ru Group and to guarantee a high quality of new hires.

**What is the difference between American developers and Russian developers in your opinion?**

It’s my belief that Russians have higher tolerance for risk than Westerners. And with that comes speed of implementation. For example, if you need to do something fast – if your deadline is yesterday – a Russian will say “no problem at all, I will do it right now.” A western guy would rather rely on standard rules and procedures even if it results in missing the deadline. A Russian guy always finds a very creative way to meet even the tightest deadline, to get the job done fast and with necessary level of quality and to satisfy all the mission-impossible requirements.

***

If you are a developer who likes working with cool open-source projects on par with those of Mail.Ru be sure to [sign-up][8] to Honeypot. Let Europe's most innovative startups apply directly to you with tech stack and salary upfront.

[1]: https://mail.Ru "mail.Ru homepage"
[2]: http://highload.co/ "Highload Conference"
[3]: https://www.linkedin.com/in/dennis-anikin-b3898526 "Dennis Anikin"
[4]: https://en.wikipedia.org/wiki/XS_%28Perl%29 "What is XS?"
[5]: http://articles.rvncerr.org/how-to-chose-an-in-memory-nosql-solution-performance-measuring/ "Tarantool Comparison"
[6]: http://opensource.mail.ru/
[7]: http://maps.me/en/home
[8]: https://www.honeypot.io/invite_requests/new?source=blog "Sign-up"
