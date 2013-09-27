var _ = require('../../lib/utils');

var ignoreIndicesOptions = ['none', 'missing'];



/**
 * Perform an elasticsearch [indices.flush](http://www.elasticsearch.org/guide/reference/api/admin-indices-flush/) request
 *
 * @for Client
 * @method indices.flush
 * @param {Object} params - An object with parameters used to carry out this action
 * @param {boolean} params.force - TODO: ?
 * @param {boolean} params.full - TODO: ?
 * @param {String} [params.ignore_indices=none] - When performed on multiple indices, allows to ignore `missing` ones
 * @param {boolean} params.refresh - Refresh the index after performing the operation
 */
function doIndicesFlush(params) {
  var request = {}
    , url = {}
    , query = {};

  params = params || {};

  if (params.method) {
    if (params.method === 'POST' || params.method === 'GET') {
      request.method = params.method;
    } else {
      throw new TypeError('Invalid method: should be one of POST, GET');
    }
  } else {
    request.method = 'POST';
  }

  // find the url's params
  if (typeof params.index !== 'undefined') {
    if (typeof params.index === 'string') {
      url.index = params.index;
    } else if (_.isArray(params.index)) {
      url.index = params.index.join(',');
    } else {
      throw new TypeError('Invalid index: ' + params.index + ' should be a comma seperated list or array.');
    }
  }
  

  // build the url
  if (url.hasOwnProperty('index')) {
    request.url = '/' + url.index + '/_flush';
  }
  else  {
    request.url = '/_flush';
  }
  

  // build the query string
  if (typeof params.force !== 'undefined') {
    if (params.force.toLowerCase && (params.force = params.force.toLowerCase())
      && (params.force === 'no' || params.force === 'off')
    ) {
      query.force = false;
    } else {
      query.force = !!params.force;
    }
  }
  
  if (typeof params.full !== 'undefined') {
    if (params.full.toLowerCase && (params.full = params.full.toLowerCase())
      && (params.full === 'no' || params.full === 'off')
    ) {
      query.full = false;
    } else {
      query.full = !!params.full;
    }
  }
  
  if (typeof params.ignore_indices !== 'undefined') {
    if (_.contains(ignoreIndicesOptions, params.ignore_indices)) {
      query.ignore_indices = params.ignore_indices;
    } else {
      throw new TypeError(
        'Invalid ignore_indices: ' + params.ignore_indices +
        ' should be one of ' + ignoreIndicesOptions.join(', ') + '.'
      );
    }
  }
  
  if (typeof params.refresh !== 'undefined') {
    if (params.refresh.toLowerCase && (params.refresh = params.refresh.toLowerCase())
      && (params.refresh === 'no' || params.refresh === 'off')
    ) {
      query.refresh = false;
    } else {
      query.refresh = !!params.refresh;
    }
  }
  
  request.url = request.url + _.makeQueryString(query);

  return this.client.request(request);
}

module.exports = doIndicesFlush;