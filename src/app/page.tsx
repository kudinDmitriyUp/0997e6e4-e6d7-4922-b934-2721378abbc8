"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Package, Sparkles, Star } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="radialGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Aline's Slimes"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Unique Slimes Made with Love"
          description="Discover Aline's amazing collection of handcrafted slimes - from basic to ultra premium. Each slime is carefully created for the perfect texture and endless fun!"
          tag="Madrid's Best Slimes"
          tagIcon={Sparkles}
          buttons={[
            { text: "Shop Collection", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219850857-ux37a3xs.jpg"
          imageAlt="Colorful premium slime collection"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Aline"
          description="Hi! I'm Aline, a passionate slime entrepreneur from Madrid. What started as a hobby has become my dream business - creating unique, high-quality slimes that bring joy to kids and adults alike. Every slime is made with premium ingredients and lots of love!"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Our Slime Collection"
          description="Choose from our three amazing slime tiers - each crafted with care and premium ingredients"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "basic",
              name: "Basic Slime",
              price: "€8.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219851591-nanb1jy3.jpg",
              imageAlt: "Basic clear slime",
              initialQuantity: 1
            },
            {
              id: "premium",
              name: "Premium Slime",
              price: "€15.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219852267-bqw89x39.jpg",
              imageAlt: "Premium glittery slime",
              initialQuantity: 1
            },
            {
              id: "ultra",
              name: "Ultra Slime",
              price: "€25.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219852913-fer1ywtc.jpg",
              imageAlt: "Ultra luxury rainbow slime",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Happy Customers"
          description="See what our customers say about Aline's amazing slimes"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sofia Martinez",
              role: "Happy Parent",
              testimonial: "My daughter absolutely loves Aline's slimes! The quality is incredible and they last so much longer than store-bought ones.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219853992-lgx75i36.jpg",
              imageAlt: "Sofia Martinez portrait"
            },
            {
              id: "2",
              name: "Carlos Rodriguez",
              role: "Teacher",
              testimonial: "I bought several slimes for my classroom activities. The kids were amazed by the textures and colors. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219854673-396uamtc.jpg",
              imageAlt: "Carlos Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Satisfied Customer",
              testimonial: "The Ultra slime is absolutely magical! The colors and texture are unlike anything I've seen before. Worth every euro!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219855513-294wu8lb.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "4",
              name: "Miguel Santos",
              role: "Repeat Customer",
              testimonial: "I've ordered from Aline multiple times and the quality is always consistent. Fast delivery across Madrid too!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219856217-fd4cpep7.jpg",
              imageAlt: "Miguel Santos portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions about our slimes or want to place a custom order? We'd love to hear from you!"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your slime needs...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219857409-nom1g56f.jpg"
          imageAlt="Slime making workspace"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Aline's Slimes"
          columns={[
            {
              items: [
                { label: "Basic Slime", href: "products" },
                { label: "Premium Slime", href: "products" },
                { label: "Ultra Slime", href: "products" }
              ]
            },
            {
              items: [
                { label: "About Aline", href: "about" },
                { label: "Contact Us", href: "contact" },
                { label: "Reviews", href: "testimonials" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}