import Layout from '../components/Layout'
import Planets from '../components/Planets'

import background from '../public/assets/destination/background-destination-desktop.jpg'

export default function Destination() {
  return (
    <Layout title={'Destination'}>
      <main
        className="destination"
        style={{
          backgroundImage: `url(${background.src})`
        }}
      >
        <p className="destination__description">
          <span>01</span> pick your destination
        </p>
        <Planets />
      </main>
    </Layout>
  )
}
