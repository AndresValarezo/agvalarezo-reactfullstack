/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.product.model;

/**
 *
 * @author avand
 */
public class Product {
    private int idItem;
    private String name;
    private String itemBrand;
    private String description;
    private double price;
    private int inStock;

    public Product(int idItem, String name, String itemBrand, String description, double price, int inStock) {
        this.idItem = idItem;
        this.name = name;
        this.itemBrand = itemBrand;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
    }

    public Product() {
        this.idItem = 0;
        this.name = "";
        this.itemBrand = "";
        this.description = "";
        this.price = 0.0F;
        this.inStock = 0;
    }

    public int getIdItem() {
        return idItem;
    }

    public void setIdItem(int idItem) {
        this.idItem = idItem;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getItemBrand() {
        return itemBrand;
    }

    public void setItemBrand(String itemBrand) {
        this.itemBrand = itemBrand;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getInStock() {
        return inStock;
    }

    public void setInStock(int inStock) {
        this.inStock = inStock;
    }
    
    
    
}
