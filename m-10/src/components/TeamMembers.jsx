/** @format */

import React from "react";
import { useGetMembersQuery } from "../features/members/membersApi";

function TeamMembers() {
  const { data: team, isLoading, isSuccess, isError } = useGetMembersQuery();

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>There was an error</div>;
  }
  if (!isLoading && !isError && isSuccess) {
    if (team.length === 0) {
      content = <div>Team is empty</div>;
    } else if (team.length > 0) {
      content = team.map(item => (
        <div className="checkbox-container" key={item.id}>
          <img src={item.avatar} className="team-avater" alt="avatars" />
          <p className="label">{item.name}</p>
        </div>
      ));
    }
  }

  return (
    <>
      {/* Team Members  */}
      <div className="mt-8">
        <h3 className="text-xl font-bold">Team Members</h3>
        <div className="mt-3 space-y-4">{content}</div>
      </div>
    </>
  );
}

export default TeamMembers;
