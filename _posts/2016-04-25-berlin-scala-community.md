---
title:   "Community Devs: Scala in Berlin"
subtitle: On Scala, Reactive Programming and GraphQL
date:    2016-05-01 12:19:37
layout:  post
author:  emma_tracey
categories: Community
cover_image: community_devs_scala.png
permalink:  berlin-scala-community/
importance: 2
---

Community Devs is a series of interviews with developers working in Europe's startup hubs. Our first interview is with Oleg Ilyenko, a Scala developer based in Berlin. He is creator of [Sangria][9], a Scala GraphQL Implementation. Honeypot will be hosting a [GraphQL meetup][2] on May 11th.
<!--more-->

**You spent the first 7 years of your career as a Java developer before you discovered Scala. What inspired you to change direction?**

It's a funny story. I looked at Scala a couple of times before getting into it. I actually got into Groovy before Scala. Scala really caught my attention when I discovered an article [“Scala as the long term replacement for java/javac?”][1] by James Strachan (the creator of Groovy) saying: “I can honestly say if someone had shown me  *Programming in Scala* by Martin Odersky, Lex Spoon & Bill Venners back in 2003 I'd probably have never created Groovy”.

**What are the advantages of using Scala over Java?**

Scala is a more expressive language, you are able to describe your business logic in a more intuitive way. It provides more type-safety, which means that more invariants can be defined at compile-time. This helps a lot with long-term project maintenance and safe, fast refactorings.

Another aspect in which Scala excels is immutability support. One can write immutable code in Java as well, but it requires much more effort and dedication. In Scala it’s the most natural way of writing code and is a default in most of the cases.

Now that Java 8 has function literals, one could argue that it now also has some support for functional programming. Scala, on the other hand, embraces functional programming and provides support for it which goes far beyond support of function literals.


**Some argue that Scala is overly complex, in its use of functions, macros and tuples, for example. What are your thoughts on that?**

There are new concepts to be learnt when programming with Scala, that's true. I would argue though, that there are good reasons for these concepts to be in the language. Tuple is a simple example of it - it’s just a pair of values. Every single Java project, I had the pleasure of work on, had a class called Pair or KeyValue. So I find it very helpful that Scala supports this concept out-of-the-box. And it’s reoccurring topic: as I was learning Scala I  was often reminded of *[“Effective Java”][4]* book by Joshua Bloch  - almost every chapter of the book is addressed by Scala on a language or standard library level.

When I have a discussion on this topic, I often get an argument that Java is more simpler language with less syntax, concepts and language constructs to learn, which makes it easier to read and understand code, especially for junior developers. In my experience though, most of the complexity comes from business requirements and complex business logic. Scala provides developers more tools to capture and express this business logic in a way that is much closer to the language of the domain experts.

We have heard developers complain that because code bases written in Scala can be difficult to maintain because of the flexibility of the language: you can write object-oriented code or functional code, for example. If the team doesn’t have strict guidelines on how the code should be written, the code base gets unmaintainable. What's your experience with this?

In my opinion this can be a concern for any language. For more than 2 years now I have been working on a big Scala SaaS project. We do embrace functional programming and immutability, but we also don’t shy away from object-oriented approach and mutability in some cases where we see clear need for it - some performance-critical parts of the application may require it, for instance. We don’t have any issues with communication between developers, in fact we have very good synergy within the team. I think it all comes to people - their character, ability to present arguments and find a consensus. That’s why I find it crucial to involve developers in all stages of hiring process. This is what our company always did, and I can see a clear evidence that this approach not only works, but also also has a very high success rate in form of good synergy within a team.

**There are plenty of JVM languages out there, like Clojure. What do you think the benefits of Scala over Clojure are?**

I glad that you mentioned Clojure. I like Clojure a lot, it’s one of my favourite programming languages. Though I find it hard to compare Scala with Clojure. I think it depends on what you are looking for. If you are looking for statically typed language, then in my opinion Scala is the best choice. If you want a dynamic language then Clojure is the way to go. I really appreciate the work they are doing on the Clojure - it innovates in many areas and I see a lot of evidence of Clojure and it’s ecosystem being inspiration to other programming language communities and projects.

