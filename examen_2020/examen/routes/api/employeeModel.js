var ObjectID = require('mongodb').ObjectID;







function employeeModel(db){
  var lib = {};
  var empColl = db.collection('employees');
  lib.getEmployees = (handler)=>{

    empColl.find({}).toArray(handler);
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {

      var query = { "_id": new ObjectID(id) };
      empColl.findOne(
        query,
        (err, doc) => {
          if (err) {
            return handler(err, null);
          }
          return handler(null, employees);
        }
      ); //findOne
    }
    // implementar
    // Obtener un Documento solo mostrar
    // email, phone, name y age
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {

    var query = { "company": new ObjectID(company) };
      empColl.findOne(
        query,
        (err, doc) => {
          if (err) {
            return handler(err, null);
          }
          return handler(null, employees);
        }
      ); 
    }
    // implementar
    // solo mostrar name, email, company
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    //implementar
    // obtener todos los documentos que contenga 
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    //Implementar
    //Se requiere eliminar un documento de la colección
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
