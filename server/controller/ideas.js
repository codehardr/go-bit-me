import express from 'express'
import db from '../database/connect.js'
import upload from '../middleware/multer.js'
// import { workersValidator } from '../middleware/validate.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const ideas = await db.ideas.findAll()
    res.json(ideas)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

router.post('/new', upload.single('photo'), async (req, res) => {
  try {
    req.body.photo = '/uploads/' + req.file.filename
    await db.ideas.create(req.body)
    res.send('New idea successfully added')
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

router.put('/edit/:id', upload.single('photo'), async (req, res) => {
  try {
    if (req.file) req.body.photo = '/uploads/' + req.file.filename
    const idea = await db.ideas.findByPk(req.params.id)
    await idea.update(req.body)
    res.send('Idea successfully updated')
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const idea = await db.ideas.findByPk(req.params.id)
    await idea.destroy()
    res.send('Idea successfully removed')
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

export default router
