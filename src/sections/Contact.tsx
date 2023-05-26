/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Button,
  Divider,
  Typography,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  LocationOn,
} from '@mui/icons-material';

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

export const Contact = () => (
  <div>
    <Typography variant="h4">
      Contact me
    </Typography>
    <Divider orientation="horizontal" />
    <ContactItem
      icon={<Email />}
      description="andersmarkendahl@gmail.com"
    />
    <ContactItem
      icon={<LinkedIn />}
      description="LinkedIn Profile"
      link="https://www.linkedin.com/in/andersmarkendahl/"
    />
    <ContactItem
      icon={<LocationOn />}
      description="Uppsala, Sweden"
      link="https://goo.gl/maps/B54bUncus6tHotbj6/"
    />
  </div>
);
