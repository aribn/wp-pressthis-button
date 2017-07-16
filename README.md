
# WP Reblog Button

Every WordPress instance ships with a bookmarklet-based tool ([Press This](https://en.support.wordpress.com/press-this/)) that authors can use to easily create a new WordPress post that quotes selected text from any other website [with attribution](http://wpandlegalstuff.com/press-this-and-copyright-infringement/), onto their own WordPress blog. 

This project creates an alternate interface for this quote-and-reblog functionality, packaging it as a button that a page author can add to the ubiquitous set of social sharing buttons. This way, readers are provided with a way to easily share quotes from the page author's page onto their own WordPress site. 

Something like this reblog functionality already exists within the wordpress.com network reader, but I'm not aware of any comparable functionality that also supports self-hosted Wordpress sites. This project supports all up-to-date WordPress instances, regardless of where they are hosted. 


## Demo

I added the Reblog button to every page on [my blog](https://aribadernatal.com/blog), so feel free to try it on any post there. The clip below shows me reblogging a post about the ["fixed-effort" bicycle concept](https://aribadernatal.com/2008/05/29/the-nufixie-challenge-can-you-build-a-fixed-effort-bicycle-transmission/) to a self-hosted Wordpress blog at [favorites.aribadernatal.com](https://favorites.aribadernatal.com):

![](https://github.com/aribn/wp-pressthis-button/blob/master/img/wp-pressthis-button-demo-2.gif)

It's worth noting two bits of polish that streamline usage:

1. Text can be selected either before or after clicking the Reblog button.  
2. Once you enter your WP blog URL once, the URL will be saved for that domain, so you won't need to retype it the next time. 

Taking advantage of both of these, it's a bit faster to use: 

![](https://github.com/aribn/wp-pressthis-button/blob/master/img/wp-pressthis-button-demo-3.gif)


## Usage

Simply add this to your HTML in the same way you would any other "Share" embed.

```html 
<div id="reblog-this-button" unselectable="on" class="unselectable"></div>
<script type="text/javascript">var wpPressThisButtonServer="";!function(d,i){if(!d.getElementById(i)){var j=d.createElement("script");j.id=i;j.src=wpPressThisButtonServer+"/wp-pressthis-button.js?v=1";var w=d.getElementById(i);d.body.appendChild(j);}}(document,"reblog-btn-js");</script>
```

## Self-hosting

If you'd rather self-host this than load it from the CloudFront CDN, upload the contents of the [src](https://github.com/aribn/wp-pressthis-button/tree/master/src) directory to any web-accessible location. Update the `wpPressThisButtonServer` variable in the code snippet above to match this root location.

## Developing

If you'd like to modify the code, you can easily run it locally. `cd src && python -m SimpleHTTPServer 8000` to start the server locally, then point your browser at `http://localhost:8000/` to get started with a functional demo. 

## License

As this builds on the [Press This](https://codex.wordpress.org/Press_This) code from Wordpress, it also uses the [GPLv2](LICENSE) license.

## Motivation

I built this as a proof-of-concept of an idea mentioned in a [tweet to Mike Caulfield.](https://twitter.com/aribadernatal/status/657060037320245248)

