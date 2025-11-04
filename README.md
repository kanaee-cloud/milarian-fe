# Milarian - UMKM Discovery Platform

Milarian is a modern web application designed to help users discover and connect with UMKM (Usaha Mikro, Kecil, dan Menengah - Micro, Small, and Medium Enterprises) in Bandung, Indonesia. The platform features an AI-powered search system using Google's Gemini model to provide personalized UMKM recommendations.

## 🌟 Features

- **Smart UMKM Search**: Advanced search functionality with AI-powered recommendations
- **Category Filtering**: Browse UMKMs by categories (Kuliner, Fashion, Kriya, Jasa, etc.)
- **Detailed Business Profiles**: Comprehensive information including:
  - Business descriptions
  - Price ranges
  - Operating hours
  - Location details
  - Product photos and galleries
- **AI-Powered Recommendations**: Gemini AI integration for personalized UMKM suggestions
- **Responsive Design**: Mobile-first approach with a clean, modern interface

## 🚀 Tech Stack

- **Frontend Framework**: React.js with Vite
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **Data Fetching**: TanStack Query (React Query)
- **Routing**: React Router v6
- **AI Integration**: Google Gemini API
- **UI Components**: Custom components with Lucide icons
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/kanaee-cloud/milarian-fe.git
cd milarian-fe
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Environment Setup

Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Modern web browser

## 📁 Project Structure

```
milarian-fe/
├── src/
│   ├── api/            # API integration layers
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context providers
│   ├── data/          # Static data and mock services
│   ├── hooks/         # Custom React hooks
│   ├── layouts/       # Page layout components
│   ├── pages/         # Page components
│   └── routes/        # Route configurations
├── public/            # Static assets
└── ...config files
```

## 🎨 Features in Detail

### AI-Powered Search
- Natural language processing for understanding user needs
- Contextual recommendations based on user preferences
- Integration with Google's Gemini model for smart suggestions

### UMKM Categories
- Kuliner (Culinary)
- Fashion
- Kriya (Crafts)
- Jasa (Services)
- And more...

### Business Profile Features
- Comprehensive business information
- Photo galleries
- Price range indicators
- Location and operating hours
- Target market information

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- TailwindCSS for styling utilities
- React ecosystem and community
- All contributors and UMKM partners

## 📫 Contact

For questions and support, please open an issue in the GitHub repository or contact the maintainers directly.

---
Built with ❤️ for UMKMs in Bandung
