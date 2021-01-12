export const AddTeam = ({ teamname = "", members = [] } = {}) => ({
  type: "ADD_TEAM",
  team: {
    teamname,
    members: [...members],
  },
});

export const RemoveTeam = () => ({
  type: "REMOVE_TEAM",
});

export const EditTeam = (updates) => ({
  type: "EDIT_TEAM",
  updates,
});

export const AddMember = (members) => ({
  type: "ADD_MEMBER",
  members: [...members],
});

export const RemoveMember = (membername) => ({
  type: "REMOVE_MEMBER",
  member: membername,
});

export const logout = () => ({
  type: "LOGOUT",
});
