export const fetchGeminiResponse = async (prompt, dataUmkm) => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  
  const url = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=" + API_KEY;

  const userPrompt = `
  Kamu adalah asisten ahli yang merekomendasikan UMKM berdasarkan permintaan user.
  Berikut adalah data UMKM lengkap dalam format JSON string:
  ${JSON.stringify(dataUmkm)}

  User sedang mencari: "${prompt}"

  TUGAS:
  1. Analisis permintaan user dan data UMKM yang tersedia.
  2. Pilih UMKM yang PALING SESUAI dengan permintaan user.
  3. Tulis jawabanmu dalam DUA bagian yang JELAS, dipisahkan oleh baris baru.

  FORMAT JAWABAN (WAJIB DIIKUTI):
  (BAGIAN 1: NARASI)
  Tulis sebuah paragraf narasi singkat yang ramah untuk user, menjelaskan rekomendasi Anda.

  (BAGIAN 2: JSON MURNI)
  [
    {...objek UMKM lengkap 1...},
    {...objek UMKM lengkap 2...}
  ]

  PERATURAN PENTING:
  - BAGIAN 2 HARUS berupa array JSON MURNI.
  - JANGAN membungkus array JSON dengan markdown \`\`\`json ... \`\`\`.
  - Array JSON harus berisi OBJEK LENGKAP dari UMKM yang Anda rekomendasikan, persis seperti format data yang saya berikan.
  - Jika tidak ada UMKM yang cocok, kembalikan narasi yang menjelaskannya dan array JSON kosong [].
  - Pisahkan Bagian 1 (narasi) dan Bagian 2 (array JSON) HANYA dengan satu baris baru.
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