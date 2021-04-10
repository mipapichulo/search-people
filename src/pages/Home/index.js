import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm"
import './style.css'

const Home = () => {
    return(
        <div className='search-people'>
            <Header component="h1">Search people!</Header>
            <SearchForm />
        </div>
    );
}

export default Home;
