/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package webService;

import com.google.gson.Gson;
import ec.edu.espe.student.control.MongoDbManager;
import ec.edu.espe.student.model.student;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author avand
 */
@Path("student")
public class studentResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of studentResource
     */
    public studentResource() {
    }

    /**
     * Retrieves representation of an instance of webService.studentResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of studentResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
        
       Gson gson = new Gson();
       MongoDbManager db = new MongoDbManager();
       student stu = gson.fromJson(content, student.class);
       db.insert(stu);
    }
}
