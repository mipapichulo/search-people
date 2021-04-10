import './style.css';
import PropTypes from 'prop-types';

const ButtonBack = ({ history , goTo = '/' }) => (
    <button 
      onClick={() => history.push(goTo)}
      className="btn-back">
        Back
    </button>
)

ButtonBack.propTypes = {
    history : PropTypes.object.isRequired,
    goTo : PropTypes.string
}

export default ButtonBack;
