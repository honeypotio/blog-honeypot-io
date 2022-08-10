---
title:  Connect a Personio Account to Honeypot (and Save Time)
subtitle: "We are happy to announce that Personio users can now automatically upload candidates directly from Honeypot to Personio. Here's a step-by-step guide to help you set up the Honeypot-Personio integration!"
date:    2018-01-08 6:50:00
layout:  post
author:  emma_tracey
categories: [Product]
cover_image: personio-update.png
permalink:  how-to-integrate-personio-and-honeypot/
importance: 2
cta: recruiter
---

Personio is one of Germany’s largest Applicant Tracking Systems, serving over 3,000+ users—many of whom are also Honeypot customers! With a few easy clicks, Honeypot customers with a Personio subscription can set up a connection between the two platforms.
<br>

This integration enables recruiters to automatically send candidate details from the <b>Honeypot</b> platform to <b>Personio</b>. This reduces manual effort for recruiters and hiring managers, streamlining workflows so you can focus on follow-up rather than data entry.
<br>

Once the connection between Honeypot and Personio is established, any developer who accepts an interview invite sent from your account will trigger the process. Once triggered, the developer’s data is automatically forwarded to Personio with the source label ‘Honeypot’. Forwarded data will include the original message sent by the Honeypot user as well as the candidate's CV (saved as a PDF) and Honeypot profile.
<br>

_If you need any help, your Customer Success Manager is on standby to help you through the process!_

## How to set up your Personio integration on Honeypot

1.) Log into the Honeypot platform and click your name on the top right corner of the top navigation menu.

![Connect to ATS](/assets/images/Greenhouse1v2.png)

2.) Select ‘ATS Settings’ from the dropdown menu. This will redirect you to a new page with all Honeypot ATS connection options.

![Recruiting API Access Token](/assets/images/select_personio.png)

3.) Navigate to the ‘Personio’ section and click the associated button labelled ‘Connect’.

![Recruiting API Access Token](/assets/images/connect_ATS_personio.png)

4.) Enter the account details requested in the pop up. These are related to your Personio account and can be found on the Personio platform. Once this information is entered, click ‘Connect’, and you’re done!

<em>If you need help locating this data on Personio, continue to the walkthrough below.</em>

## How to locate required Personio account details

To find the relevant Personio account details, log into the Personio platform using the account you would like to connect. Next, there are four specific pieces of information to copy and paste.

### 1.) API Access Token
Click ‘Settings’ on the left navigation menu and then ‘API’. This will reveal the account’s API credentials. Copy the supplied token next to ‘Recruiting API access token’ and paste it into the form on the Honeypot platform, next to the text ‘Recruiting API access token’.

![Recruiting API Access Token](/assets/images/Personio-screenshot-22.png)

### 2.) Company ID
If you have not already done so, click ‘Settings’ on the left hand navigation menu and then ‘API’ (as you did in the previous step). Copy the supplied token next to ‘Company ID’ and paste it into the form on the Honeypot platform, next to the text ‘Company ID’.

### 3.) Account Name
Locate the URL bar in your browser. The text before ‘.personio’ is your company’s account name. For example, if the URL is https://mycompany.personio.de/, the account name is ‘mycompany’. While using the Personio platform, copy the text between ‘https://’ and ‘.personio’ and paste it into the Honeypot platform, next to the text ‘Account name’.

![Company ID](/assets/images/Personio-screenshot-4.png)
<br>

### 4.) Channel ID
Click ‘Settings’ on the left hand navigation menu and then ‘Recruiting. This will reveal several options related to your account. For reference, the URL might look like this: https://mycompany.personio.de/configuration/recruiting/channels

Select ‘Channels’ from the top navigation menu.
If someone in your organisation has already created a channel for Honeypot, this will appear as an option. Simply click the channel name and then copy the supplied Channel ID. Paste this number into the form on the Honeypot platform, next to the text ‘Channel ID’.
If your Channels list does not yet include an option for Honeypot, you will need to create this channel. Select the option ‘Add new channel…’ and follow the steps. Once this is completed, click on the newly created channel and then copy the supplied Channel ID. Paste this number into the form on the Honeypot platform, next to the text ‘Channel ID’

### 5.) Enable XML Feed

Make sure you have [enabled the XML feed on Person.io](https://support.personio.de/hc/en-us/articles/207576365-XML-Integration-of-Job-Openings-From-Personio-Into-Your-Company-Website):
1. Navigate to <em>Settings > Recruiting > Recruiting</em>.
2. In the tab <em>Career page</em>, go to <em>Activations</em>.
3. Activate the checkbox <em>Enable XML</em> feed.
4. Then click <em>Apply changes</em> in the bottom-right corner.


<br>

![Channel ID](/assets/images/personio-screenshot-5.png)

<br>

### 6.) Connect

 Once all the fields have been filled in, click on the “Connect” button and you're done!
