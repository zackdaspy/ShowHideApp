// Write your code here
import {useState} from 'react'
import './index.css'

const ShowHide = () => {
  const [isFirstNameVisible, setFirstNameVisible] = useState(false)
  const [isLastNameVisible, setLastNameVisible] = useState(false)

  const toggleFirstName = () => {
    setFirstNameVisible(!isFirstNameVisible)
  }

  const toggleLastName = () => {
    setLastNameVisible(!isLastNameVisible)
  }

  return (
    <div className="show-hide-container">
      <h2 className="name">
        {isFirstNameVisible && 'John'} {isLastNameVisible && 'Doe'}
      </h2>
      <div className="button-container">
        <button
          className="toggle-button"
          type="button"
          onClick={toggleFirstName}
        >
          Show/Hide Firstname
        </button>
        <button
          className="toggle-button"
          type="button"
          onClick={toggleLastName}
        >
          Show/Hide Lastname
        </button>
      </div>
    </div>
  )
}

export default ShowHide
