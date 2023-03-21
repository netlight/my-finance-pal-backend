export const toDate = (isoString?: string): Date | undefined => {
  if (isoString !== null && isoString !== undefined) {
    return new Date(isoString);
  }
};

export const toIsoDate = (date?: Date): string | undefined => {
  if (date !== null && date !== undefined) {
    const isoDateTime = date.toISOString();
    return isoDateTime.substring(0, isoDateTime.indexOf("T"));
  }
};
