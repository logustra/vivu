export interface ExampleState {
  data: ExampleDataModel[],
  isFetching: boolean,
  isError: boolean | Error
} 

export interface ExampleDataModel {
  id: number,
  title: string
} 
