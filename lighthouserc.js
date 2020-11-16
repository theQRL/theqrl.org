module.exports = {
  ci: {
    collect: {
      staticDistDir: "./public",
      url: [
            "/index.html",
            "/404.html",
           ],
      numberOfRuns: 5
    },
    assert: {
      assertions: {
        "categories:performance": ["error", {minScore: 0.7}],
        "categories:accessibility": ["error", {minScore: 0.5}],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
