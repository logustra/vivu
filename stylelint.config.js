module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-rscss/config'
  ],
  rules: {
    'length-zero-no-unit': null,
    'at-rule-empty-line-before': ['always', {
      ignore: ['after-comment'],
      except: [
        'inside-block',
        'after-same-name'
      ]
    }],

    // rscss
    'rscss/no-descendant-combinator': false
  }
}
