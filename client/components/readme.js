import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import Markdown from 'markdown-to-jsx'
import './readme.scss'

const Readme = (props) => {
  if (!props.readme) {
    return <RingLoader size={80} color="#123abc" />
  }
  return (
    <div>
      <Markdown className="markdown-body">{props.readme}</Markdown>
    </div>
  )
}

Readme.propTypes = {}

export default React.memo(Readme)
