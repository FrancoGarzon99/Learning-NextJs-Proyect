import Head from 'next/head';
import Button from '../components/Button/Button.jsx';
import Github from '../components/Icons/GitHub.jsx';
import Layout from '../components/Layout/Layout.jsx';
import { colors } from '../styles/theme.js';
export default function Home() {
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
          <Button>
            <Github fill={'#fff'} width={24} height={24} />
            Login with Github
          </Button>
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
          `}
        </style>
      </Layout>
    </div>
  );
}
