import React from 'react';
import {Input} from 'reactstrap';

export default function Searchbar(props){
    return(
        <Input className="searchbar" type="search" style={{
            paddingLeft: 100,
            paddingRight: 200,
            paddingTop: 30,
            paddingBottom: 30,
            borderRadius: 25,
            }}>
        </Input>
    );
}