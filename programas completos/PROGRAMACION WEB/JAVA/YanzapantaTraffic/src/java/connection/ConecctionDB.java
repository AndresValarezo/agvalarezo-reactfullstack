package connection;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


import com.mongodb.ConnectionString;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

/**
 *
 * @author SEBAS
 */
public class ConecctionDB {
    
ConnectionString connectionString = new ConnectionString("mongodb+srv://edison19:admin@clusterawd.rbj5oin.mongodb.net/test");
MongoClientSettings settings = MongoClientSettings.builder()
        .applyConnectionString(connectionString)
        .build();
    com.mongodb.client.MongoClient mongoClient = MongoClients.create(settings);
MongoDatabase database = mongoClient.getDatabase("AWD5119");

public MongoDatabase getDb(){
    return database;
}
}
