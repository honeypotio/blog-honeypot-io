---
title:   "Ask a CTO&#58; Michael Kugele from Nu3"
subtitle:
date:    2016-08-22 11:25:39
layout:  post
author:  kate_nicolaisen
categories: [Interviews]
cover_image: cto_nu3.png
permalink:  ask-a-cto-michael-kugele-from-nu3/
importance: 2
---

Michael Kugele has been involved in the Berlin startup scene for more than 15 years, joining as a developer in the early days of both Rocket Internet and Project A Ventures. Today Kugele is CTO at [Nu3][2], where he is responsible for a team of 10 developers, 6 quality assurance engineers and 4 product managers.

<!--more-->

![nu3-box.png](/assets/images/nu3-box.png)

### “How has the Berlin Startup scene changed over the past 15 years?”

Around the time when I got involved with the startup ecosystem here in Berlin, it was pretty young - there was no Project A, no Rocket Internet. There was no startup ecosystem and only a handful of *“sexy”* startups for developers to work at.

I guess the whole boom started in eCommerce. Back then nobody knew how eCommerce worked. When Rocket Internet started Zalando it used an out-of-the-box system from a hosting provider for €15 per month. There were sales but no one really knew how eCommerce worked in general. Developers had no clue about it. There was also no information about online or performance marketing. It was new to everybody.

Now, 10-15 years later, those skills are more abundant and the number of startups in general has exploded. Developers have the opportunity of going anywhere they like. The most dramatic change has been the fight for talent, which is somehow problematic.

### “What is it like working as a developer in incubators and accelerators?”

Well I guess it depends. About four to five years ago Rocket Internet was different compared to now - it was more like an incubator; early stage investment, bootstrapping companies etc. This can be really interesting for developers as it’s very agile, but it can also be very unstable and changing day to day.

Returning to Rocket Internet it’s no longer a startup - it’s a huge company and they have a lot of processes. I guess nowadays they have these templates for how to build companies - which is no fun because it’s more like copy/paste.

What they demand of their developers is different too. Now they need these nine to five developers doing their job being “code drones” as we call them. They are doing their job, following ticket entries, but they are not involved in product development anymore.

### “How is the Nu3 engineering team structured?”

The team currently consists of ten developers which are divided into three teams, two of which work in scrum and one which is our firefighting team which works in a more scrum-ban way. It is a smaller team, but it’s good because they can work on smaller projects involving less planning like bug fixes and more ad hoc things.

In the past I have tried keeping a clear separation between frontend and backend developers, but now I want to really educate a frontend guy to know how to do backend stuff and the other way around. I guess right now we pretty much have fullstack developers. Of course you have preferences - backend or frontend - that’s normal, but technically you could work on both sides.

### “What tech stack is Nu3 currently using?”

We are currently using PHP as our main backend programming language, with Zend, Yii and Silex frameworks. On the frontend we mainly use pure Javascript.

### “Do you think that PHP remains the industry standard for eCommerce in Berlin?"

To a certain extent, yes. What you have to understand is how things have developed: Project A Ventures was founded by the former managing directors of Rocket Internet, and some of the members of Rocket Internet team followed the directors to Project A.

At Project A we were not allowed to use stuff that we built for Rocket Internet and this is why we created a new stack, which was based on the ideas and learnings that we had at Rocket Internet.

Back in the days Zend framework was state of the art. Over the last five years, there have been a lot of hyped frameworks but none of them really survived, you have to be confident in what you choose and how long it will survive.

This is why now, five and a half years later, Zend has still not been replaced even though it’s a bit outdated. But we are also working on extracting some components and going over to microservices, as the old applications don’t scale very well when it comes to larger stuff.

### “Microservices seems to be a buzzword these days - is it the solution to all programming problems?”

Of course it isn’t! It solves problems, but it introduces new problems and you have to somehow decide what is more important for you. In our case, as our overall complexity is low, we can just extract the pain points from our system.

We extract step by step and learn, we don’t just do it right away and cut our application into ten different pieces. Smaller components, however, are easier to maintain and that’s very important to remember. You can try out new technologies with smaller services, if you find out this technology is wrong for you, you just replace it.

If the API is constant - it’s well-defined, and if you really thought about it properly - you can exchange everything on the backend and the services just continues working as it was working before, so this makes it flexible and you can adapt to new technologies easier.

### “Are you hiring developers at the moment? And which qualities are you looking for in a top developer?”

Yes, we want to increase our speed, so we will also increase the size of our team. And in terms of a top developers we’re not so interested in the syntactical stuff and how they write the code, but rather their approach to solving logic problems. Coding is the easy task - just to translate from the plan to the source code.

I don’t want to sit next to a guy to see how he’s coding. I like to see whether these guys know about the complexity of the code they are writing or whether he’s Googling for six hours to find out the right solution. You can teach somebody to write code, but you can’t teach somebody how to use their brain.

### “Considering both HR & product, what are the goals of Nu3 for the year?”

We are looking into this “half a day off per week” approach to increase idea generation. It means each team would get half a day of dedicated time per week to come up with fancy stuff. Usually they are working on a project that has particular business value or at least it’s assuming that there is a business value behind it. The idea is to introduce these hack sessions so they can get creative without any pressure of business value or goals.

As I mentioned earlier, we want to increase the headcount, just to be able to focus more on infrastructure and to get rid of this legacy code and architecture and generally be prepared for the growth of the company. If we would double the order amount our system must be prepared in a way that it can handle it. I would say this would be the project for the next half year and then maybe the following six months would be spent coming up with a proper mobile solution because this is going to be even more important.

* * *


[1]: https://app.honeypot.io/users/sign_up?utm_source=blog&utm_medium=organic&utm_term=e&utm_content=160803&utm_campaign=dev-no
[2]: https://www.nu3.com/
