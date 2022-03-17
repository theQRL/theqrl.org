function createCopyButton(highlightDiv) {
    const button = document.createElement("button");
    button.className = "copy-code-button";
    button.type = "button";
    button.innerText = "Copy";
    button.addEventListener("click", () => copyCodeToClipboard(button, highlightDiv));
    addCopyButtonToDom(button, highlightDiv);
  }
  
  async function copyCodeToClipboard(button, highlightDiv) {
    const codeToCopy = highlightDiv.querySelector(":last-child > .chroma > code").innerText;
    try {
      result = await navigator.permissions.query({ name: "clipboard-write" });
      if (result.state == "granted" || result.state == "prompt") {
        await navigator.clipboard.writeText(codeToCopy);
      } else {
        copyCodeBlockExecCommand(codeToCopy, highlightDiv);
      }
    } catch (_) {
      copyCodeBlockExecCommand(codeToCopy, highlightDiv);
    }
    finally {
      codeWasCopied(button);
    }
  }
  
  function copyCodeBlockExecCommand(codeToCopy, highlightDiv) {
    const textArea = document.createElement("textArea");
    textArea.contentEditable = 'true'
    textArea.readOnly = 'false'
    textArea.className = "copyable-text-area";
    textArea.value = codeToCopy;
    highlightDiv.insertBefore(textArea, highlightDiv.firstChild);
    const range = document.createRange()
    range.selectNodeContents(textArea)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    textArea.setSelectionRange(0, 999999)
    document.execCommand("copy");
    highlightDiv.removeChild(textArea);
  }
  
  function codeWasCopied(button) {
    button.blur();
    button.innerText = "Copied!";
    setTimeout(function() {
      button.innerText = "Copy";
    }, 2000);
  }
  
  function addCopyButtonToDom(button, highlightDiv) {
    highlightDiv.insertBefore(button, highlightDiv.firstChild);
    const wrapper = document.createElement("div");
    wrapper.className = "highlight-wrapper";
    highlightDiv.parentNode.insertBefore(wrapper, highlightDiv);
    wrapper.appendChild(highlightDiv);
  }
  
  document.querySelectorAll(".highlight")
    .forEach(highlightDiv => createCopyButton(highlightDiv));
  

function loadjson(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


if(document.querySelector('body')) {
    if (document.getElementById('downloads-list')) {
        function createButton(name, url) {
            let link = document.createElement('a');
            link.textContent = name;
            link.href = url;
            link.className = "tabs__line-right__text-link";
            
            return link;
        }
        loadjson("/_data/downloads.json", function(data) {
            data = JSON.parse(data);
            let dlist = document.getElementById("downloads-list");
            let platform = (navigator?.userAgentData?.platform || navigator?.platform || 'unknown').toLowerCase();
            console.log(platform);

            // If it's linux...
            if(platform.indexOf("linux") != -1) {
                document.getElementById('downloads-text').innerText = "Desktop (Linux)";
                document.getElementById('downloads-default').remove();

                // Generate linux buttons... (.deb/.rpm)
                data.filter(function (e) {
                    if(e.indexOf('LINUX') !== -1) {
                        dlist.appendChild(createButton( "Download ."+e.split('.').pop() , e));
                    }
                })
                
            }
            
            // If it's mac...
            if(platform.indexOf("mac") != -1) {
                document.getElementById('downloads-text').innerText = "Desktop (Mac)";
                document.getElementById('downloads-default').remove();

                // Generate mac buttons... (Intel/Silicon)
                data.filter(function (e) {
                    if(e.indexOf('MACOS') !== -1) {
                        if(e.indexOf('Intel') !== -1) {
                            dlist.appendChild(createButton( "Download (Intel)" , e));
                        }
                        if(e.indexOf('Silicon') !== -1) {
                            dlist.appendChild(createButton( "Download (Silicon)" , e));
                        }
                    }
                })
            }

            // If it's windows...
            if(platform.indexOf("win") != -1) {
                document.getElementById('downloads-text').innerText = "Desktop (Windows)";
                document.getElementById('downloads-default').remove();

                // Generate Win buttons... (Intel/Silicon)
                data.filter(function (e) {
                    if(e.indexOf('WINDOWS') !== -1) {
                        dlist.appendChild(createButton( "Download (msi)" , e));
                    }
                })
            }
        });
    }
}
