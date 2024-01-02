// Write your code here
//Fix8: To use Link component, it should be imported
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    //Fix9: When clicked on TeamCard, page should be navigated to the URL '/team-matches/${id}'
    //Fix10: "exact" and "path" props are used in Route component to match routes
    //Fix11: "to" is the prop used to give the URL for navigation to Link  component
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
