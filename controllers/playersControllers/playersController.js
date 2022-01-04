import fetch from 'node-fetch';


export const getAllPlayers = async (req, res, next) => {
    try {
        const response = await fetch('https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json')
        const data = await response.json()
        const players = data.players.sort((a,b) => a.data.rank - b.data.rank)
        return res.send({players})
    } 
    catch(err) {
        return res.status(500).json({err: err.message})
    }
}

export const getPlayerByid = async (req, res, next) => {
    try {
        const response = await fetch('https://latelierssl.blob.core.windows.net/trainingday/TennisStats/headtohead.json')
        const data = await response.json()
        const id = req.params.id * 1
        const resultById = data.players.filter(player => player.id === id)
        return res.send(resultById)
    } 
    catch(err) {
        return res.status(500).json({err: err.message})
    }
}
