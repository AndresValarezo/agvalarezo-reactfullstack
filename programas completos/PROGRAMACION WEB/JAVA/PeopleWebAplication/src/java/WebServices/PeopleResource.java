/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package WebServices;

import com.google.gson.Gson;
import ec.edu.espe.people.model.Person;
import ec.edu.espe.student.control.MongoDbManager;
import java.util.ArrayList;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author avand
 */
@Path("people")
public class PeopleResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PeopleResource
     */
    public PeopleResource() {
    }

    /**
     * Retrieves representation of an instance of WebServices.PeopleResource
     * @param id
     * @return an instance of java.lang.String
     */
    @GET
    @Path("{idPerson}")
    @Produces(MediaType.APPLICATION_JSON)
    public Person getPerson(@PathParam("idPerson")int id) {
    Gson gson = new Gson();
    //String stringID =  Integer.toString(id);
    String stringInstructor = MongoDbManager.find(id);  
    Person std = gson.fromJson(stringInstructor, Person.class);
    return std;
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON) 
    public ArrayList<Person> getAllPersons() {
        Gson gson = new Gson();
        ArrayList<String> studentStringList = MongoDbManager.findAll();
        ArrayList<Person> studentList = new ArrayList<>();
        Person std = new Person();
        for(String stringInstructor : studentStringList){
            std = gson.fromJson(stringInstructor,Person.class);
            studentList.add(std);
        }
        return studentList;
    }
    /**
     * PUT method for updating or creating an instance of PeopleResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Person postJson(Person content) {
        Gson gson = new Gson();
        String stringInstructor = gson.toJson(content);
        MongoDbManager.save(stringInstructor);
        return content;
    }
}
