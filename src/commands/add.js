import { findUp } from 'find-up'
import fs from 'fs'

export default (program, inquirer) => {
  program
    .command('add')
    .description('Add a new env variable')
    .action(async () => {
      const envPath = await findUp('.env')
      if (!envPath) {
        return program.error('\n.env file not found')
      }

      const { key, value } = await inquirer.prompt([
        { name: 'key', message: 'key', prefix: '', suffix: ' =>' },
        { name: 'value', message: 'value', prefix: '', suffix: ' =>' }
      ])

      fs.appendFileSync(envPath, `${key}='${value}'\n`)
      console.log('\nSuccess')
    })
}
