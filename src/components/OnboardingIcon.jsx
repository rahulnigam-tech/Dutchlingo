function OnboardingIcon({ word }) {
  const common = {
    viewBox: '0 0 64 64',
    className: 'svg-icon',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  };

  if (word === 'ik' || word === 'jij') {
    return (
      <svg {...common}>
        <circle cx="32" cy="18" r="8" fill="#F1B646" />
        <path d="M20 50C20 40 25 34 32 34C39 34 44 40 44 50" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (word === 'ben') {
    return (
      <svg {...common}>
        <rect x="14" y="14" width="36" height="36" rx="12" fill="#F1B646" />
        <path d="M24 32H40" stroke="#122033" strokeWidth="5" strokeLinecap="round" />
        <path d="M32 24V40" stroke="#122033" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (word === 'heb') {
    return (
      <svg {...common}>
        <path d="M20 22H44V46H20z" fill="#F1B646" />
        <path d="M20 26C20 21 23 18 28 18H36C41 18 44 21 44 26" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (word === 'woon' || word === 'huis') {
    return (
      <svg {...common}>
        <path d="M14 30L32 16L50 30V50H14V30z" fill="#F1B646" />
        <path d="M26 50V38H38V50" stroke="#122033" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (word === 'naam') {
    return (
      <svg {...common}>
        <rect x="12" y="18" width="40" height="28" rx="8" fill="#F1B646" />
        <path d="M22 30H42" stroke="#122033" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 38H34" stroke="#122033" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (word === 'Nederlands') {
    return (
      <svg {...common}>
        <rect x="10" y="16" width="44" height="10" fill="#AE1C28" />
        <rect x="10" y="26" width="44" height="12" fill="#FFFFFF" />
        <rect x="10" y="38" width="44" height="10" fill="#21468B" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="32" cy="32" r="18" fill="#F1B646" />
    </svg>
  );
}

export default OnboardingIcon;
