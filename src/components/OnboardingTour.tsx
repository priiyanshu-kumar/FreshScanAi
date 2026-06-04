import { Joyride } from "react-joyride";
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
    />
  );
}