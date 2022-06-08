const { WithFederation } = require("@micro/config");
const deps = require("./package.json").dependencies;

module.exports = WithFederation({
  name: "shell",
  open: true,
  dependencies: deps,
  liveReload: true,
  isShell: true,
  remotes: {
    "home": "http://localhost:3100",
    "appointment": "http://localhost:3200",
    "medical_advice": "http://localhost:3300",
  },
});
