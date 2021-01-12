const TeamDefaultState = {
  team: {
    teamname: "",
    members: [],
  },
};

export default (state = TeamDefaultState, action) => {
  switch (action.type) {
    case "ADD_TEAM":
      return {
        team: {
          teamname: action.team.teamname,
          members: [...action.team.members],
        },
      };

    case "REMOVE_TEAM":
      return {
        team: {
          teamname: "",
          members: [],
        },
      };
    case "ADD_MEMBER":
      return {
        team: {
          members: [...state.team.members, ...action.member],
        },
      };
    case "EDIT_TEAM":
      return {
        team: {
          ...action.updates,
        },
      };
    case "REMOVE_MEMBER": {
      return state.team.members.filter((member) => {
        return member.name !== action.member;
      });
    }
    case "LOGOUT":
      return {
        team: {
          teamname: "",
          members: [],
        },
      };
    default:
      return state;
  }
};
