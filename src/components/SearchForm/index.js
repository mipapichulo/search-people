import { useState } from "react";
import ButtonBack from "../ButtonBack";
import Button from "./components/ButtonForm";
import InputForm from "./components/InputForm";
import './style.css'

const SearchForm = ({ backButton, history }) => {

    const [toSearch, setIsToSearch] = useState('');

    const handleChange = e => setIsToSearch(e.target.value);
    const handleClickToSearch = () => {
      const correctToSearch = toSearch.trim();
      if(correctToSearch !== ''){
        return `/results¿n=${correctToSearch}`;
      }else{
        return;
      }
    }
    const backBtnForm = () => (
      <div className="form-group">
        <ButtonBack history={history} />
      </div>
    )

    return(
      <div className="form-container">
        <form>
          <InputForm value={toSearch} onChange={handleChange}/>
          <Button onClick={handleClickToSearch}>Search</Button>
          {backButton && backBtnForm()}
        </form>
      </div>
    );
}

export default SearchForm;
