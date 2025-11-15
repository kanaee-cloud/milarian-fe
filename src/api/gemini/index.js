export const fetchGeminiResponse = async (prompt, dataUmkm) => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const url = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=" + API_KEY;

  const userPrompt = `
Kamu adalah asisten yang bertugas merekomendasikan UMKM berdasarkan permintaan user.
Berikut data lengkap UMKM dalam format JSON:
${JSON.stringify(dataUmkm)}

Permintaan user: "${prompt}"

===== PENTING =====
Kamu HARUS menjawab dalam DUA BAGIAN SAJA:

(BAGIAN 1 - NARASI)
- Tulis paragraf penjelasan singkat yang ramah.
- JANGAN gunakan bullet, list, numbering, atau formatting apapun.
- Hanya satu paragraf biasa.

(BAGIAN 2 - JSON MURNI)
- Tulis HANYA array JSON.
- Tanpa markdown.
- Tanpa penjelasan sebelum atau sesudah.
- Tanpa backtick.
- Tanpa trailing comma.
- Array berisi 0–2 objek UMKM LENGKAP (ambil dari data yang diberikan).
- Format HARUS valid JSON.

===== FORMAT JAWABAN WAJIB =====

<NARASI DI SINI>

[
  {...objek UMKM 1...},
  {...objek UMKM 2...}
]

===== ATURAN KERAS =====
- Dilarang menambahkan teks apapun setelah array JSON.
- Dilarang menulis markdown seperti \`\`\`json atau \`\`\`.
- Dilarang menulis catatan, disclaimer, atau penutup.
- Jika tidak ada UMKM yang cocok, tulis array kosong [].

Pastikan output mengikuti format DIATAS 100% tanpa pengecualian.
`;


  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      contents: [{ parts: [{ text: userPrompt }] }]
    })
  });


  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Error body from API:", errorBody);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  if (!result.candidates || result.candidates.length === 0) {
    console.error("No candidates returned from API", result);
    if (result.promptFeedback) {
      console.error("Prompt Feedback:", result.promptFeedback);
      return "Permintaan Anda diblokir oleh filter keamanan. Coba ubah kata-kata Anda.";
    }
    return "Maaf, terjadi kesalahan pada server AI. Silakan coba lagi.";
  }

  const text = result.candidates[0].content.parts[0].text || "";
  return text;
};