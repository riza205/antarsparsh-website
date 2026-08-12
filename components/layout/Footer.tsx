"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3E5140] text-white">
      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-16 md:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/images/logos/logo4.png"
              alt="Antarsparsh"
              width={120}
              height={100}
              
            />

            <p className="leading-8 text-[#D6DDD4]">
              Healing Through Art, Movement &
              Acceptance and Commitment Therapy (ACT).
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className="mb-6 text-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Quick Links
            </h3>

            <div className="space-y-4 text-[#D6DDD4]">

              <a href="#" className="block hover:text-white transition">
                Home
              </a>

              <a href="#" className="block hover:text-white transition">
                Services
              </a>

              <a href="#" className="block hover:text-white transition">
                Packages
              </a>

              <a href="#" className="block hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3
              className="mb-6 text-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Services
            </h3>

            <div className="space-y-4 text-[#D6DDD4]">

              <p>Art Therapy</p>

              <p>Movement Therapy</p>

              <p>Acceptance & Commitment Therapy</p>

              <p>Workshops</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3
              className="mb-6 text-2xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@antarsparsh.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Bengaluru, India</span>
              </div>

              <div className="pt-4">

                <a
                  href="https://instagram.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-[#D6DDD4] hover:text-white transition"
>
  Instagram →
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#C8D1C7]">
            © 2026 Antarsparsh by Meenu. All rights reserved.
          </p>

          <p className="text-[#C8D1C7]">
            Designed with compassion.
          </p>

        </div>

      </div>
    </footer>
  );
}