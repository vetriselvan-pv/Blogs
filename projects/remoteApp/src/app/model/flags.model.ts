
export interface IFlagList {
  flags: IFlags
  name: IName
}

export interface IFlags {
  png: string
  svg: string
  alt: string
}

export interface IName {
  common: string
  official: string
  nativeName: INativeName
}

export interface INativeName {
  eng: IEng
}

export interface IEng {
  official: string
  common: string
}
