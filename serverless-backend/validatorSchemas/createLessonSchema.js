module.exports = {
  body: {
    required: ['title', 'url'],
    properties: {
      title: {
        type: 'string'
      },
      url: {
        type: 'string'
      }
    }
  }
};
