import { ReactNode } from 'react';

interface Section {
  title: string;
  content: ReactNode;
}

export const sections: Record<string, Section> = {
  about: {
    title: 'About Me',
    content: (
      <>
        Hello! I&apos;m PMoon, a full-stack developer specializing in:
        
        <div className="mt-4 space-y-2">
          • <a href="https://github.com/mrdatawolf/SETradeHouse" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:text-[#00ff00]/80 underline">PHP Development</a>
          <br />
          • <a href="https://scripts.pmoon.info" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:text-[#00ff00]/80 underline">Next.js Applications</a>
          <br />
          • <a href="https://github.com/mrdatawolf" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:text-[#00ff00]/80 underline">Node.js Backend Services</a>
          <br />
          • <a href="https://github.com/mrdatawolf" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:text-[#00ff00]/80 underline">WordPress Solutions</a>
          <br />
          • <a href="https://github.com/mrdatawolf" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:text-[#00ff00]/80 underline">JavaScript Frameworks</a>
        </div>

        <div className="mt-4">
          With years of experience in web development, I focus on creating efficient, 
          scalable solutions for complex problems.
        </div>
      </>
    ),
  },
  work: {
    title: 'My Work',
    content: (
      <>
        Recent Projects:

        <div className="mt-4 space-y-2">
          [1] E-commerce Platform (PHP/Laravel)
          <br />
          [2] Real-time Dashboard (Next.js/Socket.io)
          <br />
          [3] Content Management System (WordPress)
          <br />
          [4] API Gateway Service (Node.js)
        </div>

        <div className="mt-4">
          Each project demonstrates my commitment to clean code and optimal performance.
        </div>
      </>
    ),
  },
  contact: {
    title: 'Contact',
    content: 'Reach out through any of these channels:',
  },
} as const;