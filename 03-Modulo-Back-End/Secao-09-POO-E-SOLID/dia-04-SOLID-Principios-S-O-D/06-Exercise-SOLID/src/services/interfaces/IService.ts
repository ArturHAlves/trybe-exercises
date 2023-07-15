export interface IServiceReader<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>
}

export interface IServiceWriter<T, U> {
  create(arg: U): Promise<T>
  update(id: string, arg: Omit<T, 'id'>): Promise<T>
}
export interface IServiceDelete {
  removeById(id: string): Promise<void>
}

export interface IService<T, U> extends
  IServiceReader<T>,
  IServiceWriter<T, U>,
  IServiceDelete {}
