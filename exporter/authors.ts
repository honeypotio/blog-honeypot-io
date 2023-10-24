import { Client } from "@datocms/cma-client-node";
import { Post } from "./types";
import { AUTHORS_INDEX, AUTHORS_PHOTO_FOLDER } from "./filePaths";

type AuthorData = {
  [key: string]: {
    name: string;
    description: string;
    avatar: string;
  };
};

interface AuthorToSave {
  key: string;
  name: string;
  description: string;
  avatar: string;
}

interface PersistedAuthors {
  // author_key: id
  [key: string]: string;
}

export const createAuthors = async (client: Client, jsonData: Post[]) => {
  // Extract authors
  const authorKeys = jsonData.map((post) => post.author);
  const uniqueAuthorKeys = [...new Set(authorKeys)];

  // Read authors index
  const authorsIndex = Bun.file(AUTHORS_INDEX);
  const data = (await authorsIndex.json()) as AuthorData;

  // Retreive author data
  const authorsToSave: AuthorToSave[] = uniqueAuthorKeys.map((key) => {
    const authorData = data[key];
    return {
      ...authorData,
      key,
    };
  });

  // Import authors
  let authorsIds: PersistedAuthors = {};

  const datoCMSPromises = authorsToSave.map(async (author) => {
    // Upload photo
    const avatarId = "70461522";

    // Create upload resource from a local file
    // const uploadedAvatar = await client.uploads.createFromLocalFile({
    //   localPath: `${AUTHORS_PHOTO_FOLDER}/${author.avatar}`,
    //   // filename: 'different-image-name.png',
    //   skipCreationIfAlreadyExists: true,
    //   // specify some additional metadata to the upload resource
    //   // author: 'New author!',
    //   // copyright: 'New copyright',
    //   // default_field_metadata: {
    //   //   en: {
    //   //     alt: 'New default alt',
    //   //     title: 'New default title',
    //   //     focal_point: {
    //   //       x: 0.3,
    //   //       y: 0.6,
    //   //     },
    //   //     custom_data: {
    //   //       watermark: true,
    //   //     },
    //   //   },
    //   // },
    // });
    // console.log({ uploadedAvatar, avatarId: uploadedAvatar.id });

    // create author entry
    const result = await client.items.create({
      item_type: { id: "2418472", type: "item_type" },
      name: author.name,
      description: author.description,
      avatar: { upload_id: avatarId, title: `${author.name} picture` },
    });
    return {
      key: author.key,
      id: result.id,
    };
  });

  await Promise.all(datoCMSPromises).then((resolvedCategories) => {
    resolvedCategories.forEach((c) => {
      if (c.key && typeof c.key === "string") {
        authorsIds[c.key] = c.id;
      }
    });
  });

  return authorsIds;
};
