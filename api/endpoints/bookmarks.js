const router = require('express').Router();
const uniqid = require('uniqid');
const jsonfile = require('jsonfile');
const validator = require('tv4');
validator.addSchema('bookmark', require('./schemes/bookmark'));
const fileDataPath = './data/bookmarks.json';

function getData() {
  return jsonfile.readFileSync(fileDataPath);
}

const validateBookmark = (req, res, next) => {
  const bookmark = getData().find(bookmark => (bookmark.id === req.params.id));

  if (bookmark) {
    // Sets bookmark as request object parameter
    req.bookmark = bookmark;
    next();
  } else {
    // Set a 404 status and send an error message
    res.status(404).json({message: 'No bookmark found!'})
  }
};

router.route('/bookmarks')
  // Get all bookmarks
  .get((req, res) => {
    res.json(getData());
  })
  // Create bookmark data
  .post((req, res) => {

    // The value favourite comes as string
    const newBookmark = Object.assign(req.body, {id: uniqid(), favourite: req.body.favourite === true});

    if(!validator.validate(newBookmark, 'bookmark')) {
      return res.status(400).json({message: validator.error.message})
    }
    // Gets our data
    const data = getData();
    data.unshift(newBookmark);
    // Save data
    jsonfile.writeFileSync(fileDataPath, data);
    res.json(newBookmark);
  });

// RUD operations single bookmark
router.route('/bookmarks/:id')
  // Read bookmark data
  .get(validateBookmark, (req, res) => res.json(req.bookmark))
  // Update bookmark data
  .put(validateBookmark, (req, res) => {
    const bookMarkUpdated = Object.assign(req.bookmark, req.body);
    if(!validator.validate(bookMarkUpdated, 'bookmark')) {
      return res.status(400).json({message: validator.error.message})
    }
    // Gets our data
    const data = getData();
    const index = data.findIndex(bookmark => (bookmark.id === bookMarkUpdated.id));
    data[index] = bookMarkUpdated;
    // Save data
    jsonfile.writeFileSync(fileDataPath, data);
    res.json(bookMarkUpdated);
  })
  // Delete bookmark
  .delete((req, res) => {
    //@TODO: test
    const id = req.params.id;
    // Gets our data
    const data = getData();
    // Checks if a bookmark with a given id parameter exists
    const index = data.findIndex(bookmark => (bookmark.id === id));
    // There is not a bookmark with the parameter id
    if (index === -1) {
      // Set a 404 status and send an error message
      return res.status(404).json({message: 'No bookmark found!'})
    }
    const removeElement = data[index];
    // Deletes bookmark from data
    data.splice(index, 1);
    // Save data
    jsonfile.writeFileSync(fileDataPath, data);
    // Sends the response
    res.json({
      message: `Bookmark with id ${id} has been removed.`,
      removeElement
    })
  });

module.exports = router;