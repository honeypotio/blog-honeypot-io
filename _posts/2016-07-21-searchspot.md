---
title:  "Open Sourcing Searchspot, Honeypot’s Search Engine"
subtitle:
date:    2016-07-21 13:40:56
layout:  post
author:  giovanni_capuano
categories: [Developer Careers]
cover_image: open-source.png
permalink:  open-sourcing-searchspot/
importance: 2
---

Honeypotters take the open source world very seriously.
We use developers' GitHub profiles to evaluate the code of talents that will hopefully join our batches. As our platform uses lots of open source components and the tech team members themselves contribute to many open source projects,
we are very happy when we have the possibility to share our internal products with the world.

<!--more-->

Today a new public repository is joining [Honeypot](https://github.com/honeypotio)’s GitHub account:
[searchspot](https://github.com/honeypotio/searchspot), the search engine we use to let companies search for our talents.

Searchspot (can you guess the double meaning of the word?) is a service written in the
[Rust](https://www.rust-lang.org) programming language that features a HTTP-server based on the lightweight
[iron framework](http://ironframework.io) and a set of macros and helpers that allow developers to create their searchable entities
in a quite structured but flexible way.

[rs-es](https://github.com/benashford/rs-es) is the library (“crate”, using the proper Rust term) that allows us to connect and query the ElasticSearch back-end. We use the [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm
) algorithm to handle the authentication on both server and client side, independently.

Most of what you need is already documented (check the `README.md` for more details), and many things are yet to come.
We even published our [internal entities](https://github.com/honeypotio/searchspot/tree/master/src/resources), in the hope they can be useful for both understanding more clearly how you can use Searchspot.

We hope that it will be useful to anyone who needs a search engine with a more-or-less complex system of data filtering
(including strings, dates and booleans querying and full text search). As you can see from the [README](https://github.com/honeypotio/searchspot/blob/master/README.md), Searchspot is still missing 
some features like bulk indexing and support to pagination so the work is not ended here.

A great thanks goes to everyone that made this possible, from the Rust community to
[Honeypot](https://www.honeypot.io/utm_source=searchspot) itself that allowed me to have fun working on a not-so-small but
important project. Rust is really enjoyable as programming language and things change
(and break, if you are, as I was, running on a nightly version of the compiler :)) so quickly that Ruby now almost looks like C!

As always, every contribution or feedback is more than appreciated.

* * *