![java scala pay difference](/assets/images/java-scala.png)


## Scala Community

**How would you describe the Scala community?**

As with many technology-related things, it wouldn’t be very useful without community support. Thankfully, the Scala community and ecosystem of libraries does it’s best to embrace functional programming, type-safety, immutability and high code quality. I see strong vision and sense of purpose within the Scala community. This is invaluable not only for programming language communities, but also for teams, organisations and companies working with the language, It may look invisible at first, but with a time one can start to notice it’s influence in different parts of ecosystem like, for example, in a work on [Reactive Manifesto][3].


**What should Scala developers in Berlin know about the Berlin Scala community?**

I have been a member of the [Berlin Scala][6] and [Play user groups][7] for about 4 years now. At my first Scala user group meetup there were just 30 people. Today, the Scala user group struggles to find a place large enough to host all the members. It’s amazing to see the growth of Berlin Scala community over the years. We already had several great hackathons with large number of attendees and the next one already scheduled close to the Scala Days conference. This year is the second time Scala Days conference takes place in Berlin.

**Which Berlins startups are working with Scala?**

I already saw Scala being used in many startups. Its also gaining popularity in bigger, more mature companies as well. Scala is already 12 years old but the decision to change the programming language of a company is based on a complex interaction between company organization and company culture. In my experience it often requires tight cooperation and collaboration between developers and management for this change to happen. There is much less risk now to adopt Scala - there are plenty of learning resources and a very rich ecosystem of libraries (which includes Java libraries as well). Berlin companies using Scala,  like SoundCloud, HERE, eBay and Zalando, make it easier for a smaller companies to make this decision and embrace Scala as well. Many companies in Berlin are now [hiring Scala developers][8].

## GraphQL

**[Sangria][5], a GraphQL implementation for Scala, is one of your most successful open source projects. Can you tell us about GraphQL?**

GraphQL allows you to build API with high emphasis on efficient data retrieval and introspection with a powerful type-system behind it. It becomes even more powerful when combined with client-side frameworks like React and Relay, allowing you to build an application based on highly decoupled components without sacrificing performance or over-/under-fetching a data needed for the views. Web application development is not the only area where GraphQL excels. Any area that requires very precise and performant data fetching/manipulation, like mobile application development, can profit from GraphQL.

![oleg](/assets/images/oleg.jpg)


**When did you first hear about GraphQL?**

I’m very excited about Sangria - a GraphQL implementation for Scala. I learnt about GraphQL about a year ago and since than I’ve become more and more excited about this concept. I wouldn’t say that it’s a replacement for a REST API - I believe that it can  nicely complement REST API. Embracing GraphQL will unlock it’s full potential though.

**Would you consider putting GraphQL as a public interface into your API?**

This is a topic I definitely would like to explore. At the moment, Facebook uses it internally and many people use it with Relay, a Javascript framework from Facebook, to build a single page applications. I would really like to explore the use of GraphQL as a public API. In my opinion it can solve many problems that people are facing with REST API - over- and under-fetching of the data, API evolution over the time, API documentation and introspection, etc.

**What are the potential drawbacks of putting GraphQL as a public interface into your API?**

Exposing public GraphQL API raises several concerns as well. Since data query languages provide a much more powerful mechanism to fetch data than a simple fetch of resources or a list of resources, it becomes much easier to misuse and abuse it by making very expensive request to the GraphQL server. In Sangria I implemented several mechanism to perform a static query complexity analysis, but I still think that there is a room for improvement in this area. GraphQL is still very young technology, so I’m sure that with the time GraphQL community will good solutions to these concerns.

**Is it possible to restrict access to some resources with GraphQL?**

GraphQL itself doesn’t cover authentication and authorization but it’s possible to implement a security mechanism on top of it. The nice thing about GraphQL is that it is completely backend agnostic. This means that you can implement a GraphQL server with any programming language, transport protocol, data format, database or security mechanism of your choice.




