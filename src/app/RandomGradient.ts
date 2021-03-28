import { RandomGradientInterface } from "./RandomGradientInterface";

export function RandomGradient(color?: string) {
  let gradientAngle = Math.floor(Math.random() * 360),
  x2 = 300 * Math.cos(gradientAngle),
  y2 = 300 * Math.sin(gradientAngle);
  let r1 = Math.floor(Math.random() * 256);
  let g1 = Math.floor(Math.random() * 256);
  let b1 = Math.floor(Math.random() * 256);
  let r2 = Math.floor(Math.random() * 256);
  let g2 = Math.floor(Math.random() * 256);
  let b2 = Math.floor(Math.random() * 256);

  const randomGradient: RandomGradientInterface = {
    x2: x2,
    y2: y2,
    r1: r1,
    g1: g1,
    b1: b1,
    r2: r2,
    g2: g2,
    b2: b2
};

  return randomGradient;
}
