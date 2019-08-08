import path from 'path'
const exec = require('child_process').exec
import {Printer} from './util'

const up = (flags) => {
  const {src} = flags
  const srcFolder = src?src:'decks'
  const srcFolderPath = path.resolve(__dirname, srcFolder)
  const content = require(`${srcFolderPath}/content`)
  const cacheFoler = path.resolve(__dirname, '.cache.decks')
  const {presentation, author} = content.default;
  // TODO: don't just remove file
  exec(`rm -rf ${path.resolve(__dirname, '.cache.decks/**')}`)
  const cover = new Printer(path.join(cacheFoler, '00.html'))
  console.log(presentation.cover.title)
  cover.print(`<html>
  <head>
    <title>${presentation.cover.title}</title>
  </head>
  <body>
    <h1>${presentation.cover.title}</h1>
    <h3>${presentation.cover.subtitle}</h3>
    <p>${presentation.cover.time}</p>
  </body>
  </html>`.trim())
  cover.end()
}

up({src: 'decks'})

export default up
