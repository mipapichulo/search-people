import './style.css';
import { Link } from 'react-router-dom';

const ResultItem = ({ result }) => {
    const { name, email, phone, website, id } = result;
    return(
        <div className="result-item">
          <div className="information">
            <span>
                <strong>Name: </strong>{name}
            </span>
            <span>
                <strong>Email: </strong>{email}
            </span>
            <span>
                <strong>Phone: </strong>{phone}
            </span>
            <span>
                <strong>Website: </strong>
                <a href={`http://www.${website}`} target='_blank' rel='noreferrer'>{website}</a>
            </span>
          </div>
          <div className='btn-detail-container'>
          <Link 
            to={`/results¿id=${id}`}
            className="btn-detail-person">See more</Link> 
          </div>
        </div>
    )
}

export default ResultItem;
