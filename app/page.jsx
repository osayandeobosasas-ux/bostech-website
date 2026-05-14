export default function BosTechLandingPage() { return ( <div className="min-h-screen bg-gray-50 text-gray-900 font-sans"> {/* Hero Section */} <section className="bg-[#163A5F] text-white px-6 py-20"> <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"> <div> <h1 className="text-5xl font-bold leading-tight mb-6"> BosTech Solution </h1> <p className="text-xl mb-6 text-gray-200"> Reliable Computer Repairs & IT Support in Benin City. </p> <p className="text-lg text-gray-300 mb-8"> Fast laptop repairs, software installation, networking, CCTV installation, and professional IT support services. </p>

<div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/2348168603126"
            className="bg-white text-[#163A5F] px-6 py-3 rounded-2xl font-semibold shadow hover:scale-105 transition"
          >
            Contact on WhatsApp
          </a>

          <a
            href="tel:08168603126"
            className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-[#163A5F] transition"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900">
        <h2 className="text-2xl font-bold mb-6">Why Choose BosTech?</h2>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gray-100">
            <h3 className="font-semibold text-lg">Fast Repairs</h3>
            <p className="text-gray-600">
              Quick troubleshooting and reliable repair solutions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-100">
            <h3 className="font-semibold text-lg">Affordable Pricing</h3>
            <p className="text-gray-600">
              Professional services at fair and transparent prices.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-100">
            <h3 className="font-semibold text-lg">Trusted Support</h3>
            <p className="text-gray-600">
              Honest diagnostics and dependable customer service.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Services Section */}
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg">
          Professional computer engineering and IT support services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Computer Repairs</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Laptop Repairs</li>
            <li>• Desktop Repairs</li>
            <li>• Hardware Troubleshooting</li>
            <li>• System Upgrades</li>
            <li>• Virus Removal</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Networking</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Router Setup</li>
            <li>• Office Networking</li>
            <li>• LAN Configuration</li>
            <li>• WiFi Troubleshooting</li>
            <li>• Internet Support</li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">CCTV & IT Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• CCTV Installation</li>
            <li>• DVR/NVR Setup</li>
            <li>• Home Support Visits</li>
            <li>• Office IT Support</li>
            <li>• Remote Troubleshooting</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section className="bg-white py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">About BosTech Solution</h2>

      <p className="text-lg text-gray-600 leading-8">
        BosTech Solution is a professional computer engineering and IT
        support business based in Uselu, Benin City, Edo State, Nigeria.
        We help individuals, students, offices, and businesses solve
        technology challenges through reliable repairs, networking,
        software support, and CCTV installation services.
      </p>
    </div>
  </section>

  {/* Contact Section */}
  <section className="bg-[#163A5F] text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

      <p className="text-lg text-gray-300 mb-10">
        Need computer repairs or IT support? Contact BosTech Solution today.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="font-bold text-xl mb-3">Phone</h3>
          <p>08168603126</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="font-bold text-xl mb-3">Email</h3>
          <p>osayandeobosa.sas@gmail.com</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <h3 className="font-bold text-xl mb-3">Location</h3>
          <p>Uselu, Benin City, Edo State</p>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-gray-400 py-6 text-center text-sm">
    © 2026 BosTech Solution. All Rights Reserved.
  </footer>
</div>

) }
