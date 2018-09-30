import React, { Component } from 'react';
import { formatNumber } from 'functions/parsers';
import PropTypes from 'prop-types';
import styles from 'styles/table/tableCellRenderers/priceCell.scss';

class PriceCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formattedPrice: formatNumber(props.price, props.locale, props.currency),
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
            formattedPrice: formatNumber(newPrice, props.locale, props.currency),
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
    locale: PropTypes.string,
    currency: PropTypes.string
};

PriceCell.defaultProps = {
    locale: 'de-DE',
    currency: 'EUR'
};

export default PriceCell;
