import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { profile } from '../data/profile';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';

const EMPTY_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please add your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'An email address is needed to reply.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'That email address looks incomplete.';
  }

  if (values.message.trim().length < 12) {
    errors.message = 'A little more detail would help — at least 12 characters.';
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [copyState, setCopyState] = useState('idle');
  const formRef = useRef(null);
  const copyTimer = useRef(null);
  const statusTimer = useRef(null);

  useEffect(
    () => () => {
      window.clearTimeout(copyTimer.current);
      window.clearTimeout(statusTimer.current);
    },
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }

    if (status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const copyEmail = async () => {
    window.clearTimeout(copyTimer.current);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        const field = document.createElement('textarea');
        field.value = profile.email;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(field);
        if (!copied) throw new Error('Copy command failed');
      }

      setCopyState('copied');
    } catch {
      setCopyState('error');
    }

    copyTimer.current = window.setTimeout(() => setCopyState('idle'), 3500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.clearTimeout(statusTimer.current);

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];

    if (firstError) {
      setStatus({
        type: 'error',
        message: 'Almost there — a couple of fields need attention.',
      });
      const field = formRef.current?.querySelector(`[name="${firstError}"]`);
      field?.focus();
      return;
    }

    const subject = values.subject.trim()
      ? `Portfolio enquiry — ${values.subject.trim()}`
      : 'Portfolio enquiry';

    const body = [
      `Hi Ragunath,`,
      '',
      values.message.trim(),
      '',
      '—',
      values.name.trim(),
      values.email.trim(),
    ].join('\n');

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus({
      type: 'ready',
      message:
        'Your email app should open with the message filled in. If nothing happens, use the direct email link below.',
      mailto,
    });

    window.location.href = mailto;
  };

  const copyMessage =
    copyState === 'copied'
      ? 'Email address copied.'
      : copyState === 'error'
        ? `Clipboard blocked. You can select: ${profile.email}`
        : '';

  return (
    <section
      id="contact"
      className="section section--divided contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <SectionHeading
          id="contact"
          index="05"
          label="Contact"
          title={
            <>
              Have a problem worth{' '}
              <span className="serif-italic">solving?</span>
            </>
          }
          intro="I'm open to fresher roles, internships and thoughtful conversations about AI, data or front-end craft."
        />

        <div className="contact__grid">
          <Reveal className="contact__aside">
            <p className="contact__lead">
              Tell me what you&apos;re building, what&apos;s getting in the way,
              or where a junior developer could genuinely help.
            </p>

            <div className="contact__channels">
              <div className="contact__channel">
                <span className="contact__channel-icon" aria-hidden="true">
                  <Mail size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <span className="mono">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <button
                  type="button"
                  className="contact__copy"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copyState === 'copied' ? (
                    <Check size={15} strokeWidth={1.8} aria-hidden="true" />
                  ) : (
                    <Copy size={15} strokeWidth={1.8} aria-hidden="true" />
                  )}
                </button>
              </div>

              <div className="contact__channel">
                <span className="contact__channel-icon" aria-hidden="true">
                  <MapPin size={17} strokeWidth={1.7} />
                </span>
                <div>
                  <span className="mono">Based in</span>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>

            <p
              className={`contact__copy-status ${
                copyState !== 'idle' ? 'is-visible' : ''
              }`}
              role="status"
              aria-live="polite"
            >
              {copyMessage}
            </p>

            <div className="contact__availability">
              <div>
                <span className="status">
                  <span className="availability-dot" aria-hidden="true" />
                  Available
                </span>
                <p>{profile.availability}</p>
              </div>
              <span className="mono contact__response">IST / UTC+5:30</span>
            </div>

            <div className="contact__aside-foot">
              <SocialLinks variant="text" />
              <a
                className="text-link"
                href={profile.resume}
                download="Ragunath-D-Resume.pdf"
              >
                <ArrowDownToLine
                  size={15}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Download resume
              </a>
            </div>

            <p className="contact__note">
              Prefer a plain email? Write directly to{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a> — no form
              required.
            </p>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-form__head">
                <span className="mono">Project brief / Enquiry</span>
                <span className="mono contact-form__format">Mailto form</span>
              </div>

              <div className="contact-form__row">
                <div className="field">
                  <label htmlFor="contact-name">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    required
                  />
                  {errors.name ? (
                    <p className="field__error" id="contact-name-error">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="contact-email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'contact-email-error' : undefined
                    }
                    required
                  />
                  {errors.email ? (
                    <p className="field__error" id="contact-email-error">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-subject">
                  Subject <span className="field__optional">(optional)</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Role, project or question"
                  value={values.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <div className="field__label-row">
                  <label htmlFor="contact-message">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <span className="mono field__count">
                    {values.message.trim().length} chars
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="What are you working on, and what would you like help with?"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                  required
                />
                {errors.message ? (
                  <p className="field__error" id="contact-message-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="contact-form__actions">
                <button className="btn btn--primary" type="submit">
                  Open email draft
                  <Send size={16} strokeWidth={1.8} aria-hidden="true" />
                </button>
                <a
                  className="contact-form__direct"
                  href={`mailto:${profile.email}`}
                >
                  Or email directly
                  <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>

              <div
                className={`contact-form__status ${
                  status.type !== 'idle' ? `is-${status.type}` : ''
                }`}
                role="status"
                aria-live="polite"
              >
                {status.message ? (
                  <>
                    <p>{status.message}</p>
                    {status.type === 'ready' && status.mailto ? (
                      <a className="text-link" href={status.mailto}>
                        Open the draft manually
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </a>
                    ) : null}
                  </>
                ) : null}
              </div>

              <p className="contact-form__note">
                This form does not send or store data on a server. It prepares a
                message in your own email app; nothing is submitted until you
                send it.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
