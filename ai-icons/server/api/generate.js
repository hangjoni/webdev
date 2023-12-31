import { OpenAI } from "openai";
import "dotenv/config";

// make query
// const openai = new OpenAI();

export default defineEventHandler(async (event) => {
  // authentication;
  const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

  // // query
  const { prompt } = getQuery(event);

  const image = await openai.images.generate({
    prompt: prompt,
  });

  console.log("image", image);

  return image.data[0].url;

  // use this when developing to save credits
  // let res = await simulateAPI();
  // return res;
});

const simulateAPI = (prompt) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve(
          "https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?resize=1024:*"
        ),
      3000
    );
  });
};

// simulate error

// const simulateAPI = (prompt) => {
//   return new Promise((resolve, reject) => {
//     const error = {
//       status: 500,
//       message: "cannot generate",
//     };
//     setTimeout(() => reject(error), 1000);
//   });
// };
