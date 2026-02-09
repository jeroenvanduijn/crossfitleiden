"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageHistoryTracker() {
    const pathname = usePathname();
    const historyRef = useRef<string[]>([]);

    useEffect(() => {
        try {
            // 1. Restore history from sessionStorage
            const existingHistory = JSON.parse(
                sessionStorage.getItem("gymops_history") || "[]"
            );
            historyRef.current = Array.isArray(existingHistory) ? existingHistory : [];

            // 2. Track current page (deduplicate sequential visits)
            const lastPath = historyRef.current[historyRef.current.length - 1];
            if (lastPath !== pathname) {
                historyRef.current.push(pathname);
                // Keep only last 10 pages
                if (historyRef.current.length > 10) {
                    historyRef.current.shift();
                }
                sessionStorage.setItem(
                    "gymops_history",
                    JSON.stringify(historyRef.current)
                );
            }
        } catch (e) {
            console.error("Error tracking page history:", e);
        }
    }, [pathname]);

    useEffect(() => {
        // 3. Populate Hidden Field
        function populate() {
            try {
                // Find input by name (GHL usually uses "page_history")
                const inputs = document.querySelectorAll(
                    'input[name="page_history"], input[data-q="page_history"]'
                );

                if (inputs.length > 0) {
                    const hist = JSON.parse(
                        sessionStorage.getItem("gymops_history") || "[]"
                    );
                    const historyString = hist.join(" -> ");

                    inputs.forEach((input) => {
                        const inputEl = input as HTMLInputElement;
                        // Only update if value is different to avoid loops
                        if (inputEl.value !== historyString) {
                            inputEl.value = historyString;
                            // Dispatch input event so GHL/frameworks detect the change
                            inputEl.dispatchEvent(new Event("input", { bubbles: true }));
                            inputEl.dispatchEvent(new Event("change", { bubbles: true }));
                        }
                    });
                }
            } catch (e) {
                console.error("Error populating page history field:", e);
            }
        }

        // Run on mount
        populate();

        // Re-run for clicks (to catch popups opening)
        const handleClick = () => setTimeout(populate, 500);
        document.addEventListener("click", handleClick);

        // Initial check for forms that might already be there
        const interval = setInterval(populate, 1000);

        return () => {
            document.removeEventListener("click", handleClick);
            clearInterval(interval);
        };
    }, []);

    return null; // This component renders nothing visually
}
