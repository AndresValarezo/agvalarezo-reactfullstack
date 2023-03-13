package ec.edu.espe.ex.model;

import java.util.Date;

/**
 *
 * @author Elkin Vera
 */
public class Employee {
    
    private int id;
    private String name;
    private String direction;
    private String email;
    private String lastWorks;
    private Date bornDate;

    public Employee() {
        
    }

    public Employee(int id, String name, String direction, String email, String lastWorks, Date bornDate) {
        this.id = id;
        this.name = name;
        this.direction = direction;
        this.email = email;
        this.lastWorks = lastWorks;
        this.bornDate = bornDate;
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

    public String getDirection() {
        return direction;
    }
    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getLastWorks() {
        return lastWorks;
    }
    public void setLastWorks(String lastWorks) {
        this.lastWorks = lastWorks;
    }

    public Date getBornDate() {
        return bornDate;
    }
    public void setBornDate(Date bornDate) {
        this.bornDate = bornDate;
    }

}
