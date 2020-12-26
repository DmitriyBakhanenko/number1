import { createSelector } from 'reselect';

const selectOverlay = state => state.overlay;

export const selectOverlayHidden = createSelector(
  [selectOverlay],
  overlay => overlay.overlayHidden
);

export const selectOverlayItemId = createSelector(
  [selectOverlay],
  overlay => overlay.itemId
);
