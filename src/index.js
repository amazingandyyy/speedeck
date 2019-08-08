#!/usr/bin/env node
`use strict`
import meow from 'meow'
import up from './up'
import build from './build'
/**
 * This is just a main function
 */

const cli = meow(`
  Usage
  $ speedeck <action>

  Options
  --dir, -D  src directory to read from
  --out, -O  output directory to generate to

  Examples
  $ speedeck up --dir ./deck
  ... available on localhost:8888
`, {
  flage: {
    dir: {
      type: 'string',
      alias: 'D',
    },
  },
})

const action = cli.input[0]
const {flags} = cli
switch (action) {
  case 'up':
    up(flags)
    break
  case 'build':
    build(flags)
    break
  default:
    break
}
