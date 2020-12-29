import { manuscriptsPerspectiveConfig } from './perspective_configs/ManuscriptsPerspectiveConfig'
import { worksPerspectiveConfig } from './perspective_configs/WorksPerspectiveConfig'
import { eventsPerspectiveConfig } from './perspective_configs/EventsPerspectiveConfig'
import { actorsPerspectiveConfig } from './perspective_configs/ActorsPerspectiveConfig'
import { placesPerspectiveConfig } from './perspective_configs/PlacesPerspectiveConfig'
import {
  productionPlacesQuery,
  lastKnownLocationsQuery,
  migrationsQuery,
  productionsByDecadeQuery,
  collectionProperties,
  expressionProperties,
  knowledgeGraphMetadataQuery
} from './sparql_queries/SparqlQueriesManuscripts'
import { eventPlacesQuery } from './sparql_queries/SparqlQueriesEvents'
import { actorPlacesQuery } from './sparql_queries/SparqlQueriesActors'
import {
  placePropertiesInfoWindow,
  manuscriptsProducedAt,
  lastKnownLocationsAt,
  allPlacesQuery,
  actorsAt
} from './sparql_queries/SparqlQueriesPlaces'
import { fullTextSearchProperties } from './sparql_queries/SparqlQueriesFullText'
import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  mapLineChart
  // mapMultipleLineChart
} from '../Mappers'

export const backendSearchConfig = {
  manuscripts: manuscriptsPerspectiveConfig,
  works: worksPerspectiveConfig,
  events: eventsPerspectiveConfig,
  actors: actorsPerspectiveConfig,
  places: placesPerspectiveConfig,
  expressions: {
    perspectiveID: 'manuscripts',
    includeInSitemap: true,
    rdfType: 'frbroo:F2_Expression',
    instance: {
      properties: expressionProperties,
      relatedInstances: ''
    }
  },
  collections: {
    perspectiveID: 'manuscripts',
    includeInSitemap: true,
    rdfType: 'crm:E78_Collection',
    instance: {
      properties: collectionProperties,
      relatedInstances: ''
    }
  },
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
      relatedInstances: actorsAt
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
  productionTimespanLineChart: {
    perspectiveID: 'manuscripts',
    q: productionsByDecadeQuery,
    filterTarget: 'instance',
    resultMapper: mapLineChart
  },
  manuscriptsKnowledgeGraphMetadata: {
    perspectiveID: 'manuscripts',
    q: knowledgeGraphMetadataQuery,
    resultMapper: makeObjectList
  },
  jenaText: {
    perspectiveID: 'manuscripts',
    properties: fullTextSearchProperties
  }
}
