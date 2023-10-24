import { buildClient } from "@datocms/cma-client-node";

const client = buildClient({ apiToken: process.env.DATO_CMS_API_TOKEN || "" });

const sample = Bun.file("../json_data/sample.json");

const text = await sample.text();
const json = JSON.parse(text);

interface Post {
  id: string;
  contents: string;
  title: string;
  subtitle: string;
  date: string;
  layout: string;
  author: string;
  categories: string[];
  cover_image: string;
  permalink: string;
  importance: number;
  cta: string;
  excerpt: string;
}

// Extract categories
const categories = (json.data as Post[]).map((post) => post.categories);

const uniqueCategories = [...new Set(categories.flat())];
console.log(uniqueCategories);

// Import categories
interface Categories {
  // category_name: id
  [key: string]: string;
}

let datoCMSCategories: Categories = {};

const datoCMSPromises = uniqueCategories.map((c) => {
  return client.items.create({
    item_type: { id: "2418783", type: "item_type" },
    name: c,
  });
});

await Promise.all(datoCMSPromises).then((resolvedCategories) => {
  resolvedCategories.forEach((c) => {
    if (c.name && typeof c.name === "string") {
      datoCMSCategories[c.name] = c.id;
    }
  });
});

console.log(datoCMSCategories);

// End of importing categories
