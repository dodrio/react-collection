import React from 'react'
import PropTypes from 'prop-types'

class Collection extends React.Component {
  render() {
    const { content } = this.props
    return <div>{content}</div>
  }
}

Collection.propTypes = {
  content: PropTypes.string.isRequired,
}

export default Collection
