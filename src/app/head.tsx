// app/head.tsx
export default function Head() {
  return (
    <>
      <title>XploreData</title>
      <meta name="description" content="XploreData is a data portal for XploreGov" />
      <script src="/config.js" async />
      {/* or defer if you prefer: <script src="/config.js" defer /> */}
    </>
  );
}
