import config from "../../app.config.js";

export async function fetchNasaImage(): Promise<Response> {
  return await fetch(`${config.NASA_URL}/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=6KSr0KkBVu1TUBuUVQd8L3jMtrC6vkPfwU4CPFT3`);
}