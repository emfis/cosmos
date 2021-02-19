export interface Place {
  place_name: string;
  center: [number,number];
}

export async function fetchLocation(placeName?: string): Promise<Place[]> {
  if(!placeName) return;
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(placeName)}.json?access_token=pk.eyJ1IjoianJtaW4iLCJhIjoiY2tsY2kzaWo3MDhpNzJubXB5dm8yZGk3cyJ9.pn0IOrZNeU7It3OaxJbO3A`);
  const data = await response.json();
  return data.features;
}