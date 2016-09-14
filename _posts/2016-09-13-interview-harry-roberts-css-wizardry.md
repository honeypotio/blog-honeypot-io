---
title:   CSS Wizardry creator, Harry Roberts, talks to Honeypot
subtitle:
date:    2016-09-13 15:58:27
layout:  post
author:  kado_damball
categories: Company
cover_image: css-wizardry.png
permalink:  interview-harry-roberts-css-wizardry/
importance: 2
---

Harry Roberts is an award-winning Consultant Front-end Architect who helps organisations and teams across the globe to plan, build, and maintain product-scale UIs. A Google Developer Expert, he writes on the subjects of CSS architecture, performance, and scalability at [csswizardry.com](http://csswizardry.com/); develops and maintains [inuitcss](https://github.com/inuitcss); authored [CSS Guidelines](http://cssguidelin.es/); and Tweets at [@csswizardry](https://twitter.com/csswizardry?lang=en).

<!--more--> 

### Can you tell us about the history of the blog and how it grew  in popularity?

I registered the [csswizardry.com](http://csswizardry.com/) domain way back in 2007 as a little playground and blog of sorts. After a couple of years of doing not-that-much with it, I started blogging about new and upcoming CSS3 techniques which proved to be a real honeypot for attracting developers—very Google-friendly articles like ‘pure CSS dropdown menu’ began driving people to the site, and things slowly took off from there.

After a few more years, from 2011 onward, I began researching and blogging a lot more about CSS architecture and more substantial articles on managing CSS at scale, which is what I’m most well known for now.

### The lines between CSS and JavaScript are getting more and more blurred. Do you think developers should write CSS in Javascript? 

No. I don’t think writing your CSS in JS (as in some flavours of React, etc.) is a sensible idea. Doing this completely breaks the separation of concerns, meaning that our styles rely entirely on our choice of view library. Two previously unrelated parts of the stack are now completely combined with one another, which means that if we ever want to change our JS library, we have to change our CSS as well. We have put all of our eggs in the same proverbial basket.

### What about CSS for functionality? 

No. The [checkbox hack](https://css-tricks.com/the-checkbox-hack/) has given rise to lots of things implemented in ‘pure CSS’ that should actually be achieved with JavaScript. I think things that make things more complex than simple hovers etc. should be left to JS, rather than abusing incorrect elements to provide functionality that could have been done much more clearly with JaveScript.

### Would you advise using CSS for animation? 

Yes. It used to be the domain of JS to provide any interactivity or movement, but animating and transforming things with native CSS is measurably faster. This is an area where things should tend more toward CSS. Instigating these animations might still be left to JS, but the animations themselves should be written in CSS.

To put it another way, I think that the actual process of moving something from state A to state B should be done by CSS, but there are a lot of things around that (When does the animation start? How does it start? When and how does it end? Is it an animation in response to something else that’s happened on the page?) which should be achieved using JS.

In addition to this, the Web Animations API provides a lot more powerful features that just can’t be achieved in CSS alone—here we actually need JS.

### With Block-Element-Modifier (BEM), is there any point where you feel it lacks?

Talking about BEM as a naming convention, I honestly don’t think there’s anywhere at all in which it is lacking. This is why I love BEM so much—it covers every eventuality!

As a whole methodology, it’s not perfect (lots of repetition and redundancy, and everything needs a class on it), but it’s a great start, loaded with fantastic principles.

### What about problems like page weight bloat? Have you ever felt like it's a problem?

There is no such problem; it’s something of a [red herring argument](https://en.wikipedia.org/wiki/Red_herring) used by people who still aren’t comfortable using classes in their markup. Other things like heavy images or bloated JS libraries will be doing a lot more to harm page weight than simple class attributes are (especially after Gzip has worked its magic). Anyone who genuinely is worried about page bloat from classes could always obfuscate their classes down from longer, human readable ones (e.g.class="nav-primary__special-offer") to much shorter ones (e.g. class="gx_aw1").

### How do you differentiate between an object and component in BEM?

I get asked this quite a lot, and it is actually quite hard to explain.As a general rule: if a user can identify it, it’s probably a component; if it’s private to developers (e.g. your grid system) it’s probably an object. I think the best way to differentiate is like this:

An object:

* is purely structural: it only provides structure and scaffolding (e.g. a grid system)

* has no cosmetics: they can’t have font-sizes, colours, etc. applied to them

* is ‘invisible’: objects don’t actually look like anything identifiable

A component:

* actually looks like a thing: users can usually name components (e.g. a button, a carousel).

* usually encapsulates a piece of functionality (e.g. a date picker).

* has (structure and) cosmetics: components introduce colours, font styles, etc.

### To extend on the last question, how should one organize their file-structure when starting a new project? (with the assumption, you are using tools like SASS/Stylus/LESS)

My ITCSS architecture separates your CSS into seven different initial types of rule:

1. **Settings:** Variables, settings, config.

2. **Tools:** Mixins and functions.

3. **Generic:** Resets, Normalize.css, global box-sizing, etc.

4. **Elements:** Simple base styles for HTML element selectors only (e.g. a, p, table).

5. **Objects:** Purely structural chunks of styling that are applied with classes (e.g. .o-grid).

6. **Components:** These are individual pieces of UI that make up the site (e.g. .c-calendar, .c-nav)

7. **Utilities:** Finally, we have utility classes for providing very specific bits of styling (e.g. .u-text-center).

Each of these seven types, or layers, of rule can be one directory, and in each directory we have any number of files following the _layer.file.scss format, e.g. _generic.reset.scss, _components.nav.scss.

We can also add layers if necessary, so we could by all means have a _pages.product.scss if we needed to provide some specific styling for product pages. However, even if we were to go down this route, we should still construct pages our of a collection of different and modular components.

### What was your toughest front-end project in terms of figuring out the layout? Do you feel flex solves most of these layout issues?

I haven’t had any one particularly troublesome project in terms of layout, but I do definitely think that flexbox makes quite common design patterns much simpler to construct and maintain, for sure!

### What do you think about the future of programming in general?

I don’t have much of a visionary mind for things like this, but I am definitely interested to see how AI and machine learning will begin to influence things. That plus things like Service Worker which will begin providing much more native-like experiences will help the web to win, which is definitely what I want to see.


* * *

On Honeypot, companies apply directly to developers with salary and tech stack. [Sign-up now](https://www.honeypot.io/?utm_source=blog&utm_medium=org&utm_term=CTA1&utm_campaign=fe) and show off your frontend wizardry.  
