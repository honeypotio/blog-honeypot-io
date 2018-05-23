---
title:   "8 Top Ember.js Interview Questions in 2018"
subtitle: "Check out our comprehensive list of Ember.js interview questions and answers! Whether you're preparing for an interview or just looking to brush up your Ember.js knowledge, these interview questions will help you get one step closer to that dream job."
date:    2018-05-23 10:10:16
layout:  post
author:  stefan_kingham
categories: [Developer Careers]
cover_image: emberjs.png
permalink:  emberjs-interview-questions-2018/
importance: 2
---

Unless you’re a well-seasoned JavaScript developer with a deep understanding of **JS frameworks** and a fondness for code-filled guides and tutorials, you probably know how tricky it can be to find reliable and quality information online regarding **Ember.js interview questions**. 

So, in order to assist [Ember.js](https://www.emberjs.com/) developers in their interview preparations and provide tech recruiters with a brief overview of what potential candidates should ideally know about the Ember.js framework, we’ve put together this handy list of Ember.js interview questions!

<!--more-->

We won’t be getting overly-technical or diving into code challenges, but we strongly believe that great developers should be conscious in their decisions to use certain technologies and able to justify those choices. In other words, the following questions should allow recruiters to **sort the thinkers from the doers**.

<br />

## 1. What is the Ember run loop and why is it useful?

<br />

*First things first, what is the Ember run loop?*

So basically, pretty much all of the code you write in your Ember applications takes place in a run loop which is used to **batch assorted actions and reorder them in the most efficient way possible.**
The run loop does so by scheduling actions, or jobs, on specific queues that are processed to completion in priority order.

Ember.js will create a run loop whenever a user interacts with the browser to execute any Javascript that needs to run in response. Once the run loop has looped over all of the actions on the queue in order of priority, control is returned to the browser.

*Why is the Ember run loop so useful?*

Batching similar actions allows for **better pipelining, less rendering time and improved app performance**. Moreover, the Ember run loop organizes the execution of code in logical blocks, meaning it’s much easier to maintain. 

<br />

## 2. What is Ember Data and how does it work?

<br />

[Ember Data](https://github.com/emberjs/data) is a library that helps you to manage model data in your Ember.js applications, define relationships between models and load records from the server that are instances of those models. What’s more, it saves your changes back to the server when the records are updated and also makes it easier to cache records for performance.

Confused? The core team behind Ember think of Ember Data as **“a framework for managing models and relationships.”** So yeah, if you don’t know what models are, we suggest that you keep reading! ;)

Knowing the different components of Ember data is key to understanding how it actually works, but for the sake of simplicity, let’s just say that Ember data is primarily **a bridge between The Store (main interface / central repository of Ember data) and the server**.
 
<br />

## 3. What are the business advantages of using Ember.js instead of React or AngularJS?

<br />

We’ll get into the technical advantages of using Ember at a later stage, but for now let’s ask ourselves to what extent EmberJS is beneficial for product owners and business stability.

Choosing the right development solution, or in our case the right JavaScript framework, is not a decision to be taken lightly. *Why?* Because choosing the wrong solution for your needs could mean having to make another change in the near future which in turn could lead to **avoidable costs, slower development and lost customers.**

For that reason, it’s very important that businesses and product owners consider each solution’s level of dependability and durability when selecting the right framework.

One of the main advantages of using Ember.js is that they introduced a **Long-Term Support** (LTS) release channel of their product back in 2016 ([Angular](https://angularjs.org/) released it on their 4.0 version in May 2017 while [React](https://reactjs.org/) decided that moving from two-week releases to monthly releases was sufficient for now). Long-term support extends the period of software maintenance and reduces the frequency of software updates, meaning lower development costs and less risk for businesses.

Furthermore, Ember.js follows the same **coding by convention** principle as [Ruby on Rails](https://rubyonrails.org/), a software design paradigm that aims to decrease the number of decisions a developer using the framework has to make without losing flexibility. In other words, new development team members don’t have to learn as many team-specific practices as they would with other JavaScript frameworks as the tool pretty much forces developers to use its rules anyway.

And finally, **EmberJS is going strong!** Plenty of big names are regularly using and improving the framework, including Linkedin, Twitch and Apple, so it’s fair to presume that EmberJS won’t be going obsolete anytime soon!

<br />

## 4. What are Controllers used for in Ember.js?

<br />

A controller is basically **a file where you can define URL Query Parameters (the part of a URL that comes after a question mark), action and attributes that need to be shared with child components**. A controller is usually paired with an individual route and is what responds to user interactions happening on the user interface.

The manner in which you create controllers depends which files you want to be able to communicate with each other, how [DRY](http://deviq.com/don-t-repeat-yourself/) (“Don’t repeat yourself” ) you want your code to be and how you will save state, but it’s generally good practice to create a controller when:

  * You need to use query parameters in the URL that the user sees.
  * You want to share actions or variables with child components.
  * You have a computed property that’s determined by the results of the model hook.

<br />

## 5. Do Router and Route mean the same thing in Ember.js? If not, what makes them different?

<br />

As you can imagine, route and router are very closely linked but don’t carry the same meaning.

While **routes are responsible for setting up application state, displaying templates and loading data, a router matches the current URL to the different routes you’ve defined.**

When a new URL is set (the user loads the app for the first time, changes the URL manually or clicks on a link within the app), the Ember router then maps that new URL to one or more route handlers that are in turn capable of either rendering a template, loading a model that is then available to the template or redirecting to a new route.

In other words, routes are responsible for defining the data that is sent to the template, but they would be nothing, *(nothing!)* without a router. *(Or a girl.)*

<br />

## 6. What are the main technical advantages of using Ember.js?

<br />

So we previously discussed why Ember.js is such an interesting JavaScript framework from a business standpoint, but what makes it so appealing to developers? What are the technical advantages of Ember.js when compared to other frameworks?

Ember’s motto, *“Convention over configuration”*, pretty much answers this question. Developers who work with Ember generally spend more time shipping code and less time setting up development environments and well, yak shaving. *Why?* Because whenever you generate a resource, model or component in Ember, [ember-cli](https://ember-cli.com/) (Ember’s command line utility) sets up all the tests for you.

There are no third party libraries (Mocha, Jasmine or Karma for example) or build tools (such as Grunt or Gulp) in Ember, meaning **developers don’t have to worry as much about configurations and testing environments.**

Moreover, Ember comes with its **own client side mock server in the form of [ember-cli-mirage](https://www.ember-cli-mirage.com/)**. The same can be said for several other JavaScript frameworks, but they’re much harder to set up.

And last but not least, Ember has **adopted the latest Javascript and web standards**, including promises, web components and ES6 syntax, and has been widely praised by developers for showing a long-standing commitment towards **backwards compatibility**.

<br />

## 7. How is data communicated between your server and your Ember application? 

<br />

To answer the question without getting overly-technical, data is basically communicated between your server and your Ember application thanks to what we call **Adapters** and **Serializers**.

While **adapters tell us which URL to use** (the place that you’re going to be sending this request), **serializers make sure the data is in the right format**.

In actual fact, a serializer determines the data you send and the data you get back, so it takes what’s in your ember data model and turns that into something that you can send to the server, and then normalizes the data that you get back from the server.

Serializers therefore communicate with models in order to ensure data is consistently structured and relationships between data are mapped. (We’ll talk more about models in the next question).

<br />

## 8. Templates, Models and Components are key concepts in Ember. Describe them.

<br />

Mastering Ember.js without understanding templates, models and components is like [Tottenham winning the Premier League](http://www.haveyoueverseentottenhamwintheleague.com/). While we appreciate your wishful thinking and optimism, it just ain’t gonna happen!

*Now we’ve got that out of the way, here’s a brief overview of each concept.*

<br />

### Templates

This one’s quite self-explanatory. As you’d expect, Ember uses templates to **organise the layout of HTML** in an application. Ember templates use the syntax of Handlebars templates and can display properties provided to them by a component or a route’s controller.

<br />

### Models

**Models represent persistent state**.

For example, an online auction platform would want to save the details of an item when a user publishes it, and so an item would have a model defining its details, perhaps called the item model.

While a model usually persists information to a web server, models can also be configured to save elsewhere, such as the browser’s Local Storage for instance.

<br />

### Components

Look at it this way. Templates describe what a user interface looks like while **components control how the user interface behaves**.

Components are usually made up of two parts. You’ve got a template written in Handlebars (as previously mentioned) and a source file written in JavaScript that defines the behaviour of the component.

If we go back to our online auction example for instance, the platform might have a component for displaying all items that can be found on the website called all-items, and another component for displaying an individual item called item-specific. 

In this case, the item-specific component might define a behaviour that lets the user hide and show the image property of the item for example!

<br />

**So there we are!**

We hope these questions helped broaden your understanding of Ember.js and provided you with some useful tips on how to prepare for your next Ember.js interview!

*This article is the beginning of an extensive series dedicated to front-end developer interview questions (and more), so be sure to come back soon for more interesting insights!*
