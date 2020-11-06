const { Router } = require('express')

const LogEntry = require('../models/LogEntry')

const router = Router()

router.get('/', (req, res) => {
    res.json({
        message: 'momo',
    })
})

router.post('/', async (req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body)
        const createdEntry = await logEntry.save()
        res.json(createdEntry)

        console.log(req.body)

    } catch (error) {
        console.log(error.name)
        if (error.name === 'ValidationError') {
            res.status(422)
        }
        next(error)
    }
})



module.exports = router