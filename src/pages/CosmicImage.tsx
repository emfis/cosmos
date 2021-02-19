import * as React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import {fetchNasaImage} from "../services/NASA";

import {useQuery} from "react-query";
import Image from "../components/Image";
import PageWrapper from "../components/PageWrapper";

const Cosmos: React.FC = ()=>{
  const {isLoading, error, data} = useQuery('nasaImage',fetchNasaImage);

  return (
    <PageWrapper title={"Cosmic image"}>
        { isLoading
            ? <Skeleton animation="wave" width={"100%"} height={"700px"}/>
            : <Image imageURL={data.url} alt="NASA image"/>
        }
    </PageWrapper>
  );
}

export default Cosmos;