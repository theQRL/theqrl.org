(function(){


    const params = new URLSearchParams(document.location.search);
    const ia = document.querySelector("#information");
    const code = params.get("c");
    const mn = document.querySelector("#mn");
    const cookiename = "NFCs";


    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    const info = {
      "XMSS":"A cryptographic hash-based signature scheme that is secure against quantum computer attacks.",
      "OTS":"A type of digital signature that is used only once, often for enhancing the security of other signature schemes.",
      "ECDSA":"A cryptographic algorithm used for digital signatures, leveraging elliptic curve cryptography, which is seens as vulnernative to quantum computers.",
      "DILITHIUM":"A post-quantum cryptographic scheme based on the hardness of lattice problems, used for digital signatures.",
      "LOGICAL":"",
      "QUBIT":"The basic unit of quantum information, analogous to the classical bit, but can exist in multiple states simultaneously due to quantum superposition."
    }


    if(code != null ) {
      document.querySelector(".welcome__btn.welcome__btn--blue").innerHTML = "Code: "+code+" <img src=copy-link.png>";
      

      const href = window.location.href;
      const findTerm = (term) => {
        if (code.includes(term)){
          ia.innerHTML = info[term];

          setCookie(cookiename,info[term],5);
          return code;
        }
      };
      
      switch (code) {
        case findTerm('XMSS'): break;
        case findTerm('OTS'): break;
        case findTerm('ECDSA'): break;
        case findTerm('DILITHIUM'): break;
        case findTerm('LOGICAL'): break;
        case findTerm('QUBIT'): break;
        case findTerm('WEB3'): break;
        case findTerm('MULTISIG'): break;
        case findTerm('PETER'): break;
        case findTerm('MERKLE'): break;
        case findTerm('ENTANGLEMENT '): break;
        case findTerm('ALICE'): break;
        case findTerm('HASH'): break;
        case findTerm('FALCON'): break;
        case findTerm('CIPHER'): break;
        case findTerm('SIGNATURE'): break;
        case findTerm('SMARTCONTACT '): break;
        case findTerm('CONSENSES'): break;
        case findTerm('ZOND'): break;
        case findTerm('RSA'): break;
        case findTerm('PRIMENUMBER '): break;
        case findTerm('ROLLBACK'): break;
        default:
            console.log('Nothing found');
      };


    
    }
    
      function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
      
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
      
        document.body.removeChild(textArea);
      }
      function copyTextToClipboard(text) {
          console.log(text);
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(function() {
          console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
          console.error('Async: Could not copy text: ', err);
        });
      }
      
      var copyBtn = document.querySelector('.welcome__btn.welcome__btn--blue');
      
      copyBtn.addEventListener('click', function(event) {
          if(code!=null) {
              copyTextToClipboard(code);
          }
      });

      mn.innerHTML = "testing"+getCookie(cookiename);
  })()