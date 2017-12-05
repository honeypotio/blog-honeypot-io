---
title:   How to Integrate Personio and Honeypot
subtitle:
date:    2017-12-05 11:50:00
layout:  post
author:  emma_tracey
categories: Company
cover_image: honey01.jpg
permalink:  how-to-integrate-personio-and-honeypot/
importance: 2
---

Germany’s largest Applicant Tracking System and Germany’s largest Developer Job Platform have joined forces to make recruiters life’s easier. As of today, Personio users can automatically upload candidates directly from Honeypot to Personio. 

<!--more--> 

### Announcing the Personio Honeypot Integration 

The integration enables recruiters to automatically upload candidates from Honeypot to Personio. As soon as a developer accepts your interview invite, they are entered into your ATS, with the source Honeypot, and with the connecting message, the CV as a PDF, and a link to the profile.

This reduces manual effort for recruiters and hiring managers, streamlining workflow, allowing you to focus on candidate follow-up. 

### How to set it up? 

Sign in to Honeypot and navigate to your profile on the top right of the header. Click “Company Profile”. From the menu, select “Connect to ATS” (e.g https://my company.personio.de/configuration/api/credentials). You can see Personio in our list of integrations.

![Connect to ATS](connect-ats.png)

To integrate, there are four simple fields to fill in. Below you can follow where to retrieve the information for these fields: 

1.) **Recruiting API Access Token**: Personio > “Settings” > “API”. Copy the token and paste it into the first field of our form. 

2.) **Company ID**:  Personio > “Settings” > “API”. Copy and paste the 4-digit number into the second field of our form. 

3.) **Account Name**: This is the name which appears in your Personio customer url  e.g. [https://mycompany.personio.de](https://acme.personio.de/) The account name is "my company".

4.) **Channel ID**: The channel first has to be created. Navigate to  in the Settings > Recruiting > Channels, e.g. [https://honeypot.personio.de/configuration/recruiting/channels](https://honeypot.personio.de/configuration/recruiting/channels). You should now create a channel for Honeypot. When you click on the newly created channel you can see an associated ID. Copy the ID into this box. If the channel has already been created, you can just copy the ID directly. 


Once all the fields have been filled in,  click on the **“Connect”** button and you are done! 
