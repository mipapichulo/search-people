import './style.css';
import { Link } from 'react-router-dom';

const Button = ({ children = 'Button', onClick }) => (
    <div className="form-group">
      <Link 
        to={onClick}>
        {children}
      </Link>
    </div>
)

export default Button;
