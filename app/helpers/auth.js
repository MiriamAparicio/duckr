export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'Mir',
      avatar: 'https://pbs.twimg.com/profile_images/571260078292865024/0EvP5vXn_400x400.jpeg',
      uid: 'the-uid',
    }), 2000)
  })
}
