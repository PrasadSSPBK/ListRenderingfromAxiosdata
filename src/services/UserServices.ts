import axios from "axios";

export class UserServices{
    private static serverUrl:string="https://jsonplaceholder.typicode.com"
    
    public static getAllUsers(){
        let URL:string=`${this.serverUrl}/users`;
        return axios.get(URL);
    }

    public static getUserDetails(id:string){
        let dataUrl:string=`${this.serverUrl}/users/${id}`;
        return axios.get(dataUrl)
    }} 