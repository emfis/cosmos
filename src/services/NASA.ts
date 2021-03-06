import config from "../../app.config.js";

export async function fetchNasaImage(lat: number,lon: number): Promise<string> {
  const url = `${config.NASA_URL}/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2020-01-01&dim=0.15&api_key=6KSr0KkBVu1TUBuUVQd8L3jMtrC6vkPfwU4CPFT3`;
  const response =  await fetch(url);
  if (response.ok) {
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } else {
    const json = await response.json();
    return Promise.reject(json.msg);
  }
}