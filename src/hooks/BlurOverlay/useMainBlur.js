import { useEffect } from 'react';

export function useOverlay(isOpen) {
  const open = isOpen;

  useEffect(() => {
    if (open) {
      document.querySelector('html').classList.add('overflow-hidden');
      document.querySelector('main').classList.add('blur-sm');
    } else {
      document.querySelector('html').classList.remove('overflow-hidden');
      document.querySelector('main').classList.remove('blur-sm');
    }

    return () => {
      document.querySelector('html').classList.remove('overflow-hidden');
      document.querySelector('main').classList.remove('blur-sm');
    };
  }, [open]);
}
