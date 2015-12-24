module.exports = {
  config: {
    files: {
      javascripts: {
        joinTo: "javascripts/brunch.min.js"
      },
      stylesheets: {
        joinTo: "stylesheets/brunch.min.css"
      }
    },
    modules: {
      definition: "amd",
      wrapper: "amd"
    }
  }
};
