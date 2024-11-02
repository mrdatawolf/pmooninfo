'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { sections } from '@/lib/content';

interface TerminalContentProps {
  activeSection: string;
  gameMode?: boolean;
  showChess?: boolean;
  commandHistory?: string[];
}

export default function TerminalContent({ 
  activeSection, 
  gameMode = false,
  showChess = false,
  commandHistory = []
}: TerminalContentProps) {
  // Email obfuscation
  const emailParts = {
    user: 'patrickmoon',
    at: String.fromCharCode(64),
    domain: 'gmail',
    dot: String.fromCharCode(46),
    tld: 'com'
  };
  
  const getEmail = () => `${emailParts.user}${emailParts.at}${emailParts.domain}${emailParts.dot}${emailParts.tld}`;

  if (activeSection === 'help') {
    return (
      <div className="help-content">
        <h2 className="text-xl mb-4">Available Commands:</h2>
        <pre className="terminal-message">
{`about     - About me
work      - View my work
contact   - Contact information
game      - Play a game
clear     - Clear the terminal
history   - Show command history
help      - Show this help message`}
        </pre>
      </div>
    );
  }

  if (activeSection === 'history') {
    return (
      <div className="history-content">
        <h2 className="text-xl mb-4">Command History:</h2>
        <pre className="terminal-message">
          {commandHistory.length > 0 
            ? commandHistory.join('\n')
            : 'No commands in history yet.'}
        </pre>
      </div>
    );
  }

  if (gameMode) {
    return (
      <div className="game-prompt">
        <p className="mb-4 text-[#00ff00]">Would you like to play a game?</p>
        <pre className="terminal-message text-left">
{`Available games:

 Chess
 Poker
 Fighter Combat
 Guerrilla Engagement
 Desert Warfare
 Theaterwide Tactical Warfare
 Theaterwide Biotoxic and Chemical Warfare
 Global Thermonuclear War`}
        </pre>
      </div>
    );
  }

  if (showChess || activeSection === 'chess') {
    return (
      <div className="game-prompt">
        <p className="mb-4 text-[#00ff00]">
          {activeSection === 'chess' ? 
            "Let's play chess!" : 
            "Wouldn't you prefer a nice game of chess?"}
        </p>
        <Link 
          href="https://chess.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#00ff00] hover:text-[#00ff00]/80 underline"
        >
          Click here to play chess on Chess.com
        </Link>
      </div>
    );
  }

  if (activeSection === 'poker') {
    return (
      <div className="game-prompt">
        <p className="mb-4 text-[#00ff00]">Ready for some Poker?</p>
        <Link 
          href="https://poker.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#00ff00] hover:text-[#00ff00]/80 underline"
        >
          Click here to play poker on Poker.com
        </Link>
      </div>
    );
  }

  if (activeSection === 'fighter') {
    return (
      <div className="game-prompt">
        <p className="mb-4 text-[#00ff00]">Ready to fly?</p>
        <Link 
          href="https://www.silvergames.com/en/air-combat-simulator" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#00ff00] hover:text-[#00ff00]/80 underline"
        >
          Click here to join the fight at silvergames
        </Link>
      </div>
    );
  }

  const currentSection = sections[activeSection as keyof typeof sections];
  
  return (
    <>
      <div className="mb-8">
        {currentSection?.content}
      </div>

      {activeSection === 'contact' && (
        <div className="space-y-4">
          <Link href="https://github.com/mrdatawolf" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={20} />
            <span>github.com/mrdatawolf</span>
          </Link>
          <Link href="https://linkedin.com/in/patrickmoon/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={20} />
            <span>linkedin.com/in/patrickmoon/</span>
          </Link>
          <Link href={`https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpmoon.info%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Emention%7Ctwgr%5Emr_datawolf&screen_name=mr_datawolf`} target="_blank" rel="noopener noreferrer" className="social-link">
            <Twitter size={20} />
            <span>@mr_datawolf</span>
          </Link>
          <Link href={`mailto:${getEmail()}`} className="social-link" onClick={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${getEmail()}`;
          }}>
            <Mail size={20} />
            <span>{emailParts.user} [at] {emailParts.domain} [dot] {emailParts.tld}</span>
          </Link>
        </div>
      )}
    </>
  );
}