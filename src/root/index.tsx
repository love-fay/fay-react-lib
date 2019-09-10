import * as React from 'react';
import {withRouter} from 'react-router-dom';
import Home from '../home';
import './style/index.scss';

interface Props{
    location: {
      pathname: string
    },
}

const Root: React.FunctionComponent<Props> = props => {
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