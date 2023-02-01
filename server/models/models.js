const sequelize = require("../db")
const { DataTypes } = require("sequelize")

const Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

// const Requests = sequelize.define('requests', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// })

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
})

const Status = sequelize.define('status', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titleStatus: { type: DataTypes.STRING, unique: true, allowNull: false }
})
const User_request = sequelize.define('user_request',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
},{
    timestamps:false,
})

Users.belongsToMany(Request, { through: User_request })
Request.belongsToMany(Users, { through: User_request })



//https://habr.com/ru/post/566036/#%D0%B0%D1%81%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D1%86%D0%B8%D0%B8


Request.belongsTo(Categorys, { onDelete: "cascade", as: "Categorys" })

Request.belongsTo(Status, { onDelete: "cascade", as: "Status" })


module.exports = {
    Users,
    Request,
    Categorys,
    Status
}

