
import { useEffect, useState } from "react";

export function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || "#/");

  useEffect(() => {
    function handleHashChange() {
      setHash(window.location.hash || "#/");
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function match(pattern) {
    const current = (hash || "#/").replace(/^#/, "");
    const route = (pattern || "#/").replace(/^#/, "");

    const currentParts = current.split("/").filter(Boolean);
    const routeParts = route.split("/").filter(Boolean);

    if (currentParts.length !== routeParts.length) {
      return null;
    }

    const params = {};
    for (let i = 0; i < routeParts.length; i++) {
      const rp = routeParts[i];
      const cp = currentParts[i];
      if (rp.startsWith(":")) {
        params[rp.slice(1)] = decodeURIComponent(cp || "");
      } else if (rp !== cp) {
        return null;
      }
    }
    return params;
  }

  return { match, hash };
}
