import {
  eventProperties
} from '../sparql_queries/SparqlQueriesEvents'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const eventsPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/mmm/sparql',
    prefixes,
    useAuth: false
  },
  facetClass: 'crm:E10_Transfer_of_Custody crm:E12_Production mmm-schema:ManuscriptActivity',
  includeInSitemap: true,
  paginatedResults: {
    properties: eventProperties
  },
  instance: {
    properties: eventProperties,
    relatedInstances: ''
  },
  facets: {
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel'
    },
    type: {
      predicate: 'a',
      facetValueFilter: '',
      type: 'list',
      labelPath: 'a/(skos:prefLabel|rdfs:label)'
    },
    manuscript: {
      textQueryPredicate: `
        (crm:P30_transferred_custody_of
         |crm:P108_has_produced
         |mmm-schema:observed_manuscript)`,
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text',
      labelPath: `(crm:P30_transferred_custody_of
                  |crm:P108_has_produced
                  |mmm-schema:observed_manuscript
                  )/skos:prefLabel`
    },
    eventTimespan: {
      id: 'eventTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: 'crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    place: {
      id: 'place',
      facetValueFilter: `
      ?id dct:source <http://vocab.getty.edu/tgn/> .
      `,
      label: 'Place',
      labelPath: 'crm:P7_took_place_at/skos:prefLabel',
      predicate: 'crm:P7_took_place_at',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: 'crm:P7_took_place_at/gvp:broaderPreferred+',
      type: 'hierarchical'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    }
  }
}
