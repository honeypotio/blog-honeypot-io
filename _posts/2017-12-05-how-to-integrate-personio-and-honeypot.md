---
title:  Announcing the Personio Honeypot Integration 
subtitle:
date:    2017-12-05 11:50:00
layout:  post
author:  emma_tracey
categories: Company
cover_image: Personio-update-cover.png
permalink:  how-to-integrate-personio-and-honeypot/
importance: 2
---

Germany’s largest **Applicant Tracking System** and Germany’s largest **Developer Job Platform** have joined forces to make recruiters life’s easier. As of today, Personio users can automatically upload candidates directly from Honeypot to Personio. 

<!--more--> 

### How it Works

Once a developer accepts your interview invite, they are entered into your **ATS**. The source is then automatically set as Honeypot, and you're sent the connecting message, the CV as a PDF, and a link to the profile.

This streamlines workflow for recruiters and hiring managers, allowing you to focus on candidate follow-up. 

### Set-up

Sign in to Honeypot and navigate to your profile on the top right of the header. Click **“Company Profile”**. From the menu, select **“Connect to ATS”**. You'll find Personio in our list of integrations.

<br>

![Connect to ATS](/assets/images/Personio-screenshot-1.png)

<br>

### How to Integrate

To integrate, there are four simple fields to fill in: 

<br>

1.) **Recruiting API Access Token**: Personio > “Settings” > “API”. Copy the token and paste it into the first field of our form. 

<br>

![Recruiting API Access Token](/assets/images/Personio-screenshot-22.png)

<br><br>

2.) **Company ID**:  Personio > “Settings” > “API”. Copy and paste the 4-digit number into the second field of our form. 

<br>

![Company ID](/assets/images/Personio-screenshot-4.png)

<br><br>

3.) **Account Name**: This is the name which appears in your [Personio customer url](https://acme.personio.de/).

<br>

4.) **Channel ID**: The channel first has to be created. Navigate into Settings > Recruiting > Channels, e.g. [https://mycompany.personio.de/configuration/recruiting/channels](https://honeypot.personio.de/configuration/recruiting/channels). 

You should now create a channel for Honeypot. When you click on the newly created channel you can see an associated ID. Copy the ID into this box. If the channel has already been created, you can just copy the ID directly. 

<br>

![Channel ID](/assets/images/Personio-screenshot-5.png)

<br>

Once all the fields have been filled in,  click on the **“Connect”** button and you are done! 
