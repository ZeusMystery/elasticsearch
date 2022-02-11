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

import InternalApi from './api/_internal'
import AsyncSearchApi from './api/async_search'
import AutoscalingApi from './api/autoscaling'
import bulkApi from './api/bulk'
import CatApi from './api/cat'
import CcrApi from './api/ccr'
import clearScrollApi from './api/clear_scroll'
import closePointInTimeApi from './api/close_point_in_time'
import ClusterApi from './api/cluster'
import countApi from './api/count'
import createApi from './api/create'
import DanglingIndicesApi from './api/dangling_indices'
import deleteApi from './api/delete'
import deleteByQueryApi from './api/delete_by_query'
import deleteByQueryRethrottleApi from './api/delete_by_query_rethrottle'
import deleteScriptApi from './api/delete_script'
import EnrichApi from './api/enrich'
import EqlApi from './api/eql'
import existsApi from './api/exists'
import existsSourceApi from './api/exists_source'
import explainApi from './api/explain'
import FeaturesApi from './api/features'
import fieldCapsApi from './api/field_caps'
import FleetApi from './api/fleet'
import getApi from './api/get'
import getScriptApi from './api/get_script'
import getScriptContextApi from './api/get_script_context'
import getScriptLanguagesApi from './api/get_script_languages'
import getSourceApi from './api/get_source'
import GraphApi from './api/graph'
import IlmApi from './api/ilm'
import indexApi from './api/index'
import IndicesApi from './api/indices'
import infoApi from './api/info'
import IngestApi from './api/ingest'
import knnSearchApi from './api/knn_search'
import LicenseApi from './api/license'
import LogstashApi from './api/logstash'
import mgetApi from './api/mget'
import MigrationApi from './api/migration'
import MlApi from './api/ml'
import MonitoringApi from './api/monitoring'
import msearchApi from './api/msearch'
import msearchTemplateApi from './api/msearch_template'
import mtermvectorsApi from './api/mtermvectors'
import NodesApi from './api/nodes'
import openPointInTimeApi from './api/open_point_in_time'
import pingApi from './api/ping'
import putScriptApi from './api/put_script'
import rankEvalApi from './api/rank_eval'
import reindexApi from './api/reindex'
import reindexRethrottleApi from './api/reindex_rethrottle'
import renderSearchTemplateApi from './api/render_search_template'
import RollupApi from './api/rollup'
import scriptsPainlessExecuteApi from './api/scripts_painless_execute'
import scrollApi from './api/scroll'
import searchApi from './api/search'
import searchMvtApi from './api/search_mvt'
import searchShardsApi from './api/search_shards'
import searchTemplateApi from './api/search_template'
import SearchableSnapshotsApi from './api/searchable_snapshots'
import SecurityApi from './api/security'
import ShutdownApi from './api/shutdown'
import SlmApi from './api/slm'
import SnapshotApi from './api/snapshot'
import SqlApi from './api/sql'
import SslApi from './api/ssl'
import TasksApi from './api/tasks'
import termsEnumApi from './api/terms_enum'
import termvectorsApi from './api/termvectors'
import TextStructureApi from './api/text_structure'
import TransformApi from './api/transform'
import updateApi from './api/update'
import updateByQueryApi from './api/update_by_query'
import updateByQueryRethrottleApi from './api/update_by_query_rethrottle'
import WatcherApi from './api/watcher'
import XpackApi from './api/xpack'

