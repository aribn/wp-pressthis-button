
Make it easier for others to quote you and your work in their blogs.

## What

WordPress ships with a blog-specific ["Press Here"](https://en.support.wordpress.com/press-this/) bookmarklet, which allows a blog author to select/highlight content from any website and quote it, [http://wpandlegalstuff.com/press-this-and-copyright-infringement/](with attribution), on their own WordPress blog. 

This project extends _Press Here_ functionality in two ways: First, it moves the UI from the browser Favorites bar into the web itself, embeddable on any web page. Second, it untethers the functionality from one specific WordPress server, instead allowing a viewer to specify their own WordPress server, wherever that may be. 

## Why

Proof-of-concept for Mike Caulfield. https://twitter.com/aribadernatal/status/657060037320245248

## Demo

I added the button to the post template on my Jekyll-based blog. Here you can see how to use it. 

![](https://github.com/aribn/wp-pressthis-button/blob/master/wp-pressthis-button-demo.gif)

## Usage

Simply add this to your HTML in the same way you would any other "Share" embed.

```javascript
<a href="#" id="reblog-this-button"></a>
<script>var wpPressThisButtonServer="https://d3fstinwlv9okg.cloudfront.net";</script>
<script type="text/javascript">!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src=wpPressThisButtonServer+"/wp-pressthis-button.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"reblog-btn-js");</script>
```

### Self-host

Store the `src` directory where ever you like, and change the `wpPressThisButtonServer` variable in the snippet above to point to that location.

