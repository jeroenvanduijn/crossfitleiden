"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Type definitions
interface HeatEntry {
  heat: string;
  startTime: string;
  category: string;
  participants: string;
  finishTime?: string;
}

export default function HeatsPage() {
  const [heats, setHeats] = useState<HeatEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Google Sheets API configuration
  // Replace these values with actual Google Sheets details
  const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";
  const API_KEY = "YOUR_GOOGLE_API_KEY";
  const SHEET_NAME = "Heats"; // Name of the sheet tab

  useEffect(() => {
    fetchHeatsData();
  }, []);

  const fetchHeatsData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Google Sheets API URL
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Kon heat data niet laden");
      }

      const data = await response.json();
      const rows = data.values;

      if (!rows || rows.length === 0) {
        setHeats([]);
        setLoading(false);
        return;
      }

      // Skip header row and parse data
      const parsedHeats: HeatEntry[] = rows.slice(1).map((row: string[]) => ({
        heat: row[0] || "",
        startTime: row[1] || "",
        category: row[2] || "",
        participants: row[3] || "",
        finishTime: row[4] || "",
      }));

      setHeats(parsedHeats);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching heats:", err);
      setError("Kon heat data niet laden. Probeer het later opnieuw.");
      setLoading(false);

      // Load demo data for development
      loadDemoData();
    }
  };

  // Demo data for development/testing
  const loadDemoData = () => {
    const demoHeats: HeatEntry[] = [
      {
        heat: "Heat 1",
        startTime: "08:00",
        category: "Singles - Men",
        participants: "John Doe, Mike Smith, Tom Wilson",
        finishTime: "01:15:32",
      },
      {
        heat: "Heat 2",
        startTime: "08:20",
        category: "Singles - Women",
        participants: "Sarah Johnson, Emma Brown, Lisa Davis",
        finishTime: "01:22:45",
      },
      {
        heat: "Heat 3",
        startTime: "08:40",
        category: "Doubles - Mixed",
        participants: "Team Alpha (Mark & Lisa), Team Beta (Chris & Anna)",
        finishTime: "",
      },
      {
        heat: "Heat 4",
        startTime: "09:00",
        category: "Singles - Men",
        participants: "David Lee, James Clark, Robert Taylor",
        finishTime: "",
      },
      {
        heat: "Heat 5",
        startTime: "09:20",
        category: "Doubles - Men",
        participants: "Team Gamma (Tom & Jerry), Team Delta (Rick & Morty)",
        finishTime: "",
      },
    ];
    setHeats(demoHeats);
    setLoading(false);
  };

  // Filter heats based on search and category
  const filteredHeats = heats.filter((heat) => {
    const matchesSearch =
      heat.participants.toLowerCase().includes(searchTerm.toLowerCase()) ||
      heat.heat.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      filterCategory === "all" || heat.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter
  const categories = ["all", ...new Set(heats.map((h) => h.category))];

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-verdigris to-cinnabar text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/hyrox"
              className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Terug naar HYROX Simulation
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Heats & Uitslagen
            </h1>
            <p className="text-xl text-white/90">
              Bekijk de heat-indeling en resultaten van de HYROX Simulation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Zoek op naam of heat
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      placeholder="Bijv. 'John Doe' of 'Heat 3'"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdigris focus:border-verdigris outline-none transition-all"
                    />
                    <svg
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="md:w-64">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Filter op categorie
                  </label>
                  <select
                    id="category"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-verdigris focus:border-verdigris outline-none transition-all bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === "all" ? "Alle categorieën" : cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results count */}
              {searchTerm || filterCategory !== "all" ? (
                <div className="mt-4 text-sm text-gray-600">
                  {filteredHeats.length} {filteredHeats.length === 1 ? "heat" : "heats"} gevonden
                </div>
              ) : null}
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-verdigris border-t-transparent"></div>
                <p className="mt-4 text-gray-600">Data wordt geladen...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-cinnabar/10 border border-cinnabar/30 rounded-xl p-6 text-center">
                <svg className="w-12 h-12 text-cinnabar mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-cinnabar font-medium mb-2">{error}</p>
                <button
                  onClick={fetchHeatsData}
                  className="mt-4 bg-cinnabar text-white px-6 py-2 rounded-lg hover:bg-cinnabar/90 transition-colors"
                >
                  Probeer opnieuw
                </button>
              </div>
            )}

            {/* Heats List */}
            {!loading && !error && (
              <>
                {filteredHeats.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-md p-12 text-center">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600 text-lg">
                      Geen heats gevonden met je zoekcriteria.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setFilterCategory("all");
                      }}
                      className="mt-4 text-verdigris hover:underline font-medium"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredHeats.map((heat, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                      >
                        <div className="p-6 md:p-8">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div className="flex items-center mb-4 md:mb-0">
                              <div className="w-16 h-16 bg-gradient-to-br from-verdigris to-cinnabar rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-white font-bold text-xl">
                                  {heat.heat.replace("Heat ", "")}
                                </span>
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                  {heat.heat}
                                </h3>
                                <p className="text-gray-600">
                                  Start: <span className="font-semibold">{heat.startTime}</span>
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <span className="inline-block bg-verdigris/10 text-verdigris px-4 py-2 rounded-full text-sm font-semibold">
                                {heat.category}
                              </span>
                              {heat.finishTime && (
                                <span className="inline-block bg-jonquil/10 text-jonquil px-4 py-2 rounded-full text-sm font-semibold">
                                  ⏱️ {heat.finishTime}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-sm text-gray-600 font-medium mb-2">Deelnemers:</p>
                            <p className="text-gray-800">{heat.participants}</p>
                          </div>

                          {!heat.finishTime && (
                            <div className="mt-4 bg-gray-50 rounded-lg p-3">
                              <p className="text-sm text-gray-600 italic">
                                ⏳ Deze heat moet nog starten of is bezig...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Info Box */}
            <div className="mt-12 bg-gradient-to-br from-verdigris/5 to-cinnabar/5 rounded-xl p-8 border border-verdigris/20">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-verdigris mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2">Live Updates</h3>
                  <p className="text-gray-700">
                    Deze pagina wordt automatisch gesynchroniseerd met onze heat-planning.
                    Ververs de pagina om de nieuwste informatie en resultaten te zien.
                  </p>
                </div>
              </div>
            </div>

            {/* Refresh Button */}
            <div className="mt-8 text-center">
              <button
                onClick={fetchHeatsData}
                className="bg-verdigris text-white px-8 py-3 rounded-lg font-semibold hover:bg-verdigris/90 transition-all inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Ververs Data
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nog niet ingeschreven?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schrijf je nu in voor de HYROX Simulation en verzeker je van een plek!
          </p>
          <Link
            href="/hyrox#inschrijven"
            className="cta-button text-lg"
          >
            Schrijf je in
          </Link>
        </div>
      </section>
    </>
  );
}
