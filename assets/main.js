window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-123414102-1');





$(document).ready(function() {

    function teamShuffle() {
        var parent = $(".team-members");

        var divs = parent.children();
        while (divs.length) {
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
        if (!$('.teamPageId').length) {
            while ($(".team-members > div").length > 6) { $(".team-members > div")[0].remove(); }
        }
    }

    teamShuffle();


    function hasTouch() {
        return 'ontouchstart' in document.documentElement
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    }

    if (hasTouch()) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }

    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });
    // Click
    $('.has-child > a, .dropdown > a').on('click', function(event) {
      event.preventDefault();

      $(this).parent().siblings().removeClass('active');
      $(this).parent().toggleClass('active');

    });
    
    // Particles
    $(window).on('load resize keyup', function () {
        $('.particles div').each(function() {
            var scroll_top = window.scrollY || window.scrollTop || 0;
            var attach_class = $(this).attr('data-attach-class');
            var attach_position = $(this).attr('data-attach-position').split(' '); // TODO, not flexible
            var attach_child_anchor = $(this).attr('data-child-anchor').split(' '); // TODO, not flexible
            var attach_scale = $(this).data('scale') || 1;
            var attach_rotate = $(this).data('rotate') || 0;
            var attach_scalex = $(this).data('scalex') || 1;
            var attach_child_zindex = $(this).data('child-zindex') || 2;
            var offset_top = $(this).data('offset-top') || 0;
            var offset_left = $(this).data('offset-left') || 0;

            // Catch if there's no element to attach to.
            if(document.querySelector(attach_class)==null) {
                return;
            }

            $(this).css({
                "transform":"scale("+attach_scale+") rotate("+attach_rotate+"deg) scaleX("+attach_scalex+")"
            });

            var parent_position = document.querySelector(attach_class).getBoundingClientRect();
            var child_position = this.getBoundingClientRect();

            var parent = {
                top: parent_position.y + scroll_top,
                right: parent_position.left + parent_position.width,
                left: parent_position.left,
                bottom: parent_position.y + scroll_top + parent_position.height,
                height: parent_position.height,
                width: parent_position.width
            }

            var child = {
                top: child_position.y + scroll_top,
                right: child_position.left + child_position.width,
                left: child_position.left,
                bottom: child_position.y + scroll_top + child_position.height ,
                width: child_position.width,
                height: child_position.height               
            }


                // Where are we going to attach this?
            var top = parent.top;
            var left = parent.left;

            switch(attach_position[0]) {
                case 'top':
                    top = top;
                break;
                case 'center':
                    top = top + parent.height / 2;
                break;
                case 'bottom':
                    top = top + parent.height;
                break;
            }
            switch(attach_position[1]) {
                case 'left':
                    left = left;
                break;
                case 'center':
                    left = left + parent.width / 2;
                break;
                case 'right':
                    left = left + parent.width;
                break;
            }

            // Adjust for 
            switch(attach_child_anchor[0]) {
                case 'top':
                    top = top;
                break;
                case 'center':
                    top = top - child.height / 2;
                break;
                case 'bottom':
                    top = top - child.height;
                break;
            }
            // Adjust for 
            switch(attach_child_anchor[1]) {
                case 'left':
                    left = left;
                break;
                case 'center':
                    left = left - child.width / 2;
                break;
                case 'right':
                    left = left - child.width;
                break;
            }

            // Add offsets
            top = top + offset_top;
            left = left + offset_left;

            // Position the element
            $(this).css({
                "top":top+"px",
                "left":left+"px",
                "z-index":attach_child_zindex,
                "transform":"scale("+attach_scale+") rotate("+attach_rotate+"deg) scaleX("+attach_scalex+")"
            });
        });
    });



    // FAQ filter 
    $(".filter input").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        var text  ='';
        var count =0;
        var total =0;

        $(".faqs > div").each(function(index) {
            text = $(this).text();
            title = $(this).find('h2').text().trim();
            

            console.log("Checking "+title+" for "+value);

            if(text.toLowerCase().indexOf(value) !== -1) {
                // $(this).find('.question').addClass('active');
                $(this).show();
            } else {
                count++;
                $(this).find('.question').removeClass('active');
                $(this).hide();
            }
            total++;
        });

        $('.filter .filter-results').html('Filtered: '+count+" of "+total+" FAQ's");
    });


    // Run through slideshow
    $(window).on('load resize click', function() {
        $('.slideshow img').css('max-height','350px');

        var sizes = [];
        $('.slideshow img').each(function() {
          sizes.push($(this).height());
        });
        var minsize = Math.min.apply(null, sizes);
        $('.slideshow img').css('max-height',minsize+"px");
    });
    
    var sections = $('.document-page h2, .document-page h3'), nav = $('.floatmenu nav ul'), nav_height = nav.outerHeight();
 
    $(window).on('scroll load', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function(k, item) {
        if($(this).offset().top > cur_pos - 10) {
            var link = $(this).find('a').attr('href');
            nav.find('li a').parent().removeClass('active')
            nav.find('li a[href="'+link+'"]').parent().addClass('active')
            return false;
        }
      });
    });

    $('.faq .question').on('click', function() {
        $(this).toggleClass('active');
        var faq_selection = $.trim($(this).find('> div > h2').text());

        if($(this).hasClass('active')) {
            gtag('event', 'filter', {
              'event_category': 'faq-selection',
              'event_label': faq_selection
            });
        }
    });
    $(window).on('load', function() {
        $('[data-filter] input').each(function() {
            $(this).closest('[data-filter]').find('label').removeClass('selected');
            $(this).parent().addClass('selected');
        });
        $('[data-filter] input').on('click', function() {
            $(this).closest('[data-filter]').find('label').removeClass('selected');
            $(this).parent().addClass('selected');
        });
    });


    $(function() {
      var $content = $(".blogroll");
      // for offline testing, use this URL:
      // var rss_url = "https://cors-anywhere.herokuapp.com/https://medium.com/feed/the-quantum-resistant-ledger";
      var rss_url = "https://medium.com/feed/the-quantum-resistant-ledger";
      var rss_url = "/assets/medium.rss"

      $.get(rss_url, function(response) {
            var xmlDoc = response.documentElement;
            var x2js = new X2JS();
            var jsonObj = x2js.xml2json( xmlDoc );
                  var output = "";
                  $.each(jsonObj.channel.item, function(k, item) {

                    // secure link/title/author elements from Medium's XML using Salesforce's secure-filters.js
                    item.link = secureFilters.html(item.link);
                    item.title = secureFilters.html(item.title);
                    item.author = secureFilters.html(item.creator.__cdata);

                    // scaffold HTML output
                    output += "<div class=\"blog-card\">";
                    output += "<div class=\"title\"><h2><a href=\"" + item.link + "\">" + item.title + "</a></h2></div>";
                    output += "<div class=\"author\"><span>By " + item.author + "</span></div>";

                    // take out the image from blog content - this is only stylistic change to the HTML
                    // and not intended to secure the content (secureFilters is used for this)
                    var unsafeString = item.encoded.__cdata.replace(/<figure[^>]*>/g, "");
                    unsafeString = unsafeString.replace(/<img[^>]*>/g, "");
                    
                    // secure rest of blog content using Salesforce's secure-filters.js
                    var safeString = secureFilters.html(unsafeString);
                    
                    // create HTML
                    var html = safeString;
                    var div = document.createElement("div");
                    div.innerHTML = html;
                    var text = div.textContent || div.innerText || "";
                    safeString = text;

                    if (k==0) {
                      var maxLength = 600;
                    } else {
                      var maxLength = 100;
                    }

                    var sentence_index= 0;

                    while (safeString.substr(0, sentence_index).length < maxLength) {
                      sentence_index = safeString.indexOf('.', sentence_index+1);
                    }

                    var trimmedString = safeString.substr(0, sentence_index);            
                    output += trimmedString + ".";
                    output += "<div><a class='cta' href=\""+item.link+"\">Read More</a></div>"
                    output += "</div>";
                    return k < 2;
                  });
                  $content.html(output);
      });
    });
    if($('body').hasClass('homepage')) {
        // Github releases API
        $.getJSON("https://api.github.com/repos/theQRL/qrl-wallet/releases").done(function (data) {

            // Walk through releases until there's a release that has assets to download
            for (var i = 0; i < data.length; i++) {
                if(data[i].assets.length != 0) {

                    // When there's assets to download, do a string search and fill in the blanks
                    data[i].assets.forEach(function(release) {
                        if(release.browser_download_url.indexOf('linux') !== -1) {
                            $('#dl-linux').attr('href',release.browser_download_url);
                        }
                        if(release.browser_download_url.indexOf('macos') !== -1) {
                            $('#dl-ios').attr('href',release.browser_download_url);
                        }
                        if(release.browser_download_url.indexOf('win') !== -1) {
                            $('#dl-windows').attr('href',release.browser_download_url);
                        }
                    });
                    break;
                }
            }
        });
    }

    if($('body').hasClass('media')) {
        var filterizd = $('.filtr-container').filterizr({
       animationDuration: 0.35, // in seconds
       filter: 'all', // Initial filter
       controlsSelector: '', // Selector for custom controls
       delay: 0.1, // Transition delay in ms
       delayMode: 'progressive', // 'progressive' or 'alternate'
       easing: 'ease-out',
       filterOutCss: { // Filtering out animation
          opacity: 0,
          transform: 'scale(0.5)'
       },
       filterInCss: { // Filtering in animation
          opacity: 0,
          transform: 'scale(1)'
       },
       layout: 'vertical', // See layouts
       multifilterLogicalOperator: 'or',
       selector: '.filtr-container',
       setupControls: true // Should be false if controlsSelector is set 
        } );


      $('#filteringModeSingle li').click(function() {
        $('.filters-filteringModeSingle .filtr').removeClass('filtr-active');
        $(this).addClass('filtr-active');
        var filter = $(this).data('fltr');
        filteringModeSingle.filterizr('filter', filter);
      });
        $('#filteringModeMulti li').click(function() {
            var targetFilter = $(this).data('multifltr');
            if (targetFilter === 'all') {
                $('#filteringModeMulti li').removeClass('filtr-active');
                $(this).addClass('filtr-active');
                filteringModeMulti.filterizr('filter', 'all');
                filteringModeMulti._fltr._toggledCategories = { };
            }
            else {
                $('#filteringModeMulti li[data-multifltr="all"]').removeClass('filtr-active');
                $(this).toggleClass('filtr-active');
                filteringModeMulti.filterizr('toggleFilter', targetFilter);
            }
            if (!filteringModeMulti._fltr._multifilterModeOn()) {
                $('#filteringModeMulti li[data-multifltr="all"]').addClass('filtr-active');
            }
      });
    }
});



    /* Light YouTube Embeds by @labnol */
    /* Web: http://labnol.org/?p=27941 */

    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }
