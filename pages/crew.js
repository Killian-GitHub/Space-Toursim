import Layout from '../components/Layout'
import Members from '../components/Members'

import background from '../public/assets/crew/background-crew-desktop.jpg'

export default function CrewPage() {
  return (
    <Layout title={'Crew'}>
      <main
        className="page-layout"
        style={{
          backgroundImage: `url(${background.src})`
        }}
      >
        <p className="page-layout__description">
          <span>02</span> Meet your crew
        </p>
        <Members />
      </main>
    </Layout>
  )
}
