var fs = require('fs'),
  path = require('path'),
  showdown = require('showdown');
  showdown.setOption('noHeaderId', true);
  showdown.setOption('headerLevelStart', 3);
showdown.setOption('tables', true);

var converter = new showdown.Converter();

var PATH = 'lessons',
  lessons = [];

fs.readdirSync(PATH)
  .sort()
  .forEach(function (h) {
    var p = path.join(PATH, h);
    if (fs.statSync(p)
      .isDirectory()) {
      var lesson = {
        title: h.split('_').slice(1).join(' '),
        pages: []
      };

      fs.readdirSync(p)
        .sort()
        .forEach(function (f) {
          var title = path.parse(f).name.split('_').slice(1).join(' '),
          ctn = fs.readFileSync(path.join(p, f), 'utf8').split(/~{3,}/);

          lesson.pages.push({
            title: title,
            content: converter.makeHtml(ctn[0].trim()),
            einst: (ctn[1] || '').trim()
          });
        });

        lessons.push(lesson);
    }
  });

fs.writeFileSync('lessons.js', 'window.LESSONS = ' + JSON.stringify(lessons));
