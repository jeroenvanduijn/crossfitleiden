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
        // 3. Populate Hidden Field & URL
        function populate() {
            try {
                const hist = JSON.parse(
                    sessionStorage.getItem("gymops_history") || "[]"
                );
                const historyString = hist.join(" -> ");

                // A. Set URL Parameter (GHL often reads this)
                const url = new URL(window.location.href);
                if (url.searchParams.get("page_history") !== historyString) {
                    url.searchParams.set("page_history", historyString);
                    window.history.replaceState({}, "", url.toString());
                    // console.log("GHL Tracker: Updated URL param page_history");
                }

                // B. Populate Hidden Inputs
                // Common GHL selector patterns
                const selector = [
                    'input[name="page_history"]',
                    'input[name="contact.page_history"]',
                    'input[data-q="page_history"]',
                    'input[class*="page_history"]', // messy but sometimes needed
                ].join(", ");

                const inputs = document.querySelectorAll(selector);

                if (inputs.length > 0) {
                    inputs.forEach((input) => {
                        const inputEl = input as HTMLInputElement;
                        if (inputEl.value !== historyString) {
                            inputEl.value = historyString;
                            inputEl.dispatchEvent(new Event("input", { bubbles: true }));
                            inputEl.dispatchEvent(new Event("change", { bubbles: true }));
                            // console.log("GHL Tracker: Populated input", inputEl);
                        }
                    });
                }
            } catch (e) {
                console.error("Error populating page history:", e);
            }
        }

        // Run immediately
        populate();

        // Run on invalidation events
        const handleEvents = () => setTimeout(populate, 500);
        document.addEventListener("click", handleEvents);
        document.addEventListener("focus", handleEvents); // Tab switch might trigger re-render

        // Use MutationObserver for dynamic popups
        const observer = new MutationObserver((mutations) => {
            // Check if nodes were added
            const hasAddedNodes = mutations.some((m) => m.addedNodes.length > 0);
            if (hasAddedNodes) populate();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener("click", handleEvents);
            document.removeEventListener("focus", handleEvents);
            observer.disconnect();
        };
    }, []);

    return null; // This component renders nothing visually
}
