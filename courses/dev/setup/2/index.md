---
layout: article.njk
tags: ['course', 'setup']
type: prompt
date: 1970-03-02
title: "Setting Up GitHub and ZEIT"
due: "3/30"
excerpt: "First things first, set up the enviorment to build the website"
---
{% import "_includes/macro.njk" as m %}
<section>

Create a new repository on GitHub. You can name it anything you want. It will ask you several questions about your repository - at the moment it does not matter what you choose as it 
can be chnaged later, but the recommended settings are:

- Description: A one-sentence overview of your webiste
- Public
- Initialize with README
- Add .gitignore: none
- Add a license: none

Once you have done that, create a new branch in your repository called `dev`.

Next, go to zeit.co and login. Import your GitHub repo, which will create a new project to host your website.
First click on "Import Project" 

{{ m.post_img( tags[1], "P1-1.png", "It's on the top-right", "88%", "11%") }}

Choose "From Git Repository"

{{ m.post_img( tags[1], "P1-2.png", "", "17%", "68%") }}

If this is the first time you are integrating ZEIT with GitHub, it will ask you to install their app.

{{ m.post_img( tags[1], "P1-2-1.png", "", "15%", "60%") }}

Install the ZEIT app to your GitHub account.

<div class="warning">
<div></div>
<p>
Make sure you install to <i>your</i> GitHub account, not any other users or organizations.
</p>
</div>

{{ m.post_img( tags[1], "P1-2-2.png", "", "50%", "60%") }}

Install with the following settings. For "Select Repositories", choose the repo that has your website.

{{ m.post_img( tags[1], "P1-2-3.png", "", "15%", "85%") }}

Once you have installed, choose "Import Project From GitHub"

{{ m.post_img( tags[1], "P1-3.png", "", "15%", "70%") }}

Choose the repo with your website, and hit "IMPORT"

{{ m.post_img( tags[1], "P1-4.png", "", "50%", "30%") }}

<p id="test">
Give your project a name.
</p>

{{ m.post_img( tags[1], "P1-5.png", "", "78%", "78%") }}

Keep this to default and continue.

{{ m.post_img( tags[1], "P1-6.png", "", "78%", "70%") }}

Keep this to default and continue.

{{ m.post_img( tags[1], "P1-7.png", "", "74%", "76%") }}

Open the terminal and navigate to the directory where you want to store your files for this website. 
Clone your GitHub repository to your local computer.
Open the local repository in a code editor. Switch to the dev branch, and create a file called <span>index.html</span>. 
Make a simple hello world page, using the following code:

```

<h1> Hello World, this is dev branch </h1>

```

Add, commit, and push. If you open your ZEIT account in a web browser, you should see that the website deploys to the development server.
Return to your code, and switch to the master branch. Make a file called `index.html` again, 
but this time use the following code:


```

<h1> Hello World, this is master branch </h1>

```

If you add commit push this, you will see that the website is deployed to the production branch. 
Save the URL of your github, ZEIT development deployment, and production deployment, so it can be submitted later.

Lastly, add the URL of your ZEIT production deployment to the GitHub repository description.

</section>
