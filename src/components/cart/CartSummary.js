import React, { Component } from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import {
  Badge,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz bos</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => {
            return (
              <DropdownItem key={cartItem.product.id}>
                <Button onClick={()=>this.removeFromCart(cartItem)} color="danger">X</Button>
                {cartItem.product.productName}-
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            );
          })}
          <DropdownItem divider></DropdownItem>
          <DropdownItem>
            <Link to="/cart">Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  removeFromCart(cartItem){
    this.props.actions.removeFromCart(cartItem)
    alertify.error(cartItem.product.productName + " removed")
  }

  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
