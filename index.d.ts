declare module "basic-ms" {
    export default function NodeMS(time: string | number, _options?: { long: boolean }): number | string;

    export class Util {
        private static TimeToMilliseconds(time: string): number;
        private static MillisecondsToTime(time: number, long: boolean): string;
        private static isTimeExists(time: string): boolean;
        private static parseMilliseconds(milliseconds: number): number;
    }

    export class ErrorManager extends Error {
        public constructor(message: string);
    }
}
