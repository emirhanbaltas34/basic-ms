export const getMsInTime = (time: string): number => {
    return Number((time.match(/\d+/g) as any as string[])[0]);
};
