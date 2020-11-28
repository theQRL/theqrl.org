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
    if (document.getElementById('downloads-text')) {
    loadjson("/_data/downloads.json", function(data){
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i]);
                if(data[i].indexOf('.deb') !== -1 && window.navigator.platform.indexOf("Linux") != -1) {
                    document.getElementById('downloads-text').innerText = "Desktop (Linux)";
                    break;
                }
                if(data[i].indexOf('.dmg') !== -1 && window.navigator.platform.indexOf("Mac") != -1) {
                    document.getElementById('downloads-text').innerText = "Desktop (Mac)";
                    break;
                }
                if(data[i].indexOf('.msi') !== -1 && window.navigator.platform.indexOf("Win") != -1) {
                    document.getElementById('downloads-text').innerText = "Desktop (Windows)";
                    break;
                }
            }
            document.getElementById('downloads-url').href=data[i];
        });
    }
}
