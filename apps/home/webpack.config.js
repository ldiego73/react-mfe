const { WithFederation } = require("@micro/config");
const deps = require("./package.json").dependencies;

module.exports = WithFederation({
  name: "home",
  port: 3100,
  open: true,
  dependencies: deps,
});
