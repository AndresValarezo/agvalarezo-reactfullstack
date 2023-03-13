/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.hardwarestore.utils;

import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import ec.edu.espe.hardwarestore.model.Item;
import java.util.ArrayList;
import org.bson.Document;

/**
 *
 * @author yulia
 */
public class DBManager {

    MongoDatabase baseDatos;
    BasicDBObject document = new BasicDBObject();
    MongoCollection<Document> collection;
    MongoClient mongo;
    String nameCollection;
    Gson gson = new Gson();

    public DBManager() {
        try {
            String data;
            data = "mongodb+srv://Yulli:1234Yuli1234@cluster0.v3hu7lx.mongodb.net/test";
            MongoClientURI uri;
            uri = new MongoClientURI(data);
            mongo = new MongoClient(uri);
            baseDatos = mongo.getDatabase("hardwareStore");
            collection = baseDatos.getCollection("items");
            System.out.println("Conection to database sucessfully");
        } catch (Exception e) {
            System.out.println("Cannnot conect with database");
        }
    }

    public void insert(Item product) {
        Document doc = new Document();
        doc.append("idItem", product.getIdItem());
        doc.append("name", product.getName());
        doc.append("itemBrand", product.getItemBrand());
        doc.append("description", product.getDescription());
        doc.append("price", product.getPrice());
        doc.append("inStock", product.getInStock());
        collection.insertOne(doc);
        mongo.close();
    }

    public Item retrieve(int id) {
        Item item;
        MongoCursor<Document> resultDocument = collection.find().iterator();
        int idItem;
        String name;
        String itemBrand;
        String description;
        double price;
        int inStock;
        Item itemRetrieved = null;
        while (resultDocument.hasNext()) {
            Document theObj = resultDocument.next();
            idItem = Integer.parseInt(gson.toJson(theObj.get("idItem")));
            name = gson.toJson(theObj.get("name")).replace("\"", "");
            itemBrand = gson.toJson(theObj.get("itemBrand")).replace("\"", "");
            description = gson.toJson(theObj.get("description")).replace("\"", "");
            price = Double.valueOf(gson.toJson(theObj.get("price")));
            inStock = Integer.valueOf(gson.toJson(theObj.get("inStock")));
            item = new Item(idItem, name, itemBrand, description, price, inStock);
            if (id == item.getIdItem()) {
                itemRetrieved = item;
            }
        }
        return itemRetrieved;
    }

    public ArrayList<Item> retrieveBuildings() {
        ArrayList<Item> buildings = new ArrayList<>();
        MongoCursor<Document> resultDocument = collection.find().iterator();
        int idItem;
        String name;
        String itemBrand;
        String description;
        double price;
        int inStock;
        Item building;
        while (resultDocument.hasNext()) {
            Document theObj = resultDocument.next();
            idItem = Integer.parseInt(gson.toJson(theObj.get("idItem")));
            name = gson.toJson(theObj.get("name")).replace("\"", "");
            itemBrand = gson.toJson(theObj.get("itemBrand")).replace("\"", "");
            description = gson.toJson(theObj.get("description")).replace("\"", "");
            price = Double.valueOf(gson.toJson(theObj.get("price")));
            inStock = Integer.valueOf(gson.toJson(theObj.get("inStock")));
            building = new Item(idItem, name, itemBrand, description, price, inStock);
            buildings.add(building);
        }
        return buildings;
    }

    public Document generateDocument(Item item) {
        Document admin;
        admin = new Document("idItem", item.getIdItem());
        admin.append("name", item.getName());
        admin.append("itemBrand", item.getItemBrand());
        admin.append("description", item.getDescription());
        admin.append("price", item.getPrice());
        admin.append("inStock", item.getInStock());
        return admin;
    }

    public void delete(Item item) {

        Document findDocument = generateDocument(item);
        collection.findOneAndDelete(findDocument);
    }

    public void update(Item oldItem, Item newItem) {
        //Item oldInstructor = this.retrieve(id);
        Document findDocument = generateDocument(oldItem);
        Document updateDocument = generateDocument(newItem);
        Document itemUpdate = new Document("$set", updateDocument);
        collection.updateOne(findDocument,itemUpdate);
        //return newItem;
    }
}
