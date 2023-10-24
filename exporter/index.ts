import { buildClient } from "@datocms/cma-client-node";
import { AUTHORS_PHOTO_FOLDER, DATA } from "./filePaths";
import { Post } from "./types";
import { createCategories } from "./categories";
import { createAuthors } from "./authors";

const client = buildClient({ apiToken: process.env.DATO_CMS_API_TOKEN || "" });

const sample = Bun.file(DATA);

const json = await sample.json();
const jsonData = json.data as Post[];

// const categories = await createCategories(client, jsonData);
// console.log(categories);

// const authors = await createAuthors(client, jsonData);
// console.log(authors);

// How to deal with the author avatar photos:
// 1. Upload photo from code using: client.uploads.createFromLocalFile({...}). Check "authors.ts" file for an example.
// 2. Upload the photo manually through the website, find the photo from code and use the ID. Example below:

// const avatarPhoto = await client.uploads.list({
//   filter: {
//     fields: {
//       filename: { matches: { pattern: "agathe.png", caseSensitive: false } },
//     },
//   },
// });
// console.log(avatarPhoto);
