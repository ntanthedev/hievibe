'use client';

import Link from 'next/link';

export default function GetStarted() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center px-4" data-name="Get started" data-node-id="108:661">
      {/* Hexagonal Logo */}
      <div className="relative mb-8" data-node-id="108:663">
        <div className="w-24 h-28">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 107">
            <path 
              d="M88.9668 27.8936V79.1055L45.5 104.679L2.0332 79.1055V27.8936L45.5 2.32031L88.9668 27.8936Z" 
              stroke="white" 
              strokeWidth="4" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Brand Name */}
      <div className="mb-4" data-node-id="108:664">
        <h1 className="text-4xl font-bold text-white text-center">
          Hivie
        </h1>
      </div>

      {/* Tagline */}
      <div className="mb-8" data-node-id="108:665">
        <p className="text-2xl font-medium text-white text-center">
          Connect • Grow • Collaborate
        </p>
      </div>

      {/* Description */}
      <div className="mb-12 max-w-md" data-node-id="108:666">
        <p className="text-xl text-gray-100 text-center leading-relaxed">
          Where talents meet opportunity. Swipe to find your perfect hire.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {/* Get Started Button */}
        <Link 
          href="/sign-up"
          className="bg-white text-primary font-medium text-2xl py-4 px-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors text-center block"
          data-node-id="108:667"
        >
          Get Started!
        </Link>

        {/* Sign In Button */}
        <Link 
          href="/sign-in"
          className="bg-transparent border-2 border-white text-white font-bold text-xl py-4 px-6 rounded-lg shadow-lg hover:bg-white hover:text-primary transition-colors text-center block"
          data-node-id="108:669"
        >
          Already have an account?
        </Link>
      </div>

      {/* Bottom Tagline */}
      <div className="mt-16" data-node-id="108:671">
        <p className="text-xl font-medium text-gray-100 text-center">
          Ready • Secure • Fast
        </p>
      </div>
    </div>
  );
}
