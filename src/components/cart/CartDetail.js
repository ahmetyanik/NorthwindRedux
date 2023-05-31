import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Button, Table } from "reactstrap";
import alertify from "alertifyjs";

class CartDetail extends Component {
  removeFromCart(cartItem){
    this.props.actions.removeFromCart(cartItem)
    alertify.error(cartItem.product.productName + " removed")
  }
  render() {

    console.log(this.props);



    return <div>
       <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => {
              return (
                <tr key={cartItem.product.id}>
                  <th scope="row">{cartItem.product.id}</th>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.product.unitPrice}</td>
                  <td>{cartItem.product.quantityPerUnit}</td>
                  <td>{cartItem.product.unitsInStock}</td>
                  <td><Button color="danger" onClick={()=>this.removeFromCart(cartItem)}>Remove</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
    </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
