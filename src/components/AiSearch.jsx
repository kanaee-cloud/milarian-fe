// AiSearch.js (Sudah diperbaiki)

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
        <div className="md:flex items-center gap-5 mt-10 w-full max-w-5xl mx-auto px-4">
            <input
                type="text"
                className="w-full md:text-md text-sm px-4 py-4 pr-12 rounded-full bg-light/10 border border-light/20 focus:outline-none text-light placeholder:text-light/50"
                placeholder="Ceritakan UMKM yang kamu cari... (cth: 'baso aci pedas daerah dago')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
            />
            <button
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-accent/80 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-primary transition duration-200 disabled:opacity-50"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin h-5 w-5" />
                    </>
                ) : (
                    <>
                        <Sparkles />
                    </>
                )}
            </button>

            {error && (
                <div className="mt-8 w-full text-center text-red-600">
                    <p>{error}</p>
                </div>
            )}

            {result && (
                <div className="mt-8 w-full">
                    <p className="text-lg text-gray-800 mb-6 p-4 bg-gray-100 rounded-lg">
                        {result.narrative}
                    </p>

                    {result.umkmList.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 text-primary lg:grid-cols-3 gap-6">
                            {result.umkmList.map((umkm, i) => (
                                <UmkmCard key={umkm.basicInfo.businessName || i} umkm={umkm} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">
                            Tidak ada UMKM yang ditemukan sesuai kriteria Anda.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};