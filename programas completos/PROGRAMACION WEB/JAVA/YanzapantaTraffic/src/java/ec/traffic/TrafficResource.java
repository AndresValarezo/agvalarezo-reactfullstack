package ec.traffic;




import com.mongodb.client.MongoCollection;
import connection.ConecctionDB;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import org.bson.Document;

/**
 * REST Web Service
 *
 * @author SEBAS
 */
@Path("Traffic")
public class TrafficResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of TrafficResource
     */
    public TrafficResource() {
    }

    /**
     * Retrieves representation of an instance of ec.edu.traffic.TrafficResource
     * @param kilometer
     * @return an instance of java.lang.String
     */


    
     @GET
    @Path("{kilometer}")
    @Produces(MediaType.APPLICATION_JSON)
    public Traffic getJson(@PathParam("kilometer")int kilometer) {
     
      Traffic tr= new Traffic();
     
     tr.setKilometers(kilometer);
     tr.setTrafficIdentification("pod473");
     tr.setTrafficInformation("hotel");
     tr.setTrafficLight("ligth");
     tr.setTrafficPrevent("stop");
     tr.setTrafficRecomendation("slow");
     tr.setTrafficRestriccion("no enter");
     tr.setTrafficTourist("park");
     
  
   MongoCollection <Document> Traffic = new ConecctionDB().getDb().getCollection("Traffic");
        try{
        Document data= new Document();
        data.put("kilometer",kilometer);
        data.put("identifacion",tr.getTrafficIdentification());
        data.put("information",tr.getTrafficInformation());
        data.put("light",tr.getTrafficLight());
        data.put("prevent",tr.getTrafficPrevent());
        data.put("Recomendation",tr.getTrafficRecomendation());
        data.put("Restricion",tr.getTrafficRestriccion());
        data.put("Tourist",tr.getTrafficTourist());
        Traffic.insertOne(data);
       }catch(Exception err){
            System.out.println("error");
       }
     return tr;
     
    }
   
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
