import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Jitka Knapová",
    source: "Facebook",
    text: "Touto cestou by som chcela poďakovať pani Karaffovej, za jej profesionálny prístup a ochoty prispôsobiť sa, aby nám mohla vyjsť v ústrety pri predaji nehnuteľnosti k našej spokojnosti. Ďakujem Knapová",
    rating: 5
  },
  {
    id: 2,
    name: "Lýdia Taščicová",
    source: "Web",
    text: "Ďakujeme za super odvedenú prácu. Určite odporúčame každému, kto potrebuje pomoc s bývaním či už kúpiť alebo predať. Nám sa náš sen s bývaním splnil vďaka AhojReality.",
    rating: 5
  },
  {
    id: 3,
    name: "Mária Baranová",
    source: "Web",
    text: "Pani Kristinka aj touto cestou Vám chcem poďakovať za úžasnú spoluprácu , ktorá prebehla tak rýchlo a hladko ,že ešte dlho na Vás budem u nás v Sladkovičove spomínať. Ešte raz ĎAKUJEM ❤",
    rating: 5
  },
  {
    id: 4,
    name: "Tomáš Soroka",
    source: "Web",
    text: "Ďakujem veľmi pekne za pomoc pri kúpe bytu. Bol som veľmi spokojný so službami realitnej kancelárie. Pani Kafaffová bola veľmi ústretová, sčítana a dokázala mi odpovedať na všetky moje otázky.",
    rating: 5
  },
  {
    id: 5,
    name: "Val Oslacka",
    source: "Web",
    text: "Od samého začiatku bola pani Karaffová maximálne profesionálna a promptná vo svojej práci. Potenciálnych kupcov nám predstavila už na druhý deň. Veľmi oceňujeme jej znalosť trhu a skúsenosti s nehnuteľnosťami.",
    rating: 5
  }
];

const TestimonialsSlider = () => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="testimonials-slider"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card className="overflow-hidden hover-lift bg-card border-border/20 shadow-elegant h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="flex justify-end mb-4">
                  <Quote className="w-6 h-6 text-golden/20" />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-golden text-golden" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed font-light mb-6 text-sm flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-3 mt-auto">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-golden/10 text-golden font-medium text-sm">
                      {getInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-golden-luxury font-light">
                      {testimonial.source}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-golden/20 flex items-center justify-center text-golden hover:bg-golden hover:text-white transition-all duration-300">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-golden/20 flex items-center justify-center text-golden hover:bg-golden hover:text-white transition-all duration-300">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Custom CSS for Swiper */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .testimonials-slider .swiper-pagination {
            position: relative;
            margin-top: 2rem;
          }
          .testimonials-slider .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: hsl(var(--golden));
            opacity: 0.3;
            transition: all 0.3s ease;
          }
          .testimonials-slider .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.2);
          }
        `
      }} />
    </div>
  );
};

export default TestimonialsSlider;