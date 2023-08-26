const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialStore = {
  aboutMe: "I am banana",
  fullName: "Slava Mryasov",
  photos: {
    large: null,
    small: null,
  },
};

const dataReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        fullName: action.user.fullName,
        aboutMe: action.user.aboutMe,
        photos: action.user.photos,
      };
    }
    default:
      return state;
  }
};

export const setUser = (user) => ({
  type: SET_USER_PROFILE,
  user,
});

export default dataReducer;
