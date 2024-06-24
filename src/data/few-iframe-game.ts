export const list = [
  {
    id: '1',
    iframeSrc: 'https://html-classic.itch.zone/html/2487732/keylimba_web/index.html',
    sourceUrl: 'https://dvdfu.itch.io/keylimba',
    avatar: 'https://img.itch.zone/aW1nLzE0OTM4MTczLnBuZw==/315x250%23c/Wog7wA.png',
    title: 'Keylimba',
    description: 'Interactive keyboard kalimba!',
    width: 800,
    height: 480,
  },
  {
    id: '2',
    iframeSrc: 'https://html-classic.itch.zone/html/8204111/index.html',
    sourceUrl: 'https://plazatin.itch.io/toe-20-toe',
    avatar: 'https://img.itch.zone/aW1nLzEyMTQwMTA2LmpwZw==/315x250%23c/tC%2F8hs.jpg',
    title: 'Toe II Toe',
    description: 'A 20 second slugfest! Punch, duck, or block your way to victory!',
    width: 640,
    height: 576,
  },
  {
    id: '3',
    iframeSrc: 'https://html-classic.itch.zone/html/1177378/NotMe!/index.html?v=1574336285',
    sourceUrl: 'https://cyberpan.itch.io/not-me',
    avatar: 'https://img.itch.zone/aW1nLzE2OTYyOTcucG5n/315x250%23c/EAgMlx.png',
    title: 'Not Me!',
    description: 'It\'s like Tinder but you have to kill a murderer',
    width: 380,
    height: 660,
  },
  {
    id: '4',
    iframeSrc: 'https://html-classic.itch.zone/html/9226865/index.html',
    sourceUrl: 'https://nomnomnami.itch.io/astras-garden',
    avatar: 'https://img.itch.zone/aW1nLzg3NTE3ODAucG5n/315x250%23c/1XG2jG.png',
    title: 'Astra\'s Garden',
    description: 'a healing game. let\'s grow together!',
    width: 960,
    height: 540,
  },
  {
    id: '5',
    iframeSrc: 'https://html-classic.itch.zone/html/9073116/index.html',
    sourceUrl: 'https://ornate-astrolabe.itch.io/uncanny-desire',
    avatar: 'https://img.itch.zone/aW1nLzEzOTMwODA1LnBuZw==/315x250%23c/LhQNLE.png',
    title: 'Uncanny Desire',
    description: 'This is a horror style otome where you can either end the night safely, or someone\'s delicious meal.',
    width: 640,
    height: 360,
  },
  {
    id: '6',
    iframeSrc: 'https://html-classic.itch.zone/html/10577608/Devilish K 1.4/index.html',
    sourceUrl: 'https://veracity.itch.io/devilish-kisses',
    avatar: 'https://img.itch.zone/aW1nLzExMzk1NDkwLnBuZw==/315x250%23c/GYXucE.png',
    title: 'Devilish Kisses',
    description: 'Help Angel and Devil enjoy their romantic dinner!',
    width: 896,
    height: 504,
  },
  {
    id: '7',
    iframeSrc: 'https://html-classic.itch.zone/html/1872786/index.html?v=1583444812',
    sourceUrl: 'https://vladimirslepnev.itch.io/zigzag',
    avatar: 'https://img.itch.zone/aW1hZ2UvNzQzMjMvMzc1NTU2LmdpZg==/315x250%23cm/a60GNg.gif',
    title: 'Zig Zag',
    description: 'Very hard reaction-based game.',
    width: 960,
    height: 600,
  },
  {
    id: '8',
    iframeSrc: 'https://html-classic.itch.zone/html/5027959/bin/index.html',
    sourceUrl: 'https://watabou.itch.io/antlers',
    avatar: 'https://img.itch.zone/aW1nLzc3Mzg1MzAucG5n/315x250%23c/lbj%2FCL.png',
    title: 'Antlers',
    description: 'Antlers generator',
    width: 1280,
    height: 640,
  },
  {
    id: '9',
    iframeSrc: 'https://html-classic.itch.zone/html/3140245/web/dist/index.html',
    sourceUrl: 'https://pawprints.itch.io/skwish',
    avatar: 'https://img.itch.zone/aW1nLzQ4NjE3OTEucG5n/315x250%23c/gOweL7.png',
    title: 'Skwish',
    description: 'Get in the blobs to solve the puzzle!',
    width: 640,
    height: 360,
  },
]

export const getGameById = (id: string) => list.find(i => i.id === id)

export type GameInfo = (typeof list)[0]

export function getRandomGameList(id: string) {
  const newList: GameInfo[] = list.filter(i => i.id !== id)
  const len = newList.length
  for (let i = 0; i < len - 1; i++) {
    const swapI = i + Math.floor(Math.random() * (len - i))
    const t = newList[swapI]
    newList[swapI] = newList[i]
    newList[i] = t
  }
  return newList.slice(0, 10)
}
