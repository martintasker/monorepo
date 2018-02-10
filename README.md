# monorepo

The system to use seems to be Lerna.

Install it globally, 2.0+, then to `lerna init` in root directory of project.  This creates

* a root `packages.json` which says we need lerna
* a root `lerna.json` which will describe the packages
* a `packages/` directory which will contain the packages

Choose then between fixed mode (all packages have same version) and independent mode (each package separately versioned).  I'm going to go down the independent route.  This means `version` in `lerna.json` will be `independent` and then each package's own version will count.
