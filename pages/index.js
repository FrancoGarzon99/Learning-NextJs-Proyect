import { useState, useEffect } from "react";
import Head from "next/head";
import Button from "../components/Button/Button.jsx";
import { GithubIcon, GoogleIcon } from "../components/Icons/Icons.jsx";
import Layout from "../components/Layout/Layout.jsx";
import { colors } from "../styles/theme.js";
import {
  loginWithGithub,
  loginWithGoogle,
  OnAuthStateChanged,
} from "../fireBase/client";
export default function Home() {
  useEffect(() => {
    OnAuthStateChanged(setUserAuth);
  }, []);
  // User data auth
  const [userAuth, setUserAuth] = useState(undefined);
  console.log(userAuth, "Userloggued");
  // Button Github
  const handleClickGithub = () => {
    loginWithGithub()
      .then((res) => setUserAuth(res))
      .catch((error) => console.log(error, "error"));
  };
  // Button Google
  const handleClickGoogle = () => {
    loginWithGoogle()
      .then((res) => setUserAuth(res))
      .catch((error) => console.log(error, "error"));
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
                  <GithubIcon fill={"#fff"} width={24} height={24} />
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
            <div>
              <img src={userAuth.avatar} alt="avatar" />
              <h5>{userAuth.username}</h5>
              <p>{userAuth.name}</p>
              {userAuth.email && <p>{userAuth.email}</p>}
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
          `}
        </style>
      </Layout>
    </div>
  );
}
