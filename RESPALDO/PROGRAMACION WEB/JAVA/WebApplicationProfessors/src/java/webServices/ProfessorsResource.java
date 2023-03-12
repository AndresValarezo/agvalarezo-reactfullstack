/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package webServices;

import com.google.gson.Gson;
import ec.edu.espe.professor.model.Professor;
import ec.edu.espe.professor.control.MongoDbManager;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author avand
 */
@Path("professors")
public class ProfessorsResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ProfessorsResource
     */
    public ProfessorsResource() {
    }

    /**
     * Retrieves representation of an instance of webServices.ProfessorsResource
     * @param id
     * @return an instance of java.lang.String
     */
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Professor getJson(@PathParam("id")String id) {
    Gson gson = new Gson();
    String stringInstructor = MongoDbManager.find(id);  
    Professor std = gson.fromJson(stringInstructor, Professor.class);
    return std;
    }
     @GET
    @Produces(MediaType.APPLICATION_JSON) 
    public ArrayList<Professor> getAllJson() {
        Gson gson = new Gson();
        ArrayList<String> professorStringList = MongoDbManager.findAll();
        ArrayList<Professor> professorList = new ArrayList<>();
        Professor std = new Professor();
        for(String stringInstructor : professorStringList){
            std = gson.fromJson(stringInstructor,Professor.class);
            professorList.add(std);
        }
        return professorList;
    }
    

    /**
     * PUT method for updating or creating an instance of ProfessorsResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
