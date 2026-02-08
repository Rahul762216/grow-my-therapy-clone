export default function Home() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Therapy for Anxiety & Life Transitions in Portland, OR
        </h1>
        <p className="max-w-2xl mx-auto mb-6">
          Compassionate, evidence-based therapy with Dr. Maya Reynolds to help
          you feel grounded, supported, and confident again.
        </p>
        <button className="bg-accent text-black px-6 py-3 rounded-md">
          Schedule a Consultation
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <img src="/maya.jpg" alt="Dr. Maya Reynolds" className="rounded-lg" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Meet Dr. Maya Reynolds
          </h2>
          <p>
            Dr. Maya Reynolds is a licensed psychologist in Portland, Oregon,
            specializing in anxiety, burnout, and major life transitions. Her
            approach is warm, collaborative, and deeply client-centered.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl text-center font-semibold mb-12">
          Therapy Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Anxiety Therapy</h3>
            <p>Evidence-based therapy to help manage worry and panic.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Life Transitions</h3>
            <p>Support through career, relationship, and identity changes.</p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Burnout Recovery</h3>
            <p>Helping professionals restore balance and emotional clarity.</p>
          </div>
        </div>
      </section>

      {/* OUR OFFICE SECTION */}
      <section className="bg-secondary py-20 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Office</h2>
        <p className="text-center max-w-3xl mx-auto mb-10">
          A calm, private space in Portland designed for safety, comfort, and
          healing.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img src="/office1.jpg" className="rounded-lg" />
          <img src="/office2.jpg" className="rounded-lg" />
          <img src="/office3.jpg" className="rounded-lg" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white py-6 text-center">
        © 2026 Dr. Maya Reynolds | Portland.
      </footer>
    </main>
  );
}
