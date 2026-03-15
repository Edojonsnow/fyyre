const categories = ['All', 'art', 'Street Art', 'Sculptures']

type CategoriesFilterProps = {
  activeCategory: string,
  onActiveCategoryChange: (category: string) => void
}

export default function CategoriesFilter({ activeCategory, onActiveCategoryChange }: CategoriesFilterProps) {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        gap: '96px',
        fontFamily: "'General Sans', 'DM Sans', sans-serif",
      }}
    >
      <h2
        className="uppercase shrink-0"
        style={{
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '1.35',
        }}
      >
        Categories
      </h2>

      <div className="flex flex-wrap items-center" style={{ gap: '12px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onActiveCategoryChange(cat)}
            className="uppercase cursor-pointer hover:bg-black hover:text-white transition-colors"
            style={{
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '1.35',
              border: '1px solid #000',
              borderRadius: '100px',
              padding: '8px 12px',
              background: activeCategory === cat ? '#000' : 'transparent',
              color: activeCategory === cat ? '#fff' : '#000',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
