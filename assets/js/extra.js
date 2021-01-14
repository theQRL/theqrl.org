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

    if (document.getElementById('status-uptime')) {
            var start = luxon.DateTime.fromSeconds(1530004179);
            var end = luxon.DateTime.local();

            var uptime = end.diff(start, ['years','days','hours','minutes','seconds','milliseconds']);
            var ud = uptime.toObject();

            document.getElementById('status-uptime').innerText = ud.years+"y"+ud.days+"d";
    }

    if (document.getElementById('status-hashrate')) {
        loadjson("https://qrlmining.com/api/live_stats", function(data) {
            data = JSON.parse(data);

            var hashrate = 1610482564 / 60;
            document.getElementById('status-hashrate').innerText = hashrate.toLocaleString();
        });
    }


    

    if (document.getElementById('status-emission')) {
        var emission = parseFloat(document.getElementById('status-emission').innerText);
        document.getElementById('status-emission').innerText = emission.toLocaleString();
    }

    if(document.getElementById('status-tx')) {
        // https://analytics.quantascan.io/api/network-transactions

        loadjson("/_data/networktx.json", function(data) {
            data = JSON.parse(data);

            var totaltx = 0;
            var totaltr = 0;

            for (var i = 0; i < data.chart_data_point_list_transfer.length; i++) {
                totaltx += data.chart_data_point_list_transfer[i]['total_number_of_transactions'];
                totaltr += data.chart_data_point_list_transfer[i]['total_amount_transfered'] * 10**-9;
            }
            console.log(totaltx)

            document.getElementById('status-tx').innerText = totaltx.toLocaleString();

            document.getElementById('status-volume').innerText = totaltr.toLocaleString();
        });


    }

        if(document.getElementById('status-wallets')) {
        // https://analytics.quantascan.io/api/network-transactions

        loadjson("/_data/numberwallets.json", function(data) {
            data = JSON.parse(data);

            var totaltx = 0;
            for (var i = 0; i < data.chart_data_point_list.length; i++) {
                totaltx += data.chart_data_point_list[i]['daily_new_wallets_found'] ;
            }
            console.log(totaltx)

            document.getElementById('status-wallets').innerText = totaltx.toLocaleString();
        });


    }

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
