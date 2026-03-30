"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Flame, Waves } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Accueil",
          id: "#hero",
        },
        {
          name: "Notre Histoire",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Avis",
          id: "#testimonials",
        },
        {
          name: "Réserver",
          id: "#contact",
        },
      ]}
      brandName="Pizza Napoli"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="L'Authentique Goût de l'Italie à Rejiche"
      description="Savourez une pizza artisanale cuite au feu de bois avec une vue imprenable sur la Méditerranée. Une expérience culinaire inoubliable au cœur de la Corniche."
      kpis={[
        {
          value: "154+",
          label: "Avis Clients",
        },
        {
          value: "4.1★",
          label: "Note Moyenne",
        },
        {
          value: "10+",
          label: "Années de Passion",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Réserver une Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27035.jpg"
      imageAlt="Wood-fired pizza in Napoli style"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-tourist_23-2147615344.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/muslim-women-traveling-paris-together_23-2149364093.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-man-living-room_329181-626.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-chef-wearing-uniform-presenting-fresh-steak-before-cooking-looking-camera-restaurant-kitchen_613910-21362.jpg",
          alt: "Client 5",
        },
      ]}
      avatarText="+500 clients satisfaits"
      marqueeItems={[
        {
          type: "text",
          text: "Produits Frais",
        },
        {
          type: "text-icon",
          text: "Cuit au feu de bois",
          icon: Flame,
        },
        {
          type: "text",
          text: "Vue sur Mer",
        },
        {
          type: "text-icon",
          text: "Recettes Authentiques",
          icon: Flame,
        },
        {
          type: "text",
          text: "Ouvert tous les jours",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="L'Expérience"
      title="La Méditerranée à vos pieds"
      description="Situé directement sur la Corniche de Rejiche, Pizza Napoli offre un panorama spectaculaire sur la Méditerranée. Que vous choisissiez une table en terrasse au coucher du soleil ou une soirée en famille à l'intérieur, chaque instant est un souvenir."
      subdescription="Un emplacement de choix, recommandé par des visiteurs italiens et européens pour son authenticité."
      icon={Waves}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-shot-sunrise-seashore-zahora-spain_181624-19475.jpg"
      imageAlt="Terrace view over the Mediterranean Sea"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Margherita Best",
          price: "15 TND",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27035.jpg",
        },
        {
          id: "p2",
          name: "Spaghetti Fruits de Mer",
          price: "26 TND",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27035.jpg",
        },
        {
          id: "p3",
          name: "Escalope à la Crème",
          price: "30 TND",
          imageSrc: "http://img.b2bpic.net/free-photo/chef-white-uniform-prepare-pizzaa_1157-27035.jpg",
        },
      ]}
      title="Nos Spécialités"
      description="Le meilleur de notre carte, entre traditions italiennes et produits frais locaux."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Dikra Zgarni",
          role: "Local Guide",
          testimonial: "La meilleure pizza que j'aie jamais mangée en Tunisie.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",
        },
        {
          id: "t2",
          name: "Angelo Mancini",
          role: "Client Fidèle",
          testimonial: "La pizza qui se rapproche le plus de l'originale italienne.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-tourist_23-2147615344.jpg",
        },
        {
          id: "t3",
          name: "Haykel Salah",
          role: "Local Guide",
          testimonial: "Excellente qualité. La meilleure pizza de Mahdia.",
          imageSrc: "http://img.b2bpic.net/free-photo/muslim-women-traveling-paris-together_23-2149364093.jpg",
        },
        {
          id: "t4",
          name: "Yassine EL Abed",
          role: "Local Guide",
          testimonial: "Depuis 2015, toujours au top. Ambiance familiale.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-living-room_329181-626.jpg",
        },
        {
          id: "t5",
          name: "Sophie Martin",
          role: "Touriste",
          testimonial: "Une vue magnifique et des saveurs incroyables.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",
        },
      ]}
      title="Ce que disent nos clients"
      description="Des avis qui parlent d'eux-mêmes, de la Tunisie à l'Italie."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      members={[
        {
          id: "sami",
          name: "Chef Sami",
          role: "Maître Pizzaiolo",
          description: "Passionné par la technique traditionnelle.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-chef-wearing-uniform-presenting-fresh-steak-before-cooking-looking-camera-restaurant-kitchen_613910-21362.jpg",
        },
        {
          id: "karim",
          name: "Karim",
          role: "Serveur Star",
          description: "Service chaleureux et attentionné.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-living-room_329181-626.jpg",
        },
        {
          id: "staff",
          name: "Notre Équipe",
          role: "Service & Cuisine",
          description: "Une équipe soudée et dédiée.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",
        },
      ]}
      title="Le Cœur de la Maison"
      description="Une équipe passionnée qui met tout son amour dans chaque assiette."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Réservations"
      title="Réservez votre table"
      description="Garantissez votre place avec vue sur mer. Nous vous répondons dans les plus brefs délais."
      buttons={[
        {
          text: "Appeler Pizza Napoli",
          href: "tel:+21600000000",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="PIZZA NAPOLI"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Nos Pizzas",
              href: "#menu",
            },
            {
              label: "Pâtes & Grillades",
              href: "#menu",
            },
          ],
        },
        {
          title: "Info",
          items: [
            {
              label: "Réservations",
              href: "#contact",
            },
            {
              label: "Nous Trouver",
              href: "#about",
            },
          ],
        },
        {
          title: "Légal",
          items: [
            {
              label: "Mentions Légales",
              href: "#",
            },
            {
              label: "Confidentialité",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2026 Pizza Napoli · Rejiche, Mahdia · Tunisie"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
