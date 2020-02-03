import { runSelectQuery } from './SparqlApi'
import { prefixes } from './SparqlQueriesPrefixes'
import { jenaQuery } from './SparqlQueriesGeneral'
import { makeObjectList } from './SparqlObjectMapper'
import { endpoint } from './FacetConfigsMMM'

export const queryJenaIndex = async ({
  queryTerm,
  resultFormat
}) => {
  let q = jenaQuery
  q = q.replace('<QUERY>', `
  ?id text:query ('${queryTerm.toLowerCase()}' 2000) .
  `)
  const results = await runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: makeObjectList,
    resultFormat
  })
  return results
};
