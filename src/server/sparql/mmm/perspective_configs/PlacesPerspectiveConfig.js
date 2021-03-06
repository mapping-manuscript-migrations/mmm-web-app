import {
  placePropertiesInstancePage,
  placePropertiesFacetResults
} from '../sparql_queries/SparqlQueriesPlaces'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const placesPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/mmm/sparql',
    prefixes,
    useAuth: false
  },
  facetClass: 'crm:E53_Place',
  includeInSitemap: true,
  paginatedResults: {
    properties: placePropertiesFacetResults
  },
  instance: {
    properties: placePropertiesInstancePage,
    relatedInstances: ''
  },
  facets: {
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      label: 'Source',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    },
    area: {
      id: 'area',
      facetValueFilter: `
      FILTER(?id != <http://ldf.fi/mmm/place/tgn_7026519>)
      `,
      label: 'Area',
      labelPath: 'gvp:broaderPreferred/skos:prefLabel',
      predicate: 'gvp:broaderPreferred',
      parentProperty: 'gvp:broaderPreferred',
      type: 'hierarchical'
    },
    placeType: {
      id: 'type',
      facetValueFilter: '',
      label: 'Type',
      labelPath: 'gvp:placeTypePreferred',
      predicate: 'gvp:placeTypePreferred',
      type: 'list'
    }
  }
}
