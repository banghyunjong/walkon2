# Walkon2 - Personal Faith Journaling App

Walkon2 is a mobile-first React application that helps users take one step at a time in their spiritual life through meditation, prayer tracking, and video content management.

## Features

- Google Authentication with Supabase
- Daily meditation entries with Bible verses
- Prayer topic tracking with categories
- YouTube video bookmarking with notes
- Prayer reminder settings
- Mobile-first design

## Tech Stack

- React + Vite
- TypeScript
- Material-UI
- Supabase (Authentication & Database)
- React Router

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/walkon2.git
cd walkon2
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Supabase credentials:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## Supabase Setup

1. Create a new Supabase project
2. Enable Google OAuth in Authentication settings
3. Create the following tables:

### Meditations
```sql
create table meditations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  bible_verse text not null,
  summary text not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Prayer Topics
```sql
create table prayer_topics (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  text text not null,
  category text not null,
  completed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Videos
```sql
create table videos (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  url text not null,
  note text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 