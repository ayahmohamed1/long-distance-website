// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  memories: {
    title: 'our memories',
    nextButton: 'SEE A LETTER',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
    ],
  },



  flowers: {
    title: 'for you',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      `"I love you and every little thing about you ♡"`,
      `"I get lost in your eyes; nothing else compares ✨"`,
      `"Everything sweet and beautiful reminds me of you 🌷"`,
      `"The mother of my future kids ♥️"`,
      `"The heart and warmth of my home 🏡"`,
      `"My wife and my greatest pride 👑"`,
      `"My whole world and everything in it 💫"`,
      `"My family, my home, and my everything 💕"`,
    ],
  },

  song: {
    title: 'our song',
    nextButton: 'A VIRTUAL FLOWERS FOR YOU',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    nextButton: 'A SONG FOR YOU',
    message: ` 
    I love you more than words could ever explain, and I hope you know how much you truly mean to me. You are my back, my support, my safe place, my husband, my lover, my best friend, and even my brother. You are not just my boyfriend,you are my person, the one I can lean on no matter what life brings. my life with you is the best life I could ever ask for You make everything feel more beautiful, more meaningful, and more worth it. No one in this world could ever take your place, and no matter who comes into my life, nobody will ever have the place you have in my heart.
`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },


}

export default content
