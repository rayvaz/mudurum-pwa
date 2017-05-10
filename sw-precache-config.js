module.exports = {
  staticFileGlobs: [
    'public/**.html',
    'public/**.js',
    'public/**.css',
    'public/assets/images/*',
    'public/assets/icons/*'
  ],
  root: 'public',
  stripPrefix: 'public/',
  navigateFallback: '/index.html'
};
