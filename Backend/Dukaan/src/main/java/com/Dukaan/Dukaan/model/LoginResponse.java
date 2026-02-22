package com.Dukaan.Dukaan.model;

import lombok.Data;

@Data
public class LoginResponse {

    private String message;
    private User user;

    public LoginResponse(String message, User user){
        this.message = message;
        this.user  = user;
    }
}
