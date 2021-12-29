import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export default function Searchbar(props){
    return(
        <div>
            <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>   
                <Input className="searchbar" type="search" style={{
                    paddingLeft: 100,
                    paddingRight: 200,
                    paddingTop: 30,
                    paddingBottom: 30,
                    borderRadius: 25,
                    }}>
                </Input>
            </InputGroup>
        </div>
  
    );
}
function Region(props) {

}