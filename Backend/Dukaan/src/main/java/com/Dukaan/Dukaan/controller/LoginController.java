package com.Dukaan.Dukaan.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Dukaan.Dukaan.Repository.UserRepository;
import com.Dukaan.Dukaan.model.LoginResponse;
import com.Dukaan.Dukaan.model.User;

@RestController
public class LoginController {
    
    private final UserRepository userRepository;

    // public LoginController(){
    //     this.userRepository = null;
    // }

    public LoginController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody User user ) {
        User resopoUser = userRepository.findByusername(user.getUsername());
        if(resopoUser == null){
            return ResponseEntity.badRequest().body(new LoginResponse("User not found", null)); 
        }
        if(resopoUser.getPassword().equals(user.getPassword())){
            resopoUser.setPassword("");
            return ResponseEntity.ok().body(new LoginResponse("Success", resopoUser)); 
        }
        else{
            return ResponseEntity.badRequest().body(new LoginResponse("Invalid Credentials", null));
        }
    }
}

