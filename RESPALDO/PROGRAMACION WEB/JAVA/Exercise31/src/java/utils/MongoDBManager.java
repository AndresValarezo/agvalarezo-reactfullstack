package utils;

import com.mongodb.ConnectionString;
import com.mongodb.client.MongoClient;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.BasicDBObject;
import com.mongodb.MongoClientURI;
import com.mongodb.client.model.Filters;
import ec.edu.espe.ex.model.Employee;
import org.bson.Document;


/**
 *
 * @author Elkin Vera
 */
public class MongoDBManager extends DBManager{

    private MongoCollection<Document> collection;
    String connectionString = "mongodb+srv://ElkinVeraCadena:David044_vera@dbclusterawd.guopt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    
    @Override
    public boolean insert(Employee employee) {
        try(MongoClient mongoClient = MongoClients.create(connectionString)){
            collection = mongoClient.getDatabase("Enterprise").getCollection("Employees");
            Document documentEmployee = new Document("ID", employee.getId()).append("Name", employee.getName()).append("Direction", employee.getDirection()).append("Email", employee.getEmail())
                .append("Last works", employee.getLastWorks()).append("Born date", employee.getBornDate());
            collection.insertOne(documentEmployee);
            
            return true;
            
        }
    }
}
