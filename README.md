# monorepo

The system to use seems to be Lerna.

Install it globally, 2.0+, then to `lerna init` in root directory of project.  This creates

* a root `packages.json` which says we need lerna
* a root `lerna.json` which will describe the packages
* a `packages/` directory which will contain the packages

Choose then between fixed mode (all packages have same version) and independent mode (each package separately versioned).  I'm going to go down the independent route.  This means `version` in `lerna.json` will be `independent` and then each package's own version will count.

Manually create a first client project, c1:

* cd `packages/`
* `mkdir c1 && cd c1`, ie the first client project
* `npm init` and fill in defaults
* create `index.js` and have it just print an indication that it's client `

Manually create a library project, l1, similarly.  This time the source code includes

* `index.js` which exports a function
* `index.test.js` which locally tests things
* `.npmignore` with `*.test.js` in

Do the same with l2, a second library.

Now we are ready to try whether lerna works.

```sh
lerna add l1 l2 --scope=c1
```

This

* "bootstraps one package", namely c1 -- we need to know more, what bootstrapping is
* adds dependencies into c1's package.json
* adds `node_modules` into c1, with symlinks to l1 and l2 therein

Because of the symlinks, the npm-ignored parts can actually be found in the `node_modules` folder.  But because they're symlinks, they don't take up space.

We should now be able to use l1 and l2 in c1.  Require them, and do some stuff with them, in c1:

```js
'use strict';

const add1 = require('l1');
const sub1 = require('l2');

console.log("client 1");

console.log("add1(sub1(3)) = %d", add1(sub1(3)));
```

All works as expected.

We now want to add jest as a dependency of all packages.  Use `lerna add jest` for that.

```sh
lerna add jest
```

This adds jest to all packages.  It takes time, since jest is big, and there is no attempt to optimize by sharing between each package.  This kind of invocation of `lerna add` would be unusual in practice.

One nice result of this though is that we can have proper test code in the library projects, and even in the client project.
