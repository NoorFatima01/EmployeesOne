import React from 'react'
import Options from './Options.js'
import Members from './Members.js'

const Emp = ({empl,selectedTeam,cardClick,teamChange}) => {
    
    return(
        <main className = "container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <Options selectedTeam={selectedTeam}  teamChange={teamChange}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                    {
                empl.map((empl) => {
                    return <Members empl={empl} selectedTeam={selectedTeam} cardClick={cardClick}/>
                }
                )
            }
                    </div>
                </div>
            </div>
        </main>
    )
  }
  export default Emp
