import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const assets = [
  {
    url: "https://admin.duyvenvoorde.nl/storage/assets/Duyvenvoorde-Headervideo-WEB-v6-1.mp4",
    target: "public/videos/hero-desktop.mp4",
  },
  {
    url: "https://admin.duyvenvoorde.nl/storage/assets/Videos/Duyvenvoorde-Headervideo-HQ-9x16-v4.mp4",
    target: "public/videos/hero-mobile.mp4",
  },
  {
    url: "https://admin.duyvenvoorde.nl/storage/assets/Cultuur/Youtube-Thumbnail.jpg",
    target: "public/images/youtube-thumbnail.jpg",
  },
  ...[
    "1.cdeb15e7",
    "3.1f2a55bd",
    "1.e0d2ae2b",
    "3.9744c519",
    "2.c9d133a8",
    "3.4bee62ad",
    "1.1bb85467",
    "4.42270bb6",
    "4.6dd10411",
    "3.25c08641",
    "4.e82e1573",
    "2.79a63e77",
    "1.68df25b0",
    "4.dcb063b8",
    "4.2b3f84d6",
    "3.c4b4dbbc",
    "2.1ffec2ae",
    "1.6870d19b",
  ].map((name) => ({
    url: `https://duyvenvoorde.nl/_next/static/media/${name}.png`,
    target: `public/images/${name}.png`,
  })),
  ...[
    "2cce8c56acca7fdf-s.p.ttf",
    "6d8e0bae448381dc-s.p.ttf",
    "760def8bc15976ed-s.p.ttf",
    "7dc1c85842ef27dc-s.p.ttf",
    "903a22c07d9a8c8d-s.p.ttf",
    "b7cab21dcd771ae5-s.p.ttf",
    "c7eb89af3d7a502b-s.p.ttf",
    "dc1a31dd116e0329-s.p.woff2",
  ].map((name) => ({
    url: `https://duyvenvoorde.nl/_next/static/media/${name}`,
    target: `public/fonts/${name}`,
  })),
];

async function download(asset) {
  const response = await fetch(asset.url);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${asset.url}`);
  }

  const destination = path.join(root, asset.target);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, Buffer.from(await response.arrayBuffer()));

  return asset.target;
}

async function runBatch(items, size) {
  const downloaded = [];

  for (let index = 0; index < items.length; index += size) {
    const batch = items.slice(index, index + size);
    const results = await Promise.allSettled(batch.map(download));

    for (const result of results) {
      if (result.status === "fulfilled") {
        downloaded.push(result.value);
      } else {
        console.error(result.reason);
      }
    }
  }

  return downloaded;
}

const downloaded = await runBatch(assets, 4);

console.log(`Downloaded ${downloaded.length}/${assets.length} assets.`);
