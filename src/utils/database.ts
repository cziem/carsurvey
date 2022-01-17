import { TDBPayload } from "./../types/type.d"

export const saveToDB = (payload: TDBPayload) => {
  let responseList: any = localStorage.getItem("survey") || '""'
  responseList = JSON.parse(responseList)

  if (!responseList) {
    // Initialize DB
    responseList = []
    responseList.push(payload)
  } else {
    responseList.push(payload)
  }

  // Save to DB
  localStorage.setItem("survey", JSON.stringify(responseList))
}

export const getSurveys = (): TDBPayload[] => {
  return JSON.parse(localStorage.getItem("survey") || '""') || []
}
