
$(document).ready(function() {
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
    // $('[data-filter] input').on('load click', function() {
    //     // Disable
    //     $(this).closest('[data-filter]').find('label').removeClass('selected');
    //     $(this).parent().addClass('selected');
    // });


    $(function() {
      // This is a bit silly - but medium has CORS.
      var $content = $(".blogroll");
      var data = {
        rss_url: "https://medium.com/feed/the-quantum-resistant-ledger",
      };
      $.get("https://api.rss2json.com/v1/api.json", data, function(response) {
        if (response.status === "ok") {
          var output = "";
          $.each(response.items, function(k, item) {
            output += "<div class=\"blog-card\">";
            // output += "<h4 class=\"date\">" + $.format.date(item.pubDate, "dd<br>MMM") + "</h4>";

            
            // output += "<div class=\"ui fluid image\"><a href=\"" + item.link + "\"><img src=\"" + src + "\"></a></div>";
            output += "<div class=\"title\"><h2><a href=\"" + item.link + "\">" + item.title + "</a></h2></div>";
            output += "<div class=\"author\"><span>By " + item.author + "</span></div>";

            // console.log(output);
            var yourString = item.description.replace(/<img[^>]*>/g, ""); //replace with your string.
            var html = yourString;
            var div = document.createElement("div");
            div.innerHTML = html;
            var text = div.textContent || div.innerText || "";
            yourString = text;

            if (k==0) {
              var maxLength = 600; // maximum number of characters to extract
            } else {
              var maxLength = 100;
            }


            var sentence_index= 0;
            // var sentences_index = yourString.indexOf('. ');

            while (yourString.substr(0, sentence_index).length < maxLength) {
              sentence_index = yourString.indexOf('.', sentence_index+1);
            }

            var trimmedString = yourString.substr(0, sentence_index);            

            // //trim the string to the maximum length
            // var trimmedString = yourString.substr(0, maxLength);

            // //re-trim if we are in the middle of a word
            // trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
            


            output += "<p>" + trimmedString + ".</p>";
            output += "<div><a class='cta' href=\""+item.link+"\">Read More</a></div>"
            output += "</div>";
            return k < 2;
          });
          $content.html(output);
        }
      });
    });
    
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