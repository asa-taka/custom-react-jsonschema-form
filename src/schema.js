const userSchema = {
  title: "User",
  description: "User profile",
  properties: {
    name: {},
    pass: { description: "Your awesom password!" },
    age: { type: "number" },
    friends: {
      title: "Friends",
      items: {
        title: "Friend",
        $ref: "#/definitions/user"
      }
    }
  }
};

const linkSchema = {
  title: "Link",
  properties: {
    name: {},
    uri: {},
    type: {
      enum: ["PRIMARY", "DANGER", "GOOD"],
      default: ["GOOD"]
    },
    ex1: {},
    ex2: {},
    ex3: {},
    ex4: {}
  }
};

export default {
  definitions: {
    user: userSchema
  },
  title: "Todo",
  required: ["title"],
  properties: {
    title: {
      title: "Title",
      description: "Something your special :)",
      default: "A new task"
    },
    done: {
      type: "boolean",
      title: "Done?",
      default: false
    },
    tags: {
      title: "Tags",
      description: "Tags for search",
      items: { title: "Tag", type: "string" }
    },
    links: {
      title: "Links",
      description: "Your favorite links!",
      items: linkSchema
    },
    party: {
      enum: ["CAT", "DOG", "OCTCAT"],
      default: "CAT"
    },
    user: {
      title: "Your Profile",
      $ref: "#/definitions/user"
    },
    array: {
      title: "Extra Users",
      items: { $ref: "#/definitions/user" }
    }
  }
};
