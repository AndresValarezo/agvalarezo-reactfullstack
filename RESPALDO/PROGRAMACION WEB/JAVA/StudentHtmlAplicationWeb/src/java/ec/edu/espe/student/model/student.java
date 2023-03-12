/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.student.model;

/**
 *
 * @author avand
 */
public class student {
    
    private int id;
    private String name;
    private String lastName;
    private String career;

    public student() {
        id=0;
        name="";
        lastName="";
        career="";
    }

    public student(int id, String name, String lastName, String career) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.career = career;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    
    
}
