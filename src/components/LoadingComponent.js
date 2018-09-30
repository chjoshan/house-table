import classnames from 'classnames';
import React from 'react';
import styles from 'styles/loadingComponent.scss';

const LoadingComponent = () => (
    <div className={styles.wrapper}>
        <h2>Loading...</h2>
        <div className={styles.sortControlPanel}>
            <span className={styles.button} />
            <span className={styles.button} />
            <span className={styles.button} />
        </div>
        {
            ['lightGrey', 'whiteSmoke', 'whiteSmoke', 'lightLightGrey'].map((color, index) => (
                <div className={styles.table} key={`tableCell-${color}-${index}`}>
                    <span className={classnames(styles.cells, styles[color])} />
                    <span className={classnames(styles.cells, styles[color])} />
                    <span className={classnames(styles.cells, styles[color])} />
                    <span className={classnames(styles.cells, styles[color])} />
                </div>
            ))
        }
    </div>
);

export default LoadingComponent;
