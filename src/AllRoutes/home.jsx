import { useEffect, useState } from "react"
import axios from "axios";
import ProductSimple from "./homecard";

export const Home=()=>{

    const[data, setdata]= useState([]);
    const[error,Seterror] = useState(false)
    const[loading,Setloading] = useState(true);

    useEffect(()=>{
        Setloading(true)
        fetchdata()
    },[])


      const fetchdata=()=>{

        axios({
            method:"get",
            url:"https://doctor-patient123.herokuapp.com/users"

        }).then((res)=>{
            setdata(res.data)
            Setloading(false)

        }).catch((err)=>{
            Seterror(true)
            Setloading(false)

        })

      }


    return(
        <div>
          
         {loading && <div> ...Loading</div>}
         <div>
            {data.map((item)=><ProductSimple key={item.id} {...item}/>)}

         </div>
            
        </div>
    )
}