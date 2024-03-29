# Memo Githread

Du 28 octobre 2023 au 6 novembre 2023
Et du 19 janvier 2024 au 24 janvier 2024
Et du 25 mars au 29 mars 2024

Test des nouveautés de NextJS 14 avec le tuto de la chaîne « Melvynx • Apprendre à coder » : [MAÎTRISE NEXTJS 13 : Créer et deploy une app Full-Stack Modern en Juste 4 Heures !](https://www.youtube.com/watch?v=g6RPzygnhho)

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

## Problème #2

À la partie sur l'ajout d'une **modal**, j'ai le message d'erreur : « Application error: a client-side exception has occurred (see the browser console for more information). ».
Dans la video, vérification du code, il n'a pas d'erreur, donc redemarrer l'app, et cela fonctionne.
C'est pas mon cas, l'erreur persiste.

Erreur dans la console du navigateur: « React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundaryHandler. ».

**Solution:**

- Supprimer les dossiers : **node_modules** et **.next**.
- Réinstaller tout avec **yarn install**.
- Relancé **yarn dev**.
- Eureka, ca fonctionne !

## Ressources

- [ui.shadcn.com](https://ui.shadcn.com): Build your component library.
