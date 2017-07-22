module.exports = {
  "title": "Bookmark",
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "url": {
      "type": "string",
      "format": "uri"
    },
    "favourite": {
      "type": "boolean"
    }
  },
  "required": [
    "url"
  ]
};