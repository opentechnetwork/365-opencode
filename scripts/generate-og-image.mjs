/**
 * Generates public/og-image.jpg (1200x630) — the Open Graph / Twitter card.
 *
 * Pipeline: sharp prepares the logo + photo as data URIs, headless Edge renders
 * an HTML/CSS composition at exactly 1200x630, sharp converts the PNG to JPEG.
 *
 * Run:  node scripts/generate-og-image.mjs
 * Requires Microsoft Edge (or Chrome) installed; Inter is inlined from Google
 * Fonts so the render is deterministic and needs no network at capture time.
 */
import sharp from "sharp";
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tmp = path.join(root, ".og-tmp");
mkdirSync(tmp, { recursive: true });

const PHONE = "(469) 616-0326";

const EDGE_CANDIDATES = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
];
const browser = EDGE_CANDIDATES.find((p) => existsSync(p));
if (!browser) throw new Error("No Edge/Chrome binary found for headless rendering.");

/** Inline Google's Inter CSS with the woff2 files embedded as data URIs. */
async function interFontCss() {
  const url =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=block";
  const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
  let css = await fetch(url, { headers: { "User-Agent": ua } }).then((r) => r.text());
  const files = [...new Set([...css.matchAll(/url\((https:[^)]+\.woff2)\)/g)].map((m) => m[1]))];
  for (const file of files) {
    const buf = Buffer.from(await fetch(file).then((r) => r.arrayBuffer()));
    css = css.split(file).join(`data:font/woff2;base64,${buf.toString("base64")}`);
  }
  return css;
}

const fontCss = await interFontCss();

const { data: logoBuf, info: logoInfo } = await sharp(
  path.join(root, "public/img/logo.png"),
)
  .trim() // drop the transparent padding around the mark
  .resize({ height: 176, fit: "inside" }) // 2x of the 88px display height
  .png()
  .toBuffer({ resolveWithObject: true });

const photoBuf = await sharp(path.join(root, "public/img/kitchen.jpg"))
  .resize(940, 940, { fit: "cover", position: "centre" })
  .jpeg({ quality: 84 })
  .toBuffer();

// Pin the logo box to its true aspect so flex `stretch` can never distort it.
const logoDisplayHeight = 88;
const logoDisplayWidth = Math.round(
  (logoInfo.width / logoInfo.height) * logoDisplayHeight,
);

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
${fontCss}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{font-family:'Inter','Segoe UI',system-ui,sans-serif;background:#fff;color:#1a2332;position:relative}
.frame{position:absolute;inset:0;background:linear-gradient(135deg,#fff 0%,#eef1f6 100%)}
.glow-red{position:absolute;width:740px;height:740px;right:-240px;top:-280px;border-radius:50%;background:radial-gradient(circle at center,rgba(192,57,43,.15),rgba(192,57,43,0) 68%)}
.glow-navy{position:absolute;width:660px;height:660px;left:-280px;bottom:-320px;border-radius:50%;background:radial-gradient(circle at center,rgba(26,35,50,.09),rgba(26,35,50,0) 70%)}
.topbar{position:absolute;top:0;left:0;right:0;height:10px;background:linear-gradient(90deg,#c0392b 0 240px,#1a2332 240px 100%)}
.layout{position:absolute;inset:0;display:grid;grid-template-columns:1fr 486px}
.left{padding:70px 28px 62px 76px;display:flex;flex-direction:column;justify-content:center}
.logo{height:${logoDisplayHeight}px;width:${logoDisplayWidth}px;align-self:flex-start;margin-bottom:30px}
.eyebrow{display:flex;align-items:center;gap:12px;color:#c0392b;font-weight:700;font-size:15px;letter-spacing:3.2px;text-transform:uppercase}
.eyebrow::before{content:"";width:34px;height:3px;border-radius:2px;background:#c0392b}
h1{margin-top:18px;font-weight:800;font-size:56px;line-height:1.05;letter-spacing:-1.4px;color:#141d2b}
h1 .accent{color:#c0392b}
.sub{margin-top:22px;font-size:20px;font-weight:500;color:#4b5563;line-height:1.45}
.footer{margin-top:34px;display:flex;align-items:center;gap:18px}
.chip{background:#c0392b;color:#fff;font-weight:700;font-size:18px;padding:13px 20px;border-radius:10px;box-shadow:0 12px 24px -12px rgba(192,57,43,.9)}
.phone{font-weight:800;font-size:22px;color:#1a2332}
.phone small{display:block;font-size:11px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:#9aa3af;margin-top:2px}
.right{padding:54px 64px 54px 0;display:flex;align-items:center}
.card{position:relative;width:100%;height:100%;border-radius:26px;overflow:hidden;box-shadow:0 36px 60px -24px rgba(20,29,43,.55)}
.card img{width:100%;height:100%;object-fit:cover;display:block}
.card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,29,43,0) 42%,rgba(20,29,43,.6) 100%)}
.badge{position:absolute;left:20px;bottom:20px;z-index:2;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.95);color:#1a2332;font-weight:700;font-size:15px;padding:10px 16px;border-radius:999px;box-shadow:0 10px 24px -12px rgba(0,0,0,.5)}
.dot{width:9px;height:9px;border-radius:50%;background:#c0392b}
</style></head><body>
<div class="frame"></div><div class="glow-red"></div><div class="glow-navy"></div><div class="topbar"></div>
<div class="layout">
  <div class="left">
    <img class="logo" src="data:image/png;base64,${logoBuf.toString("base64")}" alt="">
    <div class="eyebrow">Dallas&ndash;Fort Worth, Texas</div>
    <h1>Handyman &amp; Home<br>Improvement <span class="accent">Services</span></h1>
    <div class="sub">Repairs &middot; Renovations &middot; Custom Carpentry<br>Kitchen &amp; Bath Upgrades</div>
    <div class="footer">
      <span class="chip">Free Estimates</span>
      <span class="phone">${PHONE}<small>Call or text</small></span>
    </div>
  </div>
  <div class="right">
    <div class="card">
      <img src="data:image/jpeg;base64,${photoBuf.toString("base64")}" alt="">
      <div class="badge"><span class="dot"></span>Serving the DFW Metroplex</div>
    </div>
  </div>
</div>
</body></html>`;

const htmlPath = path.join(tmp, "og.html");
const pngPath = path.join(tmp, "og.png");
writeFileSync(htmlPath, html);

console.log(`logo trimmed: ${logoInfo.width}x${logoInfo.height}`);
execFileSync(
  browser,
  [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--no-first-run",
    "--no-default-browser-check",
    `--user-data-dir=${path.join(tmp, "profile")}`,
    "--window-size=1200,630",
    "--virtual-time-budget=8000",
    `--screenshot=${pngPath}`,
    `file:///${htmlPath.replace(/\\/g, "/")}`,
  ],
  { stdio: "ignore" },
);

const out = path.join(root, "public/og-image.jpg");
const meta = await sharp(pngPath).jpeg({ quality: 90, mozjpeg: true }).toFile(out);
console.log(`wrote ${out} — ${meta.width}x${meta.height}, ${(meta.size / 1024).toFixed(1)} KB`);
