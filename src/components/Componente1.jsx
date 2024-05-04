import React, { useRef } from "react";
import { Navbar } from "./Navbar";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

export const Componente1 =()=>{

const {user, isAuthenticated, isLoading} = useAuth0();

return(

    <div>
<Navbar></Navbar>
{isAuthenticated &&(
    <div>

<img src={user.picture}/>
    <p>{user.name}</p>
    </div>

)}

<Logout></Logout>
    </div>
)

}