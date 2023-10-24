import { Post } from "./types";

interface Categories {
  // category_name: id
  [key: string]: string;
}

export const createCategories = async (client: Client, jsonData: Post[]) => {
  // Extract categories
  const categories = jsonData.map((post) => post.categories);

  const uniqueCategories = [...new Set(categories.flat())];

  // Import categories
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

  return datoCMSCategories;
};
