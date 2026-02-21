package com.Dukaan.Dukaan.model;

public class Items {
    private int id;
    private String title;
    private int price;

    public Items() {}

    public Items(int id , String title , int price){
        this.id = id;
        this.title = title;
        this.price = price;
    }
    @Override
    public String toString() {
        return "Item{id=" + id + ", name='" + title + "'}";
    }
    public int getPrice() {
        return price;
    }
    public int getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
}
