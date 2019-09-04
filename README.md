# Angular7-boot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## How to start:

1. First, we'll need Node.js and NPM: https://www.npmjs.com/
2. Also, we'll need the Angular CLI for this project: https://angular.io/cli
3. Finally, clone the project and run *npm install* on the main folder.
4. Run *npm run dev* and that's it!

## How to maintain the project

- There 2 main modules in this project: User and Admin. They're following the Lazy loading concept of Angular.
- If you want to create more modules, follow the actual structure.
- Create a component for every reusable snippet of your system.
- Try to create Models for all complex datas;
- Abuse of pipes and other angular features.

## Folder structure

```
src
├── app
│   ├── admin
│   │   ├── admin
│   │   │   └── admin.component.ts
│   │   ├── admin.module.ts
│   │   ├── admin-routing.module.ts
│   │   └── dashboard
│   │       └── dashboard.component.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routing.ts
│   ├── core
│   │   ├── core.module.ts
│   │   ├── models
│   │   ├── pipes
│   │   ├── services
│   │   │   ├── api.service.ts
│   │   │   └── loading.service.ts
│   │   └── utils
│   ├── pages
│   │   └── home
│   │       └── home.component.ts
│   ├── shared
│   │   ├── internal-structure
│   │   │   └── internal-structure.component.ts
│   │   ├── layout
│   │   │   └── layout.component.ts
│   │   ├── loading
│   │   │   └── loading.component.ts
│   │   └── modal
│   │       └── modal.component.ts
│   └── user
│       ├── dashboard
│       │   └── dashboard.component.ts
│       ├── user
│       │   └── user.component.ts
│       ├── user.module.ts
│       └── user-routing.module.ts
├── assets
│   ├── img
│   └── scss
│       ├── _global.scss
│       ├── _mixins.scss
│       └── _variables.scss
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
├── test.ts
├── tsconfig.app.json
├── tsconfig.spec.json
└── tslint.json
```

## Development server

Run `npm run dev` for a dev server. Them a new browser window will open.The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive | pipe | service | class  guard | interface | enum | module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Open Source
This is a *Open Source* project. If you see anything that can be improved, just help us to build a better Angular Boot!

### Updated at: 01/09/2019
