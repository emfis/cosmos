import * as React from "react";
import Grid from "@material-ui/core/Grid";
import LocationSearch from "../components/LocationSearch";
import Map from "../components/Map";
import PageWrapper from "../components/PageWrapper";

const LocationPage: React.FC = ()=>{
  const [position, setPosition] = React.useState<[number,number]>([50.28333, 18.66667]);

  function onLocationChange(newLocation: any){
    setPosition(newLocation.center.reverse());
  }
  
  return (
    <PageWrapper title={"Map"}>
      <Grid container direction="column" spacing={2}>
        <Grid item><LocationSearch onLocationChange={onLocationChange}/></Grid>
        <Grid item><Map position={position}/></Grid>
      </Grid>
    </PageWrapper>
  );
}

export default LocationPage;