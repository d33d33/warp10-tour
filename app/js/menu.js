$(function () {
  $('#menu').click(function () {
    $('#drawer').toggle();
  });

  LESSONS.forEach(function (l, li) {
    var entry = $('<div class="m-lesson"><p>' + l.title + '</p></div>');
    entry.click(function () {
      tw.actions.loadLesson(li, 0);
      $('#drawer').hide();
    });
    $('#drawer').append(entry);

    l.pages.forEach(function (p, pi) {
      var entry = $('<div class="m-page"><p>' + p.title + '</p></div>');
      entry.click(function () {
        tw.actions.loadLesson(li, pi);
        $('#drawer').hide();
      });
      $('#drawer').append(entry);
    });
  });
});
