export const toDate = (isoString?: string): Date | undefined => {
  if (isoString !== null && isoString !== undefined) {
    return new Date(isoString);
  }
};
