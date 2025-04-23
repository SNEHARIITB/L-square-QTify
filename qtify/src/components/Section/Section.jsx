import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tabs from "../Tabs/Tabs";
import styles from "./Section.module.css"
import { Grid } from "@mui/system";

const Section = ({ title, fetchUrl, songs = false  }) => {

  const [items, setItems] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setItems(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  //console.log("from section:",songs)
  return (
    <section className={styles.section}>

      <div className={styles.head}>
        <h2 className={styles.title}>{title}</h2>
        <Button
          variant="text"
          onClick={() => setCollapsed(!collapsed)}
          className={styles.collapse}
        >
          {!songs && (collapsed ? "Collapse" : "Show all")}
        </Button>
      </div>


      {songs ? <Tabs data={items} songs={songs}/>
        :
        (!collapsed ? 
          (
            <Carousel
              data={items}
              renderComponent={(item) => <Card data={item} songs={songs}/>}
            />
          )
          :
          (
            <Grid container className={styles.grid}
                sx={ { overflow: "hidden", transition: "max-height 0.5s ease", maxHeight: collapsed ? 1000 : 232, } }
            >
              {items.map((item) => (
                <Grid key={item.id}>
                  <Card data={item} songs={songs} />
                </Grid>
              ))}
            </Grid>
          )
        )
      }


    </section>
  );
};

export default Section;
