webpackJsonp([59062869594777],{8244:function(e,t){e.exports={data:{post:{html:'<p>Last year I converted my Wordpress blog to <a href="http://jekyllrb.com/">Jekyll</a>. My 16 years of blogging are now saved as text files which Jekyll renders into static HTML, which I then push to GitHub where the blog is now hosted. I <a href="http://www.papascott.de/archives/2015/04/30/see-what-sticks/">mentioned then</a> that it took Jekyll some 3 minutes to render my 3000 or so blog posts, which is kind of a drag since the default is to rebuild the entire site every time even a small change is made.</p>\n<p>Actually, the latest version of Jekyll improved build times considerably. It can now build my 3000 pages in about a minute. But when making changes, that\'s still too long to wait.</p>\n<p>However, using a trick, I can now build those 3000 pages in 4 seconds. The trick seems pretty obvious to me, but I\'ve not seen it written up anyplace, so hence this post.</p>\n<p>The trick, of course, is to <em>not</em> build all 3000 pages. For older posts use <a href="https://jquery.com/">jquery</a> to load in parts of the layout that might change, but leave the HTML file alone. For me, those parts are the sidebar and the recent posts. I build HTML snippets for those divs and load them in like:</p>\n<pre><code>$( "#sidebar" ).load( "/includes/sidebar.html" );\n</code></pre>\n<p>Right now, on the Jekyll side I don\'t want it to rebuild posts from before 2015. I\'ve put all those in a _posts/older subdirectory and added an exclude: directive in my _config.yml:</p>\n<pre><code>exclude: [_posts/older]\n</code></pre>\n<p>On the HTML side, ever since I started blogging, even way-back-when with <a href="http://scripting.com/davenet/1999/12/08/editthispagecom.html">EditThisPage</a>, my posts have been sorted by date. I need to tell Jekyll not to erase the pages I\'ve chosen not to rebuild (and it\'s too bad _config.yml doesn\'t understand wild cards)</p>\n<pre><code>keep_files: [archives/1999, archives/200, archives/2010, archives/2011, archives/2012, archives/2013, archives/2014 ]\n</code></pre>\n<p>At least "archives/200" covers an entire decade in one entry. :-)</p>\n<p>And that\'s it. When I do want to rebuild to entire site, I can comment out those two directives and let \'er rip. And being hosted at GitHub, you can see all my gory source files in the source branch at <a href="https://github.com/papascott/papascott.github.io">https://github.com/papascott/papascott.github.io</a></p>',fields:{title:"How to build 3000 pages in Jekyll in less than 4 seconds",date:"25 Apr 2016",url:"https://papascott.de/2016-04-25-how-to-build-3000-pages-in-jekyll-in-less-than-4-seconds/"}}},pathContext:{slug:"/2016-04-25-how-to-build-3000-pages-in-jekyll-in-less-than-4-seconds/",prev:{fields:{title:"Prince",date:"23 Apr 2016",slug:"/2016-04-23-prince/"}},next:{fields:{title:"Gliding 2",date:"27 Apr 2016",slug:"/2016-04-27-gliding-2/"}}}}}});
//# sourceMappingURL=path---2016-04-25-how-to-build-3000-pages-in-jekyll-in-less-than-4-seconds-6c29f7b0511d611d534e.js.map