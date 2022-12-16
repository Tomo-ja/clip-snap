import { CodeType } from './enums'

export type User = {
  name: string,
  folderIds: string[],
  tags: SnapTag[]
}

export type Folder = {
  id: string,
  name: string,
  description: string,
  snaps: Snap[]
}

export type Snap = {
  id: string,
  creator: string,
  title: string,
  tags: SnapTag[],
  description: string,
  referencesUrl: string[],
  templates: SnapTemplate[]
}

export type SnapTag = {
  name: string
}

export type SnapTemplate ={
  content: string,
  type: CodeType,
  variables: {
    name: string,
    value: string
  }[]
}

export type FormInfo = {
  email: string;
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
}

export type ModalFormInfo = {
  name: string,
  description: string
}
