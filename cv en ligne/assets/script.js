$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#intro']:not([href='#intro'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#moietmoi']:not([href='#moietmoi'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#competence']:not([href='#competence'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#mformation']:not([href='#mformation'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#mxpro']:not([href='#mxpro'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#mcontact']:not([href='#mcontact'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});


// Début skill
ScrollReveal().reveal(".section-padding") // activation du skill au scroll
$(document).ready(function(){
var skillset = {
"languages": [
    {
      "name": "HTML5",
      "skill": 5
    },
    {
      "name": "CSS",
      "skill": 4
    },
    {
      "name": "JavaScript",
      "skill": 4
    },
  ],
"frameworks": [
    {
      "name": "Bootstrap4",
      "skill": 4
    },
    {
      "name": "AngularJS",
      "skill": 3
    },
    {
      "name": "jQuery",
      "skill": 4
    },
    {
      "name": "Handlebars",
      "skill": 1
    },
    {
      "name": "NodeJS",
      "skill": 2
    },
  {
      "name": "Sass",
      "skill": 1
    },
    {
      "name": "Express",
      "skill": 1
    },
  ],

"os": [
    {
      "name": "Windows",
      "skill": 5
    },
    {
      "name": "Linux",
      "skill": 4
    },
    {
      "name": "macOS",
      "skill": 4
    },
    {
      "name": "Android",
      "skill": 5
    }],
		"tools": [
		    {
		      "name": "Terminal",
		      "skill": 4
		    },
		    {
		      "name": "Atom",
		      "skill": 4
		    },
		    {
		      "name": "GimP",
		      "skill": 3
		    },
		    {
		      "name": "Git",
		      "skill": 4
		    },
      {
		      "name": "Reviewit!",
		      "skill": 2
		    },
  ]
}

for(var i in skillset.languages){
   var percent=(skillset.languages[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.languages[i].name+'</div></div></li>';
   $(str).appendTo($('.languages'));
}

for(var i in skillset.frameworks){
   var percent=(skillset.frameworks[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.frameworks[i].name+'</div></div></li>';
   $(str).appendTo($('.frameworks'));
}
  for(var i in skillset.databases){
   var percent=(skillset.databases[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.databases[i].name+'</div></div></li>';
   $(str).appendTo($('.databases'));
}
    for(var i in skillset.os){
   var percent=(skillset.os[i].skill*100)/5
  var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.os[i].name+'</div></div></li>';
   $(str).appendTo($('.os'));
}

for(var i in skillset.tools){
var percent=(skillset.tools[i].skill*100)/5
var str='<div class="skillbar-container"><div class="skillbar" style="background: #2ecc71;" data-percent="'+percent+'%"><li>'+skillset.tools[i].name+'</div></div></li>';
$(str).appendTo($('.tools'));
}
  $('.skillbar').each(function(){
	$(this).animate({
		width:$(this).attr('data-percent')
	},2000);
});
})
// fin skill

//test navbar
$(document).ready(function() {
  // Custom
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});
