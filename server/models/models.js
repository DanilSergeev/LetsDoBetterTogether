const sequelize = require("../db")
const { DataTypes } = require("sequelize")

const Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
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
    status: {type: DataTypes.INTEGER, allowNull: false },
    file: { type: DataTypes.STRING, allowNull: false, defaultValue: "noimage.jpg" },
    fileAftar: { type: DataTypes.STRING, allowNull: false, defaultValue: "noimage.jpg" },
})
// status fileAftar
const Categorys = sequelize.define('categorys', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const Status = sequelize.define('status', {//new
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titleStatus: { type: DataTypes.STRING, unique: true, allowNull: false }
})


Users.hasMany(Requests, {as:"RequestsID"})
// Requests.belongsTo(Users)

Request.hasMany(Requests, {as: "RequestsID"})
// Requests.belongsTo(Request)

Categorys.hasOne(Request, {onDelete: "cascade", as: "RequestId", foreignKey:"category"})
Request.belongsTo(Categorys, {as: "Categorys"})

Status.hasOne(Request, {onDelete: "cascade", as: "RequestId", foreignKey:"status"})
Request.belongsTo(Status, {as: "Status"})


module.exports = {
    Users,
    Request,
    Categorys,
    Status
}




// Нужно запросы для Status сделать