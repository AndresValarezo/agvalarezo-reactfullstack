package ec.edu.espe.ex.controller;

import ec.edu.espe.ex.model.Employee;
import utils.MongoDBManager;

/**
 *
 * @author Elkin Vera
 */
public class EmployeeController {
    
    public void insertEmployee(Employee employee){
        
        MongoDBManager mongo = new MongoDBManager();
        mongo.insert(employee);
    }
    
}
