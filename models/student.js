'use strict'
module.exports = function (sequelize,DataTypes)
{

var student = sequelize.define('student',{

    student_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    student_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    user_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    student_password:{
    type:DataTypes.STRING,
    allowNull:false
    },

    student_address:{
    type:DataTypes.STRING,
    allowNull:false
    },

    createdAt:{
    type:DataTypes.DATE,
    allowNull:false
    },

    updatedAt:{
    type:DataTypes.DATE,
    allowNull:false}


})
return student;
}