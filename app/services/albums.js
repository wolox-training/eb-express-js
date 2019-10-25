const axios = require('axios');

const { albumResource } = require('../../config/index').common;
const errors = require('../errors');
const logger = require('../logger');

const buildAlbumsRequest = resource =>
  axios
    .get(`${albumResource.albumEndpoint}/${resource}`)
    .then(res => res.data)
    .catch(err => {
      logger.error('Error trying to consume the API');
      throw errors.apiError(err.message);
    });

exports.getAlbums = () => buildAlbumsRequest('albums');

exports.getPhotos = id => buildAlbumsRequest(`photos?albumId=${id}`);
