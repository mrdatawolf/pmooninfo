# PMoon Terminal Website

A retro-style terminal website built with Next.js and TypeScript, featuring an interactive command-line interface and modern web technologies.

## Features

- 🖥️ Retro terminal interface with authentic green-on-black theme
- ⌨️ Interactive command-line navigation
- 🎮 Easter egg games and references
- 📱 Fully responsive design
- 🔗 Social media integration
- 🤖 Bot-resistant contact information
- 📜 Command history tracking
- 💻 Tab completion support

## Commands

- `about` - View information about PMoon
- `work` - Browse through portfolio projects
- `contact` - Display contact information
- `game` or `games` - Access the gaming interface
- `help` - Show available commands
- `history` - View command history
- `clear` - Clear the terminal

## Tech Stack

- Next.js 13
- TypeScript
- Tailwind CSS
- Lucide React Icons
- shadcn/ui Components

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── terminal-layout.tsx
│   ├── terminal-nav.tsx
│   ├── terminal-content.tsx
│   ├── command-prompt.tsx
│   └── theme-provider.tsx
├── lib/
│   └── content.tsx
└── public/
```

## Features in Detail

### Terminal Interface
- Authentic terminal appearance with blinking cursor
- Command history tracking
- Tab completion for navigation
- Custom prompt styling

### Navigation
- Keyboard navigation support
- Mouse interaction support
- Section highlighting

### Games
- Interactive game selection
- Classic WOPR reference
- Chess and Poker integrations

### Contact Information
- Bot-resistant email display
- Integrated social media links
- Professional networking connections

## License

MIT License

## Author

PMoon - Full Stack Developer
- GitHub: [@mrdatawolf](https://github.com/mrdatawolf)
- Twitter: [@mr_datawolf](https://twitter.com/mr_datawolf)
- LinkedIn: [patrickmoon](https://linkedin.com/in/patrickmoon/)

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/mrdatawolf/pmooninfo)
