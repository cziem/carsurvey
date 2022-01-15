export type TQuestion = {
  type: "short-answer" | "multi-choice" | "checkbox" | "dropdown" | "dual"
  number: number
  question: string
  options?: string[]
  make?: string[]
}

export type TDir = "up" | "right" | "left" | "down" | undefined
