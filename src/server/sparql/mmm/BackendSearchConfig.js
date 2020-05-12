import { manuscriptsPerspectiveConfig } from './perspective_configs/ManuscriptsPerspectiveConfig'
import { worksPerspectiveConfig } from './perspective_configs/WorksPerspectiveConfig'
import { eventsPerspectiveConfig } from './perspective_configs/EventsPerspectiveConfig'
import { actorsPerspectiveConfig } from './perspective_configs/ActorsPerspectiveConfig'
import { placesPerspectiveConfig } from './perspective_configs/PlacesPerspectiveConfig'
import {
  productionPlacesQuery,
  lastKnownLocationsQuery,
  migrationsQuery
} from './sparql_queries/SparqlQueriesManuscripts'
import { eventPlacesQuery } from './sparql_queries/SparqlQueriesEvents'
import { actorPlacesQuery } from './sparql_queries/SparqlQueriesActors'
import {
  placePropertiesInfoWindow,
  manuscriptsProducedAt,
  lastKnownLocationsAt,
  allPlacesQuery
} from './sparql_queries/SparqlQueriesPlaces'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from '../SparqlObjectMapper'
import { mapPlaces } from '../Mappers'

export const backendSearchConfig = {
  manuscripts: manuscriptsPerspectiveConfig,
  works: worksPerspectiveConfig,
  events: eventsPerspectiveConfig,
  actors: actorsPerspectiveConfig,
  places: placesPerspectiveConfig,
  placesMsProduced: {
    perspectiveID: 'manuscripts',
    q: productionPlacesQuery,
    filterTarget: 'manuscripts',
    resultMapper: mapPlaces,
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: manuscriptsProducedAt
    }
  },
  lastKnownLocations: {
    perspectiveID: 'manuscripts',
    q: lastKnownLocationsQuery,
    filterTarget: 'manuscripts',
    resultMapper: mapPlaces,
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: lastKnownLocationsAt
    }
  },
  placesMsMigrations: {
    perspectiveID: 'manuscripts',
    q: migrationsQuery,
    filterTarget: 'manuscript__id',
    resultMapper: makeObjectList
  },
  placesEvents: {
    perspectiveID: 'events',
    q: eventPlacesQuery,
    filterTarget: 'event',
    resultMapper: mapPlaces,
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: ''
    }
  },
  placesActors: {
    perspectiveID: 'actors',
    q: actorPlacesQuery,
    filterTarget: 'actor',
    resultMapper: mapPlaces,
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: ''
    }
  },
  placesAll: {
    perspectiveID: 'places',
    q: allPlacesQuery,
    filterTarget: 'id',
    resultMapper: makeObjectList,
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: ''
    }
  },
  jenaText: {
    perspectiveID: 'manuscripts',
    properties: fullTextSearchProperties
  }
}
