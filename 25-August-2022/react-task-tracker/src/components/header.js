import React from "react";
import PropTypes from 'prop-types'

const Header= (props) => {
    return (
        <header>
            {/* <h1>Hello Header </h1> */}
            {/* <h1>Hello,{props.title}</h1> */}
            <h1 style={headingStyle}>{props.title}</h1>
        </header>
    );
};
const headingStyle={
    color:"darkcyan",
    backgroundColor:"lightblue",
    textAlign:"center",
};
Header.defaultProps={
    title:"Task tracker",

}
Header.propType={
    title:PropTypes.string.isRequired,
}
export default Header;
