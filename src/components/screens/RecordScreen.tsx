import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { RecordingTimer } from "../features/RecordingTimer";

type RecordScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Record">,
};

export function RecordScreen({ navigation }: RecordScreenProps) {
    const [isRecording, setIsRecording] = React.useState(false);
    const [duration, setDuration] = React.useState(0);
    const timerRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const toggleRecording = () => {
        if (!isRecording) {
            setIsRecording(true);
            timerRef.current = setInterval(() => {
                setDuration(prev => prev + 1);
            }, 1000) as unknown as number;
            Dialogs.alert("Recording started!");
        } else {
            setIsRecording(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            Dialogs.alert("Recording stopped!");
        }
    };

    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4 space-y-6">
                <label className="text-2xl font-bold text-center">
                    {isRecording ? "Recording..." : "Ready to Record"}
                </label>

                <RecordingTimer duration={duration} />

                <Button
                    text={isRecording ? "⏹️ Stop Recording" : "🎙️ Start Recording"}
                    onTap={toggleRecording}
                    variant={isRecording ? "danger" : "primary"}
                    className="p-8"
                />

                <Card>
                    <label className="text-lg font-bold">Recording Features:</label>
                    {[
                        "Background recording",
                        "High-quality audio",
                        "Unlimited duration",
                        "Auto-save"
                    ].map((feature, index) => (
                        <label key={index} className="text-sm text-gray-600">
                            • {feature}
                        </label>
                    ))}
                </Card>
            </stackLayout>
        </scrollView>
    );
}