window.MathJax = {
    extensions: [
      "tex2jax.js",
    ],
    jax: [
      "input/TeX", 
      "output/HTML-CSS"
    ],
    tex2jax: {
      inlineMath:[["$","$"],["\\(","\\)"]],
      displayMath:[["$$","$$"],["\\[","\\]"]],
      skipTags:["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],
      ignoreClass:"tex2jax_ignore",processClass:"tex2jax_process",
      processEscapes:false,
      processEnvironments:true,
      processRefs:true,
      preview:"TeX"
    },
    "HTML-CSS": { fonts: ["TeX"] }
}