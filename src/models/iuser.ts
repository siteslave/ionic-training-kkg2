export interface IUser {
  id: number,
  name: string,
  username?: string,
  email?: string,
  age?: number,
  group_id?: number
}

export interface IUserDetail extends IUser {
  group?: string
}

export interface IHttpResult {
  ok: boolean,
  rows?: any,
  err?: any
}