import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
// import ApexChart from '../../facet_results/ApexChart'
import Export from '../../facet_results/Export'
import {
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_STYLE
} from '../../../configs/mmm/GeneralConfig'
// import {
//   createSingleLineChartData,
//   createMultipleLineChartData
// } from '../../../configs/sampo/ApexCharts/LineChartConfig'
// import { coseLayout, cytoscapeStyle, preprocess } from '../../../configs/sampo/Cytoscape.js/NetworkConfig'
import { createPopUpContentMMM } from '../../../configs/mmm/Leaflet/LeafletConfig'

const Manuscripts = props => {
  const { rootUrl, perspective, screenSize } = props
  // const layerControlExpanded = screenSize === 'md' ||
  //   screenSize === 'lg' ||
  //   screenSize === 'xl'
  let popupMaxHeight = 320
  let popupMinWidth = 280
  let popupMaxWidth = 280
  if (screenSize === 'xs' || screenSize === 'sm') {
    popupMaxHeight = 200
    popupMinWidth = 150
    popupMaxWidth = 150
  }
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
        layoutConfig={props.layoutConfig}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={`${props.rootUrl}/${perspective.id}/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            data={props.perspectiveState}
            facetUpdateID={props.facetState.facetUpdateID}
            resultClass='manuscripts'
            facetClass='manuscripts'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
            rootUrl={rootUrl}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/production_places`}
        render={() =>
          <LeafletMap
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
            center={props.perspectiveState.maps.placesMsProduced.center}
            zoom={props.perspectiveState.maps.placesMsProduced.zoom}
            results={props.perspectiveState.results}
            leafletMapState={props.leafletMapState}
            pageType='facetResults'
            facetUpdateID={props.facetState.facetUpdateID}
            facet={props.facetState.facets.productionPlace}
            facetID='productionPlace'
            resultClass='placesMsProduced'
            facetClass='manuscripts'
            mapMode='cluster'
            instance={props.perspectiveState.instanceTableData}
            createPopUpContent={createPopUpContentMMM}
            popupMaxHeight={popupMaxHeight}
            popupMinWidth={popupMinWidth}
            popupMaxWidth={popupMaxWidth}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            clearGeoJSONLayers={props.clearGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.perspectiveState.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            updateMapBounds={props.updateMapBounds}
            showError={props.showError}
            showExternalLayers={false}
            // layerControlExpanded={layerControlExpanded}
            // customMapControl
            // layerConfigs={layerConfigs}
            infoHeaderExpanded={props.perspectiveState.facetedSearchHeaderExpanded}
            layoutConfig={props.layoutConfig}
          />}
      />
      {/* <Route
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
      /> */}
      {/* <Route
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
      /> */}
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/last_known_locations`}
        render={() =>
          <LeafletMap
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
            center={props.perspectiveState.maps.lastKnownLocations.center}
            zoom={props.perspectiveState.maps.lastKnownLocations.zoom}
            results={props.perspectiveState.results}
            leafletMapState={props.leafletMapState}
            pageType='facetResults'
            facetUpdateID={props.facetState.facetUpdateID}
            facet={props.facetState.facets.lastKnownLocation}
            facetID='lastKnownLocation'
            resultClass='lastKnownLocations'
            facetClass='manuscripts'
            mapMode='cluster'
            instance={props.perspectiveState.instanceTableData}
            createPopUpContent={createPopUpContentMMM}
            popupMaxHeight={popupMaxHeight}
            popupMinWidth={popupMinWidth}
            popupMaxWidth={popupMaxWidth}
            fetchResults={props.fetchResults}
            fetchGeoJSONLayers={props.fetchGeoJSONLayers}
            clearGeoJSONLayers={props.clearGeoJSONLayers}
            fetchByURI={props.fetchByURI}
            fetching={props.perspectiveState.fetching}
            showInstanceCountInClusters
            updateFacetOption={props.updateFacetOption}
            updateMapBounds={props.updateMapBounds}
            showError={props.showError}
            showExternalLayers={false}
            // layerControlExpanded={layerControlExpanded}
            // customMapControl
            // layerConfigs={layerConfigs}
            infoHeaderExpanded={props.perspectiveState.facetedSearchHeaderExpanded}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/migrations`}
        render={() =>
          <Deck
            center={props.perspectiveState.maps.placesMsMigrations.center}
            zoom={props.perspectiveState.maps.placesMsMigrations.zoom}
            results={props.perspectiveState.results}
            facetUpdateID={props.facetState.facetUpdateID}
            instanceAnalysisData={props.perspectiveState.instanceAnalysisData}
            instanceAnalysisDataUpdateID={props.perspectiveState.instanceAnalysisDataUpdateID}
            resultClass='placesMsMigrations'
            facetClass='manuscripts'
            fetchResults={props.fetchResults}
            fetchInstanceAnalysis={props.fetchInstanceAnalysis}
            fetching={props.perspectiveState.fetching}
            fetchingInstanceAnalysisData={props.perspectiveState.fetchingInstanceAnalysisData}
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
            instanceVariable='manuscript'
            showTooltips
            mapBoxAccessToken={MAPBOX_ACCESS_TOKEN}
            mapBoxStyle={MAPBOX_STYLE}
            layoutConfig={props.layoutConfig}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            data={props.perspectiveState}
            resultClass='manuscripts'
            facetClass='manuscripts'
            pageType='facetResults'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            layoutConfig={props.layoutConfig}
          />}
      />
    </>
  )
}

