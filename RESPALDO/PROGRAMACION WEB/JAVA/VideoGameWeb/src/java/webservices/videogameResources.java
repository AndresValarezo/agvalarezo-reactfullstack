/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package webservices;

import com.google.gson.Gson;
import ec.edu.espe.videogame.control.MongoDbManager;
import ec.edu.espe.videogame.model.videogame;
import java.text.ParseException;
import java.util.ArrayList;
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
 * @author avand
 */
@Path("videogame")
public class videogameResources {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of videogameResources
     */
    public videogameResources() {
    }

    /**
     * Retrieves representation of an instance of webservices.videogameResources
     * @param idGame
     * @return an instance of java.lang.String
     */
    @GET
    @Path("{idGame}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson(@PathParam("idGame") int idGame) {
        //TODO return proper representation object
        Gson gson = new Gson();
       MongoDbManager db = new MongoDbManager();
       
       String vgame=db.search(idGame);
       videogame videogame = gson.fromJson(vgame, videogame.class);
        
        
        return vgame;
    }

    /**
     * PUT method for updating or creating an instance of videogameResources
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
