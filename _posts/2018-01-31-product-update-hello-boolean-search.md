---
title:  Honeypot Advanced Search 
subtitle:
date:    2018-02-21 11:31:19
layout:  post
author:  emma_tracey
categories: Company
cover_image: boolean-search.png
permalink:  product-update-hello-boolean-search/
importance: 2
---
Today we are releasing Advanced Search functionality on Honeypot Search to help you find developers, data scientists and other tech talent quickly and efficiently. 

<!--more-->

Before jumping into the new functionality, let me explain some search terminology - terms and operators.  

* A **term is the word you are searching for**: it can be a single word  —  `java` — or a phrase, surrounded by double quotes  —  `"product owner"` — which searches for all the words in the phrase, in the same order.
* An **operator allows you to customize a search**. Without applying any operators, the **default search will return OR: for example, a search for** `java scala ruby` **will return any profile that contains one or more reference to** `java OR scala OR ruby`. This will return the maximum amount of developer profiles possible. 

So, here’s the exciting part. 

You can now add power to your search by using the Boolean search operators, which are listed below: 

 <br /> 

## Boolean Search Operators on Honeypot

 <br /> 

|:-------------------:|:----------------------:|:-----------------------:|
| Phrase Searches &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | `"Product Owner"` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | This search will return profiles containing exactly this term in exactly this order. <br /><br /> |
| NOT Searches <br />  | `Scala NOT Java`   | To exclude a particular term, type that term with an **uppercase** `NOT` immediately before it. For example, type: `scala NOT java` and you will get Scala developers but not Java developers <br /><br /> |
| OR Searches	| `Scala OR Java`  | To see results that include at least one or more terms, use an **uppercase OR**. For example, type `scala OR java` and you will see profiles that contain at least Scala or Java once. **This operator gives you the broadest search results possible.**  <br /><br /> |
| AND Searches | `Scala AND Java` | To get results that include minimum two or more terms, you can use the uppercase word `AND` as a separator. For example, type: `Scala AND Java` and you will get profiles which contain both terms. Remember,  `AND` means you are searching for profiles containing both of the words or values, not just one of them <br /><br /> |

 <br /> 

 
## Even more advanced operators! 
 <br /> 

|:-------------------:|:----------------------:|:-----------------------:|
| Preferred operators &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | `+product owner` <br /> <br /> `-product owner` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Similar to the above operators, you can use + and - in your search queries. <br /> <br />  +(this term must be present) and - (this term must not be present) <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /> For example: <br /> `Java +product owner -PHP means` <br /> <br /> -`Product owner` must be present <br /> -`PHP` must not be present <br /> -`Java` is optional, but increases the relevance of the profile if it is present  <br /> <br /> |
| Parenthetical searches <br /> | “Product Owner”NOT <br /> (junior <br /> OR CTO) <br />    | To do a complex search, you can combine terms. For example, if you want to find a product owner, but want to exclude juniors and CTOs, you can type “Product Owner”NOT(junior OR CTO) <br /><br /> |

 <br /> <br /> 

These operators can become more complicated when used in combination and when used in particular orders. NOT takes precedence over AND, which takes precedence over OR. While the + and - only affect the term to the right of the operator, AND and OR can affect the terms to the left and right.

To overcome some potential difficulties in longer search queries, you can use Grouping. Multiple terms or clauses can be grouped together with parentheses, to form sub-queries:  (java OR scala) AND react. This would return profiles which have one or more reference to java or scala and at least one reference to react.

Honeypot Search allows you to find the best developers and tech talent on our platform. For additional support or to give us feedback, contact with your Customer Success Manager or drop us a line on [hello@honeypot.io](mailto:hello@honeypot.io). 

Otherwise, happy searching friends! 

