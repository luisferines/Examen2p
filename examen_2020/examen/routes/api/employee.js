var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

      router.get('/users/all', (req, res)=>{
    empModel.getEmployees((err, employees)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(employees);
    });
} );
   
   
   

router.get('/byid/:id',(req, res)=>{
  var id =  req.params.id ;
  empModel.getEmployeesById(id, (err, employees)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(employees);
  });// getBYId
});

   

router.get('/bycompany/:company',(req, res)=>{
  var company =  req.params.company ;
  lib.getEmployeesByCompany = (company, handler) => {
    empModel.(company, (err, employees)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(employees);
  });// getBYcompany


   
    

  router.delete('/delete/:id', (req, res)=>{
    var id = req.params.id;
    empModel.removeEmployee(id, (err, deletedDoc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(deletedDoc);
    }); //  deleteByCode
  });//delete
  






  
  return router;
}

module.exports = initEmployee;
