export function formatEnv(env) {
  return Object.keys(env)
    .map(kv => `${kv}='${env[kv]}'`)
    .join('\n')
}
