import Layout from '../components/Layout'
import Members from '../components/Members'

export default function CrewPage() {
  return (
    <Layout title={'Crew'}>
      <main className="page-layout crew">
        <section className="content-layout">
          <p className="page-layout__description">
            <span>02</span> Meet your crew
          </p>
          <Members />
        </section>
      </main>
    </Layout>
  )
}
