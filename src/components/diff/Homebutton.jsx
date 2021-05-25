import { NavLink } from 'react-router-dom'
import { FaChevronCircleLeft } from 'react-icons/fa'

export default function Homebutton({ currentPage, toggleVisibility }) {
  return (
    <button
      to="/"
      onClick={() => toggleVisibility('home')}
      display={currentPage}
    >
      <FaChevronCircleLeft size="2.5em" />
    </button>
  )
}
