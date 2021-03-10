import { ExampleState } from '~~/typings/exampleTypings'

const getters: {[key: string]: Function} = {
  example: (state: ExampleState) => state
}

export default getters
