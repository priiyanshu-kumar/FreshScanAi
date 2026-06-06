import Joyride from "react-joyride";
import type { Step } from "react-joyride";

interface Props {
  run: boolean;
}

export default function OnboardingTour({ run }: Props) {
  const steps: Step[] = [
    {
      target: "body",
      content: "Welcome to FreshScanAI! Let's take a quick tour.",
      placement: "center",
    },
    {
      target: "a[href='/scanner']",
      content: "Use Scanner to analyze fish freshness.",
    },
    {
      target: "a[href='/map']",
      content: "View market insights and trust map here.",
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
      styles={{
        options: {
          primaryColor: "#eab308",
          backgroundColor: "#111111",
          textColor: "#ffffff",
          borderRadius: 0,
          zIndex: 10000,
        },
        tooltipContainer: {
          border: "3px solid #eab308",
          borderRadius: 0,
          boxShadow: "none",
          textAlign: "left",
        },
        buttonNext: {
          backgroundColor: "#eab308",
          color: "#000000",
          borderRadius: 0,
        },
        buttonBack: {
          color: "#eab308",
        },
        buttonSkip: {
          color: "#ffffff",
        },
        tooltip: {
          borderRadius: 0,
        },
      }}
    />
  );
}