webpackJsonp([0x9f870d451fa0],{4857:function(e,t){e.exports={pathContext:{group:[{node:{fields:{title:"See What Sticks",date:"30 Apr 2015",slug:"/2015-04-30-see-what-sticks/",tags:"Y2015"},html:'<p>So now that I\'ve [changed]({% post_url /older/2015/2015-04-23-transition %}) my blogging platform, I have something to blog about: my new blogging platform!</p>\n<p>From the WordPress eXtended RSS file of the contents of my blog I found I had exported 3273 posts. Jekyll re-renders every post every time a change is made... on the default template it takes 3 minutes, but on the Lanyon template it ran over 20 minutes before I cancelled the build. That\'s why I started with only a few dozen posts.</p>\n<p>I then changed my archive strategy, using yearly and monthly archives similar to what I had used with WordPress instead of the pagination used in Lanyon, and lo and behold the build took only 2.5 minutes. The disadvantage is that GitHub won\'t run the <a href="https://github.com/jekyll/jekyll-archives">jekyll-archives</a> plugin for me, so I have to render the site locally and push the rendered HTML to GitHub. I can live with that.</p>\n<p>The next question was whether Google (and everyone else) could find the old links on the new site. Jekyll is able to use the same <code>archives/:year/:month/:day/:title/</code> permalink stucture I was using before. But were all my links the same as before? Do they all still work? Well, that eXtended RSS file contains all the permalinks that WordPress had generated...</p>\n<pre><code> &#x3C;link>http://papasc.home/archives/1999/12/05/it-worked/&#x3C;/link>\n &#x3C;link>http://papasc.home/archives/1999/12/06/week-37/&#x3C;/link>\n &#x3C;link>http://papasc.home/archives/1999/12/07/ready-and-waiting/&#x3C;/link>\n &#x3C;link>http://papasc.home/archives/1999/12/09/linux-fever/&#x3C;/link>\n ...\n</code></pre>\n<p>(Yes, that\'s a fake URL. My hoster timed out producing the eXtended RSS file so I had to use a local install.) I then ran the links through a shell script I found on <a href="http://stackoverflow.com/questions/25135347/how-to-check-status-of-urls-from-text-file-using-bash-shell-script">Stack Exchange</a>:</p>\n<pre><code> #!/bin/bash\n while read -ru 4 LINE; do\n     read -r REP &#x3C; &#x3C;(exec curl -IsS "$LINE" 2>&#x26;1)\n     echo "$LINE: $REP"\n done 4&#x3C; "$1"\n</code></pre>\n<p>And, indeed, all the links work. Whether the content still makes sense is another question, but PapaScott is back online in its entirety!</p>'},next:{fields:{title:"Transition",date:"23 Apr 2015",slug:"/2015-04-23-transition/"}},previous:{fields:{title:"Taking your Place",date:"25 May 2015",slug:"/2015-05-25-taking-your-place/"}}},{node:{fields:{title:"Transition",date:"23 Apr 2015",slug:"/2015-04-23-transition/",tags:"Y2015"},html:'<p>So maybe you noticed, maybe you didn\'t, but this blog looks a little bit different than a week ago. Behind the scenes it looks a <em>lot</em> different. After over a decade of blogging on WordPress (I actually started using its predecessor <a href="http://cafelog.com/">B2</a> in 2002), I\'m now on the static site generator jekyll. My posts have been exported to text files. No more mysql database, no PHP, no more web interface. </p>\n<p>So everything is new and things are still broken. I don\'t have all posts imported yet, I\'m only back to 2012 and not 1999 when this thing started. There are a lot a worthless one-line posts from the olden days, since back then we didn\'t have Twitter and Facebook yet for worthless posts. So I have some work to do. But I\'m looking forward to it.</p>\n<p>The design, however, is absolutely fabulous, even on mobile, and for that I can take absolutely no credit. It\'s the <a href="http://lanyon.getpoole.com/">lanyon</a> theme for jekyll by <a href="https://twitter.com/mdo">@mdo</a>, who co-wrote (Twitter) <a href="http://getbootstrap.com/">Bootstrap</a>, and I thank him for making his work available to us mere mortals. </p>'},next:{fields:{title:"Confirmation",date:"20 Apr 2015",slug:"/2015-04-20-confirmation/"}},previous:{fields:{title:"See What Sticks",date:"30 Apr 2015",slug:"/2015-04-30-see-what-sticks/"}}},{node:{fields:{title:"Confirmation",date:"20 Apr 2015",slug:"/2015-04-20-confirmation/",tags:"Y2015"},html:'<p><a href="http://policke1.p2-men.de/"><img src="/assets/policke-200415.jpg" alt="Policke">{: class="alignright"}</a>\nLast week we bought a confirmation suit. Of course we went to <a href="http://policke1.p2-men.de/">Policke</a> in Hamburg. It\'s the perfect place for young (or older) men to shop. It has the feel of a 1920s haberdasher, full of dark little rooms connected by narrow halls and staircases. You\'re met at the front door by the head sizer, who determines your size with a glance and with a slight movement of his eyes directs you to the room where your size is stocked. Once there, you nod at the salesman (they\'re all men), who from your nod determines the style and price range you want. You\'re in and out in 10 minutes. No words are necessary at any time. </p>\n<p>Well, maybe not quite. :-) </p>\n<p>The confirmation will be at the end of May, on Pentecost Sunday. My mother will be flying in from the US. My father won\'t be there, of course.  He made a huge impression on his grandson, though, despite living an ocean and thousands of miles away. He thought of his grandfather when he chose his confirmation verse*. We also legally added his grandfather\'s name as an additional middle name for him. He will carry his grandfather\'s name the rest of his life, and he will be confirmed with it next month.</p>\n<p>So I guess my father will be there after all.</p>\n<p>*Matthew 7:7 "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you."</p>'},next:{fields:{title:"How I Punked Facebook",date:"10 Feb 2015",slug:"/2015-02-10-how-i-punked-facebook/"}},previous:{fields:{title:"Transition",date:"23 Apr 2015",slug:"/2015-04-23-transition/"}}}],pathPrefix:"",first:!1,last:!1,index:11,pageCount:1101}}}});
//# sourceMappingURL=path---11-b5a2c3e3f2a1ec5c99da.js.map