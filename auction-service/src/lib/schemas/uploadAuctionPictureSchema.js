const schema = {
  properties: {
    body: {
      type: 'string',
      minLength: 1,
      // pattern: '\=$'

      // New spec
      // contentEncoding: 'base64',
      // contentMediaType: 'image/jpeg'

      // Older spec
      // media: {
        // binaryEncoding: 'base64',
        // type: 'image/jpeg'
      // }
    }
  },
  required: [
    'body',
  ]
};

export default schema;