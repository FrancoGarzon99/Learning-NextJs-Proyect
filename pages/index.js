import { useState, useEffect } from 'react';
import Head from 'next/head';
import Button from 'components/Button/Button.js';
import { GithubIcon, GoogleIcon } from 'components/Icons/Icons.js';
import Layout from 'components/Layout/Layout.js';
import { colors } from 'styles/theme.js';
import { loginWithGithub, loginWithGoogle, OnAuthStateChanged } from 'fireBase/client';
import Avatar from 'components/Avatar/Avatar';
export default function Home() {
  useEffect(() => {
    OnAuthStateChanged(setUserAuth);
  }, []);
  // User data auth
  const [userAuth, setUserAuth] = useState(undefined);
  // Button Github
  const handleClickGithub = () => {
    loginWithGithub()
      .then((res) => setUserAuth(res))
      .catch((error) => console.log(error, 'error'));
  };
  // Button Google
  const handleClickGoogle = () => {
    loginWithGoogle()
      .then((res) => setUserAuth(res))
      .catch((error) => console.log(error, 'error'));
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <img src="/devter-logo.png" />
          <h1>Twitter devs</h1>
          <h2>Aprendiendo Next Js</h2>
          {userAuth === null && (
            <>
              <div className="buttonGithub">
                <Button onClick={handleClickGithub}>
                  <GithubIcon fill={'#fff'} width={24} height={24} />
                  Login with Github
                </Button>
              </div>
              <div className="buttonGoogle">
                <Button onClick={handleClickGoogle}>
                  <GoogleIcon width={24} height={24} />
                  Login with Google
                </Button>
              </div>
            </>
          )}
          {userAuth && userAuth.avatar && (
            <div className="avatarContainer">
              <Avatar size={'49px'} src={userAuth.avatar} alt={'avatar'} text={userAuth.username} />
            </div>
          )}
        </section>

        <style jsx>
          {`
            section {
              display: grid;
              height: 100%;
              place-content: center;
              place-items: center;
            }
            img {
              width: 120px;
            }
            h1 {
              color: ${colors.primary};
              margin: 0;
            }
            h2 {
              color: ${colors.secondary};
            }
            .buttonGoogle {
              margin: 5px;
            }
            .buttonGithub {
              margin: 5px;
            }
            .avatarContainer {
              display: flex;
            }
          `}
        </style>
      </Layout>
    </div>
  );
}
