import React from 'react';

const Main = props => (
  <div>
    {props.children}
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element
};

export default Main;
