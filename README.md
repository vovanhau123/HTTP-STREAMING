# 🎵 Music Streaming API

> An HLS-based music streaming API with random playback capabilities / API phát nhạc trực tuyến với tính năng streaming HLS và phát ngẫu nhiên

<p align="center">
  <img src="docs/images/preview.png" alt="Preview" width="600"/>
</p>

## ✨ Features

### 🎧 Music Playback
- ✅ HLS (HTTP Live Streaming) support
- ✅ Auto-next track functionality
- ✅ Random playback
- ✅ Play count tracking

### 📁 File Management
- ✅ Music file upload support
- ✅ Automatic processing and segmentation
- ✅ Multiple audio format support
- ✅ Multi-quality HLS playlist generation

### 💾 Database Structure

| Table | Purpose |
|-------|---------|
| `users` | User management & authentication |
| `albums` | Album metadata & cover art |
| `tracks` | Song metadata & file paths |
| `segments` | HLS segment information |
| `playlists` | HLS & user playlist data |
| `likes` | Track likes & favorites |
| `comments` | User comments & feedback |

### 🚀 Optimizations
- ⚡ Search optimization indexes
- 📊 SQLite WAL mode
- 🔄 Transaction support
- 📦 Streaming buffer & cache
- 🛡️ Comprehensive error handling

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/vovanhau123/HTTP-STREAMING.git

# Navigate to project
cd music-streaming-api

# Install dependencies
npm install

# Initialize directories
npm run init

# Start server
npm start
```

> 🌐 Server runs at `http://localhost:3000`

## 📡 API Endpoints

### 🎵 Tracks

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tracks` | Get all tracks |
| `GET` | `/api/tracks/:id/playlist` | Get track's HLS playlist |
| `GET` | `/api/tracks/random` | Get random track |
| `GET` | `/api/tracks/random/:genre` | Get random track by genre |
| `POST` | `/api/tracks/:id/play` | Update play count |

### 📤� Albums

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/albums` | Get all albums |
| `GET` | `/api/albums/:id` | Get album details with tracks |
| `POST` | `/api/albums` | Create new album |
| `PUT` | `/api/albums/:id` | Update album |
| `DELETE` | `/api/albums/:id` | Delete album |
| `GET` | `/api/albums/artist/:artist` | Get albums by artist |
| `GET` | `/api/albums/genre/:genre` | Get albums by genre |

### 📤 Upload

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/upload` | Upload new music file |

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/verify` | Verify email with code |

#### Register Request Body
```json
{
    "email": "user@example.com",
    "password": "StrongPass123",
    "username": "username"
}
```

#### Verify Request Body
```json
{
    "code": "123456"
}

## 📂 Project Structure

```
music-streaming-api/
├── data/               # SQLite database
├── public/            
│   ├── index.html     # Frontend interface
│   └── streams/       # HLS stream files
├── src/
│   ├── config/        # App configuration
│   ├── controllers/   # Request handlers
│   ├── middleware/    # Custom middleware
│   ├── models/        # Data models
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   └── server.js      # Entry point
├── uploads/           # Uploaded files
│   └── album-covers/  # Album cover images
└── package.json
```

## 🛠️ Tech Stack

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Streaming**: HLS.js
- **File Upload**: Multer

## 🗺️ Roadmap

- [ ] 🔐 User authentication & authorization
- [ ] 📝 Playlist management system
- [ ] ❤️ Like & comment functionality
- [ ] 🔍 Advanced search with filters
- [ ] 🎯 Personalized recommendations
- [ ] 📊 Listening statistics & analytics

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

vovanhau123 - [@vovanhau123](https://twitter.com/4rge) - contact@4rge.dev

Project Link: [https://github.com/vovanhau123/HTTP-STREAMING](https://github.com/vovanhau123/HTTP-STREAMING)

---
<p align="center">
  Made with ❤️ by vovanhau123
</p>