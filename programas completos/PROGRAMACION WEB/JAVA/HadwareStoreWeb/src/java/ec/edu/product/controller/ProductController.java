/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.product.controller;
import com.google.gson.Gson;
import ec.edu.espe.product.utils.MongoDbManager;
import ec.edu.product.model.Product;
import java.util.ArrayList;

/**
 *
 * @author avand
 */
public abstract class ProductController {
    
    public static void insertDB(Product product)
    {
        Gson gson = new Gson();
        String stringProduct = gson.toJson(product);
        MongoDbManager.save(stringProduct);
        
    }
    
    public static String modifyDB(int id, Product content){
        Gson gson = new Gson();
         if("null".equals(MongoDbManager.find(id))){
            return "Product not found with this id: " + id ;
        }
         else{
        content.setIdItem(id);
        String stringProduct = gson.toJson(content);
        MongoDbManager.replace(id,stringProduct);
             return "Product updated  by this id: " + id;
         }
    }
    
    public static String deleteDB(int id)
    {
        if("null".equals(MongoDbManager.find(id))){
            return"Product not found for ID: " + id ;
        }
        else{
            MongoDbManager.delete(id);
            return "Product deleted succesfully for ID: " + id;
        }
    }
    
    public static ArrayList<Product> showDB()
    {
        Gson gson = new Gson();
        ArrayList<String> productStringList = MongoDbManager.findAll();
        ArrayList<Product> productList = new ArrayList<>();
        Product std = new Product();
        for(String stringProduct : productStringList){
            std = gson.fromJson(stringProduct,Product.class);
            productList.add(std);
        }
        return productList;
    }
    
    public static Product getObjectDB(int id)
    {
        Gson gson = new Gson();
        String stringInstructor = MongoDbManager.find(id);  
        Product std = gson.fromJson(stringInstructor, Product.class);
        return std;
    }
    
    
}