export default interface API {
  new(): API
  Internal: InternalApi
  asyncSearch: AsyncSearchApi
  autoscaling: AutoscalingApi
  bulk: typeof bulkApi
  cat: CatApi
  ccr: CcrApi
  clearScroll: typeof clearScrollApi
  closePointInTime: typeof closePointInTimeApi
  cluster: ClusterApi
  count: typeof countApi
  create: typeof createApi
  danglingIndices: DanglingIndicesApi
  delete: typeof deleteApi
  deleteByQuery: typeof deleteByQueryApi
  deleteByQueryRethrottle: typeof deleteByQueryRethrottleApi
  deleteScript: typeof deleteScriptApi
  enrich: EnrichApi
  eql: EqlApi
  exists: typeof existsApi
  existsSource: typeof existsSourceApi
  explain: typeof explainApi
  features: FeaturesApi
  fieldCaps: typeof fieldCapsApi
  fleet: FleetApi
  get: typeof getApi
  getScript: typeof getScriptApi
  getScriptContext: typeof getScriptContextApi
  getScriptLanguages: typeof getScriptLanguagesApi
  getSource: typeof getSourceApi
  graph: GraphApi
  ilm: IlmApi
  index: typeof indexApi
  indices: IndicesApi
  info: typeof infoApi
  ingest: IngestApi
  knnSearch: typeof knnSearchApi
  license: LicenseApi
  logstash: LogstashApi
  mget: typeof mgetApi
  migration: MigrationApi
  ml: MlApi
  monitoring: MonitoringApi
  msearch: typeof msearchApi
  msearchTemplate: typeof msearchTemplateApi
  mtermvectors: typeof mtermvectorsApi
  nodes: NodesApi
  openPointInTime: typeof openPointInTimeApi
  ping: typeof pingApi
  putScript: typeof putScriptApi
  rankEval: typeof rankEvalApi
  reindex: typeof reindexApi
  reindexRethrottle: typeof reindexRethrottleApi
  renderSearchTemplate: typeof renderSearchTemplateApi
  rollup: RollupApi
  scriptsPainlessExecute: typeof scriptsPainlessExecuteApi
  scroll: typeof scrollApi
  search: typeof searchApi
  searchMvt: typeof searchMvtApi
  searchShards: typeof searchShardsApi
  searchTemplate: typeof searchTemplateApi
  searchableSnapshots: SearchableSnapshotsApi
  security: SecurityApi
  shutdown: ShutdownApi
  slm: SlmApi
  snapshot: SnapshotApi
  sql: SqlApi
  ssl: SslApi
  tasks: TasksApi
  termsEnum: typeof termsEnumApi
  termvectors: typeof termvectorsApi
  textStructure: TextStructureApi
  transform: TransformApi
  update: typeof updateApi
  updateByQuery: typeof updateByQueryApi
  updateByQueryRethrottle: typeof updateByQueryRethrottleApi
  watcher: WatcherApi
  xpack: XpackApi
}

const kInternal = Symbol('Internal')
const kAsyncSearch = Symbol('AsyncSearch')
const kAutoscaling = Symbol('Autoscaling')
const kCat = Symbol('Cat')
const kCcr = Symbol('Ccr')
const kCluster = Symbol('Cluster')
const kDanglingIndices = Symbol('DanglingIndices')
const kEnrich = Symbol('Enrich')
const kEql = Symbol('Eql')
const kFeatures = Symbol('Features')
const kFleet = Symbol('Fleet')
const kGraph = Symbol('Graph')
const kIlm = Symbol('Ilm')
const kIndices = Symbol('Indices')
const kIngest = Symbol('Ingest')
const kLicense = Symbol('License')
const kLogstash = Symbol('Logstash')
const kMigration = Symbol('Migration')
const kMl = Symbol('Ml')
const kMonitoring = Symbol('Monitoring')
const kNodes = Symbol('Nodes')
const kRollup = Symbol('Rollup')
const kSearchableSnapshots = Symbol('SearchableSnapshots')
const kSecurity = Symbol('Security')
const kShutdown = Symbol('Shutdown')
const kSlm = Symbol('Slm')
const kSnapshot = Symbol('Snapshot')
const kSql = Symbol('Sql')
const kSsl = Symbol('Ssl')
const kTasks = Symbol('Tasks')
const kTextStructure = Symbol('TextStructure')
const kTransform = Symbol('Transform')
const kWatcher = Symbol('Watcher')
const kXpack = Symbol('Xpack')

export default class API {
  [kInternal]: symbol | null
  [kAsyncSearch]: symbol | null
  [kAutoscaling]: symbol | null
  [kCat]: symbol | null
  [kCcr]: symbol | null
  [kCluster]: symbol | null
  [kDanglingIndices]: symbol | null
  [kEnrich]: symbol | null
  [kEql]: symbol | null
  [kFeatures]: symbol | null
  [kFleet]: symbol | null
  [kGraph]: symbol | null
  [kIlm]: symbol | null
  [kIndices]: symbol | null
  [kIngest]: symbol | null
  [kLicense]: symbol | null
  [kLogstash]: symbol | null
  [kMigration]: symbol | null
  [kMl]: symbol | null
  [kMonitoring]: symbol | null
  [kNodes]: symbol | null
  [kRollup]: symbol | null
  [kSearchableSnapshots]: symbol | null
  [kSecurity]: symbol | null
  [kShutdown]: symbol | null
  [kSlm]: symbol | null
  [kSnapshot]: symbol | null
  [kSql]: symbol | null
  [kSsl]: symbol | null
  [kTasks]: symbol | null
  [kTextStructure]: symbol | null
  [kTransform]: symbol | null
  [kWatcher]: symbol | null
  [kXpack]: symbol | null
  constructor () {
    this[kInternal] = null
    this[kAsyncSearch] = null
    this[kAutoscaling] = null
    this[kCat] = null
    this[kCcr] = null
    this[kCluster] = null
    this[kDanglingIndices] = null
    this[kEnrich] = null
    this[kEql] = null
    this[kFeatures] = null
    this[kFleet] = null
    this[kGraph] = null
    this[kIlm] = null
    this[kIndices] = null
    this[kIngest] = null
    this[kLicense] = null
    this[kLogstash] = null
    this[kMigration] = null
    this[kMl] = null
    this[kMonitoring] = null
    this[kNodes] = null
    this[kRollup] = null
    this[kSearchableSnapshots] = null
    this[kSecurity] = null
    this[kShutdown] = null
    this[kSlm] = null
    this[kSnapshot] = null
    this[kSql] = null
    this[kSsl] = null
    this[kTasks] = null
    this[kTextStructure] = null
    this[kTransform] = null
    this[kWatcher] = null
    this[kXpack] = null
  }
}

API.prototype.bulk = bulkApi
API.prototype.clearScroll = clearScrollApi
API.prototype.closePointInTime = closePointInTimeApi
API.prototype.count = countApi
API.prototype.create = createApi
API.prototype.delete = deleteApi
API.prototype.deleteByQuery = deleteByQueryApi
API.prototype.deleteByQueryRethrottle = deleteByQueryRethrottleApi
API.prototype.deleteScript = deleteScriptApi
API.prototype.exists = existsApi
API.prototype.existsSource = existsSourceApi
API.prototype.explain = explainApi
API.prototype.fieldCaps = fieldCapsApi
API.prototype.get = getApi
API.prototype.getScript = getScriptApi
API.prototype.getScriptContext = getScriptContextApi
API.prototype.getScriptLanguages = getScriptLanguagesApi
API.prototype.getSource = getSourceApi
API.prototype.index = indexApi
API.prototype.info = infoApi
API.prototype.knnSearch = knnSearchApi
API.prototype.mget = mgetApi
API.prototype.msearch = msearchApi
API.prototype.msearchTemplate = msearchTemplateApi
API.prototype.mtermvectors = mtermvectorsApi
API.prototype.openPointInTime = openPointInTimeApi
API.prototype.ping = pingApi
API.prototype.putScript = putScriptApi
API.prototype.rankEval = rankEvalApi
API.prototype.reindex = reindexApi
API.prototype.reindexRethrottle = reindexRethrottleApi
API.prototype.renderSearchTemplate = renderSearchTemplateApi
API.prototype.scriptsPainlessExecute = scriptsPainlessExecuteApi
API.prototype.scroll = scrollApi
API.prototype.search = searchApi
API.prototype.searchMvt = searchMvtApi
API.prototype.searchShards = searchShardsApi
API.prototype.searchTemplate = searchTemplateApi
API.prototype.termsEnum = termsEnumApi
API.prototype.termvectors = termvectorsApi
API.prototype.update = updateApi
API.prototype.updateByQuery = updateByQueryApi
API.prototype.updateByQueryRethrottle = updateByQueryRethrottleApi

Object.defineProperties(API.prototype, {
  Internal: {
    get () { return this[kInternal] === null ? (this[kInternal] = new InternalApi(this.transport)) : this[kInternal] }
  },
  asyncSearch: {
    get () { return this[kAsyncSearch] === null ? (this[kAsyncSearch] = new AsyncSearchApi(this.transport)) : this[kAsyncSearch] }
  },
  autoscaling: {
    get () { return this[kAutoscaling] === null ? (this[kAutoscaling] = new AutoscalingApi(this.transport)) : this[kAutoscaling] }
  },
  cat: {
    get () { return this[kCat] === null ? (this[kCat] = new CatApi(this.transport)) : this[kCat] }
  },
  ccr: {
    get () { return this[kCcr] === null ? (this[kCcr] = new CcrApi(this.transport)) : this[kCcr] }
  },
  cluster: {
    get () { return this[kCluster] === null ? (this[kCluster] = new ClusterApi(this.transport)) : this[kCluster] }
  },
  danglingIndices: {
    get () { return this[kDanglingIndices] === null ? (this[kDanglingIndices] = new DanglingIndicesApi(this.transport)) : this[kDanglingIndices] }
  },
  enrich: {
    get () { return this[kEnrich] === null ? (this[kEnrich] = new EnrichApi(this.transport)) : this[kEnrich] }
  },
  eql: {
    get () { return this[kEql] === null ? (this[kEql] = new EqlApi(this.transport)) : this[kEql] }
  },
  features: {
    get () { return this[kFeatures] === null ? (this[kFeatures] = new FeaturesApi(this.transport)) : this[kFeatures] }
  },
  fleet: {
    get () { return this[kFleet] === null ? (this[kFleet] = new FleetApi(this.transport)) : this[kFleet] }
  },
  graph: {
    get () { return this[kGraph] === null ? (this[kGraph] = new GraphApi(this.transport)) : this[kGraph] }
  },
  ilm: {
    get () { return this[kIlm] === null ? (this[kIlm] = new IlmApi(this.transport)) : this[kIlm] }
  },
  indices: {
    get () { return this[kIndices] === null ? (this[kIndices] = new IndicesApi(this.transport)) : this[kIndices] }
  },
  ingest: {
    get () { return this[kIngest] === null ? (this[kIngest] = new IngestApi(this.transport)) : this[kIngest] }
  },
  license: {
    get () { return this[kLicense] === null ? (this[kLicense] = new LicenseApi(this.transport)) : this[kLicense] }
  },
  logstash: {
    get () { return this[kLogstash] === null ? (this[kLogstash] = new LogstashApi(this.transport)) : this[kLogstash] }
  },
  migration: {
    get () { return this[kMigration] === null ? (this[kMigration] = new MigrationApi(this.transport)) : this[kMigration] }
  },
  ml: {
    get () { return this[kMl] === null ? (this[kMl] = new MlApi(this.transport)) : this[kMl] }
  },
  monitoring: {
    get () { return this[kMonitoring] === null ? (this[kMonitoring] = new MonitoringApi(this.transport)) : this[kMonitoring] }
  },
  nodes: {
    get () { return this[kNodes] === null ? (this[kNodes] = new NodesApi(this.transport)) : this[kNodes] }
  },
  rollup: {
    get () { return this[kRollup] === null ? (this[kRollup] = new RollupApi(this.transport)) : this[kRollup] }
  },
  searchableSnapshots: {
    get () { return this[kSearchableSnapshots] === null ? (this[kSearchableSnapshots] = new SearchableSnapshotsApi(this.transport)) : this[kSearchableSnapshots] }
  },
  security: {
    get () { return this[kSecurity] === null ? (this[kSecurity] = new SecurityApi(this.transport)) : this[kSecurity] }
  },
  shutdown: {
    get () { return this[kShutdown] === null ? (this[kShutdown] = new ShutdownApi(this.transport)) : this[kShutdown] }
  },
  slm: {
    get () { return this[kSlm] === null ? (this[kSlm] = new SlmApi(this.transport)) : this[kSlm] }
  },
  snapshot: {
    get () { return this[kSnapshot] === null ? (this[kSnapshot] = new SnapshotApi(this.transport)) : this[kSnapshot] }
  },
  sql: {
    get () { return this[kSql] === null ? (this[kSql] = new SqlApi(this.transport)) : this[kSql] }
  },
  ssl: {
    get () { return this[kSsl] === null ? (this[kSsl] = new SslApi(this.transport)) : this[kSsl] }
  },
  tasks: {
    get () { return this[kTasks] === null ? (this[kTasks] = new TasksApi(this.transport)) : this[kTasks] }
  },
  textStructure: {
    get () { return this[kTextStructure] === null ? (this[kTextStructure] = new TextStructureApi(this.transport)) : this[kTextStructure] }
  },
  transform: {
    get () { return this[kTransform] === null ? (this[kTransform] = new TransformApi(this.transport)) : this[kTransform] }
  },
  watcher: {
    get () { return this[kWatcher] === null ? (this[kWatcher] = new WatcherApi(this.transport)) : this[kWatcher] }
  },
  xpack: {
    get () { return this[kXpack] === null ? (this[kXpack] = new XpackApi(this.transport)) : this[kXpack] }
  }
})
