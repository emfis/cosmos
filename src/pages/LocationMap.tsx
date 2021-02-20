import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { fetchNasaImage } from "../services/NASA";
import { Skeleton } from "@material-ui/lab";
import { useQuery } from "react-query";
import LocationSearch from "../components/LocationSearch";
import { Map, Image, PageWrapper, Alert } from "../components";

const LocationPage: React.FC = ()=>{
  const [position, setPosition] = React.useState<[number,number]>([50.28333, 18.66667]);
  const {isLoading, error, data} = useQuery(["nasaImage",position],()=>fetchNasaImage(...position),{retry: false});

  function onLocationChange(newLocation: any){
    setPosition(newLocation.center.reverse());
  }
  
  return (
    <PageWrapper title={"Map"}>
      <Grid container spacing={2}>
        <Grid container item direction="column" spacing={2} xs={12} md={6}>
          <Grid item><LocationSearch onLocationChange={onLocationChange}/></Grid>
          <Grid item><Map position={position}/></Grid>
        </Grid>
        <Grid container item xs={12} md={6}>
          { isLoading && <Skeleton animation="wave" width={"100%"} height={"100%"}/>}
          { !isLoading && data && <Image imageURL={data} alt="NASA image"/>}
          { !isLoading && error && <Alert message={error}/>}
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default LocationPage;