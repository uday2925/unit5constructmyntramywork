import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import securelogo from "../images/securelogo.png";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const { AppBar, Toolbar} = require("@mui/material")



function LinkTab(props) {

const navigate=useNavigate();
const Location=useLocation();
console.log("Location",Location)



//  useEffect(()=>{
//   console.log(props);
//   if(props.selected===true)
//   {
//     navigate(props.href);
//     return;
//   }
//   },[props])
  

    return (      
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }


export const Navbar=()=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };


    return (
        <AppBar style={{background:"white",boxShadow:"none",borderBottom:"1px dotted grey"}}>
            <Toolbar>                
            <img src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png" width="100" alt="Myntra logo M png"  />
                
            <Box sx={{ width: '100%'}} >
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered >
                  
                    <LinkTab label="BAG" href="/bag" />
                    
                    <LinkTab label="ADDRESS" href="/address" />
                    
                    <LinkTab label="PAYMENT" href="/payment" />
                  
                    
                </Tabs>
            </Box>
             <img src={securelogo} alt="securelogo"/>               
            </Toolbar>
        </AppBar>
        
    )
}