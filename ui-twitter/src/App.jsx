import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';


const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdez',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {

  return (
    <section className='app'>
    {
      users.map(user => {
        const { userName, name, isFollowing } = user
        return(
          <TwitterFollowCard
          userName={userName}
          initialIsFollowing={isFollowing}
          key={userName}
          >
          {name}
          </TwitterFollowCard>
        )
      })
    }
    </section>
  );
}