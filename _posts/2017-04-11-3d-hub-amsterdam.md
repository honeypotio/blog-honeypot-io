---
title: "3D Hubs - Developers, 3D-technology and Amsterdam"
subtitle:
date: 2017-04-11 08:27:15
layout: post
author: kado_damball
categories: [Interviews]
cover_image: 3d-hubs.png
permalink:  3d-hubs-amsterdam/
importance: 2
---

It is beyond doubt that 3D printing technology is revolutionary with regards to its applications. From science research to [open source prosthetics](https://ultimaker.com/en/stories/17028-meet-luke-and-his-3D-printed-e-nable-hand), nearly every industry is finding useful ways to utilize the technology. We interviewed [3D Hubs](https://www.3dhubs.com/), one of the leading 3D printing companies from Amsterdam.

<!--more--> 

### Could you give some information on your history, specifically how you came as a company into 3D printing?

Brian and Bram, the co-founders of 3D Hubs, worked for large players in the 3D printing industry and noticed an increase in home-owned 3D printers. In 2013 they started on their mission to connect all 3D printing services globally into one online platform and make them locally accessible. 

Initially starting with desktop machines facilitating 3D print orders for things as Go-Pro mounts, we have now grown to supporting large industrial 3D printing services creating metal parts for the aerospace industry. Today, we’re already providing over one Billion people with access to 3D printing within 10 miles of their home.

### Was it hard in the beginning to find developers who have experience in the field?

For quite a while, our platform was mostly web-based, so actual 3D printing expertise inside our product team wasn’t very necessary. Recently though, we’ve been investing in a lot more specialized solutions to support our printing services in checking models for faults. Finding engineers with experience with both geometric analysis and 3D printing was very difficult for us. We ended up [acquiring Printivate](https://www.3dhubs.com/press/3d-hubs-acquires-printivate), a service for optimizing and fixing 3D models. With Printivate’s experience and products and some of our own hiring, we’ve started pumping out more and more 3D printing specific functionality to our platform. Thanks to our R&D team we now have a 3D model viewer, which can highlight different kinds of printing issues on uploaded model

### What technologies do you use on a daily basis?

While most of our platform runs on PHP/Drupal for now, we’re actively migrating our services to a Python/Flask setup. Our frontend is written in ES6/Angular 1.5, and our 3D printing analysis services in Rust and C++. For tooling and smaller projects we like to experiment with technologies a bit outside of our comfort zone, like Node.js, Elixir, and AWS Lambda.
To get rid of the heaviest grunt work, our devops squad set up a fully automated Docker environment. After each push to GitHub, the automated testing, linting, and building kicks in. Then we can deploy in a single line using a home-built script. This way our work as developers is focused mostly on actually writing code.

### How would you describe the tech team culture at 3D Hubs?
Always working to get things done. We build for 10x growth, rebuild by 100x, with a focus on developer productivity as well as stability. We love to weigh off business value/fast iteration vs best technical solution - data above intuition! In our team different people have different interests in technologies, and these differing points of view make for greater perspectives when solving the problems we’re faced with.

### What are some challenges the company faces within the 3D printing industry? What about technology challenges?

The biggest challenges in the 3D printing industry are all based on the speed of innovation which is currently happening. Every week new machines, materials and production methods are being released. Our job is to stay at the forefront of this, providing this to all our customers around the world. The challenge is making sure we have the latest materials and technologies available so engineers and designers using 3D Hubs can get the right part for their specific function in the material with the best properties for the job.

As for technological challenges, moving a large part of our application to a completely new platform comes with a heap of challenges. How do we map our current domain to code? How do we make a platform that’s simple to understand for new developers, but powerful and robust enough for expansion? Every day we work towards finding the perfect balance between a system that will allow us to be super productive, and a system that will remain maintainable for years to come.

### What do you see as the future of the 3D printing industry?

Our vision for the future is one in which the world runs on local products. Electricity comes from solar cells on your roof, food is grown in urban farms, and everyday commodities are made on machines owned by someone in your neighborhood. Using locally recycled material, these machines would produce designs tailored to your needs. The need for shipping would disappear and your products would be a short bicycle ride away, at the friendly Hub around the corner.

We truly feel local manufacturing has the potential to eliminate waste, pollution from transport and long shipping lead times, all of which are relics of centralized production. We want to facilitate the production of products made on-demand and closer to their point of purchase.

### Finally, as a developer interested in 3d printing, how do I get my feet wet? Any interesting tools I can start with to familiarize myself with the technology?
Print something! You can either find a model on [Thingiverse](https://www.thingiverse.com/) or create your first design in a CAD program (I used [Tinkercad](https://www.tinkercad.com/) for my first model). You could either get it printed locally on [3D Hubs](https://www.3dhubs.com/3dprint ), or if you’re interested in getting your own printer I’d recommend our [3D printer guide](https://www.3dhubs.com/best-3d-printer-guide). If you want to learn more about the technologies behind 3D printing, check out our [definitive guide to additive manufacturing](https://www.3dhubs.com/what-is-3d-printing).

Or you can of course come work at 3D Hubs! I had no idea there was so much to learn about this technology before I started here. The internal knowledge sharing sessions by our mechanical engineer and 3D printing expert and of course the unlimited access to 3D printing have thought me a lot about the technology.

* * *
