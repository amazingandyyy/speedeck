import path from 'path';
import fs from 'fs';
import showdown from 'showdown';
const exec = require('child_process').exec
import { readFile } from 'fs';
import {Printer} from './util';

const reset = (path) => {
  exec(`rm -rf ${path}`)
  exec(`mkdir -p ${path}`)
}
const build = ({filePath, output}) => {
  const theme = 'basic';
  output = output?output:'.cache.decks';
  const tempateFolderPath = path.resolve(__dirname, 'templates')
  const cacheFoler = path.join(output)
  reset(cacheFoler)
  exec(`cp -rf ${tempateFolderPath}/themes/${theme}.css ${cacheFoler}`)
  exec(`cp -rf ${tempateFolderPath}/speedeck.js ${cacheFoler}`)
  const converter = new showdown.Converter()
  fs.readFile(filePath, 'utf8', (err, data) => {
    const html = converter.makeHtml(data);
    const pages = html.split('<hr />')
    pages.forEach((content, i)=>{
      const fileName = (i==0)?'index':i;
      const file = new Printer(path.join(cacheFoler, `${fileName}.html`))
      file.print(`<html>
        <head>
          <meta charset="utf-8">
          <meta property="og:type" content="website">
          <meta property="og:image" content="">
          <meta property="og:site_name" content="">
          <title>Presentation | ${i}</title>
          <link rel='stylesheet' type='text/css' href='${theme}.css'>
        </head>
        <body>
          <div id='displayer'>
            <div>${content}</div>
          </div>
          <div id='btn-container'>
            <a class='btn' href='${(i-1<=0)?'index':i-1}.html'><<</a>
            <a class='btn' href='${i+1}.html'>>></a>
            <a class='btn' onclick='toggleFullScreen()'>full screen</a>
          </div>
          <script type="application/javascript" src='speedeck.js' />
        </body>
        </html>`)
      file.end()
    })
  });
}

// build('/Users/andy.chen/projects/speedeck/src/decks/index.md')

export default build