Manuscripts.propTypes = {
  /**
   * Faceted search configs and results of this perspective.
   */
  perspectiveState: PropTypes.object.isRequired,
  /**
    * Facet configs and values.
    */
  facetState: PropTypes.object.isRequired,
  /**
    * Facet values where facets constrain themselves, used for statistics.
    */
  facetConstrainSelfState: PropTypes.object.isRequired,
  /**
    * Leaflet map config and external layers.
    */
  leafletMapState: PropTypes.object.isRequired,
  /**
    * Redux action for fetching paginated results.
    */
  fetchPaginatedResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching all results.
    */
  fetchResults: PropTypes.func.isRequired,
  /**
    * Redux action for fetching facet values for statistics.
    */
  fetchFacetConstrainSelf: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers.
    */
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for loading external GeoJSON layers via backend.
    */
  fetchGeoJSONLayersBackend: PropTypes.func.isRequired,
  /**
    * Redux action for clearing external GeoJSON layers.
    */
  clearGeoJSONLayers: PropTypes.func.isRequired,
  /**
    * Redux action for fetching information about a single entity.
    */
  fetchByURI: PropTypes.func.isRequired,
  /**
    * Redux action for updating the page of paginated results.
    */
  updatePage: PropTypes.func.isRequired,
  /**
    * Redux action for updating the rows per page of paginated results.
    */
  updateRowsPerPage: PropTypes.func.isRequired,
  /**
    * Redux action for sorting the paginated results.
    */
  sortResults: PropTypes.func.isRequired,
  /**
    * Redux action for updating the active selection or config of a facet.
    */
  showError: PropTypes.func.isRequired,
  /**
    * Redux action for showing an error
    */
  updateFacetOption: PropTypes.func.isRequired,
  /**
    * Routing information from React Router.
    */
  routeProps: PropTypes.object.isRequired,
  /**
    * Perspective config.
    */
  perspective: PropTypes.object.isRequired,
  /**
    * State of the animation, used by TemporalMap.
    */
  animationValue: PropTypes.array.isRequired,
  /**
    * Redux action for animating TemporalMap.
    */
  animateMap: PropTypes.func.isRequired,
  /**
    * Current screen size.
    */
  screenSize: PropTypes.string.isRequired,
  /**
    * Root url of the application.
    */
  rootUrl: PropTypes.string.isRequired,
  layoutConfig: PropTypes.object.isRequired
}

export default Manuscripts
