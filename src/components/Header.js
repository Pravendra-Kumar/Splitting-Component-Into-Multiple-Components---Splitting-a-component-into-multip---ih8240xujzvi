import React from 'react';

function Header(props){
    return (
        <header id={props.id}>{props.content}</header>
    )
}

export default Header;
