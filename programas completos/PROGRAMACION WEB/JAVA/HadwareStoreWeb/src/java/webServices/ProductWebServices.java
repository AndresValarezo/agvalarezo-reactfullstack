/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package webServices;

import com.google.gson.Gson;
import ec.edu.espe.product.utils.MongoDbManager;
import ec.edu.product.controller.ProductController;
import ec.edu.product.model.Product;
import java.util.ArrayList;
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


/**
 * REST Web Service
 *
 * @author avand
 */
@Path("product")
public class ProductWebServices {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ProductWebServices
     */
    public ProductWebServices() {
    }
    
    
   
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Product insertItem(Product product) {
        ProductController.insertDB(product);
        return product;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Product getItem(@PathParam("id") int id) {
        return ProductController.getObjectDB(id);
    }

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public ArrayList<Product> getItems() {
        return ProductController.showDB();
    }

    /**
     * PUT method for updating or creating an instance of ItemResource
     *
     * @param id
     * @param content representation for the resource
     * @return 
     */
    @PUT
    @Path("/update/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String putJson(@PathParam("id")int id,Product content) {
        return ProductController.modifyDB(id, content);
    }
    
    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public String deleteItem(@PathParam("id")int id) {
        return ProductController.deleteDB(id);
    }
  
}
