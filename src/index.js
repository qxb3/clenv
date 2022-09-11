import { Command } from 'commander'
import inquirer from 'inquirer'

import add from './commands/add.js'
import list from './commands/list.js'
import change from './commands/change.js'

const program = new Command()
program
  .name('clenv')
  .description('A .env manager')
  .version('0.0.3')

function addCommands() {
  add(program, inquirer)
  list(program, inquirer)
  change(program, inquirer)
}

addCommands()
program.parse()
