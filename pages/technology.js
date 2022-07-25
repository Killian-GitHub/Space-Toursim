import Layout from '../components/Layout'
import Vehicles from '../components/Vehicles'

export default function TechnologyPage() {
  return (
    <Layout title={'Technology'}>
      <main className="page-layout technology">
        <section className="content-layout">
          <p className="page-layout__description">
            <span>03</span> Space lauch 101
          </p>
          <Vehicles />
        </section>
      </main>
    </Layout>
  )
}
