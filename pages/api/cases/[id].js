export default function handler(req, res) {
    const id = req.query.id
    const body = req.body
    if (req.method === 'GET'){
        res.status(200).json(data.User)
    }
    else if (req.method === 'PUT'){
        
        res.status(200).json(data.User)
    }
    else{
        res.status(400)
    }
  }
  