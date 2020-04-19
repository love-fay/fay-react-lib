/**
 * Created by feichongzheng on 17/9/28.
 */
import cookie from 'react-cookie';

const baseOption = {
  path: '/'
};

const loginUser = () => {
  return cookie.load('current-user');
};

const isLogin = () => {
  const user = loginUser();
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
  cookie.remove('current-user');
};

export { loginUser, isLogin, logout, goToLogin, saveUser, removeUser };
