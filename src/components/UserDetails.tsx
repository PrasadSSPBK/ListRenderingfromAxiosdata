import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IUser from '../models/IUser';
import { UserServices } from '../services/UserServices';

interface Params{
    id:string;
}

interface Iprops{

}
interface Istate{
    inProgress:boolean;
   user: IUser;
   errorMsg:string
}

const UserDetails:React.FC<Iprops>=()=>{
    const [state,setState]=useState<Istate>({
        inProgress:false,
        user:{} as IUser[],
        errorMsg:""
    })
    let {id}=useParams<Params|any>();

    useEffect(()=>{
        console.log(id)
        setState({...state,inProgress:true})
        if(id){
            UserServices.getUserDetails(id).then((res)=>{
                console.log(res.data)
                setState({...state,inProgress:false,user:res.data})
            }).catch((e)=>{
                console.log(e.message)
                setState({...state,inProgress:false,errorMsg:e.message})
            })
        }
        
           
       
    },[id])


    return(
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <h1 className='h1 text-center'>User Details</h1>
                </div>
                {Object.keys(state.user).length>0 &&
                <div className="card-body">
                <div className="card-title">
                    <h1 className='h2'>{state.user.name}</h1>
                </div>
                <ul className="card-text" key={state.user.id}>
                    <li className='h4'>Email:{state.user.email}</li>
                    <hr className='text-danger'/>
                    <li className='h4'>UserName:{state.user.username}</li>
                    <hr className='text-danger'/>
                    <li className='h4'>City:{state.user.address}</li>
                    <hr className='text-danger'/>
                    <li className='h4'>Website:{state.user.website}</li>
                    <hr className='text-danger'/>
                    {/* <li className='h4'>Company:{user.company.name}</li> */}
                    <hr className='text-danger'/>
                </ul>
            </div>
                
                }
                
            </div>
        </React.Fragment>
    )
}
export default UserDetails