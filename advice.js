import fetch from "node-fetch";

export let getAdvice = async () => {

    const url = "https://api.adviceslip.com/advice";
    const options = {
    method: "GET",
    };

    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);

    const { advice } = { ...result.slip };
    return advice;
}