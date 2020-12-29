import { adminActionTypes } from './admin.types';

const INITIAL_STATE = {
  adminMode: false,
};

const adminReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case adminActionTypes.TOGGLE_ADMIN_MOD:
      return {
        ...state,
        adminMode: !state.adminMode,
      };

    default:
      return state;
  }
};

export default adminReducer;
