export const saveToDB = (payload: any) => {
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
