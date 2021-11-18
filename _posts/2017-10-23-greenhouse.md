---
title: How to Integrate Honeypot and Greenhouse
subtitle: "Here's a step-by-step guide on how to set up Honeypot-Greenhouse integration."
date:    2017-10-23 13:11:07
layout:  post
author:  emma_tracey
categories: [Product]
cover_image: prduct-update-greenhouse.png
permalink:  greenhouse/
importance: 2
cta: recruiter
---

Greenhouse is a popular talent acquisition software used by thousands of well-known companies including Cisco Meraki, Time Inc., Airbnb and more. Honeypot clients using Greenhouse can set up a handy connection between these platforms in order to save time and minimise manual processes.

<!--more--> 

This integration enables the Honeypot platform to automatically send candidate details from the Honeypot platform to Greenhouse. Once the connection is established, every time a developer accepts one of your interview invites, their data will be automatically forwarded to Greenhouse with the source label ‘Honeypot’. Forwarded data will include the original message sent by the Honeypot user as well as the candidate's CV (saved as a PDF) and Honeypot profile.

If you reject or hire a candidate, that information will also be passed to the Honeypot platform and your Interview tab will be updated.
<b>Before you start the integration, there are three important things to note:</b>

* Please make sure that you use the same email address on Honeypot as you do on Greenhouse.
* You must also be an admin on Greenhouse in order to set up or utilise the integration.
* If you would like to forward candidate details from the Honeypot platform to Greenhouse, you must ensure that the ‘Position’ created on the Honeypot platform matches the relevant job on Greenhouse. When done correctly, you will be able to select the relevant position from the dropdown menu in Greenhouse.

![greenhouse-honeypot](/assets/images/greenhouse15.png)

<em>If you need any help, your Customer Success Manager is on standby to help you through the process!</em>

Let's get started! Here’s how it works... 
<br />

## How to set up your Greenhouse integration on Honeypot

1. Log into the Honeypot platform and click your name on the top right corner of the top navigation menu.

![greenhouse-honeypot](/assets/images/Greenhouse1v2.png)

<br />

2. Select ‘ATS Settings’ from the dropdown menu. This will redirect you to a new page with all Honeypot ATS connection options.

3. Navigate to the Greenhouse section and click the associated button labelled ‘Connect’.

<br />
![greenhouse-honeypot](/assets/images/greenhouse2.png)

<br />

4. Enter the account details requested in the pop up. These are related to your Greenhouse account and can be found on the Greenhouse platform. Once this information is entered, click ‘Connect’, and you’re done!

<br />
<em>If you need help locating this data on Greenhouse, continue to the walkthrough below.</em>

## How to locate required Greenhouse details
To find your relevant Greenhouse account details, log into the Greenhouse platform using the account you would like to connect. Next, there are four specific pieces of information to copy and paste.

### Harvest API

<em> Note: You (or your site administrator) must have developer permissions for “Can manage ALL organization’s API Credentials” in order to generate a Harvest API key. Please reach out to your site administrator if you need help. If you have these permissions, continue to the next steps.</em>

1. Log into Greenhouse, using the same email that is used for the Honeypot platform.
2. Click ‘Configure’ on the top navigation menu.
3. Click ‘Dev Center’ on the left navigation menu and then ‘API Credential Management’.


![greenhouse-honeypot](/assets/images/greenhouse3.png)

![greenhouse-honeypot](/assets/images/greenhouse4.png)

<br />

4. Click ‘Create New API Key’.

<br />

![greenhouse-honeypot](/assets/images/greenhouse5.png)

<br />

5. Enter the text ‘Honeypot - Harvest’ as the Description.

6. Select the option ‘Harvest’ from the dropdown menu. This will direct you to the API Key Permissions page.

<br />

![greenhouse-honeypot](/assets/images/greenhouse6.png)

<br />

7. On the API Key Permissions page, select each of the following permissions. Please ensure that they are marked with a checkmark. Do not select any of the other options.
 

* **Applications:**
	* **GET: List Applications**
	* **PATCH: Update Application**
* **Candidates:**
	* **GET: List Candidates**
* **Sources:**
	* **Sources**
	* **GET: List Sources**
* **Users:**
	* **GET: Retrieve User**
	* **GET: List Users**

<br />

![greenhouse-honeypot](/assets/images/greenhouse7.png)

![greenhouse-honeypot](/assets/images/greenhouse8.png)

<br />

8. Click ‘Update’ to save the key’s permissions.
<br />

![greenhouse-honeypot](/assets/images/greenhouse9.png)

<br />

9. Locate the “Honeypot - Harvest” key you created and click ‘Copy’.
	

10. Navigate back to the Honeypot platform and paste the copied key into the box labelled ‘Harvest API’.

<br />

![greenhouse-honeypot](/assets/images/greenhouse10.png)

<br />

**Woo-hoo, nice work! Let’s see what’s next.** 

<br />

### Job Board API

<br />

1. Click ‘Configure’ on the top navigation menu.
2. Navigate to the ‘Dev Center’ and then click ‘API Credential Management’.
3. Click ‘Create New API Key’.

<br />

![greenhouse-honeypot](/assets/images/greenhouse11.png)

<br />

4. Enter the text ‘Honeypot - Job Board’ as the Description.
5. Select the option ‘Job Board’ as the ‘Type’ from the dropdown menu and click ‘Create’.
6. Locate the ‘Honeypot - Job Board’ key you created and click ‘Copy’. Navigate back to the Honeypot platform and paste the copied key into the box labelled ‘Job Board API’.

<br />

**YES! You are killing it.** 

<br />

## Job Board URL

<br />

1. Click ‘Configure’ on the top navigation menu.
2. Navigate to the ‘Dev Center’ and then click ‘API Credential Management’.
3. Copy the number labelled ‘Your Board Token’.
4. Navigate back to the Honeypot platform and paste the copied key into the box labelled ‘Your Board Token’.

<br />

![greenhouse-honeypot](/assets/images/greenhouse12.png)

<br />

Easy-Peasy! Final step now…

<br />

## Secret Key

<br />

To create a secret key, you’ll first need to make two web hooks. Here’s what to do.
1. Click ‘Configure’ on the top navigation menu.
2. Navigate to the ‘Dev Center’ and then click ‘Web Hooks’.
3. Click ‘Web Hooks’ once more. 
4. **Now you will create a web hook to forward candidates from the Honeypot platform to Greenhouse.** Enter the following information into Greenhouse exactly as written.

* Name: Honeypot Hired 
* When: Candidate has been hired
* Export URL: https://app.honeypot.io/webhooks/greenhouse
* Secret Key: Choose a secret key (this can be any combination of numbers). Don’t forget to take note of this number. You will need in the next steps. 
* Error Recipient Email: admin@honeypot.io

5. Click ‘Create Web hook’ and the first web hook is done!

<br />

![greenhouse-honeypot](/assets/images/greenhouse13.png)

<br />

6. **Next, you will create a web hook to relay a candidate rejection from Greenhouse to the Honeypot platform.** Enter the following information into Greenhouse exactly as written.

* Name: Honeypot Rejected 
* When: Candidate has been rejected
* Export URL: https://app.honeypot.io/webhooks/greenhouse
* Secret Key: Choose the same key as before 
* Error Recipient Email: admin@honeypot.io

7. Click ‘Create Web hook’.
8. Navigate back to the Honeypot platform and enter the secret key created for your web hooks into the ‘Your Board Token’ box.

<br />

![greenhouse-honeypot](/assets/images/greenhouse14.png)

<br />

9. Click ‘Connect’ and your ATS is now connected to Honeypot!
