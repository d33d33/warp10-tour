window.tw = window.tw || {};

$(function () {
  window.tw.editor = CodeMirror(document.getElementById("einst-script"), {
    lineNumbers: true,
    mode: "text/html",
    matchBrackets: true,
    viewportMargin: Infinity
  });

  window.tw.editor.errLine = function(l) {
    if(!l) {
      return;
    }
    
    tw.editor.markText({
      line: l - 1,
      ch: 0
    }, {
      line: l - 1,
      ch: tw.editor.getLine(l - 1).length
    }, {
      css: "background: #EF9A9A",
      clearOnEnter: true
    });
  };
});
