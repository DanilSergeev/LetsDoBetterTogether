const sequelize = require("../db")
const { DataTypes } = require("sequelize")

const Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Requests = sequelize.define('requests', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Request = sequelize.define('request', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.INTEGER, allowNull: false },
    file: { type: DataTypes.STRING, allowNull: false, defaultValue: "noimage.jpg" },
})

const Categorys = sequelize.define('categorys', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false }
})


Users.hasMany(Requests)
Requests.belongsTo(Users)

Request.hasMany(Requests)
Requests.belongsTo(Request)

// Request.hasOne(Categorys)
// Categorys.belongsTo(Request)


module.exports = {
    Users,
    Request,
    Categorys,
}




