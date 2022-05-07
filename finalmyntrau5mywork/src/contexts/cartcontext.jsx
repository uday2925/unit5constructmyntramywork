import {createContext, useEffect, useState } from "react";


export const Cartcontext=createContext();

export const ContextProvider=({children})=>{
    const [cartlist,setcartlist]=useState([{
        imageURL:
          "https://static.zara.net/photos///2021/I/1/1/p/6317/610/201/2/w/444/6317610201_6_5_1.jpg?ts=1631027149696",
        productName: "ANIMAL PRINT QUILTED CROSSBODY BAG ",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,190.00",
        itemGender: "Women",
        itemCategory: "PRINTED BAG",
        sale: "50%",
      },
      {
        imageURL:
          "https://static.zara.net/photos///2021/I/1/1/p/6580/810/030/2/w/444/6580810030_15_1_1.jpg?ts=1634130634421",
        productName: "QUILTED MINI CROSSBODY BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "QUILTED MINI BAG ",
        sale: "45%",
      }]);

      const [price,setprice]=useState(0);
      useEffect(()=>{
        var totalprice=0;
        for(let i=0;i<cartlist.length;i++)
        {
          var bag="";
            for(let j=0;j<cartlist[i].price.length;j++)
            {
              var obj={1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0};
              
              if(obj[cartlist[i].price[j]]!==undefined)
              {
                bag=bag+(obj[cartlist[i].price[j]])
              }
              else if(cartlist[i].price[j]===".")
              {
                totalprice=totalprice+(+bag);
                bag="";
              }
            }
            
        }
        setprice(totalprice);
      
      },[cartlist])

      const [customername,setcustomername]=useState({name:"text1",Address:"textaddress"})


    return (
        <Cartcontext.Provider value={{cartlist,price,customername}} >{children}</Cartcontext.Provider>
    )
}