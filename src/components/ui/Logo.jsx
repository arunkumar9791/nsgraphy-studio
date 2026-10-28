export default function Logo({ className = '' }) {
  return (
    <span aria-label="NSGRAPHY" className={`inline-flex items-center font-logo tracking-[0.15em] ${className}`}>
      <span className="text-logo-orange">NS</span>
      {/* "G" framed by a camera outline, as in the brand logo */}
      <span className="relative inline-flex items-center justify-center mx-[0.2em] px-[0.35em] pt-[0.35em] pb-[0.15em] text-logo-teal font-bold tracking-normal">
        <svg className="absolute inset-0 w-full h-full text-logo-orange" viewBox="0 0 40 44" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 9 H5 Q2 9 2 12 V39 Q2 42 5 42 H9" />
          <path d="M31 9 H35 Q38 9 38 12 V39 Q38 42 35 42 H31" />
          <path d="M12 9 V5 Q12 2 15 2 H25 Q28 2 28 5 V9" />
        </svg>
        G
      </span>
      <span className="text-logo-teal">RAPHY</span>
    </span>
  );
}
