import { detailsActionTypes } from './details.types';

const INITIAL_STATE = {
  itemId: null,
};

const overlayReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case detailsActionTypes.TOGGLE_OVERLAY_HIDDEN:
      return {
        ...state,
        itemId: action.payload,
      };

    default:
      return state;
  }
};

export default overlayReducer;
