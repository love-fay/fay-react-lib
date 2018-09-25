import React from 'react';
import {render} from 'react-dom';
import Root from './root';
import Provider from '../../lib/provider';

render(<Provider root={Root}/>, document.getElementById('app'));