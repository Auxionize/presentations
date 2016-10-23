System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "css": "github:systemjs/plugin-css@0.1.31",
    "hakimel/reveal.js": "github:hakimel/reveal.js@3.3.0"
  }
});
