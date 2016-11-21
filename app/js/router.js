$(window).on('hashchange', function () {
  params = window.location.hash.replace('#', '').split('-');
  tw.actions.loadLesson(parseInt(params[0]) - 1, parseInt(params[1]) - 1);
});
