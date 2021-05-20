import { AxiosError } from 'axios'

export interface ExampleState {
  data: ExampleDataModel[],
  isFetching: boolean,
  isError: AxiosError
}

export interface ExampleDataModel {
  id: number,
  title: string
}
