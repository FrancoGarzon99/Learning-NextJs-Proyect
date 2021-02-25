import { useState, useEffect } from 'react';
import AppLayout from 'components/Layout/Layout';
import Avatar from 'components/Avatar/Avatar';

const HomePage = () => {
  const [timeLine, setTimeLine] = useState([]);
  useEffect(() => {
    fetch('/api/statuses/timeline')
      .then((res) => res.json())
      .then(setTimeLine);
  }, []);
  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeLine.map((d) => (
            <article key={d.id}>
              <Avatar src={d.avatar} alt={d.avatar} text={d.username} />
            </article>
          ))}
        </section>
        <nav>nav</nav>
      </AppLayout>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          width: 100%;
          height: 49px;
          top: 0;
          border-bottom: 1px solid #ccc;
          position: fixed;
        }
        nav {
          display: flex;
          align-items: center;
          bottom: 0;
          width: 100%;
          height: 49px;
          position: fixed;
          border-top: 1px solid #ccc;
        }
        section {
          padding-top: 100px;
        }
      `}</style>
    </>
  );
};

export default HomePage;
