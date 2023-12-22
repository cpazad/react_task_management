import Banner from '../../components/Partials/Banner'
import { Helmet } from 'react-helmet-async'
import Users from '../../components/Partials/Users'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Task Manager | Home </title>
        </Helmet>
        <Banner></Banner>
        <Users></Users>
    </div>
  )
}

export default Home