import { Sequelize } from 'sequelize'
import mysql from 'mysql2/promise'

// [MODELIŲ IMPORTAI]
import { Users, Ideas, Donations } from '../model/index.js'

const database = {}

const credentials = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'go_bit_me', // enter database name!
}

try {
  const connection = await mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.password,
  })

  await connection.query('CREATE DATABASE IF NOT EXISTS ' + credentials.database)

  const sequelize = new Sequelize(credentials.database, credentials.user, credentials.password, {
    dialect: 'mysql',
  })

  // [MODELIŲ PRISKYRIMAI IR RELIACIJOS]
  database.users = Users(sequelize)
  database.ideas = Ideas(sequelize)
  database.donations = Donations(sequelize)

  database.users.hasMany(database.ideas)
  database.ideas.belongsTo(database.users)

  database.users.hasMany(database.donations)
  database.donations.belongsTo(database.users)

  database.ideas.hasMany(database.donations)
  database.donations.belongsTo(database.ideas)

  await sequelize.sync({ alter: false })
} catch {
  console.log('Database connection failed')
}

export default database
