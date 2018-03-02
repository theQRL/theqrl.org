
$(document).ready(function() {
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

    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });
    // Click
    $('.has-child > a').on('click', function(event) {
      event.preventDefault();

      $(this).parent().toggleClass('active');
    });

    // Run through slideshow
    $(window).on('load resize click', function() {
        console.log('hi');
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