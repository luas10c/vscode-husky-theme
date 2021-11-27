import * as fs from 'fs'
import * as path from 'path'
import colors, { Scheme } from './colors'

const schemes: Scheme[] = ['dark']

const themePath = (scheme: string, bordered: boolean) =>
  path.join(process.cwd(), 'src', 'themes', `${scheme}${bordered ? '-bordered' : ''}`)

console.log(`\n${new Date()}\r\n`)
console.log('Themes built: ')
for (const scheme of schemes) {
  const normal = colors(scheme, false)
  const bordered = colors(scheme, true)

  fs.writeFileSync(`${themePath(scheme, false)}.json`, JSON.stringify(normal, null, 2))
  fs.writeFileSync(`${themePath(scheme, true)}.json`, JSON.stringify(bordered, null, 2))
  console.log(`- ${themePath(scheme, false)}.json`)
  console.log(`- ${themePath(scheme, true)}.json`)
}
