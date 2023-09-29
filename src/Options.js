const Options = ({selectedTeam,teamChange}) => {
    return (
        <select className='form-select form-select-lg' value={selectedTeam} onChange={teamChange}>
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>   
                    </select>
    )
}

export default Options;