// 1. Tentukan variabel repositori dan path file Anda
const OWNER = 'bahasacoder';
const REPO = 'roastand';
const FILE_PATH = 'db/items.json'; // Lokasi file JSON di repo

// 2. Gunakan Personal Access Token (PAT) GitHub dengan akses ke internal repo tersebut
const GITHUB_TOKEN = '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'; 

// 3. Susun URL Endpoint REST API GitHub resmi
const url = `https://github.com{OWNER}/${REPO}/contents/${FILE_PATH}`;

async function fetchInternalJson() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // Token autentikasi wajib untuk internal/private repository
        'Authorization': `token ${GITHUB_TOKEN}`,
        // Menginstruksikan GitHub API mengembalikan konten file JSON mentah langsung
        'Accept': 'application/vnd.github.v3.raw' 
      }
    });

    if (!response.ok) {
      throw new Error(`Gagal mengambil file: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();
    console.log('Data JSON berhasil diambil:', jsonData);
    return jsonData;

  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}


export default function apasOctoPage() {
  const ambitFetch = fetchInternalJson();
  return (
    <>
      <div>
        Octos Apas Page
      </div>
    </>
  )
}




