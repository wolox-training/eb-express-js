const axios = require('axios');

const { albumResource } = require('../../config/index').common;
const errors = require('../errors');
const logger = require('../logger');

exports.getAlbums = () =>
  axios
    .get(`${albumResource.albumEndpoint}/albums`)
    .then(res => res.data)
    .catch(err => {
      logger.error('Error trying to consume the API');
      throw errors.apiError(err.message);
    });

exports.getPhotos = id =>
  axios
    .get(`${albumResource.albumEndpoint}/photos?albumId=${id}`)
    .then(res => res.data)
    .catch(err => {
      logger.error('Error trying to consume the API');
      throw errors.apiError(err.message);
    });
