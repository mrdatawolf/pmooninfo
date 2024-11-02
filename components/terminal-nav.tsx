'use client';

import { sections } from '@/lib/content';

interface TerminalNavProps {
  activeSection: string;
  cursorPosition: string;
  onSectionChange: (section: string) => void;
  onCursorChange: (section: string) => void;
}

export default function TerminalNav({
  activeSection,
  cursorPosition,
  onSectionChange,
  onCursorChange,
}: TerminalNavProps) {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-4">
        {Object.entries(sections).map(([key, section]) => (
          <li
            key={key}
            className={`nav-item ${activeSection === key ? 'active' : ''}`}
            onClick={() => {
              onSectionChange(key);
              onCursorChange(key);
            }}
            onMouseEnter={() => onCursorChange(key)}
          >
            {section.title}
            {cursorPosition === key && <span className="cursor-blink" />}
          </li>
        ))}
      </ul>
    </nav>
  );
}