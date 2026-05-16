const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const path = require('path');

const app = express();
const port = 3000;

// Menyajikan folder 'public' (Tempat Anda meletakkan file index.html di atas)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Set up penyimpanan sementara untuk file upload dari frontend
const upload = multer({ dest: 'uploads/' });

// Endpoint API Web ke Server Magnific
app.post('/api/generate-motion', upload.fields([
    { name: 'start_image', maxCount: 1 }, 
    { name: 'end_image', maxCount: 1 }
]), async (req, res) => {
    try {
        const apiKey = req.headers.authorization?.split(' ')[1];
        if (!apiKey) return res.status(401).json({ error: 'API Key Magnific diperlukan' });

        const { prompt, negative_prompt, aspect_ratio, duration, cfg_scale, generate_audio } = req.body;
        
        const startImageFile = req.files['start_image'] ? req.files['start_image'][0] : null;
        const endImageFile = req.files['end_image'] ? req.files['end_image'][0] : null;

        if (!startImageFile) {
            return res.status(400).json({ error: 'Start image wajib ada!' });
        }

        // =========================================================================
        // PENTING UNTUK PRODUKSI NYATA:
        // Magnific API (Kling V3 Pro) mewajibkan gambar berupa URL Publik (string).
        // Oleh karena itu, di titik ini Anda HARUS membuat fungsi upload 
        // ke layanan seperti AWS S3, Cloudinary, atau ImgBB untuk mendapatkan URL.
        // =========================================================================
        
        console.log("Mengunggah gambar ke Cloud Storage...");
        
        // MOCKUP (Contoh URL sementara agar tidak error saat diuji tanpa cloud storage)
        let startImageUrl = "https://picsum.photos/800/600"; 
        let endImageUrl = endImageFile ? "https://picsum.photos/800/600" : null;

        // Susun payload JSON sesuai spesifikasi Kling V3 Pro API
        const payload = {
            prompt: prompt || "",
            start_image_url: startImageUrl,
            generate_audio: generate_audio === 'true',
            multi_shot: false,
            shot_type: "customize",
            aspect_ratio: aspect_ratio || "16:9",
            duration: duration || "5",
            negative_prompt: negative_prompt || "blur, distort, and low quality",
            cfg_scale: parseFloat(cfg_scale) || 0.5
        };

        if (endImageUrl) {
            payload.end_image_url = endImageUrl;
        }

        console.log("Mengirim request ke API Magnific...");
        
        // Memanggil API Magnific
        const magnificResponse = await axios.post(
            'https://api.magnific.com/v1/ai/video/kling-v3-pro', 
            payload, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-magnific-api-key': apiKey
                }
            }
        );

        // Bersihkan (Hapus) file lokal dari folder 'uploads' karena sudah tidak dipakai
        if (startImageFile) fs.unlinkSync(startImageFile.path);
        if (endImageFile) fs.unlinkSync(endImageFile.path);

        // Mengembalikan respons sukses ke website Anda
        res.json(magnificResponse.data);

    } catch (error) {
        console.error('API Error:', error.response ? error.response.data : error.message);
        
        // Bersihkan file jika terjadi error di tengah proses
        if (req.files && req.files['start_image']) fs.unlinkSync(req.files['start_image'][0].path);
        if (req.files && req.files['end_image']) fs.unlinkSync(req.files['end_image'][0].path);

        res.status(500).json({ 
            error: 'Gagal memproses ke server Magnific', 
            details: error.response ? error.response.data : error.message 
        });
    }
});

app.listen(port, () => {
    console.log(`Server Aditya Motion Labs berjalan di http://localhost:${port}`);
    console.log(`Akses website Anda di browser melalui link tersebut.`);
});
