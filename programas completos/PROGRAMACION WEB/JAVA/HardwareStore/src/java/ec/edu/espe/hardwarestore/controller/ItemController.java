/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.hardwarestore.controller;

import com.google.gson.Gson;
import com.mongodb.client.MongoCursor;
import ec.edu.espe.hardwarestore.model.Item;
import ec.edu.espe.hardwarestore.utils.DBManager;
import java.util.ArrayList;
import javax.ws.rs.core.Response;
import org.bson.Document;

/**
 *
 * @author yulia
 */
public class ItemController {

    public static Response create(String item) {
        DBManager db = new DBManager();
        Gson gson = new Gson();
        Item itemObject = gson.fromJson(item, Item.class);
        int id = itemObject.getIdItem();
        if (db.retrieve(id) == null) {
            db.insert(itemObject);
            return Response.status(200).entity("El articulo con el id " + id + " se registro con exito.").build();
        } else {
            return Response.status(406).entity("El articulo con el id " + id + " ya ha sido registrado.").build();
        }
    }

    public static Response retrieveItem(int id) {
        DBManager db = new DBManager();
        Item item = db.retrieve(id);
        Gson gson = new Gson();
        String itemJson = gson.toJson(item);
        if (item == null) {
            return Response.status(404).entity("El articulo con el id " + id + " no se ha encontrado.").build();
        } else {
            return Response.status(200).entity(itemJson).build();
        }
    }
    
    public static Response retrieve(){
        DBManager db = new DBManager();
        ArrayList<Item> items = db.retrieveBuildings();
        Gson gson = new Gson();
        String itemJson = gson.toJson(items);
        if (items.isEmpty()) {
            return Response.status(404).entity("No hay datos registrados en la base de datos.").build();
        } else {
            return Response.status(200).entity(itemJson).build();
        }
    }
    
    public static Response update(String item){
        DBManager db = new DBManager();
        Gson gson = new Gson();
        Item itemObject = gson.fromJson(item, Item.class);
        int id = itemObject.getIdItem();
        if (db.retrieve(id) != null) {
            db.update(db.retrieve(id), itemObject);
            return Response.status(200).entity("El articulo con el id " + id + " se actualizo con exito.").build();
        } else {
            return Response.status(404).entity("El articulo con el id " + id + " no se encuentra.").build();
        }
    }
    
    public static Response delete(int id){
        DBManager db = new DBManager();
        Item item = db.retrieve(id);
        if (db.retrieve(id) != null) {
            db.delete(item);
            return Response.status(200).entity("El articulo con el id " + id + " se elimino con exito.").build();
        } else {
            return Response.status(404).entity("El articulo con el id " + id + " no se encuentra.").build();
        }
    }
}
