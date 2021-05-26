import { useState } from "react";

export const useCurrentLocation = (): [string, () => void] => {
  const [location, setLocation] = useState({
    current: window.location.pathname,
    next: ""
  });

  const currentLocation = location.current;
  const setNextLocation = () =>
    setLocation({
      current: location.next,
      next: window.location.pathname
    });

  return [currentLocation, setNextLocation];
};
