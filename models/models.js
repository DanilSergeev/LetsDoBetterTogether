const sequelize = require("../db")
const { DataTypes } = require("sequelize")

const Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
},{timestamps:false})

const Request = sequelize.define('request', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT('long'), allowNull: false },
    file: { type: DataTypes.STRING, allowNull: false, defaultValue: "noimage.jpg" },
    fileAftar: { type: DataTypes.STRING, defaultValue: "noimage.jpg" },
})
const Categorys = sequelize.define('categorys', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false }
},{timestamps:false})

const Status = sequelize.define('status', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titleStatus: { type: DataTypes.STRING, unique: true, allowNull: false }
},{timestamps:false})


Users.hasMany(Request)
Request.belongsTo(Users, { onDelete: "cascade", as: "user" })


Request.belongsTo(Categorys, { onDelete: "cascade", as: "Categorys" })

Request.belongsTo(Status, { onDelete: "cascade", as: "Status" })


module.exports = {
    Users,
    Request,
    Categorys,
    Status
}

