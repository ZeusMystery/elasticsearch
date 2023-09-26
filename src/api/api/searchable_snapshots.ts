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

export default class SearchableSnapshots {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Retrieve node-level cache statistics about searchable snapshots.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/searchable-snapshots-apis.html | Elasticsearch API documentation}
    */
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest | TB.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsCacheStatsResponse>
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest | TB.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsCacheStatsResponse, unknown>>
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest | TB.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsCacheStatsResponse>
  async cacheStats (this: That, params?: T.SearchableSnapshotsCacheStatsRequest | TB.SearchableSnapshotsCacheStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['node_id']
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
    if (params.node_id != null) {
      method = 'GET'
      path = `/_searchable_snapshots/${encodeURIComponent(params.node_id.toString())}/cache/stats`
    } else {
      method = 'GET'
      path = '/_searchable_snapshots/cache/stats'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Clear the cache of searchable snapshots.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/searchable-snapshots-apis.html | Elasticsearch API documentation}
    */
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest | TB.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsClearCacheResponse>
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest | TB.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsClearCacheResponse, unknown>>
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest | TB.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsClearCacheResponse>
  async clearCache (this: That, params?: T.SearchableSnapshotsClearCacheRequest | TB.SearchableSnapshotsClearCacheRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
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
    if (params.index != null) {
      method = 'POST'
      path = `/${encodeURIComponent(params.index.toString())}/_searchable_snapshots/cache/clear`
    } else {
      method = 'POST'
      path = '/_searchable_snapshots/cache/clear'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Mount a snapshot as a searchable index.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/searchable-snapshots-api-mount-snapshot.html | Elasticsearch API documentation}
    */
  async mount (this: That, params: T.SearchableSnapshotsMountRequest | TB.SearchableSnapshotsMountRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsMountResponse>
  async mount (this: That, params: T.SearchableSnapshotsMountRequest | TB.SearchableSnapshotsMountRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsMountResponse, unknown>>
  async mount (this: That, params: T.SearchableSnapshotsMountRequest | TB.SearchableSnapshotsMountRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsMountResponse>
  async mount (this: That, params: T.SearchableSnapshotsMountRequest | TB.SearchableSnapshotsMountRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['repository', 'snapshot']
    const acceptedBody: string[] = ['index', 'renamed_index', 'index_settings', 'ignore_index_settings']
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

    const method = 'POST'
    const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_mount`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Retrieve shard-level statistics about searchable snapshots.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/8.10/searchable-snapshots-apis.html | Elasticsearch API documentation}
    */
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest | TB.SearchableSnapshotsStatsRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.SearchableSnapshotsStatsResponse>
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest | TB.SearchableSnapshotsStatsRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.SearchableSnapshotsStatsResponse, unknown>>
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest | TB.SearchableSnapshotsStatsRequest, options?: TransportRequestOptions): Promise<T.SearchableSnapshotsStatsResponse>
  async stats (this: That, params?: T.SearchableSnapshotsStatsRequest | TB.SearchableSnapshotsStatsRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['index']
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
    if (params.index != null) {
      method = 'GET'
      path = `/${encodeURIComponent(params.index.toString())}/_searchable_snapshots/stats`
    } else {
      method = 'GET'
      path = '/_searchable_snapshots/stats'
    }
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
