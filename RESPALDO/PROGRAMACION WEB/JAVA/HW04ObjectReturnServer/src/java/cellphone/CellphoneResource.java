/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package cellphone;

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
@Path("cellphone")
public class CellphoneResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CellphoneResource
     */
    public CellphoneResource() {
    }

    /**
     * Retrieves representation of an instance of cellphone.CellphoneResource
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        String cellphone= "[{\"brand\":\"Samsung Galaxy\",\"model\":\"A-50\",\"frontalCamera\":\"25.0 MP\",\"memory\":\"128 GB\", \"number\":\"0999585135\"}" 
                         +",{\"brand\":\"Samsung Galaxy\",\"model\":\"S21+\",\"frontalCamera\":\"10.0 MP\",\"memory\":\"256 GB\", \"number\":\"0952520890\"}"
                         +",{\"brand\":\"Xiaomi\",\"model\":\"Redmi Note 11\",\"frontalCamera\":\"13 MP\",\"memory\":\"128 GB\", \"number\":\"0952520615\"}"
                         +",{\"brand\":\"iPhone\",\"model\":\"12\",\"frontalCamera\":\"12 MP\",\"memory\":\"128 GB\", \"number\":\"0936160732\"}"
                         +",{\"brand\":\"Samsung Galaxy\",\"model\":\"A-32\",\"frontalCamera\":\"20 MP\",\"memory\":\"128 GB\", \"number\":\"0922895741\"}"
                         +"]";
        return cellphone;
        
    }

    /**
     * PUT method for updating or creating an instance of CellphoneResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
