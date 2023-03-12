/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.people.model;

/**
 *
 * @author avand
 */
public class Person {
    private String name;
    private String lastname;
    private int Id;
    private String phone;

    public Person() {
        this.name = "";
        this.lastname = "";
        this.Id = 0;
        this.phone = "";
    }

    public Person(String name, String lastname, int Id, String phone) {
        this.name = name;
        this.lastname = lastname;
        this.Id = Id;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getId() {
        return Id;
    }

    public void setId(int Id) {
        this.Id = Id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    
    
    
    
}
