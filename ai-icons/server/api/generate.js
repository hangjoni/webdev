import { OpenAI } from "openai";
import "dotenv/config";

// make query
// const openai = new OpenAI();

export default defineEventHandler(async (event) => {
  // authentication;
  // const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

  // // // query
  // const { prompt } = getQuery(event);

  // const image = await openai.images.generate({
  //   prompt: prompt,
  // });

  // console.log("image", image);
  // console.log("image data", image.data);

  // return {
  //   message: `The response was ${image.data[0].url}`,
  // };
  let res = await simulateAPI();
  return res;
});

const simulateAPI = (prompt) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve("fake.url.com"), 3000)
  );
};
