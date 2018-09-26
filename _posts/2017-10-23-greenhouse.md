---
title: How to Integrate Honeypot and Greenhouse
subtitle: "We are happy to announce that Greenhouse users can now automatically upload candidates directly from Honeypot to Greenhouse. Here's a step-by-step guide to help you set up the Honeypot-Greenhouse integration!"
date:    2017-10-23 13:11:07
layout:  post
author:  emma_tracey
categories: [Product]
cover_image: prduct-update-greenhouse.png
permalink:  greenhouse/
importance: 2
---

We are happy to announce our first **Applicant Tracking System Integration**  - [Greenhouse](https://www.greenhouse.io/). 

Once the Greenhouse integration is setup on your account,  **Honeypot candidates who accept your interview invite will be automatically uploaded to Greenhouse, including their email, CV and social links, and a link to their Honeypot profile**. Whether you reject or hire a candidate, we will be automatically notified and your Interview tab on Honeypot will be updated.  No more manual copying and pasting!  

<!--more-->

Before you start the integration, please make sure that you use the same email address on Honeypot as you do on Greenhouse. You must also be an admin on Greenhouse. 

The integration may seem long, but stick with it! It's worth the effort. Your Customer Success Manager is also on standby to guide you through the process!  


So here’s how it works: 

<br />

### 1. Login to Honeypot and click 'Company Profile' 

<br />

![greenhouse-honeypot](/assets/images/greenhouse1.png)

<br />

### 2.  Select 'Connect to ATS' and then click 'Connect', which is located beside the Greenhouse logo.

<br />

![greenhouse-honeypot](/assets/images/greenhouse2.png)

<br />

### 3. To connect to Greenhouse you must provide the Harvest API token, a Job Board API token, Your Job Board Token and a Secret Key. The details of each is listed below:

<br />

## **Harvest API**

**Step One:** Visit the Greenhouse Configure Page. Navigate to “Dev Center” and then “API Credentials.” 

(**Important note**: You (or your Site Administrator) must have developer permissions for “Can manage ALL organization’s API Credentials” to generate a Harvest API key.

<br />

![greenhouse-honeypot](/assets/images/greenhouse3.png)

![greenhouse-honeypot](/assets/images/greenhouse4.png)

<br />

**Step Two:** Click “Create New API Key”

<br />

![greenhouse-honeypot](/assets/images/greenhouse5.png)

<br />

**Step Three:** Enter the Description “Honeypot - Harvest” and choose Type Harvest![greenhouse-honeypot](/assets/images/greenhouse6.png)

<br />

**Step Four:** On the Manage API Key Permissions page, ensure the following are checked: 


* **Applications:**
	* GET: List Applications
	* PATCH: Update Application
* **Candidates:**
	* GET: List Candidates
	
<br />

![greenhouse-honeypot](/assets/images/greenhouse7.png)

<br />

* **Sources:**
	* Sources
	* GET: List Sources
* **Users:**
	* GET: Retrieve User
	* GET: List Users


Click “Update” to save the key’s permissions![greenhouse-honeypot](/assets/images/greenhouse8.png)

<br />

**Step Five:** Find the “Honeypot - Harvest” key you created and click “Copy.” Navigate back to Honeypot and paste into the “Harvest API” box. 

<br />

![greenhouse-honeypot](/assets/images/greenhouse9.png)
![greenhouse-honeypot](/assets/images/greenhouse10.png)

<br />

**Woo-hoo, nice work! Let’s see what’s next.** 

<br />

### **Job Board API**

<br />

**Step One:** Visit the Greenhouse Configure Page. Navigate to “Dev Center” and then “API Credentials.” 

**Step Two:** Click “Create New API Key”

**Step Three:** Enter the Description “Honeypot - Job Board” and choose Type “Job Board.”

<br />

![greenhouse-honeypot](/assets/images/greenhouse11.png)

<br />

**Step Four:** Find the “Honeypot - Job Board” key you created and click “Copy.” Navigate back to Honeypot and paste into the “Job Board API” box. 

<br />

**YES! You are killing it.** 

<br />

## **Job Board URL**

<br />

**Step One:** Visit the Greenhouse Configure Page. Navigate to “Dev Center” and then to “API Credentials.”


**Step Two:** Copy “Your Board Token.” Navigate back to Honeypot and paste it into the “Your Board Token” box.

<br />

![greenhouse-honeypot](/assets/images/greenhouse12.png)

<br />

Easy-Peasy! Final step now…

<br />

## **Secret Key**

<br />

**Step One:** Visit the Greenhouse Configure Page. Navigate to “Dev Center” and then to “Web Hooks” and “Web Hooks” one more time. 

**Step Two:** Create the first webhook which will automatically update Honeypot when you hire a talent. The details you need to fill in are as follows: 7


* Name: Honeypot Hired 
* When: Candidate has been hired
* Export URL: https://app.honeypot.io/webhooks/greenhouse
* Secret Key: Choose a secret key (this can be any combination of numbers). Don’t forget to take note of this number. You will need in the next steps. 
* Error Recipient Email: admin@honeypot.io

Click “Create Webhook”.

<br />

![greenhouse-honeypot](/assets/images/greenhouse13.png)

<br />

**Step Three:** Create the second webhook which will automatically notify  Honeypot when you reject a talent. The details you need to fill in are as follows: 


* Name: Honeypot Rejected 
* When: Candidate has been rejected
* Export URL: https://app.honeypot.io/webhooks/greenhouse
* Secret Key: Choose the same key as before 
* Error Recipient Email: admin@honeypot.io

Click “Create Webhook”. 

**Step Four:** Navigate back to Honeypot and paste the secret key you created for your webhooks into the “Your Board Token” box. 

<br />

![greenhouse-honeypot](/assets/images/greenhouse14.png)

<br />

Click “Connect!” You ATS is now connected to Honeypot! 

Remember, for the ATS integration to work correctly, the Position you enter when sending an interview invite on Honeypot must match a job you have already created on Greenhouse. You can choose the Position you are recruiting for from the dropdown list. This way Greenhouse can recognize and process the candidate in the correct manner!   

<br />

![greenhouse-honeypot](/assets/images/greenhouse15.png)

<br />

If you have any questions, feel free to reach out directly to your Customer Success Manager, who can guide you through the process.
