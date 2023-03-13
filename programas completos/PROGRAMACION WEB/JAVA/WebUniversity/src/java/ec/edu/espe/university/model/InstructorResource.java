/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package ec.edu.espe.university.model;

import com.google.gson.Gson;
import ec.edu.espe.university.utils.MongoManager;
import java.util.ArrayList;
import java.util.Set;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author Christopher Yépez
 */
@Path("instructor")
public class InstructorResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of InstructorResource
     */
    public InstructorResource() {
    }

    /**
     * Retrieves representation of an instance of ec.edu.espe.university.model.InstructorResource
     * @param id
     * @return an instance of ec.edu.espe.university.model.Instructor
     */

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Instructor getJson(@PathParam("id")int id) {
    Gson gson = new Gson();
    //String stringID =  Integer.toString(id);
    String stringInstructor = MongoManager.find(id);  
    Instructor instructor = gson.fromJson(stringInstructor, Instructor.class);
    return instructor;
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateJson(@PathParam("id")int id, Instructor content) {
        Gson gson = new Gson();
        if("null".equals(MongoManager.find(id))){
            return Response.status(Response.Status.NOT_FOUND).entity( "Entity not found for ID: " + id ).build();
        }
        content.setId(id);
        String stringInstructor = gson.toJson(content);
        MongoManager.replace(id,stringInstructor);
        return Response.status(Response.Status.OK).entity("Entity updated for ID: " + id ).build();
    }
       
    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteJson(@PathParam("id")int id) {
        if("null".equals(MongoManager.find(id))){
            return Response.status(Response.Status.NOT_FOUND).entity( "Entity not found for ID: " + id ).build();
        }
        MongoManager.delete(id);
        return Response.status(Response.Status.OK).entity("Entity updated for ID: " + id ).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON) 
    public ArrayList<Instructor> getAllJson() {
        Gson gson = new Gson();
        ArrayList<String> instructorStringList = MongoManager.findAll();
        ArrayList<Instructor> instructorList = new ArrayList<>();
        Instructor instructor = new Instructor();
        for(String stringInstructor : instructorStringList){
            instructor = gson.fromJson(stringInstructor,Instructor.class);
            instructorList.add(instructor);
        }
        return instructorList;
    }
            
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Instructor postJson(Instructor content) {
        Gson gson = new Gson();
        String stringInstructor = gson.toJson(content);
        MongoManager.save(stringInstructor);
        return content;
    }


}
