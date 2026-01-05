export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">© 2026 Virgin Wakes x UC Yacht Charters • Slow is Pro beneficiary</p>
          <div className="flex gap-6">
            <a href="#terms" className="text-sm text-gray-300 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
