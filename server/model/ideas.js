import { DataTypes } from 'sequelize'

const Ideas = sequelize => {
  const Schema = {
    idea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    req_sum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  return sequelize.define('ideas', Schema)
}

export default Ideas
