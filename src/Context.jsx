import { createContext } from "react";

 export const GlobalContext=createContext();

 export const GlobalContextWrapper=({children})=>{
    return(
        <div>{children}</div>
    )
 }

   
