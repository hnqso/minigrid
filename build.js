var fs = require('fs');
var index = fs.readFileSync('./README.md', 'utf8');
var template = fs.readFileSync('./template.ejs', 'utf8');

var minify = require('html-minifier').minify;
var ejs = require('ejs');
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
    index
].join('\n'));

var data = { content: doc };
var options = {};
var rendered = ejs.render(template, data, options);

var html = minify(rendered, {
  collapseWhitespace: true
});

fs.writeFileSync('index.html', html);
