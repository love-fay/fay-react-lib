import * as React from 'react';
import {withRouter} from 'react-router-dom';
import './style/index.scss';
import Home from '../home';

interface props{
    location: {
      pathname: string
    },
}

const Root: React.FunctionComponent<props> = props => {
  const {pathname} = props.location;
  const pathPrefix = pathname.split('/')[1];
  const router = {
    '': <Home/>,
  };
  return (
    <div style={{height: '100%'}}>
      {router[pathPrefix]}
    </div>
  )
};

export default withRouter(Root as React.FunctionComponent);