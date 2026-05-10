'use client';
import { useState } from 'react';
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
              <a href="#services" className="text-sm font-semibold hover:text-yellow-400 transition">Services</a>
              <a href="#proof" className="text-sm font-semibold hover:text-yellow-400 transition">Proof</a>
              <a href="#contact" className="text-sm font-semibold hover:text-yellow-400 transition">Contact</a>
            </div>
            <a href="tel:251-477-5676" className="hidden sm:inline bg-yellow-400 text-gray-900 px-4 py-2 rounded font-bold text-sm hover:bg-yellow-300 transition">251-477-5676</a>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl font-black mb-8 leading-tight">
            Construction Cleaning That <span className="text-yellow-400">Wins Bids</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            $271K+ in active bids. AMC secures them with precision, reliability, and results.
          </p>
          <div className="bg-blue-950 border-2 border-blue-400 inline-block px-8 py-4 rounded-lg mb-12 font-mono text-sm sm:text-base">
            <div className="font-bold text-blue-300 mb-2">ACTIVE PIPELINE</div>
            <div className="text-yellow-400">15+ Bids | 90%+ Closing Rate | $271K+</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition text-lg">Get Free Quote</a>
            <a href="#proof" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-gray-900 transition text-lg">See Proof</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Active Bids' },
              { number: '$271K', label: 'Pipeline Value' },
              { number: '90%', label: 'Closing Rate' },
              { number: '100,597', label: 'Sq Ft Current' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Final Construction Cleaning', desc: '$0.25/sq ft', icon: '🔨' },
              { title: 'Commercial Cleaning', desc: '$0.15/sq ft', icon: '🏢' },
              { title: 'Medical Facility Cleaning', desc: 'Premium scope', icon: '🏥' },
              { title: 'Floor Scrubbing', desc: '$0.15/sq ft', icon: '✨' },
            ].map((service, i) => (
              <div key={i} className="bg-gray-800 border-2 border-gray-700 p-8 rounded-xl hover:border-yellow-400 transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-black mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Proof of Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Burlington Coat Factory', desc: '100,597 sq ft | $15–25K', status: 'Job Walk Scheduled' },
              { title: 'GoodVets 3-Location', desc: 'Medical Scope | $3,600', status: 'Bids Submitted' },
              { title: 'Gap Factory 4-Location', desc: '4-Location | $11,800', status: 'In Review' },
              { title: 'Active Pipeline', desc: '15+ bids | Premium scope', status: '90% Win Rate' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border-2 border-gray-700 p-6 rounded-xl hover:border-yellow-400 transition">
                <div className="text-yellow-400 text-sm font-bold mb-2">{item.status}</div>
                <h3 className="font-black text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">Ready to Partner?</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Get your free consultation.</p>

          <div className="bg-gray-800 border-2 border-gray-700 p-10 rounded-xl">
            <h3 className="text-3xl font-black mb-8">Quick Quote</h3>
            {submitted ? (
              <div className="bg-green-900 border-2 border-green-400 text-green-100 px-6 py-4 rounded-lg text-center">
                ✓ Thanks! We'll contact you within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required className="bg-gray-900 border-2 border-gray-700 text-white p-4 rounded-lg focus:border-yellow-400 outline-none" />
                  <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required className="bg-gray-900 border-2 border-gray-700 text-white p-4 rounded-lg focus:border-yellow-400 outline-none" />
                </div>
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-gray-900 border-2 border-gray-700 text-white p-4 rounded-lg focus:border-yellow-400 outline-none" />
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full bg-gray-900 border-2 border-gray-700 text-white p-4 rounded-lg focus:border-yellow-400 outline-none" />
                <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-gray-900 border-2 border-gray-700 text-white p-4 rounded-lg focus:border-yellow-400 outline-none" />
                <button type="submit" className="w-full bg-yellow-400 text-gray-900 p-4 rounded-lg font-black hover:bg-yellow-300 transition text-lg">Get Free Quote</button>
              </form>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Or call:</p>
            <a href="tel:251-477-5676" className="text-4xl font-black text-yellow-400 hover:text-yellow-300">251-477-5676</a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t-4 border-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">&copy; 2026 AMC Professionals LLC</p>
          <div className="text-gray-500 space-y-2">
            <p>📞 251-477-5676</p>
            <p>📧 amcprofessionalscs@gmail.com</p>
            <p>🌐 amc-professionals.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
