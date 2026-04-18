import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContactHeader } from '../components/sections/contact/ContactHeader';
import { InfoCards } from '../components/sections/contact/InfoCards';
import { ContactForm } from '../components/sections/contact/ContactForm';
import { MapCard } from '../components/sections/contact/MapCard';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') || '';

  return (
    <main className="bg-bg-base min-h-screen pb-24">
      <ContactHeader />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <InfoCards />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <ContactForm defaultSubject={subject} />
          <MapCard />
        </div>
      </div>
    </main>
  );
};

export default Contact;
