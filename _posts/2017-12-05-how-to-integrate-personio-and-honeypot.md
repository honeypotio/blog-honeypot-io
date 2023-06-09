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

This integration enables recruiters to automatically send candidate details from the **Honeypot** platform to **Personio**. This reduces manual effort for recruiters and hiring managers, streamlining workflows so you can focus on follow-up rather than data entry.

Once the connection between Honeypot and Personio is established, any developer who accepts an interview invite sent from your account will trigger the process. Once triggered, the developer’s data is automatically forwarded to Personio with the source label ‘Honeypot’. Forwarded data will include the original message sent by the Honeypot user as well as the candidate's CV (saved as a PDF) and Honeypot profile.

> _If you need any help, your Customer Success Manager is on standby to help you through the process!_

## How to set up your Personio integration on Honeypot

<br />

1.) Log into the Honeypot platform and click your name on the top right corner of the top navigation menu. Select `ATS Settings` from the dropdown menu. This will redirect you to a new page with all Honeypot ATS connection options.

![Setup ATS Connection](/assets/images/Personio_1.png)
<br />

2.) Navigate to the `Personio` section and click the associated button labelled `Connect`.
![Select Personio ATS Settings](/assets/images/Personio_2.png)
<br />

3.) Enter the account details requested in the pop up. These are related to your Personio account and can be found on the Personio platform. Once this information is entered, click `Connect`, and you’re done!
> _If you need help locating this data on Personio, continue to the walkthrough below._

![Personio ATS Form](/assets/images/Personio_3.png)
<br />

## How to locate required Personio account details

To find the relevant Personio account details, log into the Personio platform using the account you would like to connect. Next, there are four specific pieces of information to copy and paste.

### 1.) API Access Token and Company ID

Click `Settings` on the bottom of the left navigation menu and then `API Credentials`. Once on the API credentials page, click on listed option. This will reveal the account's API access token and the company ID.

Copy the supplied token by clicking `Copy access token` and paste it into the form on the Honeypot platform, into the first field called `Recruiting API access token`.
Copy the supplied company ID by clicking `Copy company ID` and paste it into the form on the Honeypot platform, into the second field called `Company ID`.
![Personio Token 1](/assets/images/Personio_4.png)
<br />

![Personio Token 2](/assets/images/Personio_5.png)
<br />

### 2.) Account Name

Locate the URL bar in your browser. The text before `.personio.de` is your company's account name. For example, if the URL is `https://mycompany.personio.de/`, the account name is `mycompany`. While using the Personio platform, copy the text between `https://` and `.personio.de` and paste it into the Honeypot platform, into the third field called `Account name`.

![Personio Account Name](/assets/images/Personio_6.png)
<br />

### 3.) Channel ID

Click `Settings` on the bottom of the left navigation menu and then `Recruiting`. Once on the Recruiting page, select `Channels` tab on the top navigation menu.
If someone in your organisation has already created a channel for Honeypot, this will appear as an option. Simply click the channel name and then copy the supplied Channel ID. Paste this number into the form on the Honeypot platform, into the fourth field called `Channel ID`.

If your Channels list does not yet include an option for Honeypot, you will need to create this channel. Select the option `Add new channel…` and follow the steps. Once this is completed, click on the newly created channel and then copy the supplied Channel ID.

![Personio Channel ID 1](/assets/images/Personio_7.png)
<br />

![Personio Channel ID 2](/assets/images/Personio_8.png)
<br />

### 4.) Enable XML Feed

Make sure you have [enabled the XML feed on Person.io](https://support.personio.de/hc/en-us/articles/207576365-XML-Integration-of-Job-Openings-From-Personio-Into-Your-Company-Website):

1. Navigate to _Settings > Recruiting > Recruiting_.
2. In the tab _Career page_, go to _Activations_.
3. Activate the checkbox _Enable XML_ feed.
4. Then click _Apply changes_ in the bottom-right corner.

![Personio XML](/assets/images/Personio_9.png)
<br />

### 5.) Connect

 Once all the fields have been filled in, click on the `Connect` button and you're done!
![Personio ATS connect done](/assets/images/Personio_10.png)
