/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.videogame.control;

import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import ec.edu.espe.videogame.model.videogame;
import java.util.ArrayList;
import javax.swing.text.Document;

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
                "mongodb+srv://edison19:admin@clusterawd.rbj5oin.mongodb.net/?retryWrites=true&w=majority");
        client = new MongoClient(mongoURI);
        database = client.getDB("AWD5119");
        collection = database.getCollection("Videogame");
    }

    public String search(int idGame) {
       
        String movie = "";
        BasicDBObject busqueda = new BasicDBObject();
        busqueda.put("idGame",idGame);
        DBCursor cursor = collection.find(busqueda);
        if (cursor.hasNext()) {
           while(cursor.hasNext()){
            movie += cursor.next();
            }
        }
        return movie;
    }

        public String find(int idGame) {
       
        String movie = "";
        BasicDBObject busqueda = new BasicDBObject();
        busqueda.put("idGame",idGame);
        DBCursor cursor = collection.find();
        
           while(cursor.hasNext()){
            movie += cursor.next();
            }
        
        return movie;
    }
        
        public String read(){
        String movie = "";
        DBCursor cursor = collection.find();
        while(cursor.hasNext()){
            movie += cursor.next();
        }
        return movie;
    }


}
