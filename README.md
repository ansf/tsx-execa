Reproduce:

`npm i`
`npm run test`

fails with:

```
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main defined in ./node_modules/unicorn-magic/package.json
    at exportsNotFound (node:internal/modules/esm/resolve:303:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:593:13)
    at resolveExports (node:internal/modules/cjs/loader:591:36)
    at Module._findPath (node:internal/modules/cjs/loader:668:31)
    at Module._resolveFilename (node:internal/modules/cjs/loader:1130:27)
    at nextResolveSimple (./node_modules/tsx/dist/register-DCnOAxY2.cjs:3:942)
    at ./node_modules/tsx/dist/register-DCnOAxY2.cjs:2:2550
    at ./node_modules/tsx/dist/register-DCnOAxY2.cjs:2:1624
    at resolveTsPaths (./node_modules/tsx/dist/register-DCnOAxY2.cjs:3:760)
    at ./node_modules/tsx/dist/register-DCnOAxY2.cjs:3:1038 {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
```


**NOTE**
- if `execa` is downgraded to `9.3.1` it does not fail
- if renaming `index.ts` to `index.mjs`. running it with `node index.mjs` works as expected
