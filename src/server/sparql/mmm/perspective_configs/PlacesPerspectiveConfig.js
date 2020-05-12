import {
  placePropertiesInstancePage,
  placePropertiesFacetResults
} from '../SparqlQueriesPlaces'

export const placesPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/mmm/sparql',
    useAuth: false
  },
  facetClass: 'crm:E53_Place',
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
      parentPredicate: 'gvp:broaderPreferred+',
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
