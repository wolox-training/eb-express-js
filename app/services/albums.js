const axios = require('axios');

const { albumResource } = require('../../config/index').common;
const errors = require('../errors');
const logger = require('../logger');

exports.getAlbums = () =>
  axios.get(`${albumResource.endpoint}/albums`).catch(err => {
    logger.error('Error al intentar consumir la API');
    throw errors.apiError(err.message);
  });

exports.getPhotos = () =>
  axios.get(`${albumResource.endpoint}/photos`).catch(err => {
    logger.error('Error al intentar consumir la API');
    throw errors.apiError(err.message);
  });
