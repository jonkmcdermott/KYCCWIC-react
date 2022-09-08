import React from 'react'
import './EventCommittee.css'
import CommitteeCard from './CommitteeCard'
import CommitteeMembersData from './data/CommitteeMembers.json'


function DisplayMemberCards() {
  const MemberCards = CommitteeMembersData.map((member) => 


    <div key={member.id}>
      <CommitteeCard 
        key={member.id} 
        id={member.id} 
        title={member.title} 
        image={
          member.image_exists === 'true' ? require(""+ member.image +"") : ""
        } 
        isImageMissing={
          member.image_exists === 'true' ? "" : "mising-image"
        } 
        bio={member.bio} 
      />
    </div>
  );
  return (
    <div>{MemberCards}</div>
  );
}


function EventCommittee() {

  return (
    <div className='event-committee'>
        <div className="container" id='event-committee'>
            <h1 className="section-heading">KYCCWIC <span className='color-highlight'>Event Planning Committee</span></h1>
            <p className="text-block">
                Meet the wonderful women of this committee who have been responsible for preparing and organizing 
                the 2023 Celebration of Women in Computing.  Without their diligent efforts, we would not 
                have such an amazing event.  We thank them for thier dedication, passion, and hard work.
            </p>
            <h3 className="subsection-heading">Committee Members</h3>

            {DisplayMemberCards()}
            
        </div>
    </div>
  )
}

export default EventCommittee
