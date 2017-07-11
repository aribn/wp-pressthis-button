
Make it easier for others to quote you and your work in their blogs.

## What

WordPress ships with a blog-specific [Press This](https://en.support.wordpress.com/press-this/) bookmarklet, which allows a blog author to select/highlight content from any website and quote it, [with attribution](http://wpandlegalstuff.com/press-this-and-copyright-infringement/), on their own WordPress blog. 

This project extends Press This functionality in two ways: 

1. It moves the UI from the browser Favorites bar into the web itself, embeddable on any web page.
2. It untethers the functionality from one specific WordPress server, instead allowing a viewer to specify their own WordPress server, wherever that may be. 

## Why

I built this as a proof-of-concept based on a [tweet to Mike Caulfield.](https://twitter.com/aribadernatal/status/657060037320245248)

## Usage

Simply add this to your HTML in the same way you would any other "Share" embed.

```html
<div id="reblog-this-button" unselectable="on" class="unselectable"></div>
<script type="text/javascript">var wpPressThisButtonServer="";!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src=wpPressThisButtonServer+"/wp-pressthis-button.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"reblog-btn-js");</script>
```

## Self-host

Store the contents of the `src` directory wherever you like, then change the `wpPressThisButtonServer` variable in the code snippet to match the hosting location.

## Develop

Serve the button locally `cd src && python -m SimpleHTTPServer 8000` and open `http://localhost:8000/`

## Demo

You can try this yourself on any post on my blog, such as one describing a ["fixed-effort" bicycle concept.](https://aribadernatal.com/2008/05/29/the-nufixie-challenge-can-you-build-a-fixed-effort-bicycle-transmission/)

![](https://github.com/aribn/wp-pressthis-button/blob/master/wp-pressthis-button-demo-2.gif)

The blog URL is saved, so subsequent uses are streamlined: 

![](https://github.com/aribn/wp-pressthis-button/blob/master/wp-pressthis-button-demo-3.gif)

## License

Builds on the [Press This](https://codex.wordpress.org/Press_This) code from Wordpress, so [GPLv2](LICENSE).