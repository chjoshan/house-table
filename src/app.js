import React from 'react';
import { render } from 'react-dom';
import ReactComponent from './ReactComponent';

const title = 'My Minimal React Webpack Babel Setup';

render(<ReactComponent title={title} />, document.getElementById('app'));
