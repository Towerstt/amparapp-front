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