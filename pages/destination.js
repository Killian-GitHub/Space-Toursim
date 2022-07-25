import Layout from '../components/Layout'
import Planets from '../components/Planets'

export default function DestinationPage() {
  return (
    <Layout title={'Destination'}>
      <main className="page-layout destination">
        <section className="content-layout">
          <p className="page-layout__description">
            <span>01</span> pick your destination
          </p>
          <Planets />
        </section>
      </main>
    </Layout>
  )
}
