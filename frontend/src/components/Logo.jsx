export default function Logo({ className = "" }) {
  // New WeHA wordmark — theme-adaptive.
  //   "We" picks up --weha-text (cream on dark, ink on light)
  //   "HA" and the tall vertical stroke use --weha-teal (Ink Violet)
  return (
    <span
      className={`weha-logo inline-flex items-center select-none ${className}`}
      data-testid="weha-logo"
      aria-label="WeHA — We Help Automate"
    >
      <span className="weha-logo__word text-weha-text">We</span>
      <span aria-hidden="true" className="weha-logo__stroke bg-weha-teal" />
      <span className="weha-logo__word text-weha-teal">HA</span>
    </span>
  );
}
