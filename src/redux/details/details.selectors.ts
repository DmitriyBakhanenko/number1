import { createSelector } from 'reselect';

const selectDetails = (state: any) => state.details;

export const selectDetailsItemId = createSelector(
  [selectDetails],
  (details) => details.itemId
);
