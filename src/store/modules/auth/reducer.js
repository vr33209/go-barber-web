import produce from "immer";

const INIATIAL_STATE = {
  token: null,
  signed: false,
  loading: false
};

export default function auth(state = INIATIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}
