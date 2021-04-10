import './style.css'

const InformationPerson = ({ information }) => {
    const { name, 
            username, 
            email, 
            address : { street, suite, city, zipcode, geo : { lat, lng } }, 
            phone, 
            website, 
            company } = information;

    return(
        <div className="information-detail-person">
          <div className="information-primary">
            <span><strong>Name: </strong>{name}</span>
            <span><strong>Username: </strong>{username}</span>
            <span><strong>Email: </strong>{email}</span>
            <span><strong>Phone: </strong>{phone}</span>
          </div>
          <div className="information-address">
            <strong style={{ gridColumn : 'span 2', color: 'rgb(102, 102, 102)' }}>Address:</strong>
            <span><strong>Street: </strong>{street}</span>
            <span><strong>Suite: </strong>{suite}</span>
            <span><strong>City: </strong>{city}</span>
            <span><strong>Zipcode: </strong>{zipcode}</span>
          </div>
          <div className="information-location">
            <strong style={{ gridColumn : 'span 2', color: 'rgb(102, 102, 102)' }}>Location:</strong>
            <span><strong>Latitude: </strong>{lat}</span>
            <span><strong>Longitud: </strong>{lng}</span>
          </div>
          <div className="information-website">
            <span>
              <strong>Website: </strong>
              <a href={`http://www.${website}`} target='_blank' rel='noreferrer'>{website}</a>  
            </span>
          </div>
          <div className="information-company">
            <strong style={{ gridColumn : 'span 2', color: 'rgb(102, 102, 102)' }}>Company:</strong>
            <span><strong>Name: </strong>{company.name}</span>
            <span><strong>Phrase: </strong>{company.catchPhrase}</span>
            <span><strong>Business: </strong>{company.bs}</span>
          </div>
        </div>
    );
}

export default InformationPerson;