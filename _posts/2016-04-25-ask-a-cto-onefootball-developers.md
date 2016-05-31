---
title:   "Ask a CTO: Grzegorz Krumpholz, Onefootball"
subtitle: On GoLang, Wisła Kraków and Microservices
date:    2016-04-25 10:15:31
layout:  post
author:  emma_tracey
categories: Developer
cover_image: onefootball-cto.png
permalink:  ask-a-cto-onefootball-developers/
importance: 2
---

Onefootball provides live scores, news, statistics, videos and live audio broadcasts to football fans in more than 200 countries.We sat down with [Grzegorz Krumpholz][1]{:target="_blank"}, the CTO of [Onefootball][2]{:target="_blank"} to discuss microservices, migrating to Golang, Wisła Kraków and preparing for the surge in users during the 2016 Euro Championships.

<!--more-->

Onefootball is currently hiring Android developers, iOS developers and Golang developers.

![onefootball overview](/assets/images/box.png)

**Hello Grzegorz! Let's start with you telling us a little more about yourself.**

I from Kraków originally. Naturally, I’m a Wisła Kraków fan! I moved from Kraków to Berlin in August 2015. Previously I was VP of Software Development at Sabre Corporation, an American travel company, where I managed a team across six locations, including some nice exotic places like Philippines and Iceland. Onefootball is my second startup experience - I had previously worked with one during the dotcom era.

**What attracted you to Onefootball?**

I was looking for a position that was more dynamic and for a company where I could make a difference in a short time. Berlin was particularly attractive. After talking to a couple of companies here, I was happy - and lucky - to join Onefootball.

![onefootball developer life](/assets/images/onefootball-office.jpg)

**What makes Berlin special?**

It's a very multinational place which brings lots of opportunities to mix with people with different ideas and opinions. The city itself is attractive to move to - you don't have to sell it! People want to come from all over the world. Against the backdrop of this eclectic environment, startups are thriving and it feels like the right place to be.

**What were your aims when joining Onefootball?**

The clear thing was to build a technical team identity. It was managed through product leadership previously. The company lacked a technical point of view in decision-making. I was also looking at sustainability and scalability, to make the team more organized and predictable. We are also aiming to triple the number of users.

## Architecture

**How many users do you currently have?**

We have about 20 million downloads.

**Can you describe the technical setup of Onefootball?**

We have three components on the app side - the iOS version, the Android version and the Windows version. We also have a web version which is built on Angular.Js and some other JavaScript frameworks. Most of the logic or processing power is in the backend and we have some components in PHP but we are gradually migrating to Golang. We are heavily using the Amazon stack as infrastructure as service provider. We built improvements on ability to scale.

![onefootball office](/assets/images/onefootballoffice2.jpg)


**Why have you decided to move from PHP to Golang?**

There are two main reasons for us. First, PHP was becoming too complicated to manage. And second, Golang was a very nice tool to use from the microservices approach. It's not easy to find companies using Go and it was new for me to learn too. But it's pretty exciting.

**Onefootball is transitioning into a microservices architecture. What motivated this?**

We have two or three main components of our app. One is getting all of the information from our partners about the games. This is very data-driven. We get updates every second during the game, then we store it in our database, process it and send it through web services. This is the part where we used to have one piece of code, or a logic, which gathered all of this information and then sent it to the database.

Right now we are dividing the monolith logic into separate services which are operating on certain pieces of the data: the providers and the information which is pushed into the database is separate from the logic which is servicing the information to the apps or to the consumers. We can now make changes in a very independent way, using separate way points and separate services. Each of them is also easily scalable.

## Engineering Team

![onefootball office](/assets/images/onefootballoffice1.jpg)


**How many developers do you have on your engineering team?**

The engineering team is about 26 people. We are hiring and growing each team. We are looking for Android, iOS developers, Golang developers, and DevOps.

**How are the teams structured?**

We have backend together and then we have an iOS team, an Android team and a web team. In terms of nationality, our current team is probably the most diverse team I have ever managed.

**How would you describe developer culture within Onefootball?**

From an organizational point of view, we have a very flat and open structure. Every Friday we have updates for the whole team which usually ends up with a few beers. We use Agile pretty heavily, we try to follow Scrum as close as possible. We have internal tech talks and we participate in Berlin events.

**Is everyone at Onefootball a huge football fan?**

Haha, well we have people who are huge football fanatics and we have casual supporters, so it's a mix. One of the things we store in our HR system is what team you follow. We also play football twice a week and we have several events around tournaments and competitions.

**Are you a football fan!?**

As I said, I follow Wisła Kraków. I also follow the national championships. Poland qualified...finally!

![onefootball office](/assets/images/onefootballoffice3.jpg)



**What is the biggest technical challenge you are currently facing?**

Like all companies, our biggest challenge is keeping that balance between product development and delivering new features, while keeping the infrastructure stable. We want to focus on doing things right and making sure we are prepared for growth. The second challenge we are facing is the preparation for Euro 2016. We are expecting tripling of our users - which is a good problem to have!

**What are you aims for the coming year from a technical point of view?**

It will be the combination of building a scalable and flexible backend. We also would like to look into more user-based behaviour driven functionality and look into gamification. The last thing is we are building a community of Football fans and bloggers and tools needed for this.

**Thanks Grzegorz! Honeypot wishes Poland luck in the Euro! :)**

* * *

**On Honeypot companies apply directly to developers with tech stack and salary upfront. [Sign-up][3] to get into the game!**

[1]:https://www.linkedin.com/in/krumpholz
[2]: https://www.onefootball.com
[3]: https://www.honeypot.io/pages/how_does_it_work?utm_source=onef

