export interface ExampleState {
  data: ExampleDataModel[]
  isFetching: boolean
  isError: Error
}

export interface ExampleDataModel {
  id: number
  title: string
}
