var path = require('path');
var fs = require('fs');
var pkg = require('./package.json');
var markdownFile = fs.readFileSync('./README.md', 'utf8');
var templateFile = fs.readFileSync('./template.hbs', 'utf8');

var Handlebars = require('handlebars');
//
function titleCase(str){
  if (typeof str === 'undefined') return '';
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

var markdownTemplate = Handlebars.compile(markdownFile);
pkg.homepage = '[' + titleCase(pkg.name) + '](' + pkg.homepage + ')';
pkg.github = '[GitHub](' + pkg.repository.url + ')';
pkg.twitter = '['+ pkg.author.twitter + '](https://twitter.com/' + pkg.author.twitter + ')';
pkg.title = titleCase(pkg.name);
pkg.keywords = pkg.keywords.join(',');
var compiledMarkdown = markdownTemplate(pkg);

var minify = require('html-minifier').minify;
var remark = require('remark');
var html = require('remark-html');
var yamlConfig = require('remark-yaml-config');
var processor = remark().use(yamlConfig).use(html);
var doc = processor.process([
    '---',
    'remark:',
    '  commonmark: true',
    '---',
    '',
    compiledMarkdown
].join('\n'));

var data = { content: doc };
var options = extend(data, pkg);
var template = Handlebars.compile(templateFile);
var compiledTemplate = template(options);

var html = minify(compiledTemplate, {
  collapseWhitespace: true
});

fs.writeFileSync('index.html', html);
