import {
  actorProperties
} from '../sparql_queries/SparqlQueriesActors'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const actorsPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/mmm/sparql',
    prefixes,
    useAuth: false
  },
  facetClass: 'crm:E21_Person crm:E74_Group crm:E39_Actor',
  includeInSitemap: true,
  paginatedResults: {
    properties: actorProperties
  },
  instance: {
    properties: actorProperties,
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
    type: {
      predicate: 'a',
      facetValueFilter: '',
      type: 'list',
      labelPath: 'a/(skos:prefLabel|rdfs:label)'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    },
    birthDateTimespan: {
      id: 'birthDateTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'crm:P98i_was_born/crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'crm:P98i_was_born/crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: 'crm:P98i_was_born/crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    deathDateTimespan: {
      id: 'deathDateTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'crm:P100i_died_in/crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'crm:P100i_died_in/crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: 'crm:P98i_was_born/crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    place: {
      id: 'source',
      facetValueFilter: `
      ?id dct:source <http://vocab.getty.edu/tgn/> .
      `,
      labelPath: '^crm:P11_had_participant/crm:P7_took_place_at/skos:prefLabel',
      predicate: '^crm:P11_had_participant/crm:P7_took_place_at',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: '^crm:P11_had_participant/crm:P7_took_place_at/gvp:broaderPreferred+',
      type: 'hierarchical'
    },
    work: {
      labelPath: `
        (^mmm-schema:carried_out_by_as_possible_author
        |^mmm-schema:carried_out_by_as_author
        |^mmm-schema:carried_out_by_as_commissioner
        |^mmm-schema:carried_out_by_as_editor)
        /frbroo:R16_initiated/skos:prefLabel
      `
    }
  }
}
