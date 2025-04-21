
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "./Card/Card";
import Box from '@mui/material/Box';
import Section from "./Section/Section";


const GridDis = () => {
    // const [data, setData] = useState([]);
    // //console.log("response.data");
    // useEffect(() =>{
    //     const fetchData = async() => {
    //         try{
    //             const response =  await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    //             //console.log(response.data);
    //             setData(response.data);
    //         }
    //         catch(error){
    //             console.log("Error: ",error)
    //         }
    //     };
    //     fetchData();
    // },[]);
    
    return(
        <>
        <Box>
            <Section
                title="Top Albums"
                fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
            />
        </Box>
        
        </>
    );
}
export default GridDis;