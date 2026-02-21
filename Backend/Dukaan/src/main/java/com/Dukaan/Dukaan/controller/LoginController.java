package com.Dukaan.Dukaan.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Dukaan.Dukaan.Repository.UserRepository;
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
    public String login(@RequestBody User user ) {
        System.out.println(user);
        System.out.println(user.getUsername());
        User resopoUser = userRepository.findByusername(user.getUsername());
        if(resopoUser == null){
            return "User does not exist";
        }
        if(resopoUser.getPassword().equals(user.getPassword())){
            return "Logged In";
        }
        else{
            return "Invalid";
        }
    }
}

