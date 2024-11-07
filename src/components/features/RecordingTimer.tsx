import * as React from "react";

interface RecordingTimerProps {
    duration: number;
}

export function RecordingTimer({ duration }: RecordingTimerProps) {
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <label className="text-4xl text-center text-red-500 font-mono">
            {formatTime(duration)}
        </label>
    );
}