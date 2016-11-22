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
      if (modeBtn) {
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
          var h = gts.c + JSON.stringify(gts.l);
          var x = ['x-' + h];
          var d = [h];
          gts.v.forEach(function (v) {
            x.push(Math.round(v[0]));
            d.push(v[1]);
          });

          dataset.push(x, d);
          xs[h] = 'x-' + h;
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
              type: 'indexed' // Values hidden by css
            }
          },
          legend: {
            show: false
          },
          tooltip: {
            format: {
              title: function (x) {
                return moment(x / 1000).toISOString();
              }
            }
          }
        });

        setTimeout(tw.viewer.resize);
      } else {
        var rows = $('<div></div>');
        json.forEach(function (r, i) {
          console.log(i);
          var row = $('<div class="tw-row"></div>');

          var formatter = new JSONFormatter(r, 0);
          row.append('<div class="row-number">' + (i+1) + '</div>');
          row.append(formatter.render());
          rows.append(row);
        });
        ans.html(rows);

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
