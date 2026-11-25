import { site } from '../config/site';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
export const TIME_ZONE = 'America/Los_Angeles';

export interface OpenStatus {
  open: boolean;
  /** Short label, e.g. "Open now" / "Closed" */
  label: string;
  /** Detail, e.g. "Closes 4:30 PM" / "Opens Mon 7:00 AM" */
  detail: string;
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const formatTime = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${suffix}`;
};

const hoursFor = (day: string) => site.hours.find((h) => (h.days as readonly string[]).includes(day));

/** Current day/minutes at the restaurant, regardless of the visitor's time zone. */
const restaurantNow = (now: Date) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return {
    dayIndex: DAYS.indexOf(get('weekday') as (typeof DAYS)[number]),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  };
};

export const getOpenStatus = (now: Date = new Date()): OpenStatus => {
  const { dayIndex, minutes } = restaurantNow(now);
  const today = hoursFor(DAYS[dayIndex]);

  if (today && minutes >= toMinutes(today.opens) && minutes < toMinutes(today.closes)) {
    return { open: true, label: 'Open now', detail: `Closes ${formatTime(today.closes)}` };
  }
  if (today && minutes < toMinutes(today.opens)) {
    return { open: false, label: 'Closed', detail: `Opens ${formatTime(today.opens)}` };
  }
  for (let i = 1; i <= 7; i++) {
    const day = DAYS[(dayIndex + i) % 7];
    const next = hoursFor(day);
    if (next) {
      const when = i === 1 ? 'tomorrow' : day.slice(0, 3);
      return { open: false, label: 'Closed', detail: `Opens ${when} ${formatTime(next.opens)}` };
    }
  }
  return { open: false, label: 'Closed', detail: '' };
};
