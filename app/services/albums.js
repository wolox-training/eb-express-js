const axios = require('axios');

const { albumResource } = require('../../config/index').common;
const errors = require('../errors');
const logger = require('../logger');

exports.getAlbums = () =>
  axios.get(`${albumResource.albumEndpoint}/albums`).catch(err => {
    logger.error('Error trying to consume the API');
    throw errors.apiError(err.message);
  });

exports.getPhotos = () =>
  axios.get(`${albumResource.albumEndpoint}/photos`).catch(err => {
    logger.error('Error trying to consume the API');
    throw errors.apiError(err.message);
  });
