import femaleprofile from './images/femaleprofile.jpg'
import maleprofile from './images/maleprofile.jpg'

const Members = ({empl,selectedTeam,cardClick}) => {

    return(
        <div key={empl.id} id={empl.id} className={(empl.team === selectedTeam?'card m-2 stand-out' :'card m-2')} style={{cursor: "pointer"}} onClick={cardClick}>
                        {(empl.gender === 'male')?<img src={maleprofile} className="card-img-top" ></img>: <img src={femaleprofile} className="card-img-top" ></img>}
                        <div className="card-body">
                        <h5 className="card-title">Full Name:{empl.fullName}</h5>
                        <p className='card-text'>Designation:{empl.designation}</p>
                        </div>
                    </div>
    )

}

export default Members


