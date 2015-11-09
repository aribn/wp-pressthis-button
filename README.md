
Make it easier for others to quote you and your work in their blogs.

## What

WordPress ships with a blog-specific [Press This](https://en.support.wordpress.com/press-this/) bookmarklet, which allows a blog author to select/highlight content from any website and quote it, [with attribution](http://wpandlegalstuff.com/press-this-and-copyright-infringement/), on their own WordPress blog. 

This project extends Press This functionality in two ways: 

1. It moves the UI from the browser Favorites bar into the web itself, embeddable on any web page.
2. It untethers the functionality from one specific WordPress server, instead allowing a viewer to specify their own WordPress server, wherever that may be. 

## Demo

I incorporated this button in the post template of my Jekyll-based blog at https://aribadernatal.com. Here I pull a quote from an old blog post about ["fixed-effort" bicycle](https://aribadernatal.com/2008/05/29/the-nufixie-challenge-can-you-build-a-fixed-effort-bicycle-transmission/) concept. 

![](https://github.com/aribn/wp-pressthis-button/blob/master/wp-pressthis-button-demo.gif)

## Usage

Simply add this to your HTML in the same way you would any other "Share" embed.

```
<div id="reblog-this-button"></div>
<script>var wpPressThisButtonServer="https://d3fstinwlv9okg.cloudfront.net";</script>
<script type="text/javascript">!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src=wpPressThisButtonServer+"/wp-pressthis-button.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"reblog-btn-js");</script>
```

## Why

I built this as a proof-of-concept based on a [tweet to Mike Caulfield.](https://twitter.com/aribadernatal/status/657060037320245248)

## Self-host

Store the contents of the `src` directory wherever you like, then change the `wpPressThisButtonServer` variable in the code snippet to match.

## License

Builds on the Press This code from Wordpress, so [GPLv2](LICENSE).