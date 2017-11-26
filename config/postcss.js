module.exports = () => [
  require('postcss-import')({
    resolve: id => (id.charAt(0) === '~' ? id.slice(1) : id),
  }),
  require('postcss-discard-comments')(),
  require('postcss-mixins')(),
  require('postcss-cssnext')(),
  require('postcss-extend')(),
  require('postcss-calc'),
  require('postcss-functions'),
  require('postcss-color-function')(),
  require('postcss-flexbugs-fixes'),
  require('postcss-remove-root'),
  require('postcss-inline-svg')({
    path: 'node_modules/font-awesome-svg-png/black/svg',
    encode: false,
  }),
  require('postcss-svgo')(),
];
