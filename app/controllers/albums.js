const albumsService = require('../services/albums');
const logger = require('../logger');

exports.getAlbums = (req, res, next) =>
  albumsService
    .getAlbums()
    .then(albums => {
      logger.info('The api responded successfully');
      return res.send({ albums });
    })
    .catch(next);

exports.getPhotos = (req, res, next) =>
  albumsService
    .getPhotos(req.params.id)
    .then(photos => {
      logger.info('The api responded successfully');
      res.send({ photos });
    })
    .catch(next);
