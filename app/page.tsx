'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { setSubmitted(true); setFormData({ firstName: '', lastName: '', email: '', phone: '' }); setTimeout(() => setSubmitted(false), 5000); }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <nav className="sticky top-0 z-40 bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="text-2xl font-black text-yellow-400">AMC</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-semibold hover:text-yellow-400">Services</a>
            <a href="#proof" className="text-sm font-semibold hover:text-yellow-400">Proof</a>
            <a href="#contact" className="text-sm font-semibold hover:text-yellow-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-black mb-6">Construction Cleaning That <span className="text-yellow-400">Wins Bids</span></h1>
          <p className="text-xl mb-8 text-gray-300">$271K+ in active bids. AMC secures them with precision, reliability, and results.</p>
          <div className="bg-blue-900 bg-opacity-50 border border-blue-400 inline-block px-6 py-3 rounded mb-8 font-mono text-sm">
            15+ Active Bids | 90%+ Closing Rate | $271K+ Pipeline
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-800 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Final Construction Cleaning', desc: '$0.25/sq ft' },
              { title: 'Commercial Cleaning', desc: '$0.15/sq ft' },
              { title: 'Medical Facility Cleaning', desc: 'Premium scope' },
              { title: 'Floor Scrubbing', desc: '$0.15/sq ft' },
            ].map((service, i) => (
              <div key={i} className="border-2 border-gray-600 p-6 rounded-lg hover:border-yellow-400 transition">
                <h3 className="text-lg font-black mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Proof of Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Burlington Coat Factory', desc: '100,597 sq ft | $15–25K' },
              { title: 'GoodVets 3-Location', desc: 'Medical | $3,600' },
              { title: 'Gap Factory 4-Location', desc: 'Multi-location' },
              { title: 'Active Pipeline', desc: '15+ bids | $271K+' },
            ].map((item, i) => (
              <div key={i} className="bg-white bg-opacity-5 border border-gray-700 p-6 rounded-lg hover:border-yellow-400 transition">
                <h3 className="font-black text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-800 bg-opacity-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Get Your Free Quote</h2>
          {submitted ? (
            <div className="bg-green-900 border border-green-400 text-green-100 px-6 py-4 rounded-lg text-center">✓ Thanks! We'll contact you within 24 hours.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required className="bg-gray-700 border border-gray-600 text-white p-3 rounded focus:border-yellow-400 outline-none" />
                <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required className="bg-gray-700 border border-gray-600 text-white p-3 rounded focus:border-yellow-400 outline-none" />
              </div>
              <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded focus:border-yellow-400 outline-none" />
              <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded focus:border-yellow-400 outline-none" />
              <button type="submit" className="w-full bg-yellow-400 text-gray-900 p-3 rounded font-bold hover:bg-yellow-300 transition">Get Free Quote</button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 text-center">
        <p className="text-gray-400">&copy; 2026 AMC Professionals. 📞 251-477-5676 | 📧 amcprofessionalscs@gmail.com</p>
      </footer>
    </div>
  );
}
