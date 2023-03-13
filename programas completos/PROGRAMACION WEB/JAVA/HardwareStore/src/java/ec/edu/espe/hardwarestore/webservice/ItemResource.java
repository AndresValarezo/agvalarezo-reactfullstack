/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package ec.edu.espe.hardwarestore.webservice;

import com.google.gson.Gson;
import ec.edu.espe.hardwarestore.controller.ItemController;
import ec.edu.espe.hardwarestore.utils.DBManager;
import ec.edu.espe.hardwarestore.model.Item;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
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
 * @author yulia
 */
@Path("item")
public class ItemResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ItemResource
     */
    public ItemResource() {
    }

    /**
     * Retrieves representation of an instance of
     * ec.edu.espe.hardwarestore.webservice.ItemResource
     *
     * @return an instance of ec.edu.espe.hardwarestore.model.Item
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertItem(String item) {
        return ItemController.create(item);
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getItem(@PathParam("id") int id) {
        return ItemController.retrieveItem(id);
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getItems() {
        return ItemController.retrieve();
    }

    /**
     * PUT method for updating or creating an instance of ItemResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Path("/update")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response putJson(String content) {
        return ItemController.update(content);
    }
    
    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteItem(@PathParam("id")int id) {
        return ItemController.delete(id);
    }
}
