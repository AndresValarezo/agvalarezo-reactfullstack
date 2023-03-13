/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ec.traffic;

import org.bson.Document;

/**
 *
 * @author SEBAS
 */
public class Traffic {

    static void insertOne(Document data) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    private int kilometers;
    private String trafficLight;
    private String trafficPrevent;
    private String trafficRestriccion;
    private String trafficInformation;
    private String trafficIdentification;
    private String trafficRecomendation;
    private String trafficTourist;

    public Traffic() {
        kilometers=0;
      trafficLight="";
   trafficPrevent="";
    trafficRestriccion="";
    trafficInformation="";
    trafficIdentification="";
    trafficRecomendation="";
   trafficTourist="";
    }

    public Traffic(int kilometers, String trafficLight, String trafficPrevent, String trafficRestriccion, String trafficInformation, String trafficIdentification, String trafficRecomendation, String trafficTourist) {
        this.kilometers = kilometers;
        this.trafficLight = trafficLight;
        this.trafficPrevent = trafficPrevent;
        this.trafficRestriccion = trafficRestriccion;
        this.trafficInformation = trafficInformation;
        this.trafficIdentification = trafficIdentification;
        this.trafficRecomendation = trafficRecomendation;
        this.trafficTourist = trafficTourist;
    }

    public int getKilometers() {
        return kilometers;
    }

    public void setKilometers(int kilometers) {
        this.kilometers = kilometers;
    }

    public String getTrafficLight() {
        return trafficLight;
    }

    public void setTrafficLight(String trafficLight) {
        this.trafficLight = trafficLight;
    }

    public String getTrafficPrevent() {
        return trafficPrevent;
    }

    public void setTrafficPrevent(String trafficPrevent) {
        this.trafficPrevent = trafficPrevent;
    }

    public String getTrafficRestriccion() {
        return trafficRestriccion;
    }

    public void setTrafficRestriccion(String trafficRestriccion) {
        this.trafficRestriccion = trafficRestriccion;
    }

    public String getTrafficInformation() {
        return trafficInformation;
    }

    public void setTrafficInformation(String trafficInformation) {
        this.trafficInformation = trafficInformation;
    }

    public String getTrafficIdentification() {
        return trafficIdentification;
    }

    public void setTrafficIdentification(String trafficIdentification) {
        this.trafficIdentification = trafficIdentification;
    }

    public String getTrafficRecomendation() {
        return trafficRecomendation;
    }

    public void setTrafficRecomendation(String trafficRecomendation) {
        this.trafficRecomendation = trafficRecomendation;
    }

    public String getTrafficTourist() {
        return trafficTourist;
    }

    public void setTrafficTourist(String trafficTourist) {
        this.trafficTourist = trafficTourist;
    }

   
}
