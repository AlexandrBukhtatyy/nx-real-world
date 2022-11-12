# Rwa
Real world application

## Technologies
* NX
* Angular
* Nest
* Prisma
* Postgresql
* Docker
* CI/CD

## Tools

## Console commands
```shell
npm run start start:site
npm run start start:admin

# Create nx workspace
npx create-nx-workspace@latest --preset angular --directory ./

# Generate backend application
nx generate @nrwl/nest:application [NAME]

# Generate frontend application - angular
nx g @nrwl/angular:app --directory=frontend --name=[NAME]

# Generate frontend library - angular
nx g @nrwl/angular:library --directory=frontend/[PATH] --name=[NAME]
nx g @nrwl/angular:library --directory=frontend/ui/[PATH] --name=[NAME]
nx g @nrwl/angular:library --directory=frontend/utils/[PATH] --name=[NAME]
nx g @nrwl/angular:library --directory=frontend/modules/[PATH] --name=[NAME]

nx g c --directory=frontend/[PATH] --name=[NAME]
nx g d --directory=frontend/[PATH] --name=[NAME]
```

## Links
* [NX - documentation](https://nx.dev/)
* [Full Stack Type Safety with Angular, Nest, Nx, and Prisma](https://www.prisma.io/blog/full-stack-typesafety-with-angular-nest-nx-and-prisma-CcMK7fbQfTWc)
