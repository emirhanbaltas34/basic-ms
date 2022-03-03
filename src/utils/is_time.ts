export const isTime = (time: string) => {
    return /^s|m|h|d|w|mo|y/g.test(time);
};
