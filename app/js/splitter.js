$(function () {
  function resize() {
    tw.viewer.resize();
  }
  $(".lesson")
    .resizable({
      handleSelector: ".v-split",
      resizeHeight: false,
      onDrag: resize,
      onDragEnd: resize
    });

  $(".einstein")
    .resizable({
      handleSelector: ".h-split",
      resizeWidth: false,
      onDrag: resize,
      onDragEnd: resize
    });
});
