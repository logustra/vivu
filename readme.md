## Vivu

[![Licence](https://img.shields.io/github/license/logustra/vivu)](https://github.com/logustra/vivu/blob/master/license.md)
[![Code Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

> Opinionated scalable vue boilerplate using vite
## Design Pattern
Learn the design pattern [here](https://github.com/logustra/dave)

## Features
- Faster by default: [vite](https://github.com/vitejs/vite), [vue](https://github.com/vuejs/vue-next), [pnpm](https://github.com/pnpm/pnpm), [esbuild](https://github.com/evanw/esbuild)
- Vue 3 ecosystem: [vue](https://github.com/vuejs/vue-next), [vuex](https://next.vuex.vuejs.org), [vue-router](https://github.com/vuejs/vue-router-next)
- Typescript, of course
- Using new `<script setup>` style
- Support legacy browsers
- Auto injecting fonts: [vite-plugin-fonts](https://github.com/stafyniaksacha/vite-plugin-fonts)
- Auto importing APIs
- Auto importing components: [iconify](https://github.com/antfu/vite-plugin-icons), [element-plus](https://github.com/element-plus/element-plus)
- Just in time css utilities: [unocss](https://github.com/unocss/unocss)
- Composition utilities: [vueuse](https://github.com/vueuse/vueuse)
- Form validation: [vuelidate](https://vuelidate-next.netlify.app)
- Localization: [vue-i18n](https://github.com/intlify/vue-i18n-next), [vite-plugins-i18n](https://github.com/intlify/vite-plugin-vue-i18n)
- UI Documentation: [histoire](https://github.com/histoire-dev/histoire)
- Testing: [vitest](https://vitest.dev/)
- HTTP request: [umi-request](https://github.com/umijs/umi-request)
- Git custom hooks: [husky](https://github.com/typicode/husky)
- Commit conventions: [commitizen](https://github.com/commitizen/cz-cli)
- Linters: [commitlint](https://github.com/conventional-changelog/commitlint), [eslint](https://github.com/eslint/eslint), [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- Visualize bundle: [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)
- CI/CD: [github actions](https://github.com/features/actions)
- Optimized nginx config
- Dockerize

## Dev Tools
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar): Vue 3 IDE support
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify): Icon inline display and autocomplete
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally): All in one i18n support
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss): IDE support for UnoCSS
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Requirement
  - [node.js](http://nodejs.org/)
  - [volta](https://docs.volta.sh/guide/getting-started)
  - [pnpm](https://pnpm.js.org/en/installation)

## Getting Started
### GitHub Template

[Create a repo from this template on GitHub](https://github.com/logustra/vivu/generate).

### Clone to local
If you prefer to do it manually with the cleaner git history

```bash
# clone repository
$ git clone https://github.com/logustra/vivu.git

# open folder vivu
$ cd vivu

# install packages
$ pnpm install

# build and serve with vite dev server
$ pnpm dev
```

### Run with Docker

```bash
# build docker image and tag it with name nginx
$ docker build . -t nginx

# run docker image nginx with name vivu in port 9900
$ docker run -it -p 9900:80 --rm --name vivu nginx
```

## Checklist
When you use this template, try follow the checklist to update your info properly

- [ ] Change `name, description, repository, bugs` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the README(s) and remove modules

And, enjoy :)

## How to Create Folder
A guide how to create a folder using `create-cli`

### Component
```bash
# create new atom component with name loading
$ node create component atoms loading
```

### Module
```bash
# create new module with name home and with all types
$ node create module home all
```

## Variations
- [vivu-npm](https://github.com/logustra/vivu-npm): Starter template to build component library

## Cheers me on
Love my works? give me 🌟 or cheers me on here 😆 <br>
Your support means a lot to me. It will help me sustain my projects actively and make more of my ideas come true. <br>
Much appreciated! ❤️ 🙏

&nbsp; &nbsp; 🐙 [Github](https://github.com/sponsors/logustra)<br>
&nbsp; &nbsp; 🌍 [Ko-Fi](https://ko-fi.com/logustra)<br>
&nbsp; &nbsp; 🇮🇩 [Trakteer](https://trakteer.id/logustra/tip)<br>

## License
MIT License © 2021 Faizal Andyka
