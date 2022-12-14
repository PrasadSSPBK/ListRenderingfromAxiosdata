import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import IUser from '../models/IUser'
// import { UserServices } from "../services/UserServices";


interface Iprops{

}
interface Istate{
    inProgress:boolean;
   user:IUser[];
   errorMsg:string

}

const ListRendering:React.FC<Iprops>=()=>{

    const [state,setState]=useState <Istate>({
        inProgress:false,
        user:[] as IUser[],
        errorMsg:""
    })

useEffect(()=>{
    setState({...state,
    inProgress:true})
  
  axios.get("https://jsonplaceholder.typicode.com/users")
    
    // UserServices.getAllUsers()
    .then((res)=>{
       
        setState({...state,
        inProgress:false,
    user:res.data})
        
       
    }).catch((e)=>{
        setState({...state,
        inProgress:false,
    errorMsg:e.message})
        
    })


},[])
// let {user}=state

// console.log(user)


return(
    <div>
       {state.inProgress?(
        <div className="spinner-grow text-warning display-1 text-center " role="status">
        <span className="sr-only">Loading...</span>
      </div>):(
        <>
        <div className="card-header bg-dark text-light fw-bold display-4 text-center">
            USER LIST
        </div>
       
        <table className=" table table-striped table-bordered tale-hover table-condensed text-center" >
            <thead>
                <tr className="bg-dark text-light fw-bold">
                    <th>S.No</th>
                    <th>UserName</th>
                    <th>Name</th>
                    <th>Phone No</th>
                    <th>Company</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {state.user.length>0 &&
                state.user.map(each=>{
                    return(
                        <tr key={each.id} >
                            <td className="bg-dark text-light fw-bold">{each.id}</td>
                            <td className="bg-success fw-bold">
                            <Link to={`/Userlist/${each.id}`} className="text-decoration-none text-warning">
                            {each.username}
                            </Link>
                            </td>
                            <td className="bg-primary fw-bold">{each.name}</td>
                            <td className="bg-danger fw-bold">{each.phone}</td>
                            <td className="bg-warning fw-bold">{each.company.name}</td>
                            <td className="bg-info fw-bold">{each.address.city}</td>
                        </tr>
                    )
                })
                }
            </tbody>

        </table>
        <p className='text-danger fw-bold text-center display-6'>*** Click on UserName to see user details</p>
        </>
       )}
       
    </div>
    
)
}
export default ListRendering