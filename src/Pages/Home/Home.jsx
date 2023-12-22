import Banner from '../../components/Partials/Banner'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Task Manager | Home </title>
        </Helmet>
        <Banner></Banner>
    </div>
  )
}

export default Home