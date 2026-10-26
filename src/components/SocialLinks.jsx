import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const links = [
  {
    label: 'GitHub',
    href: profile.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
];

export default function SocialLinks({ variant = 'icons', className = '' }) {
  return (
    <ul
      className={`social-links social-links--${variant} ${className}`.trim()}
      aria-label="Social and contact links"
    >
      {links.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            className="social-links__link"
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
            <span className={variant === 'icons' ? 'visually-hidden' : ''}>
              {label}
            </span>
            {variant !== 'icons' && external ? (
              <ArrowUpRight
                size={13}
                strokeWidth={1.75}
                aria-hidden="true"
                className="social-links__external"
              />
            ) : null}
            {external ? (
              <span className="visually-hidden"> (opens in a new tab)</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
