import React, { useEffect, useState } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styles from "./Tabs.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

export default function LabTabs({data, songs}) {
    //console.log("Data:", data)
  const [value, setValue] = useState();
  //const [items, setItems] = useState([]);
  const [genre, setGenre] = useState([]);

  const handleChange = (event, newValue) => {
    //console.log("genre",genre)
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
          setGenre([{key: "all", label: "all"}, ...response.data.data]);
          setValue("all"); 
          //console.log(response.data.data)
          
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };
      fetchData();
      

  },[])
  

  return (
    <Box className={styles.main}>
      <TabContext value={value}>
        <Box className={styles.tablistBox}>
          <TabList className = {styles.tablist} onChange={handleChange} >
            {genre.map((g) => (
                <Tab 
                className={styles.tab}
                label={g.label} 
                value={g.key} 
                key={g.key}/>
                )
            )}
          </TabList>
        </Box>
        {genre.map((g) => (
            <TabPanel value={g.key} key={g.key} >
                <Carousel
                        data={
                        g.key === "all"
                            ? data
                            : data.filter((item) => item.genre.key === g.key)
                        }
                    renderComponent={(item) => <Card data={item} songs={songs}/>}
                />
            </TabPanel>

            )
        )}
      </TabContext>
    </Box>
  );
}