/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Button,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  LocationOn,
} from '@mui/icons-material';
import { Section } from '../components/Section';

interface ContactItemProps {
  icon: React.ReactNode;
  description: string;
  link?: string;
}

const ContactItem = ({ icon, description, link = '' }: ContactItemProps) => (
  <Button disabled={!link} size="large" href={link} startIcon={icon}>
    {description}
  </Button>
);

const ContactList = () => {
  const contactData: ContactItemProps[] = [
    { icon: <Email />, description: 'andersmarkendahl@gmail.com' },
    { icon: <LinkedIn />, description: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/andersmarkendahl/' },
    { icon: <LocationOn />, description: 'Uppsala, Sweden', link: 'https://goo.gl/maps/B54bUncus6tHotbj6/' },
  ];

  return (
    <div>
      {contactData.map((data) => (
        <div key={data.description}>
          <ContactItem
            icon={data.icon}
            description={data.description}
            link={data.link}
          />
        </div>
      ))}
    </div>
  );
};

export const Contact = ({ id }: { id: string }) => (
  <Section id={id} title="Contact Me"><ContactList /></Section>
);
