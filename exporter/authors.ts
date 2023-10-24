import { Client } from "@datocms/cma-client-node";
import { Post } from "./types";

interface Authors {
  // author_key: id
  [key: string]: string;
}

export const createAuthors = async (client: Client, jsonData: Post[]) => {
  // Extract authors
  const authors = jsonData.map((post) => post.author);

  const uniqueAuthors = [...new Set(authors)];

  // Import authors
  let authorsIds: Authors = {};

  const datoCMSPromises = uniqueAuthors.map((a) => {
    // upload photo
    const avatarId = "70461522";

    // create author entry
    return client.items.create({
      item_type: { id: "2418472", type: "item_type" },
      name: a,
      description: "hola",
      avatar: { id: avatarId, type: "field" },
    });
  });

  await Promise.all(datoCMSPromises).then((resolvedCategories) => {
    resolvedCategories.forEach((c) => {
      if (c.name && typeof c.name === "string") {
        authorsIds[c.name] = c.id;
      }
    });
  });

  return datoCMSPromises;
};
