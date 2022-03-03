import * as units from '../utils/units';

export const msToTime = (ms: number): string => {
    if (!ms || typeof ms !== 'number') throw new ReferenceError('Unknown time!');

    if (ms >= units.y) return Math.round(ms / units.y) + 'y';
    if (ms >= units.mo) return Math.round(ms / units.mo) + 'mo';
    if (ms >= units.w) return Math.round(ms / units.w) + 'w';
    if (ms >= units.d) return Math.round(ms / units.d) + 'd';
    if (ms >= units.h) return Math.round(ms / units.h) + 'h';
    if (ms >= units.m) return Math.round(ms / units.m) + 'm';
    if (ms >= units.s) return Math.round(ms / units.s) + 's';

    return ms + 'ms';
};
