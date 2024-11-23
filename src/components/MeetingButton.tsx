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
      <p className="text-xs text-zinc-400 mt-2">Powerered by Calendly</p>
    </div>
  );
}
