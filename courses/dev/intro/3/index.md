---
layout: article.njk
tags: ['course', 'intro']
type: reading
date: 1970-01-03
title: The Computer
excerpt: "Good projects require good version control"
---
{% import "_includes/macro.njk" as m %}

<section>

## Introduction

Now that we know what a computer is, we can talk about computer networks. 
The internet is simply an infrastrcture that allows computers to communicate with each other, anytime, anywhere.
First we will give a brief overview of what exactly the internet is. After that, we will cover some specific technologies that powert the web. 
Then we will give a brief step-by-step explanation of what happens when you try to open a website on the internet. 

## What is the internet?

The internet, as its name inplies, is an interconnected network of computers that communicate wth each other. 
Say we hook up two computers together, like this:

{{ m.post_img( title, "1.png", "Just 2 computers") }}

Horray! you just made a mini-internet. These computers can now communicate and exchange information. How about we add a third computer now:

{{ m.post_img( title, "2.png", "Just 2 computers") }}

At this point, you may have noticed that this is pretty inefficent. If we have 4 computers, we would need 6 cables to interconnect all of them. 
The number of required connections will rapidly rise as the number of computers increase. Therefore, it is more feaseable to have a "hub" where multiple computers can connect to:

{{ m.post_img( title, "3.png", "Just 2 computers") }}

The black circles represent devices known as routers. Their main job is to receive messages from computers, and send it off to to the receptant or another router. 
For example, if the computer inthe top-tight wanted to send a message to the computer on the bottom-left, it would first send a message to the top-right router. The router will then 
send the message to the bottom-left router. Finally, the second router will send the message to the bottom-left computer. If we scale this up to a huge size, with billions of devices connected together 
with routers, we get the internet we know today. 

</section>