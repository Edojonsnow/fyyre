export default function HeroBanner() {
  return (
    <section className="w-full max-w-content mx-auto px-5 md:px-20">
      <div className="w-full overflow-hidden" aria-label="Art & Life">
        <img
          src="/images/art-and-life.svg"
          alt="Art & Life"
          className="w-full h-auto object-cover object-center"
        />
      </div>
    </section>
  )
}
