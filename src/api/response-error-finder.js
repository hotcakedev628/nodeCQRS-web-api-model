function checkForError(res, err) {
    if(err.name){
        switch (err.name) {
            case 'CastError':
                return res.status(400).json({ error: 'This id is not identifiable' })
        case'ValidationError' :
            if(err.isJoi) return res.status(422).json({ errors: err.details })
            else return res.status(400).json({error: 'A problem occurred while dealing with the database'})
        }
    }
    
    return res.status(500).json({ error: err.message })
}

module.exports = {checkForError}