import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'former-kit'

const resolutionValues = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25]

const ZoomSelector = ({ onSelectorChange }) => {
  const [index, setIndex] = useState(3)

  return (
    <Pagination
      currentPage={index}
      totalPages={resolutionValues.length}
      onPageChange={(newIndex) => {
        setIndex(newIndex)
        onSelectorChange(resolutionValues[newIndex - 1])
      }}
      format="single"
    />
  )
}

ZoomSelector.propTypes = {
  onSelectorChange: PropTypes.func,
}

ZoomSelector.defaultProps = {
  onSelectorChange: () => {},
}

export default ZoomSelector
