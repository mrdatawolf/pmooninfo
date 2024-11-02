'use client';

export function Chessboard() {
  return (
    <pre className="font-mono text-[#00ff00] leading-none whitespace-pre">
      {`   A  B  C  D  E  F  G  H
8  ♜  ♞  ♝  ♛  ♚  ♝  ♞  ♜  8
7  ♟  ♟  ♟  ♟  ♟  ♟  ♟  ♟  7
6  ·  ·  ·  ·  ·  ·  ·  ·  6
5  ·  ·  ·  ·  ·  ·  ·  ·  5
4  ·  ·  ·  ·  ·  ·  ·  ·  4
3  ·  ·  ·  ·  ·  ·  ·  ·  3
2  ♙  ♙  ♙  ♙  ♙  ♙  ♙  ♙  2
1  ♖  ♘  ♗  ♕  ♔  ♗  ♘  ♖  1
   A  B  C  D  E  F  G  H`.trim()}
    </pre>
  );
}