webpackJsonp([0x9c9dba2f5d99],{8515:function(e,t){e.exports={pathContext:{group:[{node:{fields:{title:"Export from WordPress",date:"01 Sep 2004",slug:"/2004-09-01-export-from-wordpress/",tags:"Y2004"},html:'<p><strong>Update 5 May 2005</strong>: A lot of people seem to be using this script. Since I\'m not using WordPress right now, I haven\'t really been maintaining it. A better alternative might be the <a href="http://epierce.blog.usf.edu/?p=15" title="Eric Pierce: WPexport 0.2">WPexport</a> plugin by Eric Pierce, since, unlike me, he regularly exports WordPress blogs (for students at the University of South Florida).</p>\n<p>To <a href="http://www.intertwingly.net/blog/2004/06/15/Archive-Restore">paraphrase Sam Ruby</a>, a weblog software is only as good as its export function. So <a href="http://weblog.burningbird.net/archives/2004/08/26/exit-door/">inspired</a> <a href="http://weblog.burningbird.net/archives/2004/08/22/mt-and-wp-there-and-back-again/">by</a> Shelley, starting from a <a href="http://www.billgrady.com/mt/archives/000064.php">b2 export script by Bill Grady</a>, and to <a href="http://www.sixapart.com/log/2004/08/launched_movabl.shtml">celebrate the release of Movable Type 3.1</a>, I\'ve just made WordPress a hell of a lot better. I humbly present Version 0.1 of an <a href="http://www.papascott.de/examples/export_wp.phps">export script for WordPress</a> for the Movable Type import format.</p>\n<p>A few caveats, apart from the usual it-works-for-me, your-mileage-may-vary and backup-your-data-first. </p>\n<p>1. It does not deal (yet) with entries with multiple categories. I don\'t use multiple categories, so I don\'t need this, but it could be done by adding yet another JOIN statement to the SQL and some fiddling with the output logic.<br />\n2. There are a few settings that I\'ve chosen not to read from WordPress, but instead to set explicitly in the script. If you look in the print_post function, you\'ll see<br />\n<code>echo ("STATUS: Publish&#47;n");<br />\necho ("ALLOW COMMENTS: 2&#47;n");<br />\necho ("CONVERT BREAKS: markdown&#47;n");<br />\necho ("ALLOW PINGS: 0&#47;n");</code><br />\n    I.e., all posts are published, all comments are closed, all pings are allowed, and all posts are filtered with <a href="http://daringfireball.net/projects/markdown/">markdown</a>. You may want to change these or comment them out to suit your needs.</p>\n<p>3. The post slug from WordPress is copied into the key words field. To keep your existing URLs, you\'ll want to use a solution like <a href="http://diveintomark.org/archives/2003/08/15/slugs">Mark Pilgrim\'s cruft-free URLs</a>. Note also that Movable Type uses underscores in their URLs; to have MT produce dashes automatically you\'ll need a plugin of some sort. Stay tuned.</p>\n<p>3. When importing, make sure your character set matches whatever you were using with WordPress. Both WordPress and Movable Type now use UTF-8 by default, but if you\'re using something else, you\'ll want to adjust MT accordingly.</p>\n<p>3. I\'m also not yet dealing with extended entries, although that would also be easy enough to do. Everything gets thrown into the main post for now. </p>\n<p>4. <strike>If you search the WordPress forums, you\'ll notice that inquiries about exporting to Movable Type are met with abuse and derision. Be prepared for the same if you actually use this script to export your blog to Movable Type.</strike></p>\n<p>I\'ll be happy to update the script if anyone cares to correct any of these caveats (or anything else that I haven\'t thought of). For your abuse and derision, you can see the result of the export at <a href="http://mt.papascott.de/">http://mt.papascott.de/</a> (temporary URL, don\'t go linking to it or anything).</p>'},next:{fields:{title:"Christopher's Logbook",date:"31 Aug 2004",slug:"/2004-08-31-christophers-logbook/"}},previous:{fields:{title:"Twins open nine-game lead in AL Central",date:"03 Sep 2004",slug:"/2004-09-03-twins-open-nine-game-lead-in-al-central/"}}},{node:{fields:{title:"Christopher's Logbook",date:"31 Aug 2004",slug:"/2004-08-31-christophers-logbook/",tags:"Y2004"},html:"<p>Dear Family Hanson,</p>\n<p>Today Christopher and I drew a life-sized Christopher. While drawing we discussed what he enjoys doing (building Legos, riding bike, etc.). We also thought about what one does with the eyes, the nose, the mouth. Christopher said that one needs a mouth to keep closed at night and to eat spaghetti. I then had the idea, that one also needs a mouth in order to speak. For some children speaking is easy, for others it is more difficult. But one can learn to speak more easily. Christopher and I have decided to do that together. After all, I am a speech teacher. Now he wants to know what I am writing. I'll read it to him aloud.</p>\n<p>Greetings,<br />\nB. (Christopher's speech therapist)</p>\n<p>(We have a notebook with which we communicate with Christopher's kindergarten. Today's note was a follow-up to a conference we had with her last week.)</p>"},next:{fields:{title:"Namentlich",date:"28 Aug 2004",slug:"/2004-08-28-namentlich/"}},previous:{fields:{title:"Export from WordPress",date:"01 Sep 2004",slug:"/2004-09-01-export-from-wordpress/"}}},{node:{fields:{title:"Namentlich",date:"28 Aug 2004",slug:"/2004-08-28-namentlich/",tags:"Y2004"},html:'<p><a href="http://www.echtenamen.de/" title="Namentlich: Echte Namen - die Sammlung echter Personen- und Ortsnamen">echtenamen.de</a>, humorous German names, with occupation. A few even work in English, such as the ophthalmologist Dr. M. Blind. <a href="http://vowe.net/archives/004882.html">(via vowe)</a></p>'},next:{fields:{title:"Come Out And Play",date:"27 Aug 2004",slug:"/2004-08-27-come-out-and-play/"}},previous:{fields:{title:"Christopher's Logbook",date:"31 Aug 2004",slug:"/2004-08-31-christophers-logbook/"}}}],pathPrefix:"",first:!1,last:!1,index:427,pageCount:1101}}}});
//# sourceMappingURL=path---427-e2aa4287832220bd0044.js.map