import type { ExampleState } from '../../typings/exampleTypings'

const getters: Record<string, Function> = {
  /**
   * @param  {ExampleState} state
   */
  example: (state: ExampleState) => state,
}

export default getters
