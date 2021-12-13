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
