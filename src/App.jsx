import './App.css'
import UserProfile from './UserProfile';

function App() {
  return (
    <div className="app-layout">
      <aside className="profile-column">
        <h2>User Profiles</h2>

        <div id='user-container'>
          <UserProfile
          name="Mark Zuckerberg"
          role="Founder and Developer"
          age={28}
          isOnline={true}
          bio="Hi. I'm Marky Mark. I made Facebook."
          socials={{ github: '@mark-zuckerberg', twitter: '@finkd' }}
        />

        <UserProfile
          name="Joe Rogan"
          role="UI/UX Designer"
          age={44}
          isOnline={false}
          bio="I be yapping and stuff"
          socials={{ github: '@joerogan', twitter: '@joe_mama' }}
        />

        <UserProfile
          name="Alan Turing"
          role="Junior Developer"
          age={22}
          isOnline={true}
          bio="I do computation. New to this so don't judge me."
          socials={{ github: '@alan', twitter: '@alan_wrench' }}
        />
        </div>
        
      </aside>
    </div>
  );
}

export default App