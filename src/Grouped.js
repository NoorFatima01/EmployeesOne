import { useState } from "react";

const Grouped = ({empl,selectedTeam,setTeam}) => {

    const [group, setGroup] = useState(groupMembers());

    function groupMembers(){
         var teams = [];
         var teamAMembers = empl.filter((empl) => empl.team === "TeamA");
         var teamA = {team:'TeamA',members:teamAMembers,collapsed:selectedTeam === 'TeamA'?false:true
        }
        teams.push(teamA);


        var teamBMembers = empl.filter((empl) => empl.team === "TeamB");
         var teamB = {team:'TeamB',members:teamBMembers,collapsed:selectedTeam === 'TeamB'?false:true
        }
        teams.push(teamB);


        var teamCMembers = empl.filter((empl) => empl.team === "TeamC");
         var teamC = {team:'TeamC',members:teamCMembers,collapsed:selectedTeam === 'TeamC'?false:true
        }
        teams.push(teamC);

        return teams;

    }

    function handleDrop(event){
        var newGroupData = groupMembers().map((groups) => groups.team === event.currentTarget.id?{...groups,collapsed:!groups.collapsed}:groups);

        setGroup(newGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
      <main className="container">
        {
           group.map( (item) => {
                return (
                   <div key={item.team} className='card mt-2' style={{cursor:"pointer"}}>
                    <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleDrop}>
                        Team Name: {item.team}
                    </h4>
                    <div id={"collapse_"+item.team} className={item.collapsed === true?"collapse":""}>
                        <hr/>
                    {
                        item.members.map(member => {
                            return (
                                <div className="mt-2">
                                    <h5 className="card-title mt-2">
                                        <span className="text-dark">
                                            Full Name: {member.fullName}
                                        </span>
                                    </h5>
                                    <p>Designation:{member.designation}</p>
                                </div>
                            )
                        } )
                    }

                    </div>
                   </div> 
                )
            })
        }
      </main>
    );
  }
export default Grouped

