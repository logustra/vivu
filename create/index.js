const chalk = require('chalk')
const shell = require('shelljs')
const { Command } = require('commander')
const program = new Command()
const camelCase = require('camelcase')
const pkg = require('../package.json') 

const COMPONENT_TYPES = [
  'atoms',
  'molecules',
  'organisms',
  'templates'
]

const MODULE_TYPES = [
  'all',
  'components',
  'constants',
  'services',
  'stores',
  'typings',
  'views',
  'store',
  'router'
]

let name = 'example'

const templates = {
  components: {
    default: './create/templates/component/vexample.vue',
  },

  modules: {
    components: './create/templates/module/components/index.ts',
    constants: './create/templates/module/constants/index.ts',
    locales: './create/templates/module/locales/example.en.yaml',

    services: [
      './create/templates/module/services/exampleService.ts',
      './create/templates/module/services/index.ts'
    ],

    stores: [
      './create/templates/module/stores/exampleActions.ts',
      './create/templates/module/stores/exampleGetters.ts',
      './create/templates/module/stores/exampleMutations.ts',
      './create/templates/module/stores/exampleState.ts',
      './create/templates/module/stores/exampleTypes.ts',
      './create/templates/module/stores/index.ts'
    ],

    typings: './create/templates/module/typings/exampleTypings.ts',
    views: './create/templates/module/views/exampleIndex.vue',
    locale: './create/templates/module/locale.ts',
    router: './create/templates/module/router.ts',
    store: './create/templates/module/store.ts'
  }
}

const checkPath = path => {
  return shell.test('-e', path)
}

const log = (folder, name, status) => {
  return status
    ? console.log(`${chalk.reset.inverse.green.bold(' SUCCESS ')} ${chalk.gray(`creating file ${folder}`)}${chalk.white(name)}`)
    : console.log(`${chalk.reset.inverse.red.bold(' FAILED ')} ${chalk.gray(`file ${folder}${chalk.white(name)} already exist`)}`)
}

const createFolder = (type, folder) => {
  let pathModule = ''
  let path = ''

  switch (type) {
    case 'component':
      path = `./src/components/${folder}/${camelCase(`v-${name}`, { pascalCase: true })}`
      if (!checkPath(path)) shell.mkdir(path)
      break

    case 'module':
      switch (folder) {
        case 'stores':
          pathModule = `./src/modules/${camelCase(name, { pascalCase: true })}`
          pathStores = `${pathModule}/stores`
          path = `${pathStores}/${camelCase(name, { pascalCase: true })}`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (!checkPath(pathStores)) shell.mkdir(pathStores)
          if (checkPath(pathModule) && checkPath(pathStores) && !checkPath(path)) shell.mkdir(path)
          break

        case 'locale':
        case 'router':
        case 'store':
          path = `./src/modules/${camelCase(name, { pascalCase: true })}`
          if (!checkPath(path)) shell.mkdir(path)
          break

        default:
          pathModule = `./src/modules/${camelCase(name, { pascalCase: true })}`
          path = `${pathModule}/${folder}`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (checkPath(pathModule) && !checkPath(path)) shell.mkdir(path)
      }
      break
  }

  return path
}

const createComponent = {
  default: folderName => {
    const folder = `${createFolder('component', folderName)}/`
    const file = `v${camelCase(name)}.vue`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.components.default} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  }
}

const createModule = {
  components: () => {
    const folder = `${createFolder('module', 'components')}/`
    const file = 'index.ts'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.components} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  constants: () => {
    const folder = `${createFolder('module', 'constants')}/`
    const file = 'index.ts'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.constants} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  locales: () => {
    const folder = `${createFolder('module', 'locales')}/`
    const file = 'example.en.yaml'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.locales} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  services: () => {
    const folder = `${createFolder('module', 'services')}/`
    const file = [
      `${camelCase(name)}Service.ts`,
      'index.ts'
    ]

    const path = file.reduce((carry, item) => {
      return [...carry, folder + item]
    }, [])

    if (!checkPath(path)) {
      shell.touch(path)

      for (const index in templates.modules.services) {
        shell.exec(`cat ${templates.modules.services[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.modules.services) {
        log(folder, file[index], false)
      }
    }
  },

  stores: () => {
    const folder = `${createFolder('module', 'stores')}/`
    const file = [
      `${camelCase(name)}Actions.ts`,
      `${camelCase(name)}Getters.ts`,
      `${camelCase(name)}Mutations.ts`,
      `${camelCase(name)}State.ts`,
      `${camelCase(name)}Types.ts`,
      'index.ts'
    ]

    const path = file.reduce((carry, item) => {
      return [...carry, folder + item]
    }, [])

    if (!checkPath(path)) {
      shell.touch(path)

      for (const index in templates.modules.stores) {
        shell.exec(`cat ${templates.modules.stores[index]} > ${path[index]}`)

        log(folder, file[index], true)
      }
    } else {
      for (const index in templates.modules.stores) {
        log(folder, file[index], false)
      }
    }
  },

  typings: () => {
    const folder = `${createFolder('module', 'typings')}/`
    const file = `${camelCase(name)}Typings.ts`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.typings} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  views: () => {
    const folder = `${createFolder('module', 'views')}/`
    const file = `${camelCase(name)}Index.vue`
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.views} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  locale: () => {
    const folder = `${createFolder('module', 'locale')}/`
    const file = 'locale.ts'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.locale} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  router: () => {
    const folder = `${createFolder('module', 'router')}/`
    const file = 'router.ts'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.router} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  store: () => {
    const folder = `${createFolder('module', 'store')}/`
    const file = 'store.ts'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.store} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  }
}

const actions = {
  atoms: componentName => {
    name = componentName
    createComponent.default('atoms')
  },

  molecules: componentName => {
    name = componentName
    createComponent.default('molecules')
  },

  organisms: componentName => {
    name = componentName
    createComponent.default('organisms')
  },

  templates: componentName => {
    name = componentName
    createComponent.default('templates')
  },

  module: (moduleName, moduleType) => {
    name = moduleName

    if (moduleType === 'all') {
      createModule.components()
      createModule.constants()
      createModule.locales()
      createModule.services()
      createModule.stores()
      createModule.typings()
      createModule.views()
      createModule.locale()
      createModule.router()
      createModule.store()
    } else {
      createModule[moduleType]()
    }
  }
}

program
  .version(pkg.version)

program
  .command('component [type] [name]')
  .description('command to generate component')
  .action((type, name) => {
    COMPONENT_TYPES.forEach(componentType => {
      if (componentType === type) actions[type](name)
    })
  })

program
  .command('module [name] [type]')
  .description('command to generate module')
  .action((name, type) => {
    MODULE_TYPES.forEach(moduleType => {
      if (moduleType === type) actions.module(name, type)
    })
  })

program.parse(process.argv)
