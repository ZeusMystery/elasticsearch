/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// IMPORTANT: this is not a production ready code & purely for demonstration purposes,
//            we make no guarantees on it's security and stability

// NOTE: to make this endpoint work, you should create an ApiKey with 'read' permissions

'use strict'

const { Client } = require('@elastic/elasticsearch')
const authorize = require('../utils/authorize')

const INDEX = '<index-name>'
const client = new Client({
  cloud: {
    id: process.env.ELASTIC_CLOUD_ID
  }
})

module.exports = async (req, res) => {
  const [err, token] = authorize(req)
  if (err) {
    res.status(401)
    res.json(err)
    return
  }

  if (typeof req.body.text !== 'string') {
    res.status(400)
    res.json({
      error: 'Bad Request',
      message: 'Missing parameter "body.text"',
      statusCode: 400
    })
    return
  }

  try {
    const response = await client.search({
      index: INDEX,
      // You could directly send from the browser
      // the Elasticsearch's query DSL, but it will
      // expose you to the risk that a malicious user
      // could overload your cluster by crafting
      // expensive queries.
      query: {
        match: { field: req.body.text }
      }
    }, {
      headers: {
        Authorization: `ApiKey ${token}`
      }
    })

    // It might be useful to configure http control caching headers
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
    // res.setHeader('stale-while-revalidate', '30')
    res.json(response)
  } catch (err) {
    res.status(err.statusCode || 500)
    res.json({
      error: err.name,
      message: err.message,
      statusCode: err.statusCode || 500
    })
  }
}
