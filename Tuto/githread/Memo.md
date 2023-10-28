# Githread
28 octobre 2023

Test des nouveautés de NextJS 14 avec le tuto de la chaîne « Melvynx • Apprendre à coder » : [MAÎTRISE NEXTJS 13 : Créer et deploy une app Full-Stack Modern en Juste 4 Heures ! by ](https://www.youtube.com/watch?v=g6RPzygnhho)

## Problème #1

```sh
node ➜ /workspace/Tuto/githread (main) $ yarn dev
yarn run v1.22.19
$ next dev
/workspace/Tuto/githread/node_modules/next/dist/server/web/spec-extension/request.js:28
class NextRequest extends Request {
                          ^

ReferenceError: Request is not defined
    at Object.<anonymous> (/workspace/Tuto/githread/node_modules/next/dist/server/web/spec-extension/request.js:28:27)
    at Module._compile (node:internal/modules/cjs/loader:1196:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1250:10)
    at Module.load (node:internal/modules/cjs/loader:1074:32)
    at Function.Module._load (node:internal/modules/cjs/loader:909:12)
    at Module.require (node:internal/modules/cjs/loader:1098:19)
    at Module.mod.require (/workspace/Tuto/githread/node_modules/next/dist/server/require-hook.js:64:28)
    at require (node:internal/modules/cjs/helpers:108:18)
    at Object.<anonymous> (/workspace/Tuto/githread/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js:37:18)
    at Module._compile (node:internal/modules/cjs/loader:1196:14)

Done in 0.46s.
```

**Solution:** Le passage à Node@20 régle le problème.

## Ressources

- [ui.shadcn.com](https://ui.shadcn.com): Build your component library.



