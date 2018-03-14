webpackJsonp([0x83e525e433f1],{8869:function(e,t){e.exports={pathContext:{group:[{node:{fields:{title:"How To Cook Quick Links, Bork Bork Bork!",date:"10 May 2003",slug:"/2003-05-10-how-to-cook-quick-links-bork-bork-bork/",tags:"Y2003"},html:"<p>Danger, danger, this post contains PHP code! Also note I've changed my mind a bit and put the quick links below any main posts for the day, rather than above.</p>\n<p>Note that the qlinks are saved in a separate blog. I'm not sure if that's the best idea or not... I could have defined a category for quick links. But it's difficult to define different entry formats for categories using MT tags. I find using a separate blog easier, then including the files with quick links in the index of the main blog, so the main blog always has the newest quick links without rebuilding. However, using a separate blog makes finding the links for each day somewhat complicated.  </p>\n<p>Each day can be found in /YYYY/MM/DD/qlinks.inc. I could just include this file in the MTDateFooter for each main post... EXCEPT that I would then miss the quick links for the days where I had no main post. So in the MTDateHeader, I need to check all the dates between the current and the previous post.</p>\n<p>At the top of the index template (before the MTEntries tag at any rate) we need to define some variables to make it easier to calculate dates:</p>\n<pre>&lt;?php \n$offset=0;\ndefine(DAY,60*60*24);\ndefine(NOW,time());\n?&gt;</pre>\n<p>Since NOW is defined in seconds, we have count back DAYs in seconds as well. The $offset keeps track of which days we've already checked. </p>\n<p>The meat of the script is in the MTDateHeader, where we check each day before the date of the current entry for quicklinks, before we output anything for the current day. For each day, we print a header and include the quick links only if a quick links file exists for that day.</p>\n<pre>&lt;MTDateHeader>\n&lt;?php\n  $mt_date='&lt;$MTEntryDate format=\"%d %B %Y\"$>';\n  $ql_date=date('d F Y',NOW-$offset*DAY);\n  while ($ql_date<>$mt_date) {\n    $inc_file=date('./Y/m/d/',NOW-$offset*DAY)\n      .'qlinks.inc';\n    if (is_readable($inc_file)) {\n      echo '&lt;h2>',$ql_date,'&lt;/h2>';\n      @include($inc_file);\n    }\n    $offset++;\n    $ql_date=date('d F Y',NOW-$offset*DAY);\n  }\n?>\n&lt;h2><$MTEntryDate format=\"%d %B %Y\"$>&lt;/h2>\n&lt;/MTDateHeader></pre>\n<p>Then we do all our normal entry stuff. After that, we need an MTDateFooter for the current day's quick links.</p>\n<pre>&lt;MTDateFooter>\n&lt;?php \n@include('<$MTEntryDate format=\"./%Y/%m/%d/qlinks.inc\"$>');\n$offset++;\n?&gt;</pre>\n<p>The @ before 'include' means there will be no warning message if the file does not exist. </p>\n<p>I'm not particularly happy that I have up to 15 separate includes on my index page. A cleaner solution would be to put all the quick links into an RSS file, and loop through that. I'll do that in version 0.02.</p>\n<p>Or I may even put the quick links back on the sidebar. Nothing in life is permanent.</p>"},next:{fields:{title:"",date:"10 May 2003",slug:"/2003-05-10-berlin-nie-gehoert/"}},previous:{fields:{title:"Smoking for health care",date:"10 May 2003",slug:"/2003-05-10-smoking-for-health-care/"}}},{node:{fields:{title:"",date:"10 May 2003",slug:"/2003-05-10-berlin-nie-gehoert/",tags:"Y2003"},html:'<p><a title="Never heard of it! T-Shirt seen at the Hamburg Hafengeburtstag" href="http://www.abendblatt.de/daten/2003/03/17/135031.html">Berlin? Nie gehört!</a></p>'},next:{fields:{title:"Life is like driving a cab",date:"09 May 2003",slug:"/2003-05-09-life-is-like-driving-a-cab/"}},previous:{fields:{title:"How To Cook Quick Links, Bork Bork Bork!",date:"10 May 2003",slug:"/2003-05-10-how-to-cook-quick-links-bork-bork-bork/"}}},{node:{fields:{title:"Life is like driving a cab",date:"09 May 2003",slug:"/2003-05-09-life-is-like-driving-a-cab/",tags:"Y2003"},html:'<p><a title="Rule Four: Make them afraid." href="http://www.kode-fu.com/shame/2003_05_04_archive.shtml#200264249">AccordionGuy: Life is like cab driving. There are four rules</a></p>'},next:{fields:{title:"Liberty Kid",date:"09 May 2003",slug:"/2003-05-09-liberty-kid/"}},previous:{fields:{title:"",date:"10 May 2003",slug:"/2003-05-10-berlin-nie-gehoert/"}}}],pathPrefix:"",first:!1,last:!1,index:746,pageCount:1101}}}});
//# sourceMappingURL=path---746-e3ee63569ea0dc1ac485.js.map