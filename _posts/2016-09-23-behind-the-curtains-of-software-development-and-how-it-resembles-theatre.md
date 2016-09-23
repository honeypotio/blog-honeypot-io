---
title:   Behind the Curtains of Software Development and How It Resembles Theatre
subtitle:
date:    2016-09-23 09:35:33
layout:  post
author:  janet_todorova
categories: HR
cover_image: theather-software.png
permalink:  behind-the-curtains-of-software-development-and-how-it-resembles-theatre/
importance: 2
---

Have you ever wondered how software is built? Here is an attempt to explain software development by using an analogy with theater. Let’s imagine we have a theater production to stage and a software product to launch. The theatre art has some surprising similarities with software development.

<!--more--> 

## Theatre Production vs Software Product

Both a theatre production and a software product are created for the sole purpose to satisfy a need of the target audience, for example, with theatre it is the need for entertainment. There are two key similarities:

1. Both in a theatre production and in a software product, some things happen **“on stage”**, while others happen **“behind the curtain” (backstage)**.

2. In both cases, before the **“premiere”**, there is always a **“rehearsal”**.

## Producer vs Founder

In theater it all starts with a **producer**. The producer is the one who makes all the necessary arrangements for the production to be put on. This person is responsible to ensure funding, to recruit the director and production staff, to set the budget, etc. The best producers are the ones who have the genius to recognise a potentially great piece of theatre.

In tech startups that build software products, a **founder** has pretty much the same role - to recognise a potentially great idea, to ensure funding and recruit a team to build the product, and, finally, to deliver the product to the users and make them happy.

## Director vs Product Manager

The director is a key figure in every theatre production and is the first person a producer needs - in amateur productions the producer can often be the director. It’s the **director’s** responsibility to develop the concept of the production, brief and coordinate the production staff, plot the actor's moves, rehearse the actors. Finally, bring an awesome production to the audience.

Similarly, in software development, the **product manager** is in charge of the product. In a Scrum team, the product manager is called Product Owner. This role requires collaboration with the target users, knowledge about the competitors and current industry trends. The Product Owner collects business requirements and feedback from all stakeholders (founders, users, partners, the team, etc), then writes customer-centric items (typically user stories), prioritizes them, adds them to the product backlog and discusses them with the tech team. The user stories explain what features need to be built by the tech team.

## On Stage vs Frontend

If we think of a theatre performance, what comes first to our mind is a picture of actors on stage, with dialogues, choreography, costumes, makeup, lights, music, sound effects, etc - in other words, we think of that part of the production that is visible to us, the audience. 

Similarly, with a software product, what we usually think of is the user interface, the part of the product that we can see, click, interact with. This visible part of a software product is called **frontend or client-side or user-facing-site** and it consists of user interface elements such as buttons, fill-in forms, drop-down lists, pop-up windows, pieces of content (text, image, audio, video) etc.  

What are the roles on the frontend of software development?

## Set/ Costume/ Makeup Designer vs UX/UI Designer

In theater, the responsibility to immerse the audience in the play belongs to the **creative staff members** such as set designer, costume designer, makeup designer, hair stylist, etc.

In software development the **UX/UI Designer** is the one responsible to create a user experience and workflow that is intuitive to the user. The goal is to create the most natural flow, so that users can notice the important parts of the product (ex, the “Buy Now” button) and be encouraged to take important actions like add a item to the cart and proceed with payment, without being distracted. This includes designing different interface elements: buttons, drop-down lists, navigation components like search fields and tags, informational items like user response messages and progress bars.

UX/UI Tools: Photoshop, Sketch, Illustrator, Fireworks, InVision

## Set Decorator/ Choreographer vs Frontend Developer

In theatre, **professionals like** set decorators, choreographers, makeup artists, carpenters, electricians, among others, are the staff members that implement what the set, the costume, the makeup designers have created. In smaller productions, these could actually be the same people - for example, the makeup designer could also be the makeup artist or the costume designer could also be the one who creates the costumes and maintains them.

Similarly, in the early days of a startup, basic design can be done by the frontend developer. Keep in mind, the opposite is rarely valid - usually designers cannot do frontend coding. In software development, **frontend developers** are responsible for creating the functional implementation of the product's interface. Usually, a UX/UI Designer provides either a static or an interactive mockup (InVision is a cool tool to help with that) to the frontend developer who then translates it into a working, interactive experience.
Frontend Languages: CSS, HTML, JavaScript
JavaScript Frontend Frameworks: React, Angular, Ember, jQuery, Backbone, Meteor, Knockout, Vanilla, D3.js

## Backstage vs Backend

To make the play run on stage, however, you need lots of stuff and staff working backstage: think of building and changing sceneries, costumes, hairstyles, makeup, or the operation of all the equipment behind the scene such as lanterns (lights), sound effect machines, ladders, and the green room (backstage lounge or waiting room for the actors, which is almost never painted in green!). 

In most of the cases, the **backend or the server-side** of a software product consists of, at least, a server, an application, and a database. When users interact with the frontend of the product, they trigger actions on the server side (behind the scenes). For example, when a user clicks on “Friends” on a Facebook profile, the backend triggers a set of actions that eventually return in the browser the respective friend list. In fact, that click triggers so many actions on the backend that it would take pages to list them all, but for the sake of simplicity, imagine the backend request checks the database and returns the friend list.

What are the roles on the backend of software development?

## Theatrical Technician vs Backend Developer

**Theatrical technician** is a broad name for all "unseen" theatrical personnel who practice stagecraft and are responsible for the logistic and production-related aspects of a performance including designers, operators, and supervisors. For example, the electrics crew is responsible for the maintenance of the lighting, and the operation of the lighting plot, and the stagehand crew’s work includes setting up the scenery, lights, sound, props, rigging, and special effects for the production.

A similar role in software development has the **backend developer** who creates and maintains the entire backend of a software product, which consists of the core application logic, databases, data and application integration, APIs and other backend processes. Moreover, a backend developer also performs testing and debugging of any backend application or system.

Backend Languages: Ruby, Python, Java, Rust, Scala, Golang, PHP, Perl, Erlang, Elixir
Web Server Technologies: Apache, Nginx, lighttpd
Database: MySQL, MariaDB, SQLite, PostgreSQL, MongoDB

![twin-roles.png](/assets/images/twin-roles.png)

## Stage Manager vs DevOps

The stage manager has several key responsibilities and tasks to perform in each phase of a production, such as scheduling and running rehearsals, overseeing the entire show each time it is performed. **The stage manager** and the **technical director** together work out a smooth and efficient plan for the stage crew to follow during set changes. Furniture and prop plans for complicated sets are drawn up by the stage manager and technical designer to show exactly where the furniture and props are to be positioned on stage at the beginning of each scene and sometimes in the wings.

Similarly to theater, in software development [**DevOps**](http://blog.honeypot.io/what-is-devops/) works closely with **System Admin** and the DevOps role is to remove the incompatibility between development and product environments by creating code that automates and speeds up the tasks of the SysAdmin. Thanks to the DevOps, fixes, restructurings and deployments are automated and changes can be applied to all servers automatically rather than one-by-one manually.

Let’s take this sentence: “The stage manager and the technical director together work out a smooth and efficient plan for the stage crew to follow during set changes.” In software development, DevOps facilitates the deployment of code, so that the tech team and the SysAdmin do not exchange “tickets” back and forth before they manage to make the code ready to deploy in production.

DevOps Tools: Ansible, Chef, Puppet, Docker, Vagrant, Salt, Travis.CI, Circle.CI, Jenkins, Capistrano

## Technical Director vs System Admin

The **Technical Director (TD)** operates, maintains and safeguards the technical assets of the theatre, including supervising the use of lighting, sound, communications equipment, and the use and maintenance of stage facilities. The TD supervises and assists with set and stage construction and management, monitors the condition of the equipment, including lighting, sound, and rigging, and performs preventive maintenance on equipment. He also attends technical week rehearsals, in order to supervise and assist in the technical aspects of mounting the show.

Similarly, the **System Admin’s** job is to maintain the system up and running. SysAdmins are usually charged with installing, supporting, and maintaining servers or other computer systems, and planning for and responding to service outages and other problems. Other duties may include scripting, project management for systems-related projects, etc. Nowadays, with cloud computing, SysAdmins are responsible for automation, cloud infrastructure, networks services such as content delivery networks and DNS servers, source control, security.

System Admin Tools: puppet, chef, AWS, Openstack, Akamai, CloudFront

## Rehearsal & Premiere vs Staging & Production

Every theatre production has rehearsals before going live in front of the audience. Before the **premiere**, there are two important **rehearsals**: the dress rehearsal, which is the final rehearsal before the show opens with full costumes, makeup, lights, sound, props, etc, and the technical rehearsal, which is a rehearsal for perfecting lights, scenery, sound, and other technical elements.

In software development, things work similarly. Before releasing a product update to the users, there is a testing phase in a safe environment away from real users, called staging environment. Here, just like at a dress rehearsal or at the technical rehearsal, the QA Engineer tests, makes sure that acceptance criteria are covered and the product is ready to be released. Finally, the environment where the software is publicly accessible by users is called the production environment. 
 
## Rehearsal Director vs QA Engineer

Rehearsals are one of the most important aspects of running a professional theatre production and take up a great deal of the preparation. Professional productions have **Rehearsal Director**, in amateur ones, rehearsals can be run by the director.

In developing software products, quality assurance (QA) is a systematic process of checking to see whether a product or service being developed is meeting specified requirements. Usually, bigger teams have a dedicated **QA Engineer**, but when the team is still small, QA can be performed by the Product Owner and/or members of the tech team.

## Mobile Developer

Mobile is just another platform to release a product on. To launch a mobile app for a web product is like making a movie out of a theatre production. Same story, different platform to present it on, and an opportunity to widen your reach. A **Mobile Developer** is simply building the mobile version of a web (or desktop) application. Keep in mind that there is a difference between responsive websites optimised for mobile devices and native mobile apps that are created for mobile platforms (iOS , Android, Windows Phone).

Mobile Languages: Objective-C, Swift (iOS), Java (Android)

If you have feedback or ideas how to improve this post, let me know: jt@honeypot.io

* * *

## Curious facts about theatre:

* *“Mr Sands” in theatrical code is used to warn theatre employees of a fire without frightening the audience. "Mr Sands is in the foyer" means that fire has broken out in the foyer.* 

* * * 

**Honeypot is a marketplace connecting developers with Europe's most innovative start-ups. [Apply to join](https://www.honeypot.io/pages/for_employers?utm_source=behind-the-curtains) to find your next software developer.** 