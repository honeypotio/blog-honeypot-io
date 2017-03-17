---
title:   'Ask a CTO: Peter Loveday from Zanox'
date:    2016-06-07 17:37:49
layout:  post
author:  emma_tracey
categories: []
cover_image: peter_loveday.png
permalink:  zanox-cto-peter-loveday/
importance: 2
---

Peter Loveday became CTO of zanox, Europe’s largest affiliate marketing network, in 2014. With the new role he inherited two tightly coupled legacy platforms - one built on Java, one on PHP. With his distributed team of 60 engineers, he is simplifying the technology by focusing future development around one platform and then separating the system into distinct services. Loveday’s approach to engineering culture is about facilitation, pragmatism and a healthy skepticism of buzzwords.

<!--more-->


### You took over as CTO of zanox in 2014 with the task of creating a single network from zanox’s and Affiliate Window’s separate platforms. What is your vision on how to achieve this?

When I became zanox’s CTO, I inherited one PHP-focused development team [Affiliate Window in London] and one Java-focused [zanox in Berlin] development team, so that's an interesting challenge! The natural tendency is to concentrate on one language. I don’t personally see that as a requirement - I think you can still have a clean code base irrespective of the number of languages. It comes down to having a solid engineering approach and a framework which is understood within the business. We have some elements being built in PHP and some in Java. The teams are making the decisions about the appropriate language to use.

### Would a microservices approach work for zanox in this context?

In a recent engineering meeting, a developer mentioned the idea of microliths and I liked this as a step towards a service-oriented system. If I generalize we have two monoliths, but in reality we are breaking these systems into subsystems. It is service-orientated and it will tend towards a microservices architecture.

But I am reluctant with buzzwords like microservices. The danger is you head blindly towards a utopian vision. Microservices is still a trade-off; by simplifying the code you aren’t simplifying the system, you are moving the complexity from the code to the communication layer. Our approach is pragmatism. If we end up in a state where everything is microservice, then so be it. But it should be done because it's the right move, not simply because it's a hot topic currently.

### When working within this distributed culture, how do you ensure your engineering teams are work together efficiently?

We work on building understanding among the teams about the technical and commercial vision of zanox. Once this is grasped, we give them a lot of freedom to decide on which technology to use. We provide the framework but then encourage autonomy.

Thoughtworks has a great idea of Tech Radar, in which they talk about the technologies they have been using and why they are happy with them. We operate in a similar way: first level is core systems technology, next level is non-core systems technology and finally there are technologies that we don’t want included at all. PHP and Java are core technologies, for example. C/C++ are technologies we are trying to make redundant. But the second level is the most exciting - in there we are playing around with a lot of different things.

![zanox overview](/assets/images/zanox-office.png)


### Are there any particular technologies that your engineering team has been exploring that you are particularly excited about?

Certainly around the messaging side – we were an early adopter of Kafka. That has become a core part of our tracking stack. Around NoSQL/Big Data, we are trialling a number of technologies, including Hadoop, H-base, MongoDB. Most of those are becoming established parts of the system. On the frontend there is still some exploration – we are using Angular, but now some of the teams are questioning that. We are exploring alternative frameworks, such as React. It's all about trial and error!

### How much coding do you still get to do as CTO?

Everyone has this fear that as they move towards management, they will become less hands on. And that’s fully justified. The truth is, as CTO, by continuing to contribute to the code base you are actually hampering the business. You time is required elsewhere.

### Do you apply an agile management approach across the whole company?

Yes, this is something I am proud of - how organizational culture within the company has been driven from the tech side of the business. I think both Affiliate Window and zanox were early adopters of Agile and Scrum. We now have this concept of Lean Delivery Agents, who are there to facilitate the development teams and get shit done. Teams are free to choose – most use Kanban, some use Scrum.

I think what’s been really interesting is how these concepts are promoted and applied within the wider business. The idea of facilitation is really strong. 90% of the time we are working on new things, so we shouldn’t get wound up when it isn’t perfect. The idea is to use the feedback loops and the retrospectives and whatever artefacts provided by Agile to facilitate constant movement.

![zanox berlin](/assets/images/zanox-office-berlin.png)

### As a self-taught programmer yourself, what attitude does zanox have towards hiring developers with no academic background in computer science?

The tendency is always to go for people with a degree - which I don’t agree with. We are prepared to take people who are self taught. I am not dismissing computer science degrees, but I really love the idea of learning through experience. Coding is something that fits well into that whole idea of apprenticeships.

### Many engineers are promoted because of their technical capability, but this can be problematic as technical skills don’t always equate to managerial skills. How does zanox promote developers?

Yes, typically what happens is companies will take their most experienced engineer and promote them into a management position. We do the same thing, but I am not fully convinced this is the right thing. You want a strong technical person who will have the respect of the engineers he is going to be leading, but also you are taking someone whose whole experience is around engineering and not people management necessarily. That can be a baptism of fire - it certainly was for me.


### How are zanox’s engineering teams organized?

We have 58 engineers across 10 traditional teams (five in Berlin, five in London), plus some developers working remotely. Each team has four or five engineers and a QA engineer. We also have a number of supporting teams, such as architecture, lean delivery, systems engineering, and product. Each of those departments offer support to the engineering teams.
![zanox jobs](/assets/images/zanox-office_berlin.png)

### Are you hiring developers?

We are hiring across the board. We have positions open for systems and enterprise architects, PHP, Java developers, expertise in any of the things we are using in our stack. There are always open positions, but I also always like to keep an open door.


### What do you look for when you hire developers?

Curiosity, passion and pragmatism!


### Finally, what advice do you have for aspiring CTOs?

As you move towards a management position you have to become a generalist - not just in a technical sense, but also in a management sense. You are the one who will translate between the two sides of the business, so you have to have a very good understanding of both. To be a technical leader, you have to be able to describe and talk about what you do to non-technical audiences.

* * *

**[Join Honeypot](https://app.honeypot.io/users/sign_up?utm_source=blog&utm_medium=organic&utm_term=e&utm_content=160603&utm_campaign=dev-no) today and receive 4 interview invites or more in three weeks.**

