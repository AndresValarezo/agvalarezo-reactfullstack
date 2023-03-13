/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.professor.model;

/**
 *
 * @author avand
 */
public class Professor {
    private String name;
    private String id;
    private String career;
    private String title;
    private String age;
    private String salary;
    private String yearsTeaching;
    private String birthday;

    public Professor() {
        this.name="";
        this.id="";
        this.age="";
        this.career="";
        this.title="";
        this.salary="";
        this.yearsTeaching="";
        this.birthday="";
    }

    public Professor(String name, String id, String career, String title, String age, String salary, String yearsTeaching, String birthday) {
        this.name = name;
        this.id = id;
        this.career = career;
        this.title = title;
        this.age = age;
        this.salary = salary;
        this.yearsTeaching = yearsTeaching;
        this.birthday = birthday;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getYearsTeaching() {
        return yearsTeaching;
    }

    public void setYearsTeaching(String yearsTeaching) {
        this.yearsTeaching = yearsTeaching;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }
    
    
    
    
}
