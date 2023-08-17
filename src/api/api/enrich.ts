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

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class Enrich {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes an existing enrich policy and its enrich index.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/delete-enrich-policy-api.html | Elasticsearch API documentation}
    */
  async deletePolicy (this: That, params: T.EnrichDeletePolicyRequest | TB.EnrichDeletePolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EnrichDeletePolicyResponse>
  async deletePolicy (this: That, params: T.EnrichDeletePolicyRequest | TB.EnrichDeletePolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EnrichDeletePolicyResponse, unknown>>
  async deletePolicy (this: That, params: T.EnrichDeletePolicyRequest | TB.EnrichDeletePolicyRequest, options?: TransportRequestOptions): Promise<T.EnrichDeletePolicyResponse>
  async deletePolicy (this: That, params: T.EnrichDeletePolicyRequest | TB.EnrichDeletePolicyRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_enrich/policy/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates the enrich index for an existing enrich policy.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/execute-enrich-policy-api.html | Elasticsearch API documentation}
    */
  async executePolicy (this: That, params: T.EnrichExecutePolicyRequest | TB.EnrichExecutePolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EnrichExecutePolicyResponse>
  async executePolicy (this: That, params: T.EnrichExecutePolicyRequest | TB.EnrichExecutePolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EnrichExecutePolicyResponse, unknown>>
  async executePolicy (this: That, params: T.EnrichExecutePolicyRequest | TB.EnrichExecutePolicyRequest, options?: TransportRequestOptions): Promise<T.EnrichExecutePolicyResponse>
  async executePolicy (this: That, params: T.EnrichExecutePolicyRequest | TB.EnrichExecutePolicyRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_enrich/policy/${encodeURIComponent(params.name.toString())}/_execute`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets information about an enrich policy.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-enrich-policy-api.html | Elasticsearch API documentation}
    */
  async getPolicy (this: That, params?: T.EnrichGetPolicyRequest | TB.EnrichGetPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EnrichGetPolicyResponse>
  async getPolicy (this: That, params?: T.EnrichGetPolicyRequest | TB.EnrichGetPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EnrichGetPolicyResponse, unknown>>
  async getPolicy (this: That, params?: T.EnrichGetPolicyRequest | TB.EnrichGetPolicyRequest, options?: TransportRequestOptions): Promise<T.EnrichGetPolicyResponse>
  async getPolicy (this: That, params?: T.EnrichGetPolicyRequest | TB.EnrichGetPolicyRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    let method = ''
    let path = ''
    if (params.name != null) {
      method = 'GET'
      path = `/_enrich/policy/${encodeURIComponent(params.name.toString())}`
    } else {
      method = 'GET'
      path = '/_enrich/policy'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates a new enrich policy.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/put-enrich-policy-api.html | Elasticsearch API documentation}
    */
  async putPolicy (this: That, params: T.EnrichPutPolicyRequest | TB.EnrichPutPolicyRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EnrichPutPolicyResponse>
  async putPolicy (this: That, params: T.EnrichPutPolicyRequest | TB.EnrichPutPolicyRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EnrichPutPolicyResponse, unknown>>
  async putPolicy (this: That, params: T.EnrichPutPolicyRequest | TB.EnrichPutPolicyRequest, options?: TransportRequestOptions): Promise<T.EnrichPutPolicyResponse>
  async putPolicy (this: That, params: T.EnrichPutPolicyRequest | TB.EnrichPutPolicyRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['name']
    const acceptedBody: string[] = ['geo_match', 'match', 'range']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    const userBody: any = params?.body
    let body: Record<string, any> | string
    if (typeof userBody === 'string') {
      body = userBody
    } else {
      body = userBody != null ? { ...userBody } : undefined
    }

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        body = body ?? {}
        // @ts-expect-error
        body[key] = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_enrich/policy/${encodeURIComponent(params.name.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Gets enrich coordinator statistics and information about enrich policies that are currently executing.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/enrich-stats-api.html | Elasticsearch API documentation}
    */
  async stats (this: That, params?: T.EnrichStatsRequest | TB.EnrichStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.EnrichStatsResponse>
  async stats (this: That, params?: T.EnrichStatsRequest | TB.EnrichStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.EnrichStatsResponse, unknown>>
  async stats (this: That, params?: T.EnrichStatsRequest | TB.EnrichStatsRequest, options?: TransportRequestOptions): Promise<T.EnrichStatsResponse>
  async stats (this: That, params?: T.EnrichStatsRequest | TB.EnrichStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_enrich/_stats'
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
