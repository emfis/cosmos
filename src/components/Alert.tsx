import * as React from "react";
import { Alert as MaterialAlert } from "@material-ui/lab";

interface AlertProps {
  message:unknown;
}

const Alert: React.FC<AlertProps> = (props)=>{
  const style = {height:"2.7em", width:"100%", marginTop: "2.4em"};
  
  return (
    <MaterialAlert style={style} severity="error" elevation={6} variant="filled" >{props.message}</MaterialAlert>
  );
}

export default Alert