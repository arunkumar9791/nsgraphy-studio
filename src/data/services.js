import { Camera, Heart, Sparkles } from 'lucide-react';

// Class names are written out in full so Tailwind can detect them.
export const services = [
  {
    title: 'Portraits & Editorial',
    description: 'Individual portraits, model portfolios, and high-fashion editorial sessions designed to showcase personality and style with cinematic flair.',
    icon: Camera,
    borderClass: 'border-silk',
    iconClass: 'bg-silk/10 border-silk/30 text-silk',
    hoverTextClass: 'group-hover:text-silk',
  },
  {
    title: 'Weddings & Engagement',
    description: 'Documenting your most precious milestones with discretion, elegance, and emotional resonance. From pre-wedding shoots to grand receptions.',
    icon: Heart,
    borderClass: 'border-kumkum',
    iconClass: 'bg-kumkum/10 border-kumkum/30 text-kumkum',
    hoverTextClass: 'group-hover:text-kumkum',
  },
  {
    title: 'Commercial Events',
    description: 'Corporate launches, live concerts, gala dinners, and brand activations captured with professional clarity and dynamic storytelling.',
    icon: Sparkles,
    borderClass: 'border-leaf',
    iconClass: 'bg-leaf/10 border-leaf/30 text-leaf',
    hoverTextClass: 'group-hover:text-leaf',
  },
];
