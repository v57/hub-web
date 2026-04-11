export type FeedbackTag = {
  className: 'button' | 'button2' | 'button11' | 'button13';
  label: string;
};

export type FeedbackFilterChip = {
  active?: boolean;
  label: string;
};

export type FeedbackCard = {
  contentClass: 'content2' | 'content4';
  date: string;
  description: string;
  statusClass: string;
  statusLabel: string;
  statusSrc: string;
  tags: FeedbackTag[];
  title: string;
};

export const composerPrompt = 'Describe your issue or suggestion';

export const cardCount = '38832 CARDS';

export const topTags: FeedbackTag[] = [
  { className: 'button', label: 'Button' },
  { className: 'button2', label: 'Files' },
  { className: 'button', label: 'Web' },
  { className: 'button2', label: 'Security' },
  { className: 'button', label: 'Hub' },
  { className: 'button2', label: 'Say Hi' },
  { className: 'button', label: 'Services' },
  { className: 'button2', label: 'Other' },
  { className: 'button', label: 'Launcher' }
];

export const filterChips: FeedbackFilterChip[] = [
  { active: true, label: 'All' },
  { label: 'New features' },
  { label: 'Improvements' },
  { label: 'Questions' },
  { label: 'Bugs' }
];

export const feedbackCards: FeedbackCard[] = [
  {
    title: 'About this platform',
    statusClass: 'status',
    statusLabel: 'Released',
    statusSrc: '/files/status/approved.svg',
    description:
      'All users are welcome to create new entries, view existing entries and vote on them. What is this for? This platform is a place where users can vote for feature...',
    date: 'Dec 23, 2020 ',
    contentClass: 'content2',
    tags: [
      { className: 'button11', label: 'App' },
      { className: 'button11', label: 'Other' },
      { className: 'button13', label: 'Button' },
      { className: 'button13', label: 'Improvements' }
    ]
  },
  {
    title: 'User Feedback',
    statusClass: 'status2',
    statusLabel: 'Declined',
    statusSrc: '/files/status/declined.svg',
    description:
      'All users are welcome to create new entries, view existing entries and vote on them. What is this for? This platform is a place where users can vote for feature...',
    date: 'Dec 23, 2020 ',
    contentClass: 'content4',
    tags: [
      { className: 'button11', label: 'App' },
      { className: 'button11', label: 'Other' },
      { className: 'button13', label: 'Button' },
      { className: 'button13', label: 'Improvements' }
    ]
  },
  {
    title: 'User Feedback',
    statusClass: 'status3',
    statusLabel: 'Waiting for review',
    statusSrc: '/files/status/waiting.svg',
    description:
      'Users can submit their feedback or suggestions to enhance the platform experience. We encourage all users to share their thoughts and ideas.',
    date: 'Dec 23, 2020 ',
    contentClass: 'content2',
    tags: [
      { className: 'button11', label: 'Files' },
      { className: 'button11', label: 'Launcher' },
      { className: 'button13', label: 'Questions' },
      { className: 'button13', label: 'Bugs' }
    ]
  },
  {
    title: 'Bug Reports',
    statusClass: 'status4',
    statusLabel: 'Reviewed',
    statusSrc: '/files/status/reviewed.svg',
    description:
      'Users are able to report any bugs or issues they encounter while using the platform. Timely reporting helps us maintain quality.',
    date: 'Dec 23, 2020 ',
    contentClass: 'content2',
    tags: [
      { className: 'button11', label: 'Web' },
      { className: 'button11', label: 'Other' },
      { className: 'button13', label: 'Questions' },
      { className: 'button13', label: 'Improvements' }
    ]
  },
  {
    title: 'User Tutorials',
    statusClass: 'status5',
    statusLabel: 'Waiting for response',
    statusSrc: '/files/status/waiting.svg',
    description:
      'A collection of tutorials and guides for users to better understand how to utilize the platform effectively. These resources are continuously added to.',
    date: 'Dec 23, 2020 ',
    contentClass: 'content2',
    tags: [
      { className: 'button11', label: 'Security' },
      { className: 'button11', label: 'Other' },
      { className: 'button13', label: 'Improvements' },
      { className: 'button13', label: 'Bugs' }
    ]
  },
  {
    title: 'User Feedback',
    statusClass: 'status2',
    statusLabel: 'Declined',
    statusSrc: '/files/status/declined.svg',
    description:
      'We encourage users to provide feedback on their experience. This helps us improve the platform continuously and address user needs effectively.',
    date: 'Dec 23, 2020 ',
    contentClass: 'content2',
    tags: [
      { className: 'button11', label: 'Hub' },
      { className: 'button11', label: 'Other' },
      { className: 'button13', label: 'Improvements' },
      { className: 'button13', label: 'Questions' }
    ]
  },
  {
    title: 'Community Guidelines',
    statusClass: 'status7',
    statusLabel: 'Approved',
    statusSrc: '/files/status/approved.svg',
    description:
      "To maintain a healthy environment, we've set guidelines for user interactions. These outline acceptable behavior and promote respectful communication.",
    date: 'Dec 23, 2020 ',
    contentClass: 'content2',
    tags: [
      { className: 'button11', label: 'Say Hi' },
      { className: 'button11', label: 'Other' },
      { className: 'button13', label: 'Bugs' },
      { className: 'button13', label: 'Questions' }
    ]
  },
  {
    title: 'Platform Updates',
    statusClass: 'status8',
    statusLabel: 'Implementing',
    statusSrc: '/files/status/released.svg',
    description:
      'Regular updates are planned to enhance system stability and introduce new capabilities. Users will be notified about upcoming changes and improvements.',
    date: 'Dec 23, 2020 ',
    contentClass: 'content2',
    tags: [
      { className: 'button11', label: 'Services' },
      { className: 'button11', label: 'Other' },
      { className: 'button13', label: 'Button' },
      { className: 'button13', label: 'Improvements' }
    ]
  }
];
