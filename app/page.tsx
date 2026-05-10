'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { setSubmitted(true); setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '' }); setTimeout(() => setSubmitted(false), 5000); }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-3xl font-black text-yellow-400">AMC</div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-sm font-semibold hover:text-yellow-400">Services</a>
              <a href="#proof" className="text-sm font-semibold hover:text-yellow-400">Proof</a>
              <a href="#contact" className="text-sm font-semibold hover:text-yellow-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-black mb-8">Construction Cleaning That <span className="text-yellow-400">Wins Bids</span></h1>
          <p className="text-2xl text-gray-300 mb-8">$271K+ in active bids. AMC secures them with precision and results.</p>
          <div className="bg-blue-950 border-2 border-blue-400 inline-block px-8 py-4 rounded-lg mb-12 text-sm">15+ Bids | 90%+ Close Rate | $271K+ Pipeline</div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300">Get Quote</a>
            <a href="#proof" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-900">See Proof</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-black text-yellow-400">15+</div><div className="text-gray-300">Active Bids</div></div>
            <div><div className="text-4xl font-black text-yellow-400">$271K</div><div className="text-gray-300">Pipeline</div></div>
            <div><div className="text-4xl font-black text-yellow-400">90%</div><div className="text-gray-300">Close Rate</div></div>
            <div><div className="text-4xl font-black text-yellow-400">100K</div><div className="text-gray-300">Sq Ft</div></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Services</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-gray-800 border-2 border-gray-700 p-8 rounded-xl hover:border-yellow-400"><h3 className="text-xl font-black mb-3">Construction Cleaning</h3><p className="text-gray-300">$0.25/sq ft. Final phase ready.</p></div>
            <div className="bg-gray-800 border-2 border-gray-700 p-8 rounded-xl hover:border-yellow-400"><h3 className="text-xl font-black mb-3">Commercial</h3><p className="text-gray-300">$0.15/sq ft. Ongoing maintenance.</p></div>
            <div className="bg-gray-800 border-2 border-gray-700 p-8 rounded-xl hover:border-yellow-400"><h3 className="text-xl font-black mb-3">Medical Facilities</h3><p className="text-gray-300">Premium scope. Disinfection.</p></div>
            <div className="bg-gray-800 border-2 border-gray-700 p-8 rounded-xl hover:border-yellow-400"><h3 className="text-xl font-black mb-3">Floor Scrubbing</h3><p className="text-gray-300">$0.15/sq ft. Specialized.</p></div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-gray-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Proof of Work</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gray-900 border-2 border-gray-700 p-6 rounded-xl"><div className="text-yellow-400 text-sm font-bold mb-2">Active</div><h3 className="font-black mb-2">Burlington Coat Factory</h3><p className="text-gray-400 text-sm">100,597 sq ft | $15–25K</p></div>
            <div className="bg-gray-900 border-2 border-gray-700 p-6 rounded-xl"><div className="text-yellow-400 text-sm font-bold mb-2">Submitted</div><h3 className="font-black mb-2">GoodVets 3-Location</h3><p className="text-gray-400 text-sm">Medical | $3,600</p></div>
            <div className="bg-gray-900 border-2 border-gray-700 p-6 rounded-xl"><div className="text-yellow-400 text-sm font-bold mb-2">Review</div><h3 className="font-black mb-2">Gap Factory 4x</h3><p className="text-gray-400 text-sm">Multi-location | $11,800</p></div>
            <div className="bg-gray-900 border-2 border-gray-700 p-6 rounded-xl"><div className="text-yellow-400 text-sm font-bold mb-2">Pipeline</div><h3 className="font-black mb-2">Active Bids</h3><p className="text-gray-400 text-sm">15+ bids | $271K+</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">Ready to Partner?</h2>
          <p className="text-center text-gray-400 mb-12">Get your free consultation.</p>

          <div className="bg-gray-800 border-2 border-gray-700 p-10 rounded-xl">
            {submitted ? (
              <div className="bg-green-900 border-2 border-green-400 text-green-100 px-6 py-4 rounded">✓ Thanks! We'll contact you within 24 hours.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required className="bg-gray-900 border-2 border-gray-700 text-white p-3 rounded focus:border-yellow-400 outline-none" />
                  <input type="text" placeholder="Last" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required className="bg-gray-900 border-2 border-gray-700 text-white p-3 rounded focus:border-yellow-400 outline-none" />
                </div>
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-gray-900 border-2 border-gray-700 text-white p-3 rounded focus:border-yellow-400 outline-none" />
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full bg-gray-900 border-2 border-gray-700 text-white p-3 rounded focus:border-yellow-400 outline-none" />
                <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-gray-900 border-2 border-gray-700 text-white p-3 rounded focus:border-yellow-400 outline-none" />
                <button type="submit" className="w-full bg-yellow-400 text-gray-900 p-3 rounded font-black hover:bg-yellow-300">Get Quote</button>
              </form>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-2">Call us:</p>
            <a href="tel:251-477-5676" className="text-4xl font-black text-yellow-400">251-477-5676</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t-4 border-yellow-400 py-12 px-4 text-center">
        <p className="text-gray-400 mb-4">&copy; 2026 AMC Professionals</p>
        <div className="text-gray-500 text-sm">
          <p>📞 251-477-5676 | 📧 amcprofessionalscs@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
