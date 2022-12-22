const handler = (req, res) => {
    
    if (req.method === 'POST') {
        return res.status(201).json({ hola: 'mundo' })
    }
    return res.status(200).json({
        error: 'El metodo no existe'
    })
}

export default handler;