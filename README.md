# clenv

A .env manager

# Installation

```
npm install -g clenv
```

# Example Usage

```
# Add a new env variable

❯ clenv add
key => NODE_ENV
value => development

# List the env variables
❯ clenv list

JWT_SECRET='IAMSUPERSECRET'
NODE_ENV='development'
```

# Help

```
Usage: clenv [options] [command]

A .env manager

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  add             Add a new env variable
  list|ls         List the env variables
  change          Change the value of a env variable
  help [command]  display help for command
```

# LICENSE

[MIT](https://github.com/qxb3/clenv/blob/main/LICENSE)
