/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.edu.espe.videogame.model;

/**
 *
 * @author avand
 */
public class videogame {
    
    private int idGame;
    private String name;
    private String type;
    private String console;

    public videogame() {
        idGame=0;
        name="";
        type="";
        console="";
    }

    public videogame(int idGame, String name, String type, String console) {
        this.idGame = idGame;
        this.name = name;
        this.type = type;
        this.console = console;
    }

    public int getIdGame() {
        return idGame;
    }

    public void setIdGame(int idGame) {
        this.idGame = idGame;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getConsole() {
        return console;
    }

    public void setConsole(String console) {
        this.console = console;
    }
    
    
    
}
