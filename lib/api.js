const host = process.env.NEXT_PUBLIC_APIHOST

export async function getClientsInfo() {
    const response =  await fetch(`${host}/clients`)
    const responseJson = await response.json()
    return responseJson.data
}

export async function getCasesInfo() {
    const response =  await fetch(`${host}/cases`)
    const responseJson = await response.json()
    return responseJson.data   
}

export async function passwordRecovery (email) {
    const response = await fetch(`${host}/clients/forget-password`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email})
    })
    const responseJson = await response.json()
}

export async function postNewUser (data) {
    const response = await fetch(`${host}/clients`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
        })
        const responseJson = await response.json()
        return responseJson.data
}

export async function login (data) {
    const response = await fetch(`${host}/clients/login`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
        })
        const responseJson = await response.json()
        return responseJson.data
}

//Checar con Charles por qué tarda tanto en resolverse
export async function setCurrentUser (token) {
  const response = await fetch(`http://localhost:8080/clients/${token}`)
  const responseJson = await response.json()
  return responseJson.data
}

export async function editUserData (id, data) {
  const response = await fetch(`http://localhost:8080/clients/${id}`, {
    method : 'PUT',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  })
  const responseJson = await response.json()
  return responseJson
}