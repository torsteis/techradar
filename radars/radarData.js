//This is the title for your window tab, and your Radar
document.title = "Kantegas TechRadar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':120,'name':'Bruk'}
                  ,{'r':240,'name':'Vurder'}
                  ,{'r':360,'name':'Avstå'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 800;
var w = 1200;

var radar_data = [
    { "quadrant": "Teknikker",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Continuous delivery", "pc":{"r":80,"t":135},"movement":"c"},
        ]
    },
    { "quadrant": "Verktøy",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {"name":"Subversion", "pc":{"r":340,"t":30},"movement":"c"},   
            {"name":"Git", "pc":{"r":70,"t":50},"movement":"c"},   
            {"name":"Ant", "pc":{"r":350,"t":20},"movement":"c"},   
            {"name":"Maven", "pc":{"r":70,"t":20},"movement":"c"},   
            {"name":"Grunt", "pc":{"r":140,"t":20},"movement":"c"},   
            {"name":"Gradle", "pc":{"r":100,"t":30},"movement":"c"},   
            {"name":"NoSQL", "pc":{"r":170,"t":70},"movement":"c"},   
        ]
    },
    { "quadrant": "Plattformer",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"JSP", "pc":{"r":320,"t":265},"movement":"c"},   
            {"name":"JSF", "pc":{"r":310,"t":235},"movement":"c"},   
            {"name":"Struts", "pc":{"r":350,"t":255},"movement":"c"},   
            {"name":"Wicket", "pc":{"r":120,"t":255},"movement":"c"},   
            {"name":"Node.JS", "pc":{"r":150,"t":255},"movement":"c"},   
            {"name":"Lettvektskontainer (f.eks Jetty)", "pc":{"r":80,"t":255},"movement":"c"},   
            {"name":"Full applikasjonsserver", "pc":{"r":290,"t":255},"movement":"c"},   
            {"name":"Hibernate/JPA", "pc":{"r":190,"t":200},"movement":"t"},
            {"name":"Play Scala/Java", "pc":{"r":170,"t":190},"movement":"c"},
            {"name":"Angular JS", "pc":{"r":170,"t":220},"movement":"c"},
            {"name":"Ember.JS", "pc":{"r":170,"t":230},"movement":"c"},
        ]
    },
    { "quadrant": "Språk",
        "color" : "#B70062",
        "left"  : w-200+30,
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"JavaScript", "pc":{"r":60,"t":325},"movement":"t"},   
            {"name":"Java", "pc":{"r":80,"t":345},"movement":"t"},   
            {"name":"Java8", "pc":{"r":180,"t":355},"movement":"t"},   
            {"name":"Scala", "pc":{"r":200,"t":345},"movement":"c"},
            {"name":"Ruby", "pc":{"r":200,"t":320},"movement":"c"},
            {"name":"Actionscript", "pc":{"r":320,"t":345},"movement":"t"},
        ]
    }
];
