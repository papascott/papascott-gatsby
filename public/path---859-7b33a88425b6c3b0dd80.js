webpackJsonp([0xe4d1b237106c],{8994:function(e,t){e.exports={pathContext:{group:[{node:{fields:{title:"WAMPP, LAMPP, Thank You MAMMP",date:"15 Aug 2002",slug:"/2002-08-15-wampp-lampp-thank-you-mammp/",tags:"Y2002"},html:'<p>Via <a href="http://www.x-ploration.de/item00416.php">generation neXt</a>: <a href="http://www.apachefriends.org/wampp-en.html">WAMMP</a>. Because sometimes you have to install real software like apache/php/mysql on obscure operating systems like Windows. And they also have a <a href="http://www.apachefriends.org/lampp-en.html">LAMMP</a> for more common systems like Linux. Note to self: try it out!</p>'},next:{fields:{title:"Dynamic Archives: It's All Wrong",date:"15 Aug 2002",slug:"/2002-08-15-dynamic-archives-its-all-wrong/"}},previous:{fields:{title:"Lost In The Flood",date:"16 Aug 2002",slug:"/2002-08-16-lost-in-the-flood/"}}},{node:{fields:{title:"Dynamic Archives: It's All Wrong",date:"15 Aug 2002",slug:"/2002-08-15-dynamic-archives-its-all-wrong/",tags:"Y2002"},html:'<p>Remember the <a href="http://www.papascott.de/2002/08/12/1844.php#001844">Dynamic Archive Template for MT</a> I presented a couple of days ago? Well, I\'ve changed my mind. It\'s the wrong approach for the problem I\'m trying to solve. Instead of recreating the MT tags in PHP (and losing the ability to add custom tags like Brad Choate\'s <a href="http://www.bradchoate.com/past/mtmacros.php">MT Macros plugin</a>), I should instead be using PHP to prompt MT to rebuild and save a static page on demand when it\'s missing, kind of like <a href="http://traumwind.tierpfad.de/blog/?detail=2002-08-01_16-03">Martin was talking about</a> a couple of weeks ago. Oh well, it was a good exercise anyway.</p>'},next:{fields:{title:"A Dynamic Archive Template for MT: First Draft",date:"12 Aug 2002",slug:"/2002-08-12-a-dynamic-archive-template-for-mt-first-draft/"}},previous:{fields:{title:"WAMPP, LAMPP, Thank You MAMMP",date:"15 Aug 2002",slug:"/2002-08-15-wampp-lampp-thank-you-mammp/"}}},{node:{fields:{title:"A Dynamic Archive Template for MT: First Draft",date:"12 Aug 2002",slug:"/2002-08-12-a-dynamic-archive-template-for-mt-first-draft/",tags:"Y2002"},html:"<p>As I've mentioned before, I'd really like to avoid building static archive files in Movable Type. Below is my first attempt to duplicate the Individual Entry Template using php to extract the entry from the MySQL database. It's totally 0.01: uncommented, unoptimized and lacking any error checking. But, at least for me, it outputs a reasonable facsimile of an individual entry. This is very a much a work in progress, but I wanted to post something since I probably won't be able to work on this for the next couple of weeks.</p>\n<p><b>Update:</b> This is a real stupid brute-force approach. I simply took the default template and replaced all MT tags with PHP code. A smarter approach might be a parser to translate the MT tags on the fly. Or maybe not. This is a work in progress. But I think I said that already.<br />\n<?php if($_SERVER[PHP_SELF]=='/index.php') { ?><br />\nHit the 'more' link to see the code.<br />\n<?php }?><br />\n<!--more--><br />\nentry.php, version 0.01. Call as \"entry.php?id=xxxx\" where xxxx is some entry number.</p>\n<p><?php show_source ($DOCUMENT_ROOT.\"/examples/entry_v0.01.txt\");?></p>"},next:{fields:{title:"Ich bin ein Slacker",date:"11 Aug 2002",slug:"/2002-08-11-ich-bin-ein-slacker/"}},previous:{fields:{title:"Dynamic Archives: It's All Wrong",date:"15 Aug 2002",slug:"/2002-08-15-dynamic-archives-its-all-wrong/"}}}],pathPrefix:"",first:!1,last:!1,index:859,pageCount:1101}}}});
//# sourceMappingURL=path---859-7b33a88425b6c3b0dd80.js.map