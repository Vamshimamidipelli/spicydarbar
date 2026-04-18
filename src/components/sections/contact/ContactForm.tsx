import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Toast } from '../../ui/Toast';

interface ContactFormProps {
  defaultSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: defaultSubject || 'Table Reservation',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setShowToast(true);
      setFormData({ name: '', email: '', subject: 'Table Reservation', message: '' });
    }
  };

  return (
    <div className="md:col-span-2">
      <form onSubmit={handleSubmit} className="bg-bg-card border border-gold-muted/20 rounded-lg p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-gold-muted text-[10px] font-bold tracking-widest uppercase">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-bg-base border border-gold-muted/30 rounded-md text-cream placeholder-muted px-4 py-3 w-full focus:outline-none focus:border-gold transition-colors"
              placeholder="Maharaja Singh"
            />
          </div>
          <div className="space-y-2">
            <label className="text-gold-muted text-[10px] font-bold tracking-widest uppercase">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-bg-base border border-gold-muted/30 rounded-md text-cream placeholder-muted px-4 py-3 w-full focus:outline-none focus:border-gold transition-colors"
              placeholder="maharaja@royal.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-gold-muted text-[10px] font-bold tracking-widest uppercase">Subject</label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="bg-bg-base border border-gold-muted/30 rounded-md text-cream px-4 py-3 w-full focus:outline-none focus:border-gold transition-colors appearance-none"
          >
            <option>Table Reservation</option>
            <option>Private Event</option>
            <option>Chef's Table</option>
            <option>Catering Enquiry</option>
            <option>General Feedback</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-gold-muted text-[10px] font-bold tracking-widest uppercase">Message</label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-bg-base border border-gold-muted/30 rounded-md text-cream placeholder-muted px-4 py-3 w-full min-h-[120px] resize-none focus:outline-none focus:border-gold transition-colors"
            placeholder="How may we serve you?"
          />
        </div>

        <Button type="submit" className="w-full py-4 text-xs tracking-widest uppercase">
          REQUEST ENGAGEMENT
        </Button>
      </form>

      <Toast
        message="Your enquiry has been received. The Royal Court will be in touch shortly."
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};
