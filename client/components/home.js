import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import RepoList from './repositoryList'
import Main from './main'
import Header from './header'

const Home = () => {
  const [repositories, setrepositories] = useState([])
  const { userName } = useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) =>
      setrepositories(data)
    )
  }, [userName])
  return (
    <div>
      <Head title="Hello">
        <title>Home</title>
      </Head>
      <Header />
      <div className="container mx-auto py-16">
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <RepoList repositories={repositories} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
