#!/usr/bin/env node
`use strict`
import meow from 'meow'
import init from './init'
import up from './up'
import build from './build'
/**
 * This is just a main function
 */
const cli = meow(`
  Usage
  $ speedeck <action>
            init
            up
            build

  Options
  --out, -O  output directory to generate to

  Examples
  $ speedeck init
  $ speedeck build my_presentation.md -o docs
`, {
  flage: {
    output: {
      type: 'string',
      alias: 'O',
    }
  },
})

const action = cli.input[0]
const filePath = cli.input[1]
const {flags} = cli
switch (action) {
  case 'init':
    init(flags)
    break
  case 'up':
    up({filePath, ...flags})
    break
  case 'build':
    build({filePath, ...flags})
    break
  default:
    break
}
