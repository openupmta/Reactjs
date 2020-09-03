import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';
class Header extends Component {
    render() {
        return (
            <Navbar style={{background:"#77BFC0"}} light>
              <span title="Home" class="logo-icon" style="font-size: x-large; color: white; cursor: pointer;">BMW Export</span>
            <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
            <NavbarToggler className="mr-2" />
            
          </Navbar>
        );
    }
}

export default Header;