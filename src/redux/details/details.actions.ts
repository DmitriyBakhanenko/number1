import { detailsActionTypes } from './details.types';

export const setItemDetails = (itemId: number) => ({
  type: detailsActionTypes.TOGGLE_OVERLAY_HIDDEN,
  payload: itemId,
});
