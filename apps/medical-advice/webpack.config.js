const { WithFederation } = require("@micro/config");
const deps = require("./package.json").dependencies;

module.exports = WithFederation({
  name: "medical_advice",
  port: 3300,
  open: true,
  dependencies: deps,
  remotes: {
    "my_health": "http://localhost:3400",
  },
});
