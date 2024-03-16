export class TimeSpan {
    private milliseconds: number;

    constructor(milliseconds: number) {
        this.milliseconds = milliseconds;
    }

    getTotalMilliseconds(): number {
        return this.milliseconds;
    }

    getTotalSeconds(): number {
        return this.milliseconds / 1000;
    }

    getTotalMinutes(): number {
        return this.getTotalSeconds() / 60;
    }

    getTotalHours(): number {
        return this.getTotalMinutes() / 60;
    }

    getTotalDays(): number {
        return this.getTotalHours() / 24;
    }

    addMilliseconds(milliseconds: number): TimeSpan {
        return new TimeSpan(this.milliseconds + milliseconds);
    }

    addSeconds(seconds: number): TimeSpan {
        return new TimeSpan(this.milliseconds + seconds * 1000);
    }

    addMinutes(minutes: number): TimeSpan {
        return new TimeSpan(this.milliseconds + minutes * 60 * 1000);
    }

    addHours(hours: number): TimeSpan {
        return new TimeSpan(this.milliseconds + hours * 60 * 60 * 1000);
    }

    addDays(days: number): TimeSpan {
        return new TimeSpan(this.milliseconds + days * 24 * 60 * 60 * 1000);
    }

    toString(): string {
        const days = Math.floor(this.getTotalDays());
        const hours = Math.floor(this.getTotalHours()) % 24;
        const minutes = Math.floor(this.getTotalMinutes()) % 60;
        const seconds = Math.floor(this.getTotalSeconds()) % 60;
        const milliseconds = Math.floor(this.milliseconds) % 1000;

        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`;
    }
}