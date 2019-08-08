import path from 'path';
import fs from 'fs';
import showdown from 'showdown';
const exec = require('child_process').exec
import { readFile } from 'fs';
import {Printer} from './util';

const reset = (path) => {
  console.log(`reset ${path}`)
  exec(`rm -rf ${path}`)
  exec(`mkdir -p ${path}`)
}
const up = ({src, theme}) => {
  theme = theme ? theme : 'basic';
  const srcFolder = src?src:'decks';
  const srcFolderPath = path.resolve(__dirname, srcFolder)
  const tempateFolderPath = path.resolve(__dirname, 'templates')
  const cacheFoler = path.join(__dirname, '.cache.decks')
  reset(cacheFoler)
  exec(`cp -rf ${tempateFolderPath}/themes/${theme}.css ${cacheFoler}`)
  exec(`cp -rf ${tempateFolderPath}/speedeck.js ${cacheFoler}`)
  const converter = new showdown.Converter()
  fs.readFile(`${srcFolderPath}/index.md`, 'utf8', (err, data) => {
    const html = converter.makeHtml(data);
    const pages = html.split('<hr />')
    pages.forEach((content, i)=>{
      const file = new Printer(path.join(cacheFoler, `${i}.html`))
      file.print(`<html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta property="og:type" content="website">
          <meta property="og:image" content="">
          <meta property="og:site_name" content="">
          <title>Presentation | ${i}</title>
          <link rel='stylesheet' type='text/css' href='${theme}.css'>
        </head>
        <body>
          <div id='displayer'>
            ${content}
          </div>
          <div>
            <a id='btn-last-page' href='${i-1}.html'>last page</a>
            <a id='btn-next-page' href='${i+1}.html'>next page</a>
            <a id='btn-fullscreen' onclick='toggleFullScreen()'>full screen</a>
          </div>
          <script type="application/javascript" src='speedeck.js' />
        </body>
        </html>`)
      file.end()
      console.log(i, 'done')
    })
  });
  // cover.print(`<html>
  // <head>
  //   <title>${presentation.cover.title}</title>
  // </head>
  // <body>
  //   <h1>${presentation.cover.title}</h1>
  //   <h3>${presentation.cover.subtitle}</h3>
  //   <p>${presentation.cover.time}</p>
  // </body>
  // </html>`.trim())
  // cover.end()
}

up({src: 'decks'})

export default up
