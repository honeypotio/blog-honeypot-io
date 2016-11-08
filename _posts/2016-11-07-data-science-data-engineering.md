---
title: Data Science and Data Engineering
subtitle:
date:    2016-11-09 04:00:09
layout:  post
author:  kado_damball
categories: Company
cover_image: data-science-data-engineering.png
permalink:  data-science-data-engineering/
importance: 2
---

With the rise of automation in nearly every industry, there is still a considerable debate on the nature of jobs responsible for the automation. Jobs can vary from linguistics in natural language processing, predictive modeling in data mining to software engineers in self-driving cars. However, there has to be some underlying distinction between the jobs, at least as far as machine learning (ML) is concerned.

<!--more-->

<!-- Main image -->

### What is Machine Learning?
In simple terms, *it is a process of training a system to perform a task without describing how it should perform the task*. A more technical definition would be: *"... a machine learns with respect to a particular
task T, performance metric P, and type of experience E, if the system reliably improves its performance
P at task T, following experience E."* [^1]

This involves taking a series of inputs, feeding them into a system, and allowing a system to learn what is a desired output. Through tweaking of parameters, the system eventually discovers how to come up with a relevant output. Lets say you want to detect whether an x-ray image has a defective tissue (task T). You would prepare a series of images that are labeled as defective and non-defective and allow the system (in this case, an algorithm) to figure out what a defective looks like in an x-ray image (experience E). Later on, you would pass a new series of images without labels, to measure how well the system has learned (performance P).

### What are the nature of jobs involved in this process?
Lets stick with the previous example of detecting defective tissues. To understand the type of jobs involved in the process, it would help to break down the entire process. For a start, there is a database hosting the list of x-ray images. This requires a smooth process to extract these images and attach them to their respective labels. For the algorithm to work as intended, the data - images in this case - needs some cleaning up. This ensures the final results are not tainted by mismatched data.

Then comes the process of analyzing results from each experience iteration. This will determine what tweaks are needed to improve on the performance of our algorithm. This is mostly an exploratory process without clear outline on how to improve on the performance. It can involve changing the chosen algorithm, normalization of the data (i.e: making sure most of the data is relative and outliers are removed) and even reevaluating labeling the original x-ray images.

It quickly becomes clear that there are two main types of machine learning jobs:

### Data Engineer:
In our x-ray images example, data engineers are concerned with the first task. They would prepare the entire infrastructure for our experiment. It involves designing, building and managing our data pipeline. It can also involve setting up reporting tools for a smoother analysis process. Most of the analysis will be done on top of this architecture. Some common tools for data engineers include: Hadoop, Pig, Hive, MapReduce, Redshift

A good point to consider is the amount of data involved in most machine learning tasks. While most engineering tasks involve several gigabytes of data, it is not uncommon for a machine learning project to involve several terabytes of data. The famous [Netflix Prize](https://en.wikipedia.org/wiki/Netflix_Prize), had over 100 Million netflix ratings involving 480,000+ users. In the x-ray example, the infrastructure must be able handle processing thousands of images and the data engineer is tasked with benchmarking the system.

Data engineers are usually regular software engineers with a background in machine learning. While they do not necessarily need to possess any knowledge on machine learning, it does help especially when some data insight is necessary. 

### Data Scientist:
While data engineers are concerned with the architecture of the project, data scientists are tasked with the analysis part. They start with data cleaning and normalization, then onto exploration which usually involves some data visualizations, data modeling and finally testing. This cycle is usually done several times until no improvements are necessary. On occasion, data scientists are required to have some background knowledge within the field involved. In our defective tissue case, they could possess more information on the disease in question and what to look for. Usually, this ends up being handy when choosing features and picking up on biases within the models. Not only can this improve the understanding of the problem but can also significantly cut down on the time required to run the experiment.

Data scientists usually possess a masters or PhD in machine learning, although it is [not requirement](https://mathbabe.org/2013/04/05/guest-post-how-i-got-a-data-science-job/). This is a result of insight needed to pick up on patterns needed to solve specific problems. As previously stated, there is no one solution to all data projects, and decent results can be achieved with multiple algorithms - with some approaches [using a combination of multiple algorithms](https://en.wikipedia.org/wiki/Ensemble_learning). This is unsurprising; devising an algorithm for defective tissue detection requires a different approach to designing a speech detection bot. 

Some common tools for data scientists are Python, Caffe, R, Scala and various language specific frameworks for implemented algorithms.

### The Future of Data Science
Data science is still a young and growing industry. With the amount of data generated, it is not unsurprising to see the demand of machine learning jobs increase. There are more novel jobs mushrooming, for instance data visualization positions are now a common occurrence in big data environments. Who knows what interesting positions will exist 10-20 years from now?


&nbsp;

&nbsp;

[^1]: [The Discipline of Machine Learning](http://www.cs.cmu.edu/~tom/pubs/MachineLearning.pdf), *Tom M. Mitchell*, July 2006

* * *

**[Join Honeypot](https://app.honeypot.io/users/sign_up?utm_source=blog&utm_medium=organic&utm_term=e&utm_content=160806&utm_campaign=dev-no) today and receive 4 interview invites or more in three weeks.**
