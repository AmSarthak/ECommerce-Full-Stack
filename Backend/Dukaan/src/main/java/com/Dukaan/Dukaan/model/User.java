package com.Dukaan.Dukaan.model;

import lombok.Data;

@Data
public class User {
    
    private String username;
    private String password;
    private int id;

    public User() {}

    public User(int id, String username, String password){
        this.username = username;
        this.password = password;
        this.id = id;
    }
    @Override
    public String toString() {
        return "user{id=" + id + ", name='" + username + "'}";
    }
    
}
