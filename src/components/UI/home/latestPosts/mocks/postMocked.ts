import { faker } from "@faker-js/faker";

export const generatePostMocked = () => {
  return {
    id: faker.lorem.words(1),
    slug: faker.lorem.words(1),
    title: faker.lorem.words(1),
    date: faker.date.past(),
    coverImage: {
      url: faker.internet.url(),
    },
    category: {
      name: faker.lorem.words(1),
      color: { hex: "#123565" },
    },
    author: {
      name: faker.person.firstName(),
      picture: { url: faker.internet.url() },
    },
  };
};
