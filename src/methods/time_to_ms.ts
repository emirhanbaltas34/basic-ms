import { isTime } from '../utils/is_time';
import * as units from '../utils/units';
import { getMsInTime } from '../utils/get_ms_in_time';
import { getUnitInTime } from '../utils/get_unit_in_time';

export const timeToMs = (time: string): number => {
    if (!time || !isTime(time)) throw new ReferenceError('Unknown time!');

    const ms = getMsInTime(time);
    const unit = getUnitInTime(time);

    if (unit === 's') return Math.round(ms) * units.s;
    if (unit === 'mo') return Math.round(ms) * units.mo;
    if (unit === 'm') return Math.round(ms) * units.m;
    if (unit === 'h') return Math.round(ms) * units.h;
    if (unit === 'd') return Math.round(ms) * units.d;
    if (unit === 'w') return Math.round(ms) * units.w;
    if (unit === 'y') return Math.round(ms) * units.y;
    throw new ReferenceError('Unknown time!');
};
