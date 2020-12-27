import { overlayActionTypes } from './overlay.types';

export const toggleOverlayHidden = (itemId: string) => ({
  type: overlayActionTypes.TOGGLE_OVERLAY_HIDDEN,
  payload: itemId,
});
