/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { apiClient } from 'helpers/http';
import { showErr } from 'helpers/utils/misc';
import Loader from 'components/Loader';
const BASE_URL = process.env.REACT_APP_BACKEND_API;
const client = axios.create({
  baseURL: BASE_URL,
});

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: () => void;
  isLoading: boolean;
  reFetchUserProfile: () => void;
  register: any;
}
const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isBoostraping, setIsBootstraping] = React.useState(true);
  const navigate = useNavigate();
  React.useEffect(() => {
    setIsBootstraping(true);
    const token = localStorage.getItem('token');
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      apiClient
        .get(`/auth/profile?type=seller`)
        .then((res) => {
          if (!res.data.status) {
            showErr(res.data.message);
            return;
          }
          setUser(res?.data?.data);
          setIsBootstraping(false);
        })
        .catch((err) => {
          showErr(err?.response?.data?.message);
          setIsBootstraping(false);
        });
    } else {
      setIsBootstraping(false);
    }
  }, []);
  const reFetchUserProfile = React.useCallback(() => {
    apiClient
      .get(`/auth/profile?type=seller`)
      .then((res) => {
        if (!res.data.status) {
          showErr(res.data.message);
          return;
        }
        setUser(res?.data?.data);
      })
      .catch((err) => {
        showErr(err?.response?.data?.message);
      });
  }, []);
  const signin = (formdata: any, callback: VoidFunction) => {
    setIsLoading(true);
    client
      .post('/auth/login', formdata)
      .then((res) => {
        setIsLoading(false);
        if (res.data.status) {
          setUser(res.data?.data?.user);
          // localStorage.setItem('user', JSON.stringify(res.data?.data?.user));
          localStorage.setItem('token', res.data?.data?.token);
          apiClient.defaults.headers.common['Authorization'] =
            'Bearer ' + res.data?.data?.token;
          callback();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(
          err.response?.data?.message || 'Something went wrong, try later!'
        );
      });
  };

  const register = (formdata: any, callback: VoidFunction) => {
    setIsLoading(true);
    // const promise = client.post('/auth/register/seller', formdata);
    client
      .post('/auth/register/seller', formdata)
      .then((res) => {
        setIsLoading(false);
        if (res.data.status) {
          setUser(res.data?.data?.user);
          localStorage.setItem('token', res.data?.data?.token);
          apiClient.defaults.headers.common['Authorization'] =
            'Bearer ' + res.data?.data?.token;
          callback();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(
          err.response?.data?.message || 'Something went wrong, try later!'
        );
      });
  };

  const signout = React.useCallback(() => {
    setUser(null);
    navigate('/seller/login');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }, [navigate]);

  const value = React.useMemo(
    () => ({ user, signin, signout, isLoading, reFetchUserProfile, register }),
    [isLoading, signout, user, reFetchUserProfile]
  );
  if (isBoostraping) {
    return <Loader />;
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
