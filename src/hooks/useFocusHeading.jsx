import { useEffect, useRef } from "react";

export default function useFocusHeading() {
  const headingRef = useRef(null);

  //useEffect(() => {
    //headingRef.current?.focus();
  //}, []);

  return headingRef;
}