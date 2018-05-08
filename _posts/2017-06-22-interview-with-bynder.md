---
title:   "What's it like to work at Bynder?"
subtitle: "Interested in the prospect of joining Bynder? We interviewed their CTO, Roland Keijzer, to discuss the company's tech stack, the unforeseen technical challenges in scaling Bynder and their vision for the development of the product over the next few years."
date:    2017-06-22 10:28:42
layout:  post
author:  jelle_groot
categories: [Interviews]
cover_image: bynder.png
permalink:  interview-with-bynder/
importance: 2
---
Dutch tech company [Bynder](https://www.bynder.com/) began life as a side project in a web agency. The difficulty of image-transfer led the founders to develop their own digital asset management software, which today is used by more than 150,000 brand managers, marketers and creatives globally. We talk to Bynder CTO, [Roland Keijzer](https://nl.linkedin.com/in/keijzer) about their modern tech stack and the joys of having offices in three of Europe’s coolest cities, Amsterdam, Rotterdam and Barcelona. 

<!--more-->

###  Hi Roland! How did Bynder get started? 
 
 
That’s actually a nice story! It all started with Label A, a company founded by Chris, Stefan and myself back in 2008. We were a web agency and built all kinds of websites, applications and also more complex projects. We had a client, a distributor of alcoholic beverages, who wanted a database for their images and marketing materials. These digital assets used to be shared using an ftp drive or they would even be delivered by a bike courier, so we were asked to create a more modern solution. 
 
We created a digital asset management (DAM) tool, without really being aware of it. Then this need started popping up everywhere; more and more clients were requesting something very similar. This concept was very powerful, and we gradually came to understand the value and the potential of it - every company doing marketing (i.e. basically every company) could use a tool like this.
 
### Your product grew out of a real problem felt by a client. How did Bynder develop after that?
 
The first two years we didn’t do too much with the DAM itself, but because it was such a new technology and had strong features, we signed some very good customers. Soon after, we decided to put more effort into our DAM than we had before, and we separated DAM from Label A and started hiring the first employees. That was the birth of Bynder. 
 
With Bynder, we have always been a SaaS product and it has always grown through the needs of the customers. 

![bynder-jobs](/assets/images/bynder-one.jpg)
 
### How has your tech stack changed in that time?
 
We were on a virtual server at the very beginning, but we quickly switched to S3, EC2, SQS, RDS and all these services from Amazon.
 
### What were the unforeseen technical challenges in scaling Bynder? 
 
Back in the days, Bynder didn’t start in the cloud in the strictest sense, but on a virtual server. A very simple, 200GB server. The thing with images is that the file sizes can be pretty large. Everything went well when we had a small amount of clients but when we started to grow, we were confronted with some issues. When you have ten customers uploading 100GB footage, at some point you will have to replace your hard drives. Replacing a hard drive on a server means downtime so that is why we looked for other solutions and eventually chose to work with Amazon Web Services and their ‘unlimited’ storage. This way we could fully focus on our customers and their needs without paying full time attention to our hardware. 
 
Also, our clients can download files or select particular files and download them as ZIP files. This is very processor-intensive because every customer puts together his own package of files. Therefore, we decided to create a special microservice. This microservice has the ability to scale up automatically when needed. Before that, problems would arise when a customer would send out an email and all recipients would start to download at the same time. The workload was too heavy which caused our server to go down. The problem of too many users requesting heavy tasks at the same time is solved through these microservices. From that day, the scale of our service became unlimited.

![bynder-jobs](/assets/images/bynder-two.jpg)
 
 
### What are the features you are particularly proud of?

The way we generate previews, because there are many exotic file types out there. Sometimes these are very complex and with sizes up to 10GB for a single image. We used to have problems with this in terms of scale and quality, but we’ve taken huge strides to generate previews in so many different formats. More generally, I would say we are pretty good UX/UI-wise. 
 
Thinking more broadly, our UX and UI have and will remain one of the signatures of our software. I think this is because of our roots as a web agency, we have a focus on UX/UI and we have a design-first approach. We are always concerned with the end user, and we also realize that usability is the quickest path to widespread adoption of the tool, so we’ve doubled down on that.
 
### You mentioned previously that scaling your engineering team has been a challenge. What are you doing to deal with that? 
 
We added a second office dedicated to development, this time in Barcelona. The talent pool there is tremendous, and it’s good to add new perspectives to the team. We have 15 employees now in Spain and we found out that it is important to have them operate autonomously. We work in squads of maximum 8 people: backend, frontend, QA and product owner, focusing on certain parts of Bynder. 


![bynder-jobs](/assets/images/bynder-three.jpg)


### Why do developers want to work for Bynder? 
 
A number of things. Our offices are centrally located: we are at Plaça de Catalunya in Barcelona, on Blaak in Rotterdam and practically on Leidseplein in Amsterdam. For developers specifically, I’d say we are attractive because we work with new technologies. We are currently building a single page application with React and Redux as frontend frameworks, we build our backend in Python and work with a GraphQL API. Everything is hosted on AWS. We are actually one of the top 3 clients of Amazon in the Benelux so we are also involved in the development of new features and products and we are invited to run new services in Beta with them.

### What is your vision for the development of the product over the next couple of years?

The technologies we work with are future proof. The focus will be on integrating AI to a greater extent. For example: when users are tagging pictures, we will use machine learning technologies to give more precise suggestions in queries and in the upload process. Many clients currently employ librarians to do digital asset management and manage all the graphic material in a company.
 
Bynder can help automate this more. For example, image recognition software can recognize faces. What kind of a picture is it? Which subjects are in it? The software itself is developed in-house. These kinds of ideas are brought forward or picked up by our team, then they make a nice proof of concept. If we like it and see the value of it, we take the idea further. That’s the startup culture or the agile way of working we (still) have. 
