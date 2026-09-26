module.exports = {
  apps: [{
    name: "catalogo-compoentes",
    cwd: "/root/live-catalogo",
    script: "node_modules/.bin/next",
    args: "start -p 3402",
    env: { NODE_ENV: "production", PORT: "3402" }
  }]
};
