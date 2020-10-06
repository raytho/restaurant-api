const menuMock = [
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
  {
    id: "d2a4a062-d256-41bb-b1b2-9d915af6b75e",
    name: "Notti bianche, Le (White Nights)",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 66,
    state: "available",
  },
];

function filteredMenuMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MenuServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  menuMock,
  filteredMenuMock,
  MenuServiceMock,
};
