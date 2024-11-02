'use client';

import { useState, useRef, useEffect } from 'react';

interface CommandPromptProps {
  onNavigate: (section: string) => void;
  onGameStart: () => void;
  onChessStart: () => void;
  onHistoryUpdate: (command: string) => void;
}

export default function CommandPrompt({ 
  onNavigate, 
  onGameStart, 
  onChessStart,
  onHistoryUpdate 
}: CommandPromptProps) {
  const [command, setCommand] = useState('');
  const [waitingForGameChoice, setWaitingForGameChoice] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const normalizedCmd = cmd.toLowerCase().trim();
    onHistoryUpdate(`guest@pmoon.info:~$ ${cmd}`);

    if (waitingForGameChoice) {
      handleGameChoice(normalizedCmd);
      return;
    }

    switch (normalizedCmd) {
      case 'help':
        onNavigate('help');
        break;
      case 'about':
      case 'home':
        onNavigate('about');
        break;
      case 'work':
        onNavigate('work');
        break;
      case 'contact':
        onNavigate('contact');
        break;
      case 'game':
      case 'games':
        setWaitingForGameChoice(true);
        onGameStart();
        break;
      case 'history':
        onNavigate('history');
        break;
      case 'clear':
        onHistoryUpdate('clear');
        break;
      case '':
        break;
      default:
        onHistoryUpdate(`Command not found: ${cmd}. Type 'help' for available commands.`);
    }
  };

  const handleGameChoice = (choice: string) => {
    setWaitingForGameChoice(false);

    const normalizedChoice = choice.toLowerCase();
    if (normalizedChoice === 'chess') {
      onChessStart();
    } else if (normalizedChoice === 'poker') {
      onNavigate('poker');
    } else if (normalizedChoice === 'fighter combat') {
      onNavigate('fighter');
    } else if (normalizedChoice === 'global thermonuclear war') {
      onChessStart();
    } else {
      onNavigate('about');
      onHistoryUpdate('I am sorry, I do not have that game');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const trimmedCommand = command.trim();
      if (trimmedCommand) {
        handleCommand(trimmedCommand);
      }
      setCommand('');
    }
  };

  return (
    <div className="command-prompt-container">
      <div className="command-prompt">
        <span className="prompt-symbol">guest@pmoon.info:~$</span>
        <input
          ref={inputRef}
          type="text"
          className="command-input"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={waitingForGameChoice ? "Enter a game name to play..." : "Type 'help' for commands..."}
          spellCheck={false}
          autoComplete="off"
          autoFocus
        />
      </div>
    </div>
  );
}