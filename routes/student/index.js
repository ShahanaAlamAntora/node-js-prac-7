const route=require('express').Router();
var DB = require("../../models/index");
var sequelize = DB.sequelize;
var studentmodel=sequelize.models.student;

route.get("/",function(req,res)
{
 studentmodel.findAll().then( function(student)
 {
res.send(student);
 }).catch(function(err)
 {
 res.send(err)})
})

route.get("/:id",function(req,res)
{
studentmodel.findOne(
 {where :{student_id : req.params.id}}).then(function(result)
{
res.send(result);
}).catch(function(err)
{
console.log(err);
})
})

route.post("/",function(req,res)
{
payload={};
payload['student_name']=req.body.student_name;
payload['user_name']=req.body.user_name;
payload['student_password']=req.body.student_password;
payload['student_address']=req.body.student_address;


 studentmodel.create(payload).then(function(result)
{
res.send(result);

}).catch(function(err)
{
console.error(err);
res.send(err);
})

})

route.delete("/:id", function(req,res)
{
    studentmodel.destroy(

    {where:{student_id : req.params.id}}).then(function(result)

    {
    res.sendStatus(301);

    }).catch(function(err)
    {
    console.log(err);

    })

})


exports = module.exports =route;