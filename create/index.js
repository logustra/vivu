const chalk = require('chalk')
const shell = require('shelljs')
const { Command } = require('commander')
const program = new Command()
const camelCase = require('camelcase')
const pkg = require('../package.json') 

const COMPONENTS = [
  'atoms', 
  'molecules', 
  'organisms', 
  'templates', 
]

const MODULES = [
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
    default: './create/templates/components/vexample.vue',
  },

  modules: {
    components: './create/templates/modules/components/index.ts',
    constants: './create/templates/modules/constants/index.ts',
    typings: './create/templates/modules/typings/exampleTypings.ts',

    services: [
      './create/templates/modules/services/exampleService.ts', 
      './create/templates/modules/services/index.ts'
    ],

    stores: [
      './create/templates/modules/stores/exampleActions.ts', 
      './create/templates/modules/stores/exampleGetters.ts', 
      './create/templates/modules/stores/exampleMutations.ts', 
      './create/templates/modules/stores/exampleState.ts', 
      './create/templates/modules/stores/exampleTypes.ts', 
      './create/templates/modules/stores/index.ts'
    ],

    views: './create/templates/modules/views/exampleIndex.vue',
    store: './create/templates/modules/store.ts',
    router: './create/templates/modules/router.ts'
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

  switch(type) {
    case 'components': 
      path = `./src/${type}/${folder}/${camelCase(`v-${name}`, { pascalCase: true })}`
      if (!checkPath(path)) shell.mkdir(path)
      break
      
    case 'modules': 
      switch(folder) {
        case 'stores':
          pathModule = `./src/modules/${camelCase(name, { pascalCase: true })}`
          pathStores = `${pathModule}/stores`
          path = `${pathStores}/${camelCase(name, { pascalCase: true })}`
          if (!checkPath(pathModule)) shell.mkdir(pathModule)
          if (!checkPath(pathStores)) shell.mkdir(pathStores)
          if (checkPath(pathModule) && checkPath(pathStores) && !checkPath(path)) shell.mkdir(path)
          break

        case 'store':
          path = `./src/${type}/${camelCase(name, { pascalCase: true })}`
          if (!checkPath(path)) shell.mkdir(path)
          break

        case 'router':
          path = `./src/${type}/${camelCase(name, { pascalCase: true })}`
          if (!checkPath(path)) shell.mkdir(path)
          break

        default: 
          pathModule = `./src/${type}/${camelCase(name, { pascalCase: true })}`
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
    const folder = `${createFolder('components', folderName)}/`
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
    const folder = `${createFolder('modules', 'components')}/`
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
    const folder = `${createFolder('modules', 'constants')}/`
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

  typings: () => {
    const folder = `${createFolder('modules', 'typings')}/`
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

  services: () => {
    const folder = `${createFolder('modules', 'services')}/`
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
    const folder = `${createFolder('modules', 'stores')}/`
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

  views: () => {
    const folder = `${createFolder('modules', 'views')}/`
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

  store: () => {
    const folder = `${createFolder('modules', 'store')}/`
    const file = 'store.ts'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.store} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  },

  router: () => {
    const folder = `${createFolder('modules', 'router')}/`
    const file = 'router.ts'
    const path = folder + file

    if (!checkPath(path)) {
      shell.touch(path)
      shell.exec(`cat ${templates.modules.router} > ${path}`)

      log(folder, file, true)
    } else {
      log(folder, file, false)
    }
  }
}

const actions = {
  'atoms': componentName => {
    name = componentName

    createComponent.default('atoms')
  },

  'molecules': componentName => {
    name = componentName

    createComponent.default('molecules')
  },

  'organisms': componentName => {
    name = componentName

    createComponent.default('organisms')
  },

  'templates': componentName => {
    name = componentName

    createComponent.default('templates')
  },

  'module': (moduleName, moduleType) => {
    name = moduleName

    if (moduleType === 'all') {
      createModule.components()
      createModule.constants()
      createModule.typings()
      createModule.services()
      createModule.stores()
      createModule.views()
      createModule.store()
      createModule.router()
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
    COMPONENTS.map(component => {
      if (component === type) actions[type](name)
    })
  })

program
  .command('module [name] [type]')
  .description('command to generate module')
  .action((name, type) => {
    MODULES.map(module => {
      if (module === type) actions.module(name, type)
    })
  })

program.parse(process.argv)
