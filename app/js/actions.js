window.tw = window.tw || {};
var tw = window.tw;

$(function () {
  var scope = {
    lessonNb: 0,
    pageNb: 0,
    lesson: ''
  };

  tw.actions = {
    loadLesson: function (lesson, page) {
      if (!LESSONS[lesson] || !LESSONS[lesson].pages[page]) {
        return;
      }

      // For controls
      scope.lessonNb = lesson;
      scope.pageNb = page;
      $('#count').html((page + 1) + '/' + LESSONS[lesson].pages.length);
      window.location.hash = '#' + (lesson + 1) + '-' + (page + 1);

      scope.lesson = LESSONS[lesson].pages[page];

      if (lesson === 0 && page === 0) {
        $('.control .prev').hide();
      } else {
        $('.control .prev').show();
      }
      if (lesson === LESSONS.length - 1 && page === LESSONS[lesson].pages.length - 1) {
        $('.control .next').hide();
      } else {
        $('.control .next').show();
      }

      $('#lesson').html(scope.lesson.content);
      tw.editor.setValue(scope.lesson.einst);
      tw.viewer.clear();
    },
    nextLesson: function () {
      if (LESSONS[scope.lessonNb].pages.length === scope.pageNb + 1) {
        tw.actions.loadLesson(scope.lessonNb + 1, 0);
      } else {
        tw.actions.loadLesson(scope.lessonNb, scope.pageNb + 1);
      }
    },
    prevLesson: function () {
      if (scope.pageNb - 1 < 0) {
        if (LESSONS[scope.lessonNb - 1]) {
          tw.actions.loadLesson(scope.lessonNb - 1, LESSONS[scope.lessonNb - 1].pages.length - 1);
        }
      } else {
        tw.actions.loadLesson(scope.lessonNb, scope.pageNb - 1);
      }
    },
    reset: function () {
      tw.editor.setValue(scope.lesson.einst);
    },
    run: function () {
      var msg = $('#msg');

      $('#einst-run').prop('disabled', true);
      msg.html('<img src="/img/load.gif" /><p>Loading</p>');
      tw.viewer.clear();

      tw.exec(tw.editor.getValue(), function (err, res) {
        $('#einst-run').prop('disabled', false);

        if (err) {
          msg.html('<p>Error - ' + res.time + 'ms</p>');
          tw.viewer.error(err);
          tw.editor.errLine(res.errLine);
          return;
        }

        msg.html('<p>Success - ' + res.time + 'ms</p>');
        tw.viewer.json(res.ans);
      });
    }
  };
});
