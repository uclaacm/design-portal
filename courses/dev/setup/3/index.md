---
layout: article.njk
tags: ['course', 'setup']
type: prompt
date: 1970-03-03
title: "Setting Up 11ty"
due: "3/30"
excerpt: "Setting up configurations for 11ty, as well as basic templates used for future webpages."
---
 
{% import "_includes/macro.njk" as m %}

<section>

First off, make sure you have all of the neccesary tools installed. 
Even if you have them, it is a good idea to update them now:

<pre class="code-opt">

<form>
<input type="radio" id="linux" name="os" value="linux">
<label for="linux">WSL/Linux</label>
<input type="radio" id="mac" name="os" value="mac">
<label for="mac">Mac</label>
</form>

<code id="linux" class="select">
# source:   https://www.digitalocean.com/community/
#           tutorials/how-to-install-node-js-on-ubuntu-18-04
# =========================================================

# check if any packages need update
sudo apt update 
# install Nodejs 
sudo apt insall nodejs
# install npm 
sudo apt install npm

# check version of Nodejs
node -v
# check version of npm
npm -v
</code>
<code id="mac">
# source:   https://treehouse.github.io/
#           installation-guides/mac/node-mac.html
# ==========================================================

# check if any packages need update
brew update 
# install Nodejs 
brew install node 

# check version of Nodejs
node -v 
# check version of npm
npm -v
</code>
</pre>

source: https://www.11ty.dev/docs/getting-started/


Go back to your local repo, **switch to dev branch**, and run `npm init`
You can answer yes to all questions. This will generate a file called package.js, which tells npm that 
this folder is a project which will require various programs and tools to run. package.js 
contains the name and version of those required program, as well as other settings for your project.


Now run `npm install --save-dev @11ty/eleventy`


This will install 11ty and record in package.js that this project requires 11ty to work.

Now, to the prompt. First create a directory called `_includes`. Create a file called 
`default.njk` in the directory. 
Files in the _include directory can be used as templates to speed up your development process. There are may things you can do with templates, but for now 
we will stick with a simple example.
Paste the following code into default.njk:


```

<h1>
    {% raw %} {{ content | safe }} {% endraw %}
</h1>

```
where `{% raw %}{{ content | safe }}{% endraw %}` will be replaced with the content of the webpage that uses this template. Now in the root directory, create a file called index.html and paste in the following code:
               
```

---
layout: default.njk
---
I am a plaintext

```

After you are done, use the following commands to run 11ty and convert the files you wrote into the final website.

```

# Run 11ty and build files into the final website.
# The generated website is stored in _site
npx @11ty/eleventy

# Run a local server to test your website
npx @11ty/eleventy --serve 

```

<!--<p>Read the following tutorial on package file scripts:</p>

<div class="links">
{{ m.link("https://www.freecodecamp.org/news/introduction-to-npm-scripts-1dbb2ae01633/",              "freecodecamp.org",    "Introduction to NPM Scripts" ) }}
</div>


<p>Modify your <span>package.js</span> file so all you need to type is <span>npm run build</span> 
to build your website with 11ty, and <span>npm run serve</span> to run the local test server. </p>

<p>This is an important step to make sure your website shows correctly on ZEIT. 
Without this step, ZEIT will not know how to convert your njk files into a proper website using HTML. 
</p>

<p>
Once you are done, run <span>npm run build</span> and <span>npm run serve</span> to make sure it works as intended.
</p>

<p>
Next, push your code to GitHub, and check ZEIT to see if the website dpeloyed correctly. ZEIT is smart enough to automatically
run the <span>build</span> script you just made, automatically extract the final website saved in <span>_site</span>, and display it as a website 
for all to see.                 
</p>

<p>
But just as a good practice, we will explicitly tell ZEIT how it should build and deploy our website. This is actually very easy. 
Go to your project's setting ➡ General ➡ Build and Development Setting, and set Framework Preset to "Eleventy". Hit save. 
Now, any time you push your 11ty project to GitHub, it will automatically build and deploy to ZEIT🎊.             
</p>
-->
</section>
