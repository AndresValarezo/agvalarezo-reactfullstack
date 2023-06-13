package com.example.pruebaparcial.Model;

import android.os.Parcel;
import android.os.Parcelable;

public class Product implements Parcelable {
    private String id;
    private String name;
    private String grate_1;
    private String city;
    private String country;
    private String id_delete;

    public Product() {
        this.id = "";
        this.name= "";
        this.grate_1 = "";
        this.city = "";
        this.country = "";
        this.id_delete = "";
    }

    public Product(String id, String name, String description, String price, String discount, String id_delete)
     {
         this.id = id;
         this.name= name;
         this.grate_1 = description;
         this.city = price;
         this.country = discount;
         this.id_delete = id_delete;
     }

    protected Product(Parcel in) {
        id = in.readString();
        name = in.readString();
        grate_1 = in.readString();
        city = in.readString();
        country = in.readString();
    }

    public static final Creator<Product> CREATOR = new Creator<Product>() {
        @Override
        public Product createFromParcel(Parcel in) {
            return new Product(in);
        }

        @Override
        public Product[] newArray(int size) {
            return new Product[size];
        }
    };

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public String getGrate_1() {
        return grate_1;
    }

    public String getId() {
        return id;
    }



    public String getName() {
        return name;
    }


    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setGrate_1(String grate_1) {
        this.grate_1 = grate_1;
    }

    public void setId_delete(String id_delete) {
        this.id_delete = id_delete;
    }

    public String getId_delete() {
        return id_delete;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeString(id);
        parcel.writeString(name);
        parcel.writeString(grate_1);
        parcel.writeString(city);
        parcel.writeString(country);
    }
}
