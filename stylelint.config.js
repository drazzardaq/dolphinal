module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'max-line-length': 180,
    'color-hex-length': 'long',
    'at-rule-no-unknown': [true, { 'ignoreAtRules': ['tailwind'] }]
  }
}
