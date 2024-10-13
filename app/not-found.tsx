import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

export default async function NotFound() {
  return (
    <main className="h-screen w-screen relative">
      <Scene />
    </main>
  );
}
