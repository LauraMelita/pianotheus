export const siteConfig = {
  collections: [
    {
      collection: 'movies',
      title: 'Movies',
      routeParam: 'title',
      searchKeys: ['title'],
      filterKeys: [
        { name: 'Composers', key: 'composer' },
        { name: 'Year', key: 'year' },
      ],
    },
    {
      collection: 'tv-shows',
      title: 'TV Shows',
      routeParam: 'title',
      searchKeys: ['title'],
      filterKeys: [{ name: 'Composers', key: 'composer' }],
    },
    {
      collection: 'video-games',
      title: 'Video Games',
      routeParam: 'title',
      searchKeys: ['title'],
      filterKeys: [
        { name: 'Composers', key: 'composer' },
        { name: 'Year', key: 'year' },
      ],
    },
    {
      collection: 'classical',
      title: 'Classical Music',
      routeParam: 'composer',
      searchKeys: ['composer'],
      filterKeys: [{ name: 'Era', key: 'era' }],
    },
  ],
  navigation: {
    links: [
      { path: '/', navLink: 'Home', icon: 'home' },
      { path: '/movies', navLink: 'Movies', icon: 'cinema' },
      { path: '/tv-shows', navLink: 'TV Shows', icon: 'tv' },
      { path: '/video-games', navLink: 'Video Games', icon: 'video-games' },
      { path: '/classical', navLink: 'Classical Music', icon: 'classical' },
    ],
    titleMap: {
      '/': 'Pianotheus | Play the Piano, Your Way',
      '/register': 'Pianotheus | Sign Up',
      '/sign-in': 'Pianotheus | Sign In',
      '/movies': 'Movies',
      '/tv-shows': 'TV Shows',
      '/video-games': 'Video Games',
      '/classical': 'Classical Music',
    },
  },
  home: {
    about: [
      {
        title: 'Discover Pianotheus',
        subtitle: 'Unlock a World of Piano Melodies',
        content:
          'Explore a platform designed to bring piano music to life, bypassing traditional sheet music and embracing a modern approach to learning.',
        icon: 'endurance',
      },
      {
        title: 'A Passionate Beginning',
        subtitle: 'Born from a Love of Music and Technology',
        content:
          'Created by a self-taught pianist, Pianotheus is the fusion of a passion for web development and piano.',
        icon: 'batman',
      },
      {
        title: 'Accessible to All',
        subtitle: 'Breaking Barriers in Music Learning',
        content: `Whether you're a complete beginner or returning to the piano after years, Pianotheus offers a wealth of resources to master the piano, even if you've never read sheet music before.`,
        icon: 'robin-hood',
      },
      {
        title: 'Your Musical Adventure',
        subtitle: 'Embark on a Unique Adventure',
        content:
          'Immerse yourself in timeless compositions and learn piano at your own pace. With Pianotheus, your musical journey is yours to explore, practice, and express.',
        icon: 'indiana-jones',
      },
    ],
    userGuide: {
      instructions: [
        {
          label: 'Explore',
          title: 'Explore Songs to Play',
          instruction: `Browse through Pianotheus' collection and find a song that resonates with you.`,
          linkLabel: 'View Collections',
          link: {
            title: 'View Collections',
            path: '/#categories',
            isHashLink: true,
          },
          image: 'explore.gif',
        },
        {
          label: 'Download',
          title: 'Download Your MIDI File',
          instruction:
            'MIDI files are digital audio files that store musical data, providing instructions on how music should be performed. These instructions include notes, pitch, velocity (intensity of each note), tempo, and other essential musical characteristics.',

          link: null,
          image: 'download.gif',
        },
        {
          label: 'Install',
          title: 'Download & Install Synthesia',
          instruction:
            'Synthesia is a user-friendly piano learning application that facilitates interactive piano practice. It allows users to learn and play piano pieces by displaying falling notes on the screen in sync with the music.',
          link: {
            title: 'Get Synthesia',
            path: 'https://synthesiagame.com/download',
            isHashLink: false,
          },
          image: 'install.png',
        },
        {
          label: 'Load',
          title: 'Load Your MIDI File into Synthesia',
          instruction: ` Right-click the MIDI file, choose "Open With", and select "Synthesia".`,
          link: {
            title: 'Read More',
            path: 'https://synthesiagame.com/support/guide/addSongs',
            isHashLink: false,
          },
          image: 'load.gif',
        },
        {
          label: 'Play',
          title: 'Play Along with the Falling Notes',
          instruction:
            'Synthesia shows each song as a series of falling notes. Watch the notes fall on the screen and follow along on your piano.',
          link: {
            title: 'View Guide',
            path: 'https://synthesiagame.com/support/guide/firstSong',
            isHashLink: false,
          },
          image: 'play.gif',
        },
      ],
      tips: [
        {
          title: 'Start Slow',
          tip: 'Begin with simple songs and gradually advance to more complex ones.',
          icon: 'slow',
        },
        {
          title: 'Stay Patient',
          tip: 'Learning a new instrument takes time. Celebrate small victories along the way.',
          icon: 'patience',
        },
        {
          title: 'Practice Regularly',
          tip: 'Consistency is key. Set aside a little time each day to practice.',
          icon: 'piano',
        },
      ],
    },
    categories: [
      {
        title: 'Movies',
        path: 'movies',
        cldId: '191655-891301369_vfdenz',
        icon: 'cinema',
      },
      {
        title: 'TV Shows',
        path: 'tv-shows',
        cldId: '10487954-hd_1916_1080_24fps_e2yyow',
        icon: 'tv',
      },
      {
        title: 'Video Games',
        path: 'video-games',
        cldId: '6955143-hd_1920_1080_25fps_vlkqr7',
        icon: 'video-games',
      },
      {
        title: 'Classical Music',
        path: 'classical',
        cldId: '85285-590730545_comjak',
        icon: 'classical',
      },
    ],
  },
  infiniteScroll: {
    resultsPerPage: 10,
  },
  features: {
    allowRegistration: false,
  },
};
