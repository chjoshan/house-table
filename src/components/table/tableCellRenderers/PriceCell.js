import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from 'styles/table/tableCellRenderers/priceCell.scss';

const formatPrice = (price, format) => new Intl.NumberFormat(format, { style: 'currency', currency: 'EUR' }).format(price);

class PriceCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formattedPrice: formatPrice(props.price, props.format),
            price: props.price,
            editable: false
        };
        this.enableEdit = this.enableEdit.bind(this);
        this.disableEdit = this.disableEdit.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    enableEdit() {
        this.setState(state => Object.assign({}, state, { editable: true }));
    }

    disableEdit() {
        this.setState(state => Object.assign({}, state, { editable: false }));
    }

    updatePrice(event) {
        event.preventDefault();
        const newPrice = event.target.value;
        this.setState((state, props) => Object.assign({}, state, {
            formattedPrice: formatPrice(newPrice, props.format),
            price: newPrice
        }));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.disableEdit();
    }

    render() {
        const { price, formattedPrice, editable } = this.state;

        return (
            <React.Fragment>
                {
                    editable
                    && (
                        <form onSubmit={this.handleSubmit}>
                            <input
                              autoFocus
                              type="number"
                              className={styles.priceInputField}
                              value={price}
                              onChange={this.updatePrice}
                              onBlur={this.disableEdit}
                            />
                        </form>
                    )
                }
                {
                    !editable
                    && (
                        <div
                          className={styles.priceInputField}
                          onDoubleClick={this.enableEdit}
                        >
                            {formattedPrice}
                        </div>
                    )
                }
            </React.Fragment>
        );
    }
}

PriceCell.propTypes = {
    price: PropTypes.number.isRequired,
    format: PropTypes.string
};

PriceCell.defaultProps = {
    format: 'de-DE'
};

export default PriceCell;
