const host = process.env.NEXT_PUBLIC_APIHOST

//CASES
export async function getCasesInfo() {
  const response =  await fetch(`${host}/cases`)
  const responseJson = await response.json()
  return responseJson.data   
}

//LOGIN
export async function login (data) {
  if (data.checkbox) {
    const response = await fetch(`${host}/abogados/login`, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    const responseJson = await response.json()
    return responseJson.data
    
  } else {
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
}



//USERS
export async function getClientsInfo() {
    const response =  await fetch(`${host}/clients`)
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

//Checar con Charles por qué tarda tanto en resolverse
export async function setCurrentUser (token) {
  const response = await fetch(`${host}/clients/tkn/${token}`)
  const responseJson = await response.json()
  return responseJson.data
}

export async function getUserData (id) {
  const response = await fetch(`${host}/clients/id/${id}`)
  const responseJson = await response.json()
  console.log('JSON', responseJson)
  return responseJson.data
}

export async function editUserData (id, data) {
  const response = await fetch(`${host}/clients/id/${id}`, {
    method : 'PUT',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  })
  const responseJson = await response.json()
  return responseJson
}


//LAWYERS

export async function setCurrentLawyer (token) {
  const response = await fetch(`${host}/abogados/tkn/${token}`)
  const responseJson = response.json()
  console.log(responseJson)
}