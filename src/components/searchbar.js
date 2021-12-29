import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default function Searchbar(props){
    return(
        <div>
            <InputGroup>
                  <Input className="searchbar" type="search">
                </Input>
                <InputGroupAddon addonType="append">@</InputGroupAddon>   
            </InputGroup>
        </div>
  
    );
}