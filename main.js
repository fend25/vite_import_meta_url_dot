let pathnameLib = ''
let pathnameLocal = ''

pathnameLocal = new URL('.', import.meta.url).pathname
console.log(`pathname from main.js: "${pathnameLocal}"`)

import {getDotRelativePathname} from 'lib_importmetaurl_dot'
pathnameLib = getDotRelativePathname()
console.log(`pathname from lib:     "${pathnameLib}"`)

document.querySelector('#app').innerHTML = `
  <code><pre>Pathname from 'main.js': ${JSON.stringify(pathnameLocal, null, 2)}</pre></code>
  <code><pre>Pathname from lib:       ${JSON.stringify(pathnameLib, null, 2)}</pre></code>
`
