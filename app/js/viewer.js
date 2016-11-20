window.tw = window.tw || {};
var tw = window.tw;

$(function () {
  var ans = $('#ans'),
    data = '',
    graph = false,
    modeBtn,
    chart;

  tw.viewer = {
    clear: function () {
      data = '';

      if (chart) {
        chart.destroy();
        chart = null;
      }
      if(modeBtn) {
        modeBtn.off('click', tw.viewer.toggleMode);
      }

      ans.html('').css({
        background: ''
      });
    },
    error: function (err) {
      ans.html(err).css({
        background: '#EF9A9A'
      });
    },
    json: function (json) {
      tw.viewer.clear();
      data = json;

      if (graph) {
        res = json[0];

        var xs = {},
          dataset = [];
        res.forEach(function (gts) {
          var x = ['x-' + gts.c];
          var d = [gts.c];
          gts.v.forEach(function (v) {
            x.push(Math.round(v[0] / 1000));
            d.push(v[1]);
          });

          dataset.push(x, d);
          xs[gts.c] = 'x-' + gts.c;
        });

        $('#ans').html('<div class="ct-chart" style="position: absolute; top: 0; left: 0; right: 0; bottom:0; overflow: hidden;"><div id="chart"></div></div>');
        modeBtn = $('<button class="button button-outline" style="position: absolute; top: 10px; right: 10px;">json</button>');
        modeBtn.click(tw.viewer.toggleMode);
        $('#ans').append(modeBtn);

        chart = c3.generate({
          bindto: '#chart',
          data: {
            xs: xs,
            columns: dataset
          },
          axis: {
            x: {
              type: 'timeseries',
              localtime: false,
              tick: {
                format: ' ',
              }
            }
          },
          tooltip: {
            format: {
              title: function (x) {
                return x.toISOString();
              }
            }
          }
        });

        setTimeout(tw.viewer.resize);
      } else {
        var formatter = new JSONFormatter(json, 3);
        ans.html(formatter.render());
        modeBtn = $('<button class="button button-outline" style="position: absolute; top: 10px; right: 10px;">graph</button>');
        modeBtn.click(tw.viewer.toggleMode);
        $('#ans').append(modeBtn);
  }
    },
    toggleMode: function () {
      graph = !graph;
      tw.viewer.json(data); // redraw
    },
    resize: function () {
      if (chart) {
        chart.resize({
          height: $('.ct-chart').height(),
          width: $('.ct-chart').width()
        });
      }
    }
  };

  $(window).resize(tw.viewer.resize);
});
