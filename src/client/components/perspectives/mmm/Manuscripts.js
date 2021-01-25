import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
import ApexChart from '../../facet_results/ApexChart'
import Export from '../../facet_results/Export'
import { MAPBOX_ACCESS_TOKEN, MAPBOX_STYLE } from '../../../configs/mmm/GeneralConfig'
import {
  createSingleLineChartData,
  createMultipleLineChartData
} from '../../../configs/sampo/ApexCharts/LineChartConfig'

const Manuscripts = props => {
  const { rootUrl, perspective } = props
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={`${props.rootUrl}/${perspective.id}/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            data={props.facetResults}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='manuscripts'
            facetClass='manuscripts'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/production_places`}
        render={() =>
          <LeafletMap
            center={[22.43, 10.37]}
            zoom={2}
            results={props.placesResults.results}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            facet={props.facetData.facets.productionPlace}
            facetID='productionPlace'
            resultClass='placesMsProduced'
            facetClass='manuscripts'
            mapMode='cluster'
            showMapModeControl={false}
            instance={props.placesResults.instanceTableData}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.placesResults.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            showExternalLayers={false}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/production_dates`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.facetResults.results}
            rawDataUpdateID={props.facetResults.resultUpdateID}
            facetUpdateID={props.facetData.facetUpdateID}
            fetching={props.facetResults.fetching}
            fetchData={props.fetchResults}
            createChartData={createSingleLineChartData}
            title='Manuscript production by decade'
            xaxisTitle='Decade'
            yaxisTitle='Manuscript count'
            seriesTitle='Manuscript count'
            resultClass='productionTimespanLineChart'
            facetClass='manuscripts'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/event_dates`}
        render={() =>
          <ApexChart
            pageType='facetResults'
            rawData={props.facetResults.results}
            rawDataUpdateID={props.facetResults.resultUpdateID}
            facetUpdateID={props.facetData.facetUpdateID}
            fetching={props.facetResults.fetching}
            fetchData={props.fetchResults}
            createChartData={createMultipleLineChartData}
            title='Manuscript events by decade'
            xaxisTitle='Decade'
            yaxisTitle='Count'
            seriesTitle='Count'
            resultClass='eventLineChart'
            facetClass='manuscripts'
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/last_known_locations`}
        render={() =>
          <LeafletMap
            center={[22.43, 10.37]}
            zoom={2}
            results={props.placesResults.results}
            layers={props.leafletMapLayers}
            pageType='facetResults'
            facetUpdateID={props.facetData.facetUpdateID}
            facet={props.facetData.facets.lastKnownLocation}
            facetID='lastKnownLocation'
            resultClass='lastKnownLocations'
            facetClass='manuscripts'
            mapMode='cluster'
            showMapModeControl={false}
            instance={props.placesResults.instanceTableData}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.placesResults.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            showExternalLayers={false}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/migrations`}
        render={() =>
          <Deck
            results={props.placesResults.results}
            facetUpdateID={props.facetData.facetUpdateID}
            instanceAnalysisData={props.placesResults.instanceAnalysisData}
            instanceAnalysisDataUpdateID={props.placesResults.instanceAnalysisDataUpdateID}
            resultClass='placesMsMigrations'
            facetClass='manuscripts'
            fetchResults={props.fetchResults}
            fetchInstanceAnalysis={props.fetchInstanceAnalysis}
            fetching={props.placesResults.fetching}
            fetchingInstanceAnalysisData={props.placesResults.fetchingInstanceAnalysisData}
            layerType='arcLayer'
            getArcWidth={d => d.instanceCountScaled}
            fromText={intl.get('deckGlMap.manuscriptMigrations.from')}
            toText={intl.get('deckGlMap.manuscriptMigrations.to')}
            countText={intl.get('deckGlMap.manuscriptMigrations.count')}
            legendTitle={intl.get('deckGlMap.manuscriptMigrations.legendTitle')}
            legendFromText={intl.get('deckGlMap.manuscriptMigrations.legendFrom')}
            legendToText={intl.get('deckGlMap.manuscriptMigrations.legendTo')}
            showMoreText={intl.get('deckGlMap.showMoreInformation')}
            listHeadingSingleInstance={intl.get('deckGlMap.manuscriptMigrations.listHeadingSingleInstance')}
            listHeadingMultipleInstances={intl.get('deckGlMap.manuscriptMigrations.listHeadingMultipleInstances')}
            showTooltips
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            data={props.facetResults}
            resultClass='manuscripts'
            facetClass='manuscripts'
            pageType='facetResults'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
          />}
      />
    </>
  )
}

Manuscripts.propTypes = {
  facetResults: PropTypes.object.isRequired,
  placesResults: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default Manuscripts
