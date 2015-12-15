---
title:   Code Challenge
subtitle:
date:    2015-12-14 16:30:05
layout:  post
author:  hugo_duksis
categories: Developer
cover_image: honey01.jpg
permalink:  code-challenge
importance: 2
---


Every developer on Honeypot is prescreened before they are accepted onto a batch.
This is beneficial for both sides: for devs, passing the challenge
grants access to a platform with high quality companies and job offers, and for companies,
pre-screening simplifies their work.


Our first stop for evaluation is activity on relevant public profiles. In cases where talent doesn’t
have any opensource code on github or contributions on other platforms we offer a challenge.
The challenges are delivered through a git repositories hosted on GitHub that contain a simple description of the task.
After results are submitted and the talent is accepted onto a batch this repository gets
shared with companies. We are currently beta-testing our initial set of challenges and using the
learnings to improve and further expand the variety of our challenges.


The challenges are designed to be language independent and show not only programming skills
but general understanding of the domain.
Our evaluation criteria takes the assumption that code is written once but read multiple
times. We do not evaluate the challenge results in isolation but rather consider them
to be an addition to existing profile.

So what do we value? We have divided it in two categories, workflow best practice and code quality.
The following is an overview of what we are up to at Honeypot:


*Workflow best practices*: these general characteristics show a developer’s
ability to constructive communication, work in teams and think organizationally.


 1. Usage of Source Control System such as Mercurial, CVS, GIT, SVN
Source control is a system which records changes to a file or set of files
so that specific versions can be recalled later. It is important for the process of reviewing code,
correcting mistakes, and understanding what was done by whom and why.

 2. Usage of continuous integration for automating tests, deploys and quality assurance
Continuous Integration (CI) is a development practice in which developers
integrate their code into a shared repository several times a day. It allows team members
to detect problems early.

 3. Usage of documentation
Documentation, such as a basic README, describes what the code does,
how it is set up, why one framework instead of another was chosen. This allows newcomers
to the project get easier up to speed.

 4. Usage of automated server setup, tools such as Chef, Ansible, Saltstack, Docker, Vagrant
Manual server setup, as opposed to automated server setup, wastes time and
are generally more prone to error than automated setups.

 5. Communication skills as evidenced through reporting issues and submitting patches, pull requests
We review available history of communication with other developers.
We search for evidence of structured, constructive communication. This indicates a developer
who is a team player.

 6. Knowledge of different languages and programming paradigms
Knowing how different problems are approached in different environments
expands the scope of possible solutions when a problem is faced. And shows general learning
abilities.


 *Code quelity*

 1. Does it work? (is executable and behaves as specified)
Does the solution solve the problem at hand.

 2. Testing (unit, integration and/or acceptance tests, they pass and cover public interface)
It is always good tho have someone else to verify that your changes and are delivering the expected
results. This gets even more important while work in teams and on larger code bases.
It makes it easier for others to understand and change.

 3. Size of files, classes, modules, functions and methods
Structuring code in smaller chunks, grouping and assigning meaningful names makes the code
more readable, reusable, testable and maintainable.

 4. Complexity (minimal usage of nesting and conditionals)
Avoiding multi level nested conditions makes reasoning about the code more simple and through
that significantly improves the possibility to spot errors earlier in the development cycle.

 5. Framework/library usage: using frameworks springs/rails/laravel or non-trivial libraries.
Reusing existing solutions and not reinventing the wheel saves time and hassle.


We are constantly working on improving our challenges and evaluation process by collecting feedback,
suggestion and integrating with existing tools and libraries.

