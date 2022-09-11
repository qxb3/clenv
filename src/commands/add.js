import { findUp } from 'find-up'
import fs from 'fs'
import { formatEnv } from '../utils/env.js'
import dotenv from 'dotenv'

export default (program, inquirer) => {
  program
    .command('add')
    .description('Add a new env variable')
    .action(async () => {
      const envPath = await findUp('.env')
      if (!envPath) {
        return program.error('\n.env file not found')
      }

      const envFile = fs.readFileSync(envPath)
      const env = dotenv.parse(envFile)

      const { key, value } = await inquirer.prompt([
        { name: 'key', message: 'key', prefix: '', suffix: ' =>' },
        { name: 'value', message: 'value', prefix: '', suffix: ' =>' }
      ])

      if (!key) return program.error('\nkey is required')
      if (!value) return program.error('\nvalue is required')

      env[key] = value
      fs.writeFileSync(envPath, formatEnv(env))
      console.log('\nSuccess')
    })
}
