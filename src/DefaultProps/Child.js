import React from 'react'
//  REACT PROPTYPES
import { PropTypes } from 'prop-types';


function Child({ name, age, fromParent }) { return <><h2>{name}</h2><h2>{age}</h2><h2>{fromParent}</h2></> }


//  Here you may declare default values for props if not specified in parent
Child.defaultProps = {
    name: 'Anders',
    age: 40,
    fromParent: 'Not found in props, this text is from defaultProps.'
}


//  Here you may determen which data type the props should have
Child.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    fromParent: PropTypes.string
}


export default Child
