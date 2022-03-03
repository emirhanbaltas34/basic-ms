import type { parsedMs } from '../interfaces/parsed_ms';
import * as units from '../utils/units';

export const parseMs = (ms: number): parsedMs => {
    if (!ms || typeof ms !== 'number') throw new ReferenceError('Unknown time!');

    return {
        years: Math.round(ms / units.y),
        months: Math.round(ms / units.mo),
        weeks: Math.round(ms / units.w),
        days: Math.round(ms / units.d),
        hours: Math.round(ms / units.h),
        minutes: Math.round(ms / units.m),
        seconds: Math.round(ms / units.s),
        milliseconds: Math.round(ms) % 1000
    };
};
