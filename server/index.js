import express from 'express'
import cors from 'cors'
import session from 'express-session'

// [CONTROLLERI┼▓ IMPORTAI]
import { Users, Ideas, Donations } from './controller/index.js'

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/uploads', express.static('uploads'))

app.use(cors())

app.set('trust proxy', 1)

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 600000 },
  })
)

// [CONTROLLERI┼▓ PRISKYRIMAI]
app.use('/api/users/', Users)
app.use('/api/ideas/', Ideas)
app.use('/api/donations/', Donations)

app.listen(process.env.PORT || 3000)
