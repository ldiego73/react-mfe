const { WithFederation } = require("@micro/config");
const deps = require("./package.json").dependencies;

module.exports = WithFederation({
  name: "my_health",
  port: 3400,
  open: true,
  dependencies: deps,
});
