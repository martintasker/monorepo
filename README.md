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

Now we are ready to try whether lerna works.
