import { faker } from "@faker-js/faker";

export const generatePostData = () => {
  return {
    title: faker.lorem.words(1),
    date: faker.date.past(),
    category: {
      name: faker.lorem.words(1),
      color: { hex: "#fgfgfg" },
    },
    author: {
      name: faker.person.firstName(),
      picture: { url: faker.internet.url() },
    },
  };
};
