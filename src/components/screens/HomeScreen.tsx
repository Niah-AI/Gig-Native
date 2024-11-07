import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const features = [
        { name: "Record", icon: "🎙️", route: "Record" },
        { name: "Transcribe", icon: "📝", route: "Transcribe" },
        { name: "Phone Calls", icon: "📱", route: "Phone" },
        { name: "Import", icon: "📥", route: "Import" },
        { name: "Summarize", icon: "📊", route: "Summary" },
        { name: "Share", icon: "📤", route: "Share" }
    ];

    return (
        <scrollView className="bg-gray-100">
            <stackLayout className="p-4 space-y-4">
                <label className="text-3xl font-bold text-center text-blue-600">
                    GigaDesk
                </label>
                
                <label className="text-lg text-center text-gray-600">
                    AI-Powered Audio Recording & Transcription
                </label>

                <gridLayout rows="auto, auto, auto" columns="*, *" className="mt-6">
                    {features.map((feature, index) => (
                        <Button
                            key={feature.route}
                            text={`${feature.icon} ${feature.name}`}
                            onTap={() => navigation.navigate(feature.route as keyof MainStackParamList)}
                            className={`m-2 col-${index % 2} row-${Math.floor(index / 2)}`}
                        />
                    ))}
                </gridLayout>

                <Card className="mt-6">
                    <label className="text-lg font-bold text-center">
                        Features
                    </label>
                    {[
                        "Unlimited audio recording",
                        "Multi-language transcription",
                        "AI-powered summarization",
                        "Secure call recording",
                        "Siri shortcuts support"
                    ].map((feature, index) => (
                        <label key={index} className="text-sm text-gray-600 mt-2">
                            • {feature}
                        </label>
                    ))}
                </Card>
            </stackLayout>
        </scrollView>
    );
}