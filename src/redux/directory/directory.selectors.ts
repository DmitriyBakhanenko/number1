import { createSelector } from 'reselect';

export const selectDirectory = (state: any) => state.directory;

export const selectDirectorySection = createSelector(
  [selectDirectory],
  (directory) => directory.directory.sections
);

export const selectIsDirectoryFetching = createSelector(
  [selectDirectory],
  (directory) => directory.isFetching
);

export const selectIsDirectoryLoaded = createSelector(
  [selectDirectory],
  (directory) => !!directory.directory
);
