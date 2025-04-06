# FitAI - AI-Powered Fitness & Nutrition App

FitAI is a personalized fitness and nutrition application that leverages artificial intelligence to create custom workout routines and meal plans tailored to individual goals, preferences, and fitness levels.

## 🌟 Features

### User Features
- **Personalized Workout Programs**: AI-generated workout routines based on user goals and fitness level
- **Custom Nutrition Plans**: Tailored meal plans that match dietary preferences and support fitness goals
- **Progress Tracking**: Monitor fitness journey with detailed progress metrics
- **Multi-language Support**: Available in English, Turkish, German, French, and Spanish
- **Responsive Design**: Optimized for both mobile and desktop experiences
- **Dark/Light Mode**: Choose your preferred theme

### Admin Features
- **Comprehensive Dashboard**: Overview of users, workouts, and nutrition plans with analytics
- **User Management**: Manage user accounts, subscriptions, and permissions
- **Content Management**: Create, edit, and organize workout and nutrition content
- **AI Content Generator**: Create workout programs, meal plans, and coaching scripts using ChatGPT
- **System Configuration**: Customize application settings, security options, and AI behavior

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context API
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI API (GPT-4o)
- **Internationalization**: Custom i18n implementation
- **Charts & Visualization**: Recharts

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn
- OpenAI API key (for AI features)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fitai.git
   cd fitai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   OPENAI_API_KEY=your_openai_api_key
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔍 Usage

### User Interface

1. **Sign Up/Login**: Create an account or log in to access personalized features
2. **Profile Setup**: Enter your fitness goals, current stats, and preferences
3. **Dashboard**: View your personalized workout and nutrition plans
4. **Workouts**: Access your workout routines with detailed instructions
5. **Nutrition**: View meal plans and recipes tailored to your goals
6. **Progress**: Track your fitness journey with visual metrics

### Admin Panel

1. Access the admin panel at `/admin` with admin credentials
2. Default admin login:
   - Email: [admin@fitai.com](mailto:admin@fitai.com)
   - Password: admin123 (change this in production)

### Admin Features:

- **Dashboard**: View key metrics and analytics
- **User Management**: Manage user accounts and data
- **Workout Programs**: Create and manage workout content
- **Nutrition Plans**: Develop and organize meal plans
- **AI Generator**: Create content using AI
  - Generate workout programs
  - Create nutrition plans
  - Develop coaching scripts
- **Settings**: Configure application settings

## 🤖 AI Integration

FitAI uses OpenAI's GPT models to generate personalized content:

- **Workout Generation**: Creates exercise routines based on user goals, equipment availability, and fitness level
- **Nutrition Planning**: Develops meal plans considering dietary preferences, caloric needs, and nutritional goals
- **Coaching Scripts**: Generates motivational content and feedback for users

Administrators can customize AI parameters including:
- Model selection (GPT-4o, GPT-3.5 Turbo, etc.)
- Temperature settings for creativity control
- Response length and content filtering

## 📱 Mobile Optimization

FitAI is designed with a mobile-first approach:
- Responsive layouts that adapt to any screen size
- Touch-friendly interface elements
- Bottom navigation for easy one-handed operation
- Optimized performance for mobile devices

## 🌐 Multi-language Support

FitAI currently supports:
- 🇺🇸 English
- 🇹🇷 Turkish
- 🇩🇪 German
- 🇫🇷 French
- 🇪🇸 Spanish

## 📸 Screenshots

![FitAI Dashboard](screenshot/screenshot1.png)
![Workout Page](screenshot/screenshot2.png)
![Nutrition Plan](screenshot/screenshot3.png)
![Progress Tracking](screenshot/screenshot4.png)
![Profile Settings](screenshot/screenshot5.png)
![Admin Dashboard](screenshot/screenshot6.png)
![AI Generator](screenshot/screenshot7.png)
![Mobile View](screenshot/screenshot8.png)
![Dark Mode](screenshot/screenshot9.png)
![User Management](screenshot/screenshot10.png)
![Workout Creator](screenshot/screenshot11.png)
![Meal Planner](screenshot/screenshot12.png)
![Language Settings](screenshot/screenshot13.png)
![System Configuration](screenshot/screenshot14.png)
![Analytics Dashboard](screenshot/screenshot15.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions or support, please contact:
- Email: [ahmetemreari67@gmail.com](mailto:ahmetemreari67@gmail.com)
- LinkedIn: [linkedin.com/in/aemreari](https://www.linkedin.com/in/aemreari/)
- GitHub: [github.com/ahmetemreari](https://github.com/ahmetemreari)
