<script lang="ts">
  import Toolbar from '$lib/components/Toolbar.svelte';
  import { getToolbarConfig } from '$lib/components/toolbar';

  type TopTag = {
    className: 'button' | 'button2';
    label: string;
  };

  type CardTag = {
    className: 'button11' | 'button13';
    label: string;
  };

  type FeedbackCard = {
    title: string;
    statusClass: string;
    statusLabel: string;
    statusSrc: string;
    description: string;
    date: string;
    contentClass: 'content2' | 'content4';
    tags: CardTag[];
  };

  const topTags: TopTag[] = [
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

  const cards: FeedbackCard[] = [
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

  const toolbar = getToolbarConfig('feedback');
</script>

<svelte:head>
  <link rel="stylesheet" href="/feedback/index.css" />
</svelte:head>

<div class="feedback">
  <div class="feedback-section">
    <div class="content">
      <div class="search-section">
        <div class="searchadd">
          <div class="search">
            <div class="container">
              <div class="icon-and-prompt">
                <img class="group-icon" src="/files/ui/copy.svg" alt="" />
                <div class="prompt-text">Describe your issue or suggestion</div>
              </div>
            </div>
          </div>
          <div class="buttonicon">
            <img class="group-icon2" src="/files/ui/add.svg" alt="" />
          </div>
        </div>
        <div class="tags">
          {#each topTags as tag}
            <div class={tag.className}>
              <div class="button-label">{tag.label}</div>
            </div>
          {/each}
        </div>
      </div>

      <div class="cards-section">
        <div class="sortfilter">
          <div class="filtersearch">
            <div class="chip">
              <div class="button10">
                <div class="button-label">All</div>
              </div>
            </div>
            <div class="chip2">
              <div class="tags2">
                <div class="button-label">New features</div>
              </div>
            </div>
            <div class="chip2">
              <div class="tags2">
                <div class="button-label">Improvements</div>
              </div>
            </div>
            <div class="chip2">
              <div class="tags2">
                <div class="button-label">Questions</div>
              </div>
            </div>
            <div class="chip2">
              <div class="tags2">
                <div class="button-label">Bugs</div>
              </div>
            </div>
          </div>
          <div class="sort-options">
            <div class="button-label">Sort:</div>
            <div class="button-label12">new</div>
            <div class="button-label">|</div>
            <div class="sort-option">best</div>
          </div>
        </div>

        <div class="card-count">38832 CARDS</div>

        <div class="cards">
          {#each cards as card}
            <a class="cardfeedback" href="https://github.com/v57" target="_blank" rel="noreferrer">
              <div class="sortfilter">
                <div class="text">
                  <b class="platform-description">{card.title}</b>
                </div>
                <div class={card.statusClass}>
                  <div class="status-item">
                    <div class="button-label">{card.statusLabel}</div>
                    <img class="frame-icon" src={card.statusSrc} alt="" />
                  </div>
                </div>
              </div>

              <div class={card.contentClass}>
                <div class="content3">
                  <div class="description">{card.description}</div>
                  <div class="date-and-tags">
                    <div class="date">{card.date}</div>
                    {#each card.tags as tag}
                      <div class={tag.className}>
                        <div class="button-label">{tag.label}</div>
                      </div>
                    {/each}
                  </div>
                </div>
                <div class="card-aside">
                  <b class="platform-description">95</b>
                  <div class="buttonicon2">
                    <img class="group-icon3" src="/files/ui/vote.svg" alt="" />
                  </div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <Toolbar {...toolbar} />
</div>
