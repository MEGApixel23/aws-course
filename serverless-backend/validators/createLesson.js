const validator = require('@middy/validator');

module.exports = validator({
  inputSchema: {
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
});
