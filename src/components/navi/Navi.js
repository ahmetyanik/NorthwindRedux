import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="d-flex vw-100 align-items-center justify-content-between">
            <div>
              <NavbarBrand href="/">Nortwind App</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
            </div>
            <div>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink></NavLink>
                  </NavItem>
                  <NavItem>
                    <CartSummary />
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
