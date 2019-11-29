module.exports = {
  presets: [
    '@vue/app',
    ["@babel/preset-env", {
      "targets": {
        "node": "10"
      }
    }]
  ],
  plugins: ["@babel/plugin-transform-modules-commonjs", ["@babel/transform-runtime", {
    "regenerator": true
  }]]
}
