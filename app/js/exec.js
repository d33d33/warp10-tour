window.tw = window.tw || {};
var tw = window.tw;

$(function () {
  var running = false;

  tw.exec = function (mc2, cb) {
    if (running) {
      return cb();
    }
    running = true;

    $.post('https://warp.cityzendata.net/api/v0/exec', mc2)
      .done(function (res, status, jqXHR) {
        var exec = Math.round(parseInt(jqXHR.getResponseHeader('X-CityzenData-Elapsed')) / 1000 / 1000);

        return cb(null, {
          time: exec,
          ans: JSON.parse(res)
        });
      })
      .fail(function (jqXHR) {
        var exec = Math.round(parseInt(jqXHR.getResponseHeader('X-CityzenData-Elapsed')) / 1000 / 1000);

        return cb(jqXHR.statusText, {
          time: exec,
          errLine: jqXHR.getResponseHeader('X-CityzenData-Error-Line')
        });
      })
      .always(function () {
        running = false;
      });
  };
});
