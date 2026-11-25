import { useEffect, useState } from 'react';
import { getOpenStatus, OpenStatus } from './hours';

// Computed on the client (pages are prerendered, so build-time status would be stale).
// Returns null until mounted to avoid a hydration mismatch; refreshes every minute.
export const useOpenStatus = (): OpenStatus | null => {
  const [status, setStatus] = useState<OpenStatus | null>(null);
  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
};
