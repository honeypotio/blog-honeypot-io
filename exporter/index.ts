import { buildClient } from "@datocms/cma-client-node";
import { DATA } from "./filePaths";
import { Post } from "./types";
import { createCategories } from "./categories";
import { createAuthors } from "./authors";

const client = buildClient({ apiToken: process.env.DATO_CMS_API_TOKEN || "" });

const sample = Bun.file(DATA);

const text = await sample.text();
const json = JSON.parse(text);
const jsonData = json.data as Post[];

// const categories = await createCategories(client, jsonData);
// console.log(categories);

const authors = await createAuthors(client, jsonData);
console.log(authors);
