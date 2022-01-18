export type TQuestion = {
  type: "short-answer" | "multi-choice" | "checkbox" | "dropdown" | "dual"
  name: string
  name1?: string
  name2?: string
  number: number
  make?: string[]
  question: string
  inputType?: string
  options?: string[]
}

export type TDir = "up" | "right" | "left" | "down" | undefined

export interface IResponse {
  age: string
  gender: string
  carSize: string
  licensed: string
  beginner: string
  emission: string
  drivetrain: string
}

export interface IValidate {
  error?: string
  hasBonus?: boolean
  canProceed?: boolean
  payload?: any
}

export type TBrandModel = {
  brand: string
  model: string
}

export type TDBPayload = {
  age: string
  gender?: string
  carSize?: string
  licensed?: string
  beginner?: string
  emission?: string
  drivetrain?: string
  carList?: TBrandModel[]
}
