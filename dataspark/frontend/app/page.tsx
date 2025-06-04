import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <footer className="mt-auto p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Dataspark
      </footer>
    </main>
  )
}
