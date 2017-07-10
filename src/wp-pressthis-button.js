var reblogButtonElem, containerElem, wordpressUrlElem, selectedTextElem, modalElem, submitButtonElem, submitButtonLabelElem, modalCloseElem	= null; 


var reblogger = {

	showModal: function () {
		selectedTextElem.innerHTML = reblogger.getSelectionHtml() || reblogger.showSelectionPrompt(); 
		reblogger.getBlogUrl(); 
		containerElem.style.display = "block";
	},


	hideModal: function() {
		selectedTextElem.innerHTML = "";
		containerElem.style.display = "none";
	}, 


	getBlogUrl: function() {
		if (localStorage.getItem('url')) {
			wordpressUrlElem.value = localStorage.getItem('url');
			var shortUrl = wordpressUrlElem.value.replace(/(^\w+:|^)\/\//, '');
			submitButtonLabelElem.innerHTML = "Reblog selected text to " + shortUrl;
			modalElem.className = "active";
		} else {
			submitButtonLabelElem.innerHTML = "Enter your Wordpress URL above...";
			modalElem.className = "inactive";
		}
	},


	showSelectionPrompt: function() {
		return '<div class="select-prompt">Select some text from this webpage to post it to your Wordpress site.</div>'; 
	},


	setBlogUrl: function() {
		var url = wordpressUrlElem.value.replace(/\/$/,"");
		if (url != "") {
			if (url.indexOf("http") == -1) url="http://"+url;
			localStorage.setItem('url', url);
		} else {
			localStorage.removeItem('url');
		}
		reblogger.getBlogUrl(); 
	},


	addEventListeners: function() {
		document.addEventListener("selectionchange", function() {
			if (!window.getSelection().containsNode(modalElem, true)) {
				selectedTextElem.innerHTML = reblogger.getSelectionHtml() || reblogger.showSelectionPrompt();	
				selectedTextElem.scrollTop = selectedTextElem.scrollHeight;		
			}
		});
		wordpressUrlElem.addEventListener("keydown", function(e) {
		  if(e.keyCode == 13) {
		  	reblogger.setBlogUrl();
		  }
		});
		modalCloseElem.addEventListener("click", 		reblogger.hideModal);
		reblogButtonElem.addEventListener("click", 	reblogger.showModal); 
		submitButtonElem.addEventListener("click", 	reblogger.submitForm);
		wordpressUrlElem.addEventListener("blur", 	reblogger.setBlogUrl);
	},


	// https://stackoverflow.com/a/4177234
	getSelectionHtml: function() {
	  var html = "";
	  if (typeof window.getSelection != "undefined") {
	    var sel = window.getSelection();
	    if (sel.rangeCount) {
	      var container = document.createElement("div");
	      for (var i = 0, len = sel.rangeCount; i < len; ++i) {
	        container.appendChild(sel.getRangeAt(i).cloneContents());
	      }
	      html = container.innerHTML;
	    }
	  } else if (typeof document.selection != "undefined") {
	    if (document.selection.type == "Text") {
	      html = document.selection.createRange().htmlText;
	    }
	  }
	  return html;
	},


	submitForm: function() {
		var url = wordpressUrlElem.value.replace(/\/$/,"");
		if (url != "") {
			if (url.indexOf("http") == -1) url="http://"+url;
			localStorage.setItem('url', url);
			reblogger.invokeWPPressThis(url); 
			reblogger.hideModal();
		} else {
			localStorage.removeItem('url');
			alert("Must specify a Wordpress site URL.")
		}
	},


	invokeWPPressThis: function (wordpress_base_url) {
		// version found in by looking at bookmark code in an up-to-date WP install.
		window.pt_url = wordpress_base_url + "/wp-admin/press-this.php?v=8";
		// WordPress PressThis bookmarklet code, verbatim. See https://github.com/WordPress/WordPress/blob/master/wp-admin/js/bookmarklet.min.js
		(function(a,b,c,d){function e(a,c){if("undefined"!=typeof c){var d=b.createElement("input");d.name=a,d.value=c,d.type="hidden",p.appendChild(d)}}var f,g,h,i,j,k,l,m,n,o=a.encodeURIComponent,p=b.createElement("form"),q=b.getElementsByTagName("head")[0],r="_press_this_app",s=!0;if(d){if(!c.match(/^https?:/))return void(top.location.href=d);if(d+="&u="+o(c),c.match(/^https:/)&&d.match(/^http:/)&&(s=!1),a.getSelection?h=a.getSelection()+"":b.getSelection?h=b.getSelection()+"":b.selection&&(h=b.selection.createRange().text||""),d+="&buster="+(new Date).getTime(),s||(b.title&&(d+="&t="+o(b.title.substr(0,256))),h&&(d+="&s="+o(h.substr(0,512)))),f=a.outerWidth||b.documentElement.clientWidth||600,g=a.outerHeight||b.documentElement.clientHeight||700,f=f<800||f>5e3?600:.7*f,g=g<800||g>3e3?700:.9*g,!s)return void a.open(d,r,"location,resizable,scrollbars,width="+f+",height="+g);i=q.getElementsByTagName("meta")||[];for(var t=0;t<i.length&&!(t>200);t++){var u=i[t],v=u.getAttribute("name"),w=u.getAttribute("property"),x=u.getAttribute("content");x&&(v?e("_meta["+v+"]",x):w&&e("_meta["+w+"]",x))}j=q.getElementsByTagName("link")||[];for(var y=0;y<j.length&&!(y>=50);y++){var z=j[y],A=z.getAttribute("rel");"canonical"!==A&&"icon"!==A&&"shortlink"!==A||e("_links["+A+"]",z.getAttribute("href"))}b.body.getElementsByClassName&&(k=b.body.getElementsByClassName("hfeed")[0]),k=b.getElementById("content")||k||b.body,l=k.getElementsByTagName("img")||[];for(var B=0;B<l.length&&!(B>=100);B++)n=l[B],n.src.indexOf("avatar")>-1||n.className.indexOf("avatar")>-1||n.width&&n.width<256||n.height&&n.height<128||e("_images[]",n.src);m=b.body.getElementsByTagName("iframe")||[];for(var C=0;C<m.length&&!(C>=50);C++)e("_embeds[]",m[C].src);b.title&&e("t",b.title),h&&e("s",h),p.setAttribute("method","POST"),p.setAttribute("action",d),p.setAttribute("target",r),p.setAttribute("style","display: none;"),a.open("about:blank",r,"location,resizable,scrollbars,width="+f+",height="+g),b.body.appendChild(p),p.submit()}})(window,document,top.location.href,window.pt_url);
	},


	getButtonLogo: function() {
		// Based on button generated by https://developer.wordpress.com/docs/follow-button-creation/
		return '<span class="reblog-button-logo"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="14px" height="14px" viewBox="0 0 14 14" enable-background="new 0 0 14 14" xml:space="preserve"><path fill="#FFFFFF" d="M14 7c0 3.859-3.141 7-7 7s-7-3.141-7-7s3.141-7 7-7S14 3.1 14 7z M4.25 12.664l-3-8.227 C0.898 5.2 0.7 6.1 0.7 7C0.703 9.5 2.2 11.6 4.2 12.664z M10.766 8.719c0.273-0.875 0.484-1.5 0.484-2.039 c0-0.773-0.281-1.312-0.523-1.734c-0.312-0.516-0.617-0.953-0.617-1.477c0-0.578 0.438-1.117 1.055-1.117l0.086 0 C10.133 1.3 8.6 0.7 7 0.703c-2.195 0-4.133 1.133-5.258 2.836l0.406 0.008c0.656 0 1.672-0.078 1.672-0.078 c0.344-0.016 0.4 0.5 0 0.523c0 0-0.344 0.039-0.727 0.055l2.297 6.82l1.375-4.133L5.836 4 C5.492 4 5.2 4 5.2 3.992C4.836 4 4.9 3.5 5.2 3.469c0 0 1 0.1 1.7 0.1 c0.664 0 1.68-0.078 1.68-0.078C8.883 3.5 8.9 3.9 8.6 3.992c0 0-0.336 0.039-0.719 0.055l2.273 6.766L10.766 8.719z M9.086 12.938c-0.016-0.031-0.031-0.055-0.039-0.086L7.109 7.547l-1.891 5.492c0.57 0.2 1.2 0.2 1.8 0.2 C7.734 13.3 8.4 13.2 9.1 12.938z M12.562 4.625c0 0.641-0.117 1.359-0.477 2.258l-1.922 5.6 C12.031 11.4 13.3 9.3 13.3 7c0-1.094-0.273-2.125-0.766-3.023C12.547 4.2 12.6 4.4 12.6 4.625z"></path></svg></span>';
	},

};


var setupReblogger = function() {
	if (!modalElem) {

		var link 	= document.createElement('link');
		link.rel 	= 'stylesheet';
		link.type = "text/css";
		link.href = wpPressThisButtonServer + '/wp-pressthis-button.css';
		document.getElementsByTagName('head')[0].appendChild(link);		

		var reblogButtonLogo = reblogger.getButtonLogo(); 

		var div = document.createElement('div');
		div.setAttribute('id', 'reblog-container');
		div.setAttribute('style', 'display:none;');

		var pageTitle = document.getElementsByTagName("title")[0].innerHTML; 

		var contents = '<div id="reblog-selection">';
		contents 		+= '  <a href="#" id="reblog-selection-close-modal">&times;</a>';
		contents 		+= '  <div id="content-container">';
		contents 		+= '		<input type="text" id="reblog-selection-blog-url" value="" placeholder="e.g. https://favorites.aribadernatal.com" size="40"/>';
		contents 		+= '  	<div id="url-label">(Your Wordpress site URL)</div>';
		contents 		+= '    <div id="content-selection"></div>';
		contents 		+= '		<div id="source">Source: '+pageTitle+'</div>';
		contents 		+= '		<div id="reblog-selection-submit" class="reblog-button">';
		contents 		+= '		  <a href="#" class="button">'+reblogButtonLogo+'<span id="button-text">Reblog</span></a>';
		contents 		+= '		</div>';
		contents 		+= '	</div>';
		contents 		+= '</div>';
		div.innerHTML = contents;
		
		reblogButtonElem 	= document.getElementById("reblog-this-button");

		reblogButtonElem.innerHTML = '<div class="reblog-button"><a href="#" class="button">'+reblogButtonLogo+'<span>Reblog</span></a></div>';
		reblogButtonElem.parentNode.appendChild(div);

		containerElem  				= document.getElementById("reblog-container");
		modalElem 						= document.getElementById("reblog-selection");
		wordpressUrlElem			= document.getElementById("reblog-selection-blog-url"); 
		selectedTextElem			= document.getElementById("content-selection");
		modalCloseElem 				= document.getElementById("reblog-selection-close-modal");
		submitButtonElem  		= document.getElementById("reblog-selection-submit"); 
		submitButtonLabelElem = document.getElementById("button-text");


		reblogger.addEventListeners();
	}
}; 
setupReblogger();

