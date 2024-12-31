import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="relative w-48 h-48 mb-8">
          <Image
            src="/leappepe.png"
            alt="LeapPepe Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-6xl font-bold mb-6">LeapPepe ($LEAP)</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Taking bold leaps in both finance and humor. Join the most ambitious meme coin in the crypto space!
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
          Buy $LEAP Now
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose LeapPepe?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
              <p>Built by the community, for the community. Every holder is part of our leap forward.</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Meme Culture</h3>
              <p>Embracing the iconic Pepe the Frog while adding our unique leap-forward twist.</p>
            </div>
            <div className="bg-green-900/30 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p>Constantly evolving and taking bold leaps into the future of crypto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tokenomics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">1B</div>
              <div className="text-xl">Total Supply</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">2%</div>
              <div className="text-xl">Transaction Fee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">40%</div>
              <div className="text-xl">Liquidity Locked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">5%</div>
              <div className="text-xl">Marketing Wallet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="bg-green-900/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Community</h2>
          <div className="flex justify-center gap-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
              Twitter
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
              Discord
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all">
              Telegram
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
