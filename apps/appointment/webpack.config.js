const { WithFederation } = require("@micro/config");
const deps = require("./package.json").dependencies;

module.exports = WithFederation({
  name: "appointment",
  port: 3200,
  open: true,
  dependencies: deps,
});
