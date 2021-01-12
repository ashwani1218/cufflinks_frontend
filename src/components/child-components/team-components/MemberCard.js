import React from "react";

const MemberCard = (props) => {
  return (
    <div className="member-card">
      <h3>{props.member.Name}</h3>
      <p>{props.member.skill}</p>
    </div>
  );
};

export default MemberCard;
