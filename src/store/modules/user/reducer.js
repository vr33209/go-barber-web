import produce from "immer";

const INIATIAL_STATE = {
  profile: null
};

export default function user(state = INIATIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_SUCCESS": {
        draft.profile = action.payload.user;
        break;
      }
      case "@user/UPDATE_PROFILE_SUCCESS": {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });
}
