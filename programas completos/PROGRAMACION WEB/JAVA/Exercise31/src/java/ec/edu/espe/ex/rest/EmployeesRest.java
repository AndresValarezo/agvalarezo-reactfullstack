package ec.edu.espe.rest;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Elkin Vera
 */
@Path("rest")
public class EmployeesRest {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of EmployeesRest
     */
    public EmployeesRest() {
    }

    /**
     * Retrieves representation of an instance of ec.edu.espe.rest.EmployeesRest
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getEmployees() {
        String jsonData;
        
        //read from db and assign it to jsonData
        jsonData = "[  \n" +
                    "{\"name\":\"Ram\", \"name\":\"Ram\", \"email\":\"Ram@gmail.com\"},  \n" +
                    "{\"name\":\"Ram\", \"name\":\"Bob\", \"email\":\"bob32@gmail.com\"}  \n" +
                    "]";
       
        return jsonData;
                
    }
    
    /**
     * Retrieves representation of an instance of ec.edu.espe.rest.EmployeesRest
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{employeeID}")
    public String getEmployee(@PathParam("employeeID") String employeeID) {
        
        String jsonData;
        
        //read from db and assign it to jsonData
        jsonData = "{\"employee\":{\"employeeID\":\"" + employeeID + "\", \"name\":\"Elkin\", \"salary\":\"1000\", \"married\":\"true\"}}";
        
        return jsonData;
                
    }

    /**
     * PUT method for updating or creating an instance of EmployeesRest
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
