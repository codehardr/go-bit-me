import { DataTypes } from 'sequelize'

const Donations = sequelize => {
  const Schema = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
  return sequelize.define('donations', Schema)
}

export default Donations
