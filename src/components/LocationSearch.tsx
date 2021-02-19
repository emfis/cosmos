import * as React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useQuery } from "react-query";
import { fetchLocation } from "../services/location"

interface LocationSearch {
  onLocationChange: (newLocation: any) => void;
}

const LocationSearch : React.FC<LocationSearch> = (props) => {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const {isLoading, error, data} = useQuery(["location", inputValue],()=>fetchLocation(inputValue));

  React.useEffect(()=>{
    if (!value) return;
    props.onLocationChange(value);
  },[value]);

  return (
    <Autocomplete
      loading={isLoading}
      options={data ?? []}
      getOptionSelected={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.place_name}
      onInputChange={(event,newValue)=>setInputValue(newValue)}
      onChange={(event, newValue) => setValue(newValue)}
      autoComplete
      value={value}
      renderInput={(params) => <TextField {...params} label="Search location..." variant="outlined" />}
      style={{marginTop: "2em"}}
    />
  );
}

export default LocationSearch;