import * as React from 'react';
import {render} from 'react-dom';
import Root from './root';
import Provider from '../lib/provider';

document.title = 'Fay React Material';

render(<Provider root={Root}/>, document.getElementById('app'));