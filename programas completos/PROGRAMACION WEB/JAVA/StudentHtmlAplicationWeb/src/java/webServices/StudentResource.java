/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package webServices;

import com.google.gson.Gson;
import ec.edu.espe.student.control.MongoDbManager;
import ec.edu.espe.student.model.student;
import java.util.ArrayList;
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
 * @author avand
 */
@Path("student")
public class StudentResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of StudentResource
     */
    public StudentResource() {
    }

    /**
     * Retrieves representation of an instance of webServices.StudentResource
     * @param id
     * @return an instance of java.lang.String
     */
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public student getJson(@PathParam("id")int id) {
    Gson gson = new Gson();
    //String stringID =  Integer.toString(id);
    String stringInstructor = MongoDbManager.find(id);  
    student std = gson.fromJson(stringInstructor, student.class);
    return std;
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateJson(@PathParam("id")int id, student content) {
        Gson gson = new Gson();
        if("null".equals(MongoDbManager.find(id))){
            return Response.status(Response.Status.NOT_FOUND).entity( "Entity not found for ID: " + id ).build();
        }
        content.setId(id);
        String stringInstructor = gson.toJson(content);
        MongoDbManager.replace(id,stringInstructor);
        return Response.status(Response.Status.OK).entity("Entity updated for ID: " + id ).build();
    }
       
    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteJson(@PathParam("id")int id) {
        if("null".equals(MongoDbManager.find(id))){
            return Response.status(Response.Status.NOT_FOUND).entity( "Entity not found for ID: " + id ).build();
        }
        MongoDbManager.delete(id);
        return Response.status(Response.Status.OK).entity("Entity updated for ID: " + id ).build();
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON) 
    public ArrayList<student> getAllJson() {
        Gson gson = new Gson();
        ArrayList<String> studentStringList = MongoDbManager.findAll();
        ArrayList<student> studentList = new ArrayList<>();
        student std = new student();
        for(String stringInstructor : studentStringList){
            std = gson.fromJson(stringInstructor,student.class);
            studentList.add(std);
        }
        return studentList;
    }
            
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public student postJson(student content) {
        Gson gson = new Gson();
        String stringInstructor = gson.toJson(content);
        MongoDbManager.save(stringInstructor);
        return content;
    }

}
