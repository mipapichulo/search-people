import ButtonBack from '../../components/ButtonBack'
import kingteka from '../../img/kingteka.jpg'
import './style.css'

const PageNotFound = ({ history }) => {
    return(
      <div className='not-found'>
        <p>Ups! Apparently we can't find what you were looking for</p>
        <img 
          src={kingteka} 
          alt="kingteka"/>
        <ButtonBack history={history}/>
      </div>

    );
}

export default PageNotFound;
