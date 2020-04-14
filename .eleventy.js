module.exports = function(eleventyConfig) {

    //Tell 11ty to search these directories for files
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('script');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('pages');
    eleventyConfig.addPassthroughCopy('_courses');
    //make sure all html files in the pages directory uses the default layout
    //eleventyConfig.addDefaultLayout('src/pages/*.html', 'src/_includes/default.html');

    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: true
     };
  
  eleventyConfig.setLibrary("md", markdownIt(options));


    //Tell 11ty that all files 
    return {
        passthroughFileCopy: true,
        pathPrefix: "/",
        dir: {
            input: "./",
            output: "_site",
            includes: "_includes"
        },
        htmlTemplateEngine: "md",
        markdownTemplateEngine: "njk",
        templateFormats: ["md", "njk"]
    }


    
}

