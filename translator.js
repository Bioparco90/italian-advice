import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

export let translator = async (source) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", source);
  encodedParams.set("target", "it");
  encodedParams.set("source", "en");

  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: encodedParams,
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return result.hasOwnProperty("data")
    ? result.data.translations[0]
    : result.message;
};

// DEBUG
// const a = await translator("ciao");
// console.log(a);
