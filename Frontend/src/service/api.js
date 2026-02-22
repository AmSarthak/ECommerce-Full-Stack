import axios from "axios"


const inventoryBaseURl = "http://localhost:5001";
const backendBaseUrl = "http://localhost:8080";

const apiService = {
    makeGetCall : function(service , path , successCallBack , errorCallBack){
        const baseUrl = (service == "Inventory")? inventoryBaseURl : backendBaseUrl;
        const url = baseUrl+path;
        axios.get(url).then((response)=>{
            successCallBack(response.data);
        }).catch((err)=>{
            errorCallBack(err)
        })
    },
    makePostCall : function(service , path , data , successCallBack , errorCallBack){
        const baseUrl = (service == "Inventory")? inventoryBaseURl : backendBaseUrl;
        const url = baseUrl+path;
        axios.post(url , data).then((response)=>{
            successCallBack(response.data);
        }).catch((err)=>{
            errorCallBack(err)
        })
    }
}

export default apiService;