import React from 'react';

/**
 * Styling
 */

 const headerStyle = {
	 gridRow : 1,
	 gridColumn : 1/12,
	 minHeight: '0.6vh'
 }

 /**
	* Component
	*/

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
			<header style={headerStyle}> Test</header>
		)
  }

  componentDidMount() {
  }
}

export default Header;
