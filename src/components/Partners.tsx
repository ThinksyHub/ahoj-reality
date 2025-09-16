const partners = [
  {
    id: 1,
    name: "Apple",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png"
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png"
  },
  {
    id: 3,
    name: "Google",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Google-Logo.png"
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Meta-Logo.png"
  },
  {
    id: 6,
    name: "Tesla",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Tesla-Logo.png"
  }
];

const Partners = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden-luxury font-light">Dôveryhodní partneri</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-primary mb-6">
            Naši <span className="text-gradient-golden">partneri</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Spolupracujeme s popredným spoločnosťami a vývojármi na Slovensku
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-12 object-contain filter grayscale opacity-40 hover:opacity-60 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;