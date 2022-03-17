## Bug example for Vite and import.meta.url

### Explanation

Vite fails to build library from node_modules where there is a `new URL('.', import.meta.url)` expression.

I also made a specific lib: [lib_importmetaurl_dot](https://github.com/fend25/lib_importmetaurl_dot).

Actually this lib is just an example and a test to check that import.meta.url is resolved correctly in userspace and in a lib too.

### Example: main.js

[Lines 4-5](https://github.com/fend25/vite_import_meta_url_dot/blob/master/main.js#L4-L5) are about local `new URL('.', import.meta.url)` usage. Comment them out to avoid local new URL invocation.

[Lines 7-9](https://github.com/fend25/vite_import_meta_url_dot/blob/master/main.js#L7-L9) are about lib `new URL('.', import.meta.url)` usage. Comment them out to avoid imported new URL invocation.

### Desired behaviour
To run in dev mode without errors.
To compile without errors.

Now it shows such error in dev mode:
```
Uncaught TypeError: Failed to construct 'URL': Invalid URL
    at getDotRelativePathname (index.js:2:45)
    at main.js:8:15
```
Error is in imported usage. Lines 4-5 works ok and commenting out lines 7-9 removes the error.

And such error during build:
```
vite v2.8.6 building for production...
✓ 2 modules transformed.
[vite:asset-import-meta-url] EISDIR: illegal operation on a directory, read
file: /Users/user/tmp/vite_importmetaurl_dot/main.js
error during build:
Error: EISDIR: illegal operation on a directory, read
error Command failed with exit code 1.
```

### Build

Vite pipeline

`yarn dev` - run vite in dev mode
`yarn build` - build with vite

Webpack pipeline

`yarn webpack` - build with webpack
`yarn serve` - serve `dist` folder to see webpack result