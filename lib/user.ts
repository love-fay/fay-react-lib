/**
 * Created by feichongzheng on 17/9/28.
 */
import cookie from 'react-cookie';

const baseOption = {
  path: '/'
};

const isLogin = () => {
  const user = getUser();
  return typeof user === 'object';
};

const logout = (history:{push: Function}, location:object) => {
  cookie.remove('current-user', baseOption);
  history.push('/login', {
    from: location
  });
};

const goToLogin = (history:{push: Function}, location:object) => {
  cookie.remove('current-user');
  history.push('/login', {
    from: location
  });
};

const saveUser = (value:object, rememberTime?:number) => {
  const opt = rememberTime ? {...baseOption,
    maxAge: rememberTime,
    expires: new Date(new Date().getTime() + rememberTime * 1000)
  } : baseOption;
  cookie.save('current-user', value, opt);
};

const removeUser = () => {
  saveUser({}, -1);
  // cookie.remove('current-user');
};

const getUser = () => {
  return cookie.load('current-user');
}

export { getUser, isLogin, logout, goToLogin, saveUser, removeUser };
