import { Button } from '@/components/Button';

export function MeetingButton() {
  return (
    <div className="flex flex-col items-center">
      <Button
        href="https://calendly.com/brendan-jkp8/30min"
        style="primary"
      >
        Schedule a Meeting
      </Button>
    </div>
  );
}
