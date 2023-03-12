/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.student.control;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import ec.edu.espe.student.model.student;

/**
 *
 * @author avand
 */
public class MongoDbManager {
    private MongoClientURI mongoURI;
    private MongoClient client;
    private DB database;
    private DBCollection collection;
    
    public  MongoDbManager() {
        mongoURI = new MongoClientURI(
                "mongodb+srv://admin:1234@cluster0.yxwn5.mongodb.net/?retryWrites=true&w=majority");
        client = new MongoClient(mongoURI);
        database = client.getDB("studentsDb");
        collection = database.getCollection("students");
    }

    public String search(int idGame) {
       
        String videogame = "";
        BasicDBObject busqueda = new BasicDBObject();
        busqueda.put("id",idGame);
        DBCursor cursor = collection.find(busqueda);
        if (cursor.hasNext()) {
           while(cursor.hasNext()){
            videogame += cursor.next();
            }
        }
        return videogame;
    }

        public String find() {
       
        String videogame = "";
        DBCursor cursor = collection.find();
        
           while(cursor.hasNext()){
            videogame += cursor.next();
            }
        
        return videogame;
    }
        
        public void insert( student std)
        {
            BasicDBObject studentDb = new BasicDBObject();
            studentDb.append("id", std.getId());
            studentDb.append("name", std.getName());
            studentDb.append("lastName", std.getLastName());
            studentDb.append("career", std.getCareer());

            collection.insert(studentDb);
        }
}
