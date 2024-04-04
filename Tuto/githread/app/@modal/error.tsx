"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // TODO: Afficher une notification (Toast)

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return null;
}
