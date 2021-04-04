# electron-run
run your electron app.

[![CI](https://github.com/jctaoo/electron-run/actions/workflows/CI.yml/badge.svg)](https://github.com/jctaoo/electron-run/actions/workflows/CI.yml)

bin: electron-run

alias: elecrun

```
Usage: electron-run [options] [command]

Options:
  -V, --version    output the version number
  -h, --help       display help for command

Commands:
  dev [options]    ⚡️Start to dev your electron app.
  build [options]  Build your Electron main process code in main src.
  clean
  help [command]   display help for command

```
> [TYPE]: This is a very dangerous action!

```js preact
import { useState, html } from 'docup'

export default () => {
const [count, setCount] = useState(0)
return html`<button
style="width:100px;background:#ccc;padding:5px"
onClick=${() => setCount(count + 1)}
>
    ${count}
</button>`
}
```
