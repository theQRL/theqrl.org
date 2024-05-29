(function(){
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

  function csv_trim(csv) {
    return csv.replace(/(^[,\s]+)|([,\s]+$)/g, '');
  }

  function csv_sort(csv) {
    csv_array = csv.split(",");

    csv_array.sort();

    return csv_array.join(",");
  }

  function csv_array(csv) {
    return csv.split(",");
  }

  function csv_add(csv, value) {
    concatenated = csv+","+value;

    setCookie(cookiename, concatenated, 5);

    return csv+","+value;
  }

  function csv_uniq(csv) {
    csv_array = csv.split(",");

    uniq = [...new Set(csv_array)];

    return uniq.join(",");
  }

    const params = new URLSearchParams(document.location.search);
    const cookiename = "NFCGAME";
    


    if(!getCookie(cookiename)) {
      console.log("Setting variable");
      var mne = "";

      setCookie(cookiename, mne, 5);
    } else {
      var mne = getCookie(cookiename.replace(/(^[,\s]+)|([,\s]+$)/g, ''));
    }
    
    console.log("Testing: "+mne);


    const ia = document.querySelector("#information");
    const code = params.get("c");
    mn = document.querySelector("#mn");


    



    const info = {
      "XMSS":"XMSS: A cryptographic hash-based signature scheme that is secure against quantum computer attacks.",
      "OTS":"OTS: A type of digital signature that is used only once, often for enhancing the security of other signature schemes.",
      "ECDSA":"ECDSA: A cryptographic algorithm used for digital signatures, leveraging elliptic curve cryptography, which is seens as vulnernative to quantum computers.",
      "DILITHIUM":"DILITHIUM: A post-quantum cryptographic scheme based on the hardness of lattice problems, used for digital signatures.",
      "LOGICAL":"LOGICAL: ",
      "QUBIT":"QUBIT: The basic unit of quantum information, analogous to the classical bit, but can exist in multiple states simultaneously due to quantum superposition.",
      "WEB3":"WEB3: WEB3: The vision of a decentralized web, often associated with blockchain technology and cryptocurrencies.",
      "MULTISIG":"MULTISIG: Multi-signature, a digital signature scheme that requires multiple signatures to authorize a transaction.",
      "PETER":"PETER: Peter Shor: A mathematician and computer scientist known for Shor's algorithm, a quantum algorithm for integer factorization.",
      "MERKLE":"MERKLE: A data structure used in cryptography and computer science to efficiently verify the integrity of large datasets by breaking them into smaller parts and creating a hash-based tree structure.",
      "ENTANGLEMENT ":"ENTANGLEMENT : A quantum phenomenon where the states of two or more particles become correlated in such a way that the state of one particle cannot be described independently of the state of the others.",
      "ALICE":"ALICE: A commonly used placeholder name in cryptography and computer science, often paired with Bob or Eve in scenarios and protocols.",
      "HASH":"HASH: A function that maps data of arbitrary size to a fixed-size string of bytes, commonly used in cryptography for data integrity verification.",
      "FALCON":"FALCON: A digital signature algorithm based on the Falcon theorem.",
      "CIPHER":"CIPHER: An algorithm for performing encryption or decryption, typically involving a set of steps for substituting or transposing characters.",
      "SIGNATURE":"SIGNATURE: A piece of data that is used to authenticate the validity of a digital message or document.",
      "SMARTCONTACT ":"SMARTCONTACT : Self-executing contracts with the terms of the agreement directly written into code.",
      "CONSENSES":"CONSENSES: The process by which a group of entities agree on a shared state or value, often crucial in distributed systems like blockchain.",
      "ZOND":"ZOND: Project Zond: QRL's next generation network, with EVM compatibility, dApps support and a robust web3 API on a quantum safe backbone.",
      "RSA":"RSA: Rivest-Shamir-Adleman, a widely used public-key cryptosystem for secure data transmission.",
      "PRIMENUMBER ":"PRIMENUMBER : A natural number greater than 1 that has no positive divisors other than 1 and itself.",
      "ROLLBACK":"ROLLBACK: The process of reverting a database or system to a previous state, often used in the context of recovering from errors or restoring backups.",
      "IMMUTABLE":"IMMUTABLE: Unable to be changed or modified, often used in the context of blockchain to describe the unalterable nature of recorded transactions.",
      "SECURITY":"SECURITY: The protection of data, systems, and networks against unauthorized access, disclosure, alteration, or destruction.",
      "AUSTIN":"AUSTIN: Host city for Consensus 2024 conference, and a great city!",
      "CYPHERPUNK":"CYPHERPUNK: A movement advocating strong cryptography and privacy-enhancing technologies to promote social and political change.",
      "LOMAS":"LOMAS: JP Lomas, a QRL founding developer and overall good guy.",
      "WATERLAND":"WATERLAND: Peter Waterland, a QRL founding developer and overall good guy",
      "VERIFIABLE":"VERIFIABLE: Capable of being proven true or correct, often used in the context of cryptographic protocols and digital signatures.",
      "GENESIS":"GENESIS: The initial block in a blockchain, often containing special data and considered the starting point of the ledger.",
      "ZUG":"ZUG: A city in Switzerland known for its favorable regulatory environment for cryptocurrencies and the home to the QRL Foundation",
      "OPENSOURCE":"OPENSOURCE: Software for which the original source code is made freely available and may be redistributed and modified.",
      "P2P":"P2P: Peer-to-peer, a decentralized communications model where each party has equal power and can directly interact with other parties.",
      "EPHEMERAL":"EPHEMERAL:  Lasting for a very short time, often used to describe cryptographic keys or data with a short lifespan."
    }


    if(code != null ) {
      document.querySelector(".welcome__btn.welcome__btn--blue").innerHTML = "Code: "+code+" <img src=copy-link.png>";
      

      const href = window.location.href;


      const findTerm = (term) => {
        if (code.includes(term)){
          console.log("Setting term");

          ia.innerHTML = info[term];

          mne = csv_add(mne, code);


          setCookie(cookiename,mne.replace(/(^[,\s]+)|([,\s]+$)/g, ''),5);
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
        case findTerm('IMMUTABLE'): break;
        case findTerm('SECURITY'): break;
        case findTerm('AUSTIN'): break;
        case findTerm('CYPHERPUNK'): break;
        case findTerm('LOMAS'): break;
        case findTerm('WATERLAND'): break;
        case findTerm('VERIFIABLE'): break;
        case findTerm('GENESIS'): break;
        case findTerm('ZUG'): break;
        case findTerm('OPENSOURCE'): break;
        case findTerm('P2P'): break;
        case findTerm('EPHEMERAL'): break;
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

      // console.log("Current M: "+csv_array(mne), ''));

      // clean cookie
      mne = csv_sort(mne);
      mne = csv_uniq(mne);
      mne = csv_trim(mne);

      setCookie(cookiename, mne, 5);


      console.log("Cookie string: "+mne);

      function myFunction(item) {
        cs = item.split("-");
        mn.innerHTML = "<span>ONE: "+cs[1]+"</span>";
      }

      console.log("ARRAY: "+mne.split(",").length);

      mnemonic_array = new Array(34);

      mne_array = mne.split(",");

      
      for (let i = 0; i < mne_array.length; i++) {
        mne_values = mne_array[i].split("-");

        mne_index = mne_values[0];
        mne_word = mne_values[1];

        console.log(mne_index);
        // console.log(mne_word)
        mnemonic_array[mne_index] = mne_word;
      }

      console.log("Full array: "+mnemonic_array);

      for (ind = 1; ind <= 34; ind++) {
        // console.log(ind)

        if(mnemonic_array[ind]) {
          value = mnemonic_array[ind].toLowerCase();
        } else {
          value = "____";
        }
        
        document.querySelector("#mn").innerHTML += "<span class='mnemonic'>"+ind+": "+value+"</span>";
      }

      // document.querySelector("#mn").innerHTML = "Tesing";
      // mne.forEach(element => {

      //   console.log(mne[element]);
      //   // mn.innerHTML += "<span>"+element+". "+mne[mi]+"</span>";
      // });
      
      
  })()