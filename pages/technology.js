import Layout from '../components/Layout'
import Vehicles from '../components/Vehicles'

import background from '../public/assets/technology/background-technology-desktop.jpg'

export default function TechnologyPage() {
  return (
    <Layout title={'Technology'}>
      <main
        className="page-layout"
        style={{
          backgroundImage: `url(${background.src})`
        }}
      >
        <p className="page-layout__description">
          <span>03</span> Space lauch 101
        </p>
        <Vehicles />
      </main>
    </Layout>
  )
}
