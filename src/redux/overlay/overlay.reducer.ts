const { overlayActionTypes } = require('./overlay.types');

const INITIAL_STATE = {
  overlayHidden: true,
  itemId: null,
};

const overlayReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case overlayActionTypes.TOGGLE_OVERLAY_HIDDEN:
      return {
        ...state,
        overlayHidden: !state.overlayHidden,
        itemId: action.payload,
      };

    default:
      return state;
  }
};

export default overlayReducer;
