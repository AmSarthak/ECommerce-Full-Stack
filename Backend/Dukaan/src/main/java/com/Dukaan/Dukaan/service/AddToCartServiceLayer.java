package com.Dukaan.Dukaan.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.Dukaan.Dukaan.model.Items;

@Service
public class AddToCartServiceLayer {
    private final List<Items> cartData = new ArrayList<>();

    public void addToCart(Items item){
        cartData.add(item);
    }
    
    public List<Items> getCartItems(){
        return cartData;
    }

    public int getTotalPrice(){
        int totalPrice = 0;
        for (Items item : cartData){
            totalPrice+=item.getPrice();
        }
        return totalPrice;
    }
    public void deleteFromCart(int id){
        for(int i=0 ; i<cartData.size();i++){
            if(cartData.get(i).getId() == id){
                cartData.remove(i);
            }
        }
    }

}
