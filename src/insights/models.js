import { sequelize } from './database'
import { DataTypes } from 'sequelize'

export const Item = sequelize.define('items', {
  guid: DataTypes.STRING,
  title: DataTypes.STRING,
  categories: DataTypes.STRING,
  pubDate: DataTypes.DATE,
  description: DataTypes.TEXT,
  url: DataTypes.STRING
})


