export default function NewsTicker() {
  const items = [
    'News Ticker+++',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit +++',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit +++',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit +++',
  ]
  return (
    <section className="w-full max-w-content mx-auto px-5 md:px-20">
      <div className="w-full bg-primary overflow-hidden px-5 py-5">
        <div className="flex items-center gap-6">
          {[...items, ...items].map((text, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-normal text-white whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
