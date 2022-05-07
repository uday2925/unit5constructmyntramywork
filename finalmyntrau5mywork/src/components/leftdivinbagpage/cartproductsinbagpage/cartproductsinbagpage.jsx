import { useEffect, useState } from "react"
import "./cartproductsinbagpage.css";
import { useContext} from "react"
import { Cartcontext } from "../../../contexts/cartcontext";


export const Cartproductsinbag=()=>{

  const {cartlist,price,customername}=useContext(Cartcontext); 

    return (
        <div className="leftside">            
            <div id="itemsselected">
               Items selected: {cartlist.length}
               <br/>
               <br/>
            </div>
          <div id="productslist">
            {cartlist.map(function(e){
                return<div className="flex border">
                        <div ><img src={e.imageURL} alt="productimage" width="200px" height="150px"/></div>
                        <div style={{marginLeft:"2%"}}>
                            <strong>{e.productName}</strong>
                            <p>Category:{e.itemCategory}</p>
                            <p id="strikedPrice">{e.strikedPrice}</p>
                            <p>Price:{e.price}</p>
                        </div>                      
                    </div> 
            })}
          </div>
        </div>
    )
}