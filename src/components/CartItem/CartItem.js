import React, { Component } from "react";
import { List, Avatar, Button } from "antd";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedQuantity: props.quantity };
  }

  decreaseQuantity = () => {
    const {
      product: { id },
      onChangeQuantity
    } = this.props;
    const { selectedQuantity } = this.state;
    if (selectedQuantity === 1) return;
    this.setState({ selectedQuantity: selectedQuantity - 1 }, () =>
      onChangeQuantity(id, this.state.selectedQuantity)
    );
  };

  increaseQuantity = () => {
    const {
      product: { id },
      onChangeQuantity
    } = this.props;
    const { selectedQuantity } = this.state;
    if (selectedQuantity === 10) return;
    this.setState({ selectedQuantity: selectedQuantity + 1 }, () =>
      onChangeQuantity(id, this.state.selectedQuantity)
    );
  };

  render() {
    const {
      product: { id, title, price, image },
      onRemoveFromCart,
      readOnly = false
    } = this.props;

    const actions = [];
    actions.push(
      <div data-test-id="cart-product-item-price">{Math.round(price * this.state.selectedQuantity * 100) / 100}</div>
    );
    if (!readOnly) {
      actions.push(<a onClick={() => onRemoveFromCart(id)}>remove</a>);
    }

    const itemDescription = (<React.Fragment>
      <span>Price per unit:</span>
      <span data-test-id="cart-product-item-price-per-unit">{price}</span>zł
    </React.Fragment>)

    return (
      <List.Item actions={actions} data-test-id={`cart-product-item`}>
        <List.Item.Meta
          avatar={<Avatar src={`${process.env.PUBLIC_URL}/images/${image}`} />}
          title={<a>{title}</a>}
          description={itemDescription}
        />
        {!readOnly && (
          <div>
            <Button
              data-test-id="cart-product-item-decrease"
              shape="circle"
              icon="minus"
              onClick={this.decreaseQuantity}
            />
            <strong style={{ margin: "0 10px" }}>
              {this.state.selectedQuantity}
            </strong>
            <Button
              data-test-id="cart-product-item-increase"
              shape="circle"
              icon="plus"
              onClick={this.increaseQuantity}
            />
          </div>
        )}
        {readOnly && (
          <div>
            Number of units: {this.state.selectedQuantity}
          </div>
        )}
      </List.Item>
    );
  }
}

export default CartItem;
