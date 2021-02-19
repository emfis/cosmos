import * as React from "react";

interface NasaImageProps {
  imageURL: string;
  alt?: string;
}

const Image: React.FC<NasaImageProps> = (props)=>{
  return (
    <div style={{display: "flex", justifyContent: "center", padding: "2em"}}>
      <img 
        src={props.imageURL} 
        style={{maxHeight: "100%", maxWidth: "100%"}} 
        alt={props.alt} 
        />
    </div>
  );
}

export default Image