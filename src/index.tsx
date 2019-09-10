import * as React from 'react';
import {render} from 'react-dom';
import Provider from '../lib/provider';
import Root from './root';

document.title = 'Fay React Lib';

render(<Provider root={Root}/>, document.getElementById('app'));