import { Github, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { ReactNode } from 'react';

import Section from './ui/Section';
import { contact, profile } from '@/data/portfolio';

type Channel = {
  label: string;
  value: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
  /** Identifiers and addresses are set in the monospace face. */
  mono?: boolean;
  accent?: boolean;
};

/**
 * Cards are laid out vertically — icon, label, then value — rather than in a
 * row, so a long email address gets the full card width.
 */
function ChannelCard({ channel }: { channel: Channel }) {
  const inner = (
    <>
      <span
        className="flex h-10 w-10 items-center justify-center rounded-md border"
        style={
          channel.accent
            ? {
                backgroundColor: 'var(--accent-soft)',
                borderColor: 'var(--accent-border)',
                color: 'var(--accent)',
              }
            : { backgroundColor: 'var(--bg-inset)', borderColor: 'var(--border)' }
        }
      >
        {channel.icon}
      </span>

      <span className="mt-3.5 block text-[0.9rem] font-semibold">{channel.label}</span>
      <span
        className={`mt-1 block break-words text-[0.8rem] ${channel.mono ? 'font-mono' : ''}`}
        style={{ color: 'var(--fg-muted)' }}
      >
        {channel.value}
      </span>
    </>
  );

  if (!channel.href) {
    return <div className="card">{inner}</div>;
  }

  return (
    <a
      href={channel.href}
      className="card card-interactive"
      {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {inner}
    </a>
  );
}

export default function Contact() {
  const showWeChatPanel = Boolean(contact.wechat);

  const channels: Channel[] = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail size={18} aria-hidden="true" />,
      mono: true,
      accent: true,
    },
    {
      label: 'GitHub',
      value: contact.githubHandle,
      href: contact.github,
      external: true,
      icon: <Github size={18} aria-hidden="true" />,
      mono: true,
    },
  ];

  if (contact.phone) {
    channels.push({
      label: 'Phone',
      value: contact.phone,
      // Strip spaces and punctuation for the dial link, keeping the leading '+'.
      href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`,
      icon: <Phone size={18} aria-hidden="true" />,
      mono: true,
    });
  }

  // WeChat gets its own panel when an ID is set; otherwise it falls back to a
  // plain card here, and location fills the remaining slot.
  if (!showWeChatPanel && contact.wechat) {
    channels.push({
      label: 'WeChat',
      value: contact.wechat,
      icon: <MessageCircle size={18} aria-hidden="true" />,
      mono: true,
    });
  }

  channels.push({
    label: 'Location',
    value: profile.location,
    icon: <MapPin size={18} aria-hidden="true" />,
  });

  return (
    <Section
      id="contact"
      index="12"
      eyebrow="Contact"
      title="Academic Contact"
      lede="I am open to academic discussion, graduate study opportunities, and Master's research supervision related to cybersecurity and adjacent areas."
      tinted
    >
      <div
        className={
          showWeChatPanel
            ? 'grid gap-5 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-6'
            : 'grid gap-5'
        }
      >
        {/* self-start keeps the cards at their natural height instead of
            stretching them to match the taller WeChat panel beside them. */}
        <div className="grid gap-5 self-start sm:grid-cols-2">
          {channels.map((channel) => (
            <ChannelCard key={channel.label} channel={channel} />
          ))}
        </div>

        {/* WeChat panel. Many Chinese supervisors correspond here rather than by
            email, so the QR code is given room to be scanned directly from the
            screen rather than tucked inside a card. */}
        {showWeChatPanel && contact.wechat ? (
          <aside className="card flex flex-col items-center text-center">
            <span
              className="flex h-10 w-10 items-center justify-center self-start rounded-md border"
              style={{ backgroundColor: 'var(--bg-inset)', borderColor: 'var(--border)' }}
            >
              <MessageCircle size={18} aria-hidden="true" />
            </span>

            <span className="mt-3.5 self-start text-[0.9rem] font-semibold">WeChat</span>
            <span
              className="mt-1 self-start break-words font-mono text-[0.8rem]"
              style={{ color: 'var(--fg-muted)' }}
            >
              {contact.wechat}
            </span>

            {contact.wechatQr ? (
              <>
                {/* The QR sits on a permanent white tile: a scanner needs the
                    light quiet zone, so this must not follow the dark theme. */}
                <span
                  className="mt-4 block w-full rounded-md border p-3"
                  style={{ backgroundColor: '#ffffff', borderColor: 'var(--border)' }}
                >
                  <picture>
                    <source srcSet="/images/wechat-qr.webp" type="image/webp" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={contact.wechatQr.src}
                      alt={contact.wechatQr.alt}
                      width={512}
                      height={512}
                      loading="lazy"
                      decoding="async"
                      className="mx-auto block w-full max-w-[11rem]"
                      style={{ aspectRatio: '1 / 1' }}
                    />
                  </picture>
                </span>

                <span
                  className="mt-3 block text-[0.78rem]"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  Scan to add me on WeChat
                </span>
              </>
            ) : null}
          </aside>
        ) : null}
      </div>

      <p className="mt-6 max-w-prose text-[0.85rem]" style={{ color: 'var(--fg-subtle)' }}>
        Enquiries from prospective supervisors and admissions offices are welcome. I am happy to
        provide academic transcripts, degree documentation, and certification records on request.
      </p>
    </Section>
  );
}
