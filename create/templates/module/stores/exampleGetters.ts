import { ExampleState } from '../../typings/exampleTypings'

const getters: {[key: string]: Function} = {
  /**
   * @param  {ExampleState} state
   */
  example: (state: ExampleState) => state
}

export default getters