**Is GraphQL becoming popular across other languages?**

It’s becoming popular in many different communities. When Facebook open-sourced GraphQL, they also open-sourced the reference implementation for Node.js, so it was the first GraphQL server implementation. Facebook internally uses PHP/Hack and as far as I heard they plan to open-source it at some point as well. At this point there are implementations of GraphQL server for at least 12 programming languages like Scala, Java, Ruby, Python, etc. And this number keeps growing. It’s amazing to see how much traction and community support GraphQL specification has.

## Reactive Programming

**Aside from GraphQL are there any other technologies you are particularly excited about?**

Reactive programming is something I am really excited about as well. It helps to build applications that are responsive, and resilient - two traits that are crucial for modern SaaS applications in my opinion. I am always in favour of data-flow driven applications that are based on an event-stream processing as a primary building block, in contrast to control-flow driven applications.

**Can you see reactive programming supporting microservices architecture?**

Indeed, reactive programming can be very helpful when implementing a microservice architecture. Ideally you would like to separate services based on the business value and functionality. This means that it is crucial to ensure that services are resilient to a failure and you don’t end up in situation where error in one service cascades to other services and brings the whole system down.

Different services may also have very different scalability requirement and different SLAs (Service Level Agreement). This means that services need to be elastic and dynamically scale based on the workload and in order to fulfill SLAs for a peak workloads and don’t waste hardware resources for lower workloads. This is where reactive programming and Reactive Manifesto comes to rescue.The thing about microservices is it is still very broadly defined. There is no single simply definition for it and many people interpret. Some people would argue that it is indeed connected.

**What other open source projects are you working on?**

Another project I’m working on is Scaldi - a lightweight Scala dependency injection library. It started as an experiment which evolved into a nice Scala DSL (Domain Specific Language). It comes out-of the-box with Akka and Play 2.5 support and is used by several projects as well, like Skinny Framework.


**How do you think new ideas in programming become popular?**

I don’t think there is a definitive answer to this question, or at least I don’t know one. As far as I saw, most of the popular and innovative ideas are born from a real necessity for something that impossible or very hard to achieve otherwise, and by impossible I mean that it takes too much time and effort to be worth it.

I think the first most import question one need to answer is “why?”, as with ideas and products in any other industries. This will help people realise the value and potential of the idea. What exactly you are building and how you are building it are important topics as well, but they are secondary in my opinion.

I also strongly believe that additional care should be given in building a community around this idea. Even the best ideas are not very helpful if nobody is aware of them or nobody cares because of unhealthy community. Most of the time implementation of an idea and it’s refinement is a collaborative effort.



**What do you see as the most exciting developments for Scala over the coming year?**

I’m excited about Scala 2.12, which should be released very soon. It will bring better interoperability with Java 8. This will allow Scala take advantage of many new features of Java 8, which would mean a lot of performance improvements as well.

I also very interested in further development of Dotty - a new experimental Scala compiler. It's still  in early stages of development, but it already looks very promising and may provide a solid base for many future language improvements.

And last, but not the least, further development of Sangria, of course!

* * *

**[Join Honeypot][10] today and receive 4 interview invites or more in three weeks.**

[1]: http://macstrac.blogspot.de/2009/04/scala-as-long-term-replacement-for.html
[2]: https://honeypot-tech-talks-graphql.eventbrite.de
[3]: http://www.reactivemanifesto.org/
[4]: http://www.amazon.com/Effective-Java-Edition-Joshua-Bloch/dp/0321356683
[5]: http://sangria-graphql.org/
[6]: http://www.meetup.com/Scala-Berlin-Brandenburg/
[7]: http://www.meetup.com/Play-Berlin-Brandenburg/
[8]: https://www.honeypot.io/pages/how_it_works?utm_source=commdevscala
[9]: http://sangria-graphql.org/
[10]: https://app.honeypot.io/users/sign_up?utm_source=blog&utm_medium=organic&utm_term=e&utm_content=160501&utm_campaign=dev-no
