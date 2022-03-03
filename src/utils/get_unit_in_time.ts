export const getUnitInTime = (time: string): string => {
    return time.replace(/\d|[^\w\s]/g, '');
};
