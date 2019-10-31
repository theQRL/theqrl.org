  (function() {
    var globe = planetaryjs.planet();
    var width = document.getElementById('globe').width;
    var height = document.getElementById('globe').height;

    globe.loadPlugin(
      autorotate(10)
    );

    globe.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file:   '/assets/world-110m.json' },
      oceans:   { fill:   '#FBFBFB' },
      land:     { fill:   '#FFF' },
      borders:  { stroke: '#FFF' }
    }));

    // Set up the globe's initial scale, offset, and rotation.
    globe.projection.scale(width / 1.5).translate([width / 2, width / 1.2 ]);

    // Every few hundred milliseconds, we'll draw another random ping.
    var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
    var canvas = document.getElementById('globe');

    // Draw that globe!
    globe.draw(canvas);

    // This plugin will automatically rotate the globe around its vertical
    // axis a configured number of degrees every second.
    function autorotate(degPerSec) {
      // Planetary.js plugins are functions that take a `planet` instance
      // as an argument...
      return function(planet) {
        var lastTick = null;
        var paused = false;
        var total_rotated = 0;
        planet.plugins.autorotate = {
          pause:  function() { paused = true;  },
          resume: function() { paused = false; }
        };
        // ...and configure hooks into certain pieces of its lifecycle.
        planet.onDraw(function() {
          if (paused || !lastTick) {
            lastTick = new Date();
          } else {
            var now = new Date();
            var delta = now - lastTick;

            // This plugin uses the built-in projection (provided by D3)
            // to rotate the globe each time we draw it.
            var rotation = planet.projection.rotate();
            // rotation[0] += degPerSec * delta / 5000;
            rotation[1] += degPerSec * delta / 1500;

            if (rotation[0] >= 180) {
              rotation[0] -= 360;
            }
            if (rotation[1] >= 180) {
              rotation[1] -= 360;
            } 

            lastTick = now;
            total_rotated+= (degPerSec * delta / 1500);
            if(total_rotated<=12) {
              planet.projection.rotate(rotation);
            }

          }
        });
      };
    };
  })();