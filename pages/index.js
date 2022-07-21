import Layout from '../components/Layout'

import bg from '../public/assets/home/background-home-desktop.jpg'

export default function Home() {
  return (
    <Layout title={'Home'}>
      <main
        className="home"
        style={{
          backgroundImage: `url(${bg.src})`
        }}
      >
        <div className="home__wrapper">
          <div className="home__wrapper__text">
            <h1 className="home__wrapper__text__title">
              <span className="home__wrapper__text__title__span">
                So, you want to travel to
              </span>
              <br />
              Space
            </h1>
            <p className="home__wrapper__paragraph">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <button className="home__wrapper__button">Explore</button>
        </div>
      </main>
    </Layout>
  )
}
