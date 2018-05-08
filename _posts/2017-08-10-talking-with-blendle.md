---
title:   What's it like to work at Blendle?
subtitle: "Interested in the prospect of joining Blendle? We interviewed their CTO, Jean Mertz, to discuss how the Utrecht-based tech startup combines journalism and technology, how they maintain a polyglot development environment and why it’s so fun to work there as a developer."
date:    2017-08-10 14:54:03
layout:  post
author: jelle_groot
categories: [Interviews]
cover_image: blendle.png
permalink:  talking-with-blendle/
importance: 2
---

Blendle aggregates articles into a single, ad-free platform where readers can pick and choose which stories to read. We interviewed Blendle’s CTO Jean Mertz and talked about how the Utrecht-based tech startup combines journalism and technology, how they maintain a polyglot development environment and why it's so fun to work there as a developer.

<!--more-->

![CTO Blendle](/assets/images/cto-blendle.png)

### How did you end up at Blendle?
I was watching De Wereld Draait Door (‘The World Keeps Turning’,  a Dutch television show) when I saw Alexander. [Klöpping, Founder & CEO] I thought to myself that sounds like an interesting bunch, let’s see if they need developers. I jumped on the train, went to Utrecht to meet them, and got a really good feeling right from the start. We got to work on a few things together where I was able to demonstrate what I can do, and even got a chance to go out for lunch as a team. It was a nice way to get to know the company. That was a little over two years ago, after which I joined as a backend developer and a year later I became CTO.

### What is it like working at Blendle?
We are still kind of a startup, we’ve only existed for about 3.5 years. What defines us is a  combination of passion for technology and for journalism. Everything we do is focused on promoting quality journalism, especially with younger readers who rarely experience this kind of journalism. 


![Everyday material at Blendle](/assets/images/blendle.jpg)

### What technologies do you work with?
We make a clear distinction between the backend (from where the API is being served) and the clients who use the API. We have a Ruby backend that serves the API, a ReactJS frontend for the website, a SWIFT code base for the iOS app and a Java/Kotlin codebase for the Android app. As a result, everyone can work separately if needed but also can keep in touch with each other to ensure that API communication is always good and being developed.

### When Blendle started, you had your own hardware on which your applications ran. How has your infrastructure changed in that time?
We slowly moved to the cloud and more recently we made a transition to Kubernetes. This has enabled teams to be very much in control of the infrastructure they work with. It also makes it possible for teams to develop very independently while keeping in touch with each other to communicate about new features or cross team implementations or cross component implementations.

We also strive for continuous delivery, which we have done from the outset and we continue to work on. We have about 20 to 40 releases a day. So that means that when someone makes a pull request, there are two colleagues who need to approve it, then it goes straight to master and to production. Our continuous delivery platform is built on top of Kubernetes so that we can scale indefinitely. We strive to keep testing under two minutes, preferably within a couple of seconds. It’s funny to see when people start to work here, some think: 'holy shit' when I click on merge, it will go to production and to those hundreds of thousands of people reading articles.

### Why is it interesting for developers to work at Blendle? 
In general, we encourage a polyglot development environment. For example, we wrote our mailer in Golang because we needed performance in that area. We had to generate thousands of personal newsletters in 5 to 6 minutes, we could not make this happen reliably with Ruby in such a short time. We also wrote a piece of our backend in Node.js.

As a team, we look at the problem and make the right technology choices.That makes it a lot of fun. As a result, a developer at Blendle can work with multiple languages and colleagues teach each other new languages. So, I think that is a beautiful thing about Blendle.

We also have our "Bleativity Day", which we have twice a month, for an entire day. All Blendle employees work on something cool  that may or may not be work-related. On these special days, you can feel the energy when you walk around the office. 


### How does Blendle suggest articles to readers? 

We have a team of 8 machine learning specialists who are constantly improving the models to make the best selections of articles for our readers. Also, we are adding new input that should help determine what's interesting for you. For example, if you indicate that you are interested in sports, this will be considered in selecting which articles are of interest to you. But we can also look at your reading behavior; what articles you clicked on, how long you read them, and how far you scrolled down after opening an article. With approval, we also incorporate Twitter and  Facebook into our analysis. What’s being read in social environments can also be used in our algorithm.

We are very aware of the filter bubble effect that can be the result of these algorithms so we continue to look for ways to make the selection even better for you, while at the same time trying to ensure that you will not get stuck in your bubble. That's why we also have the must-reads; three articles chosen by the editorial team which you will be shown, no matter the preferences you indicated. The goal is to show our readers exactly the articles they would like to read, promoting quality journalism and bringing our readers what they want every morning.

### What do you look for in developers you hire for Blendle?
We have three components that we look for: Work, Drive and Fit. These components all have the same weight for us when we consider hiring someone. First, the component Work: how good are you in your job, what can you contribute to Blendle? What can you teach your colleagues? Second, what is your ambition, where do you want to go? How passionate are you in your profession. That’s the Drive aspect. Third, Fit. Do you fit with Blendle culturally? Do you have a startup mindset? It’s not a 9 to 5 job, you have a lot of freedom but we also have high standards concerning the output we expect from our employees. Finding someone with the right combination of these three elements is very difficult. We do not require you to have a passion for journalism but you do need to be passionate about making a product like Blendle.
