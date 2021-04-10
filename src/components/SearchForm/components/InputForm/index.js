import './style.css';

const InputForm = ({ value, onChange }) => (
    <div className="form-group">
      <input type='text' value={value} onChange={onChange}/>
    </div>
)

export default InputForm;
