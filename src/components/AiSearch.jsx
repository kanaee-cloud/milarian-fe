// AiSearch.js (Responsive Version)

import React, { useState } from "react";
import { UmkmCard } from "./UmkmCard";
import { Loader2, Sparkles } from "lucide-react";
import { fetchGeminiResponse } from "../api/gemini";
import { dataUmkm } from "../data/data_umkm";

export const AiSearch = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const cleanJsonString = (jsonStr) => {
        let cleaned = jsonStr
            // Hapus markdown code blocks
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            // Hapus trailing commas sebelum ] atau }
            .replace(/,(\s*[}\]])/g, '$1')
            // Fix escaped quotes yang salah
            .replace(/\\"/g, '"')
            // Hapus control characters
            .replace(/[\x00-\x1F\x7F]/g, '')
            .trim();
        
        // Coba fix common JSON issues
        try {
            // Test parse dulu
            JSON.parse(cleaned);
            return cleaned;
        } catch (e) {
            console.warn("First parse attempt failed, trying aggressive cleaning...");
            // Aggressive cleaning jika gagal
            cleaned = cleaned
                .replace(/,(\s*[}\]])/g, '$1') // Trailing commas lagi
                .replace(/\n/g, ' ') // Hapus newlines
                .replace(/\r/g, ' ') // Hapus carriage returns
                .replace(/\t/g, ' ') // Hapus tabs
                .replace(/\s{2,}/g, ' '); // Multiple spaces jadi single
            return cleaned;
        }
    };

    const parseAiResponse = (responseText) => {
        console.log("Raw Response:", responseText); // Debug
        
        // Extract narrative dan JSON secara terpisah
        const parts = responseText.split(/(\[[\s\S]*\])/);
        let narrativePart = "";
        let jsonPart = null;
        
        // Cari JSON array
        for (let part of parts) {
            if (part.trim().startsWith('[') && part.trim().endsWith(']')) {
                jsonPart = part;
            } else if (part.trim()) {
                narrativePart += part.trim() + " ";
            }
        }

        if (jsonPart) {
            try {
                // Clean JSON sebelum parse
                const cleanedJson = cleanJsonString(jsonPart);
                console.log("Cleaned JSON (first 500 chars):", cleanedJson.substring(0, 500)); // Debug
                
                const recommendedList = JSON.parse(cleanedJson);
                
                // Validasi array
                if (!Array.isArray(recommendedList)) {
                    throw new Error("Bukan array");
                }
                
                console.log("✅ Parse berhasil! Found", recommendedList.length, "UMKM");
                
                return {
                    narrative: narrativePart.trim() || "Berikut rekomendasi UMKM untuk Anda:",
                    umkmList: recommendedList,
                };
            } catch (e) {
                console.error("❌ Gagal parsing JSON:", e.message);
                console.error("Error at position:", e.message.match(/position (\d+)/)?.[1]);
                
                // Show context around error
                if (jsonPart) {
                    const errorPos = parseInt(e.message.match(/position (\d+)/)?.[1] || 0);
                    const start = Math.max(0, errorPos - 100);
                    const end = Math.min(jsonPart.length, errorPos + 100);
                    console.error("Context around error:", jsonPart.substring(start, end));
                }
                
                return {
                    narrative: "Maaf, sistem kesulitan memproses rekomendasi. Silakan coba lagi dengan deskripsi yang lebih spesifik.",
                    umkmList: [],
                };
            }
        } else {
            // Tidak ada JSON array ditemukan
            console.warn("⚠️ Tidak ditemukan JSON array dalam response");
            return {
                narrative: responseText || "Tidak ada rekomendasi yang sesuai dengan pencarian Anda.",
                umkmList: [],
            };
        }
    };

    const handleSearch = async () => {
        if (!prompt.trim()) return;

        setHasSearched(true);
        setIsLoading(true);
        setError(null);
        setResult(null);
        
        try {
            const aiResponse = await fetchGeminiResponse(prompt, dataUmkm);
            const parsedResult = parseAiResponse(aiResponse);
            setResult(parsedResult);
        } catch (e) {
            console.error("Error fetching from Gemini:", e);
            setError("Maaf, terjadi kesalahan. Silakan coba lagi nanti.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Search Header Section */}
            <div className={`w-full transition-all duration-700 ease-in-out ${
                hasSearched 
                    ? 'mt-8 sm:mt-12 lg:mt-16 pt-4 sm:pt-6 max-w-3xl mx-auto' 
                    : 'min-h-[calc(100vh-80px)] flex flex-col justify-center items-center py-8'
            }`}>
                <div className={`w-full transition-all duration-700 ease-in-out ${
                    hasSearched ? '' : 'max-w-2xl'
                }`}>
                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-5 px-2">
                        Mau cari UMKM kayak gimana?
                    </h1>
                    
                    {/* Divider */}
                    <div className='w-16 sm:w-20 h-1 bg-accent mx-auto mb-6 sm:mb-8'></div>

                    {/* Search Bar + Button */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <input
                            type="text"
                            className="flex-1 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-light/10 border border-light/20 focus:outline-none focus:border-accent/50 text-light placeholder:text-light/50 transition-colors"
                            placeholder="Ceritakan UMKM yang kamu cari..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
                        />
                        <button
                            onClick={handleSearch}
                            disabled={isLoading}
                            className="bg-accent/80 text-white px-6 py-3 sm:py-4 rounded-full hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin h-5 w-5" />
                                    <span className="sm:hidden">Mencari...</span>
                                </>
                            ) : (
                                <>
                                    <Sparkles className="h-5 w-5" />
                                    <span className="sm:hidden">Cari</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="w-full max-w-3xl mx-auto mt-4 sm:mt-6">
                    <div className="text-center p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                        <p className="text-sm sm:text-base text-red-600">{error}</p>
                    </div>
                </div>
            )}

            {/* Results Section */}
            {result && (
                <div className="w-full max-w-3xl mx-auto mt-6 sm:mt-8 pb-8">
                    <div className="animate-fade-in">
                        {/* AI Narrative - Full Width */}
                        <div className="w-full bg-gradient-to-br from-accent/10 to-primary/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-accent/20 shadow-md mb-4 sm:mb-6">
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                                <h3 className="font-semibold text-base sm:text-lg text-gray-800">Rekomendasi AI</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {result.narrative}
                            </p>
                        </div>

                        {/* UMKM Cards - Responsive Grid */}
                        {result.umkmList.length > 0 ? (
                            <div className={`grid gap-4 sm:gap-6 ${
                                result.umkmList.length === 1 
                                    ? 'grid-cols-1 justify-items-center text-primary' 
                                    : 'grid-cols-1 sm:grid-cols-2 text-primary'
                            }`}>
                                {result.umkmList.slice(0, 2).map((umkm, i) => (
                                    <UmkmCard key={umkm?.basicInfo?.businessName || i} umkm={umkm} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 sm:py-12 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200">
                                <p className="text-sm sm:text-base lg:text-lg text-gray-500 px-4">
                                    Tidak ada UMKM yang ditemukan sesuai kriteria Anda.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};