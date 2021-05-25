import Searchbar from '../Inputcomponents/Searchbar'
import Homebutton from '../Buttons/Homebutton'

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header>
      <h1>Pokedex</h1>
      <Searchbar currentPage={currentPage} />
      <Homebutton currentPage={currentPage} toggleVisibility={setCurrentPage} />
    </header>
  )
}
