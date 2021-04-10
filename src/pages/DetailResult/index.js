import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import getData from '../../api/call'
import ButtonBack from '../../components/ButtonBack';
import InformationPerson from '../../components/InformationPerson';
import { filterPerson } from '../../utils/filterData';
import './style.css';

const DetailPerson = ({ history }) => {

    const [information, setInformation] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
     const data = getData();
     data
      .then(res => {
          setInformation(filterPerson(res, id));
          setIsLoading(true);
      })
    }, [])

    return(
        <div className="detail-person">
          <ButtonBack history={history} goTo='/results' />
          {isLoading && <InformationPerson information={information}/>}
        </div>
    )
}

export default DetailPerson;