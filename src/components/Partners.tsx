import slovenskaSporitelnaLogo from "@/assets/partners/slovenska-sporitelna.png";
import primaBankaLogo from "@/assets/partners/prima-banka.png";
import itkapLogo from "@/assets/partners/itkap.png";
import otpBankLogo from "@/assets/partners/otp-bank.png";
import mbankLogo from "@/assets/partners/mbank.png";
import vubBankaLogo from "@/assets/partners/vub-banka.png";
import unicreditLogo from "@/assets/partners/unicredit.png";
import tatraBankaLogo from "@/assets/partners/tatra-banka.png";
import csobLogo from "@/assets/partners/csob.png";

const partners = [
  {
    id: 1,
    name: "Slovenská sporiteľňa",
    logo: slovenskaSporitelnaLogo
  },
  {
    id: 2,
    name: "Prima Banka",
    logo: primaBankaLogo
  },
  {
    id: 3,
    name: "ITKAP",
    logo: itkapLogo
  },
  {
    id: 4,
    name: "OTP Bank",
    logo: otpBankLogo
  },
  {
    id: 5,
    name: "mBank",
    logo: mbankLogo
  },
  {
    id: 6,
    name: "VÚB Banka",
    logo: vubBankaLogo
  },
  {
    id: 7,
    name: "UniCredit",
    logo: unicreditLogo
  },
  {
    id: 8,
    name: "Tatra Banka",
    logo: tatraBankaLogo
  },
  {
    id: 9,
    name: "ČSOB",
    logo: csobLogo
  },
  {
    id: 10,
    name: "Slovenská sporiteľňa",
    logo: slovenskaSporitelnaLogo
  }
];

const Partners = () => {
  return (
    <section className="py-20 bg-golden/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-golden/10 border border-golden/20 rounded-full px-6 py-2 mb-6">
            <span className="text-golden-luxury font-light">Dôveryhodní partneri</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-primary mb-6">
            Naši <span className="text-gradient-golden">partneri</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Spolupracujeme s poprednými spoločnosťami a expertami na kompletný hypotekárny servis na Slovensku
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-14 object-contain filter grayscale hover:filter-none transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;