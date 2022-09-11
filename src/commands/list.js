import { findUp } from 'find-up'
import dotenv from 'dotenv'
import fs from 'fs'
import { formatEnv } from '../utils/env.js'

export default (program) => {
  program
    .command('list')
    .alias('ls')
    .description('List the env variables')
    .action(async () => {
      const envPath = await findUp('.env')
      if (!envPath) {
        return program.error('\n.env file not found')
      }

      const envFile = fs.readFileSync(envPath)
      const env = dotenv.parse(envFile)

      console.log()
      console.log(formatEnv(env))
    })
}
