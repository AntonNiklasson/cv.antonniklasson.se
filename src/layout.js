import React from 'react'
import Helmet from 'react-helmet'

export default props => (
  <React.Fragment>
    <Helmet>
			<title>{props.title}</title>
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
    </Helmet>
    {props.children}
  </React.Fragment>
)