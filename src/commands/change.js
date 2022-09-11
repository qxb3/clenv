import { findUp } from 'find-up'
import dotenv from 'dotenv'
import { formatEnv } from '../utils/env.js'
import fs from 'fs'

export default (program, inquirer) => {
  program
    .command('change')
    .description('Change the value of a env variable')
    .action(async () => {
      const envPath = await findUp('.env')
      if (!envPath) {
        return program.error('\n.env file not found')
      }

      const envFile = fs.readFileSync(envPath)
      const env = dotenv.parse(envFile)

      const { key, value } = await inquirer.prompt([
        {
          name: 'key',
          message: 'Select a env variable',
          type: 'list',
          choices: Object.keys(env).map(kv => `${kv}='${env[kv]}'`)
        },
        {
          name: 'value',
          message: 'New value',
          suffix: ' =>',
          prefix: ''
        }
      ])

      env[key.replace(/=.+/, '')] = value
      fs.writeFileSync(envPath, formatEnv(env))
      console.log('\nSuccess')
    })
}
