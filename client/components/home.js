import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import RepoList from './repositoryList'
import Readme from './readme'
import Header from './header'

const Home = () => {
  const [repositories, setrepositories] = useState([])
  const [readme, setReadme] = useState('')
  const [find, setFind] = useState('')
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])
  const { userName, userRepos } = useParams()
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) =>
      setrepositories(data)
    )
    // eslint-disable-next-line no-console
    console.log('test1')
  }, [userName])

  useEffect(() => {
    const headers = { Accept: 'application/vnd.github.VERSION.raw' }
    if (userRepos !== undefined) {
      axios(`https://api.github.com/repos/${userName}/${userRepos}/readme`, {
        param: {},
        headers
      }).then(({ data }) => setReadme(data))
    }
    // eslint-disable-next-line no-console
    console.log('test')
  }, [userRepos, userName])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setRepos(data))
  }, [userName])

  const handleFind = (search) => {
    setFind(search)
  }

  return (
    <div>
      <Head title="Hello">
        <title>Home</title>
      </Head>
      <Header readme={readme} userRepos={userRepos} userName={userName} handleFind={handleFind} />
      <div className="container mx-auto py-16">
        <Route
          exact
          path="/:userName"
          component={() => (
            <RepoList
              repositories={repositories}
              userName={userName}
              find={find}
              user={user}
              repos={repos}
            />
          )}
        />
        <Route exact path="/:userName/:userRepos" component={() => <Readme readme={readme} />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
