import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './error'
import options from './options'
import animation from './animation'
import leafletMap from './leafletMap'
// portal spefic reducers:
import fullTextSearch from './mmm/fullTextSearch'
import manuscripts from './mmm/manuscripts'
import works from './mmm/works'
import events from './mmm/events'
import actors from './mmm/actors'
import places from './mmm/places'
import collections from './mmm/collections'
import expressions from './mmm/expressions'
import manuscriptsFacets from './mmm/manuscriptsFacets'
import manuscriptsFacetsConstrainSelf from './mmm/manuscriptsFacetsConstrainSelf'
import worksFacets from './mmm/worksFacets'
import eventsFacets from './mmm/eventsFacets'
import actorsFacets from './mmm/actorsFacets'
import placesFacets from './mmm/placesFacets'

const reducer = combineReducers({
  manuscripts,
  manuscriptsFacets,
  manuscriptsFacetsConstrainSelf,
  works,
  worksFacets,
  events,
  eventsFacets,
  actors,
  actorsFacets,
  places,
  placesFacets,
  collections,
  expressions,
  leafletMap,
  animation,
  options,
  error,
  // clientSideFacetedSearch,
  fullTextSearch,
  toastr: toastrReducer
})

export default reducer
