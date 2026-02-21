package com.Dukaan.Dukaan.controller;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Dukaan.Dukaan.model.Items;
import com.Dukaan.Dukaan.service.AddToCartServiceLayer;

@RestController
public class AddToCartController {

    private final AddToCartServiceLayer addToCartServiceLayer;

    public AddToCartController(AddToCartServiceLayer addToCartServiceLayer){
        this.addToCartServiceLayer = addToCartServiceLayer;
    }
    
    @PostMapping("/cartItem")
    public String addToCart(@RequestBody Items item ){
        addToCartServiceLayer.addToCart(item);
        return "Item added to Cart";
    }
    
    @GetMapping("/getCartItems")
    public List<Items> getCartItems(){
        return addToCartServiceLayer.getCartItems();
    }

    @DeleteMapping("/{id}")
    public String deleteFromCart(@PathVariable int id){
        addToCartServiceLayer.deleteFromCart(id);
        return "Deleted From Cart";
    }
    
}
