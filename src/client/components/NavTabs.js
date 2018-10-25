import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavTabs = (props) => {
  const handleChange = (event, value) => {
    props.updateResultFormat(value);
  };
  // <Tab value="migrationMap" label="migrations" />
  return (
    <Tabs value={props.resultFormat} onChange={handleChange}>
      <Tab value="table" label="Table" />
      <Tab value="creationPlaceMap" label="creation places" />

      <Tab value="statistics" label="Statistics" />
    </Tabs>
  );
};

NavTabs.propTypes = {
  resultFormat: PropTypes.string.isRequired,
  updateResultFormat: PropTypes.func.isRequired
};

export default NavTabs;
