import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NoResult from "../../components/NoResult";
import ResultItem from "../../components/ResultItem";
import SearchForm from "../../components/SearchForm";

import filterData from '../../utils/filterData';
import getData from '../../api/call'
import './style.css';

const Results = ({ history }) => {  
    const { name } = useParams();
    const [results, setResults] = useState([]);

    const showResults = () => (results.map((value => <ResultItem key={value.id} result={value}/>)))

    useEffect(() => {
      const data = getData();
      if(name){
        data
          .then(res =>{
            setResults(filterData(res, name));
          })
          .catch(err => console.log(err));
      }else{
        data
          .then(res => {
            setResults(res);
          })
          .catch(err => console.log(err));
      }
    }, [name])
  

    return(
      <div className="results">
        <SearchForm backButton history={history}/>
        <div className="results-container">
          {results.length === 0
            ? <NoResult /> : showResults()}
        </div>
      </div>
    );

    
}

export default Results;
