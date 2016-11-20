window.tw = window.tw || {};
var tw = window.tw;

$(function () {
  /* Control */
  $('#einst-reset').click(function () {
    tw.actions.reset();
  });

  $('#einst-run').click(tw.actions.run);

  $('#next').click(function () {
    tw.actions.nextLesson();
  });

  $('#prev').click(function () {
    tw.actions.prevLesson();
  });

  var prevKey = 0;
  $(document).keydown(function (event) {
    if (event.which === 33) {
      tw.actions.prevLesson();
      event.preventDefault();
    } else if (event.which === 34) {
      tw.actions.nextLesson();
      event.preventDefault();
    } else if (prevKey === 16 && event.which === 13) {
      tw.actions.run();
      event.preventDefault();
    }

    prevKey = event.which;
  });


  /* Bootstrap */
  var params = window.location.hash;
  if (params) {
    params = params.replace('#', '').split('-');
    tw.actions.loadLesson(parseInt(params[0]) - 1, parseInt(params[1]) - 1);
  } else {
    tw.actions.loadLesson(0, 0);
  }
});
