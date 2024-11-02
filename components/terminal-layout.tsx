'use client';

import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import TerminalNav from '@/components/terminal-nav';
import TerminalContent from '@/components/terminal-content';
import CommandPrompt from '@/components/command-prompt';

export default function TerminalLayout() {
  const [activeSection, setActiveSection] = useState('about');
  const [cursorPosition, setCursorPosition] = useState('about');
  const [gameMode, setGameMode] = useState(false);
  const [showChess, setShowChess] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const sections = ['about', 'work', 'contact'];
        const currentIndex = sections.indexOf(cursorPosition);
        const nextIndex = (currentIndex + 1) % sections.length;
        setCursorPosition(sections[nextIndex]);
      } else if (e.key === 'Enter') {
        setActiveSection(cursorPosition);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cursorPosition]);

  const handleNavigate = (section: string) => {
    setGameMode(false);
    setShowChess(false);
    setActiveSection(section);
    setCursorPosition(section);
  };

  const handleGameStart = () => {
    setActiveSection('game');
    setGameMode(true);
    setShowChess(false);
  };

  const handleChessStart = () => {
    setActiveSection('chess');
    setGameMode(false);
    setShowChess(true);
  };

  const handleCommandHistoryUpdate = (command: string) => {
    setCommandHistory(prev => [...prev, command]);
  };

  return (
    <div className="terminal-container">
      <div className="terminal-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <Terminal size={16} />
              <span>pmoon.info</span>
            </div>
            <div className="terminal-controls">
              <div className="terminal-control bg-red-500" />
              <div className="terminal-control bg-yellow-500" />
              <div className="terminal-control bg-green-500" />
            </div>
          </div>
          
          <div className="terminal-body">
            {!gameMode && !showChess && activeSection !== 'help' && (
              <TerminalNav
                activeSection={activeSection}
                cursorPosition={cursorPosition}
                onSectionChange={setActiveSection}
                onCursorChange={setCursorPosition}
              />
            )}
            <TerminalContent 
              activeSection={activeSection}
              gameMode={gameMode}
              showChess={showChess}
              commandHistory={commandHistory}
            />
          </div>
        </div>
        <CommandPrompt 
          onNavigate={handleNavigate}
          onGameStart={handleGameStart}
          onChessStart={handleChessStart}
          onHistoryUpdate={handleCommandHistoryUpdate}
        />
      </div>
    </div>
  );
}