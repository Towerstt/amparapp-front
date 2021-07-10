export default async function handler(req, res) {
    if (req.method === 'POST'){
        
        res.status(200).json(data.user)
    }
    else if (req.method === 'GET'){
        res.status(200).json(data.User)
    }
    else{
        res.status(400)
    }
  }
  