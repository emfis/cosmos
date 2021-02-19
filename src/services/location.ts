import config from "../../app.config.js";

export interface Place {
  place_name: string;
  center: [number,number];
}

export async function fetchLocation(placeName?: string): Promise<Place[]> {
  if(!placeName) return;
  const response = await fetch(`${config.MAPBOX.URL}/${encodeURI(placeName)}.json?access_token=${config.MAPBOX.TOKEN}`);
  const data = await response.json();
  return data.features;
}