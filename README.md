# pz-animate-scroll - Animatescroll.js as an Angular Directive

## pz-animate-scroll was designed... 
To what: Allow a quick plugin for smooth scrolling

To how: By cutting down on DOM traversal, starting from the calling element

To why: Because animatescroll is cool.

### Installation

In your Angular project, run `bower install --save pz-animate-scroll` to save the
module. Then, in your HTML, add (if bower doesn't do it for you...):

``` html
<script src="/path/to/bower_components/pz-animate-scroll/dist/index.min.js"></script>
```

And nextly, in your Angular module, include `pz.animateScroll` as a dependency:

``` javascript
angular.module('my-app', ['pz.animateScroll'])
```

And afterthatly, add the 'page-container' HTML attribute id to the top-level element you want to be scrollable (if you have a fixed sidebar aside, and a section element, put it in the section element)
``` html
<any class="page-container"></any>
```

And Lastly, in the element you want to scroll FROM, add the pz-animate-scroll attribute directive with space-separated 2 params:
   Param1 is the id of the scroll-to target
   Param2 is the delay of the scroll in milliseconds
``` html
<p pz-animate-scroll="targetId 1000"></p>
```
** This plugin adds an on.click event to this element.



