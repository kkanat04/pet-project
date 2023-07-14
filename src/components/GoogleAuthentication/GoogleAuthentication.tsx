import googleLogo from '~/assets/image/googleLogo.png';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useAppDispatch } from '~/hooks/redux';
import { SET_GOOGLE_TOKEN } from '~/redux/slices/AuthSlice';

import styles from './GoogleAuthentication.module.scss';

const GoogleAuthentication = () => {
  const dispatch = useAppDispatch();

  const onSuccess = async (res: any) => {
    try {
      dispatch(SET_GOOGLE_TOKEN(res.tokenId));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: import.meta.env.VITE_GOOGLE_OAUTH_KEY,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  return (
    <>
      <GoogleLogin
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_KEY}
        onSuccess={onSuccess}
        redirectUri={'https://oauth.pstmn.io/v1/callback'}
        onFailure={(error) => console.log(error)}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} className={styles.googleAuthentication}>
            <img src={googleLogo} alt='googleLogo' />
            <span>Continue with Google</span>
          </button>
        )}
      />
    </>
  );
};

export default GoogleAuthentication;
