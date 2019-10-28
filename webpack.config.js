/* note: this file is useless for webpack nuxt
/ but only used for IntelliJ (Webstorm, Pycharm, IDEA) for recognising src root mapping.
*/

module.exports = {
  resolve: {
    // for WebStorm
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname)
    }
  }
};
