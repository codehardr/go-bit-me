import express from 'express'
import db from '../database/connect.js'
// import { salonsValidator } from '../middleware/validate.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const donations = await db.donations.findAll()
    res.json(donations)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

router.post('/new', async (req, res) => {
  try {
    await db.donations.create(req.body)
    res.send('New donation successfully added')
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error x_x')
  }
})

router.put('/edit/:id', async (req, res) => {
  try {
    const donation = await db.donations.findByPk(req.params.id)
    await donation.update(req.body)
    res.send('Donation successfully updated')
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const donation = await db.donations.findByPk(req.params.id)
    await donation.destroy()
    res.send('Donation successfully removed')
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

export default router
