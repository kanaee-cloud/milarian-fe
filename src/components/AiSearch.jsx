// AiSearch.js (Cleaned and Optimized)

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

    const parseAiResponse = (responseText) => {
        const jsonMatch = responseText.match(/(\[.*\])/s);

        if (jsonMatch && jsonMatch[1]) {
            const jsonPart = jsonMatch[1];
            const narrativePart = responseText.substring(0, jsonMatch.index).trim();

            try {
                const recommendedList = JSON.parse(jsonPart);
                return {
                    narrative: narrativePart,
                    umkmList: recommendedList,
                };
            } catch (e) {
                console.error("Gagal parsing JSON dari AI:", e);
                return {
                    narrative: "Terjadi kesalahan saat memproses data. Coba lagi.",
                    umkmList: [],
                };
            }
        } else {
            return {
                narrative: responseText,
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
        <div className="w-full px-4">
            {/* Search Header Section */}
            <div className={`w-full transition-all duration-700 ease-in-out ${
                hasSearched 
                    ? 'mt-16 pt-6 max-w-3xl mx-auto' 
                    : 'h-[calc(100vh-80px)] flex flex-col justify-center items-center'
            }`}>
                <div className={`w-full transition-all duration-700 ease-in-out ${
                    hasSearched ? '' : 'max-w-2xl'
                }`}>
                    {/* Title */}
                    <h1 className="text-2xl font-bold text-center mb-5">
                        Mau cari UMKM kayak gimana?
                    </h1>
                    
                    {/* Divider */}
                    <div className='w-20 h-1 bg-accent mx-auto mb-8'></div>

                    {/* Search Bar + Button */}
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            className="flex-1 text-sm md:text-md px-6 py-4 rounded-full bg-light/10 border border-light/20 focus:outline-none focus:border-accent/50 text-light placeholder:text-light/50 transition-colors"
                            placeholder="Ceritakan UMKM yang kamu cari... (cth: 'baso aci pedas daerah dago')"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
                        />
                        <button
                            onClick={handleSearch}
                            disabled={isLoading}
                            className="bg-accent/80 text-white px-6 py-4 rounded-full hover:bg-accent transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin h-5 w-5" />
                            ) : (
                                <Sparkles className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="w-full max-w-3xl mx-auto mt-6">
                    <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                        <p className="text-red-600">{error}</p>
                    </div>
                </div>
            )}

            {/* Results Section */}
            {result && (
                <div className="w-full max-w-3xl mx-auto mt-8">
                    <div className="animate-fade-in">
                        {/* AI Narrative - Full Width */}
                        <div className="w-full bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-2xl border border-accent/20 shadow-md mb-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="h-5 w-5 text-accent" />
                                <h3 className="font-semibold text-lg text-gray-800">Rekomendasi AI</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {result.narrative}
                            </p>
                        </div>

                        {/* UMKM Cards - 2 Cards in a Row, 1 Card Centered */}
                        {result.umkmList.length > 0 ? (
                            <div className={`grid gap-6 ${
                                result.umkmList.length === 1 
                                    ? 'grid-cols-1 justify-items-center' 
                                    : 'grid-cols-1 md:grid-cols-2'
                            }`}>
                                {result.umkmList.slice(0, 2).map((umkm, i) => (
                                    <UmkmCard key={umkm.basicInfo.businessName || i} umkm={umkm} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
                                <p className="text-gray-500 text-lg">
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