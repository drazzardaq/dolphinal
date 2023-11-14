const INLINE_ELEMENTS = ['a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video']

module.exports = {
  env: {
    node: true,
  },
  plugins: [
    'eslint-plugin-css'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:css/recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': [2, { 'singleline': { 'max': 10 }, 'multiline': { 'max': 1 } }],
    'vue/singleline-html-element-content-newline': [2, {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea', 'h1', 'h2', 'h3', 'h4', 'h5', 'p', ...INLINE_ELEMENTS]
    }],
    'vue/multi-word-component-names': 0
  }
}
