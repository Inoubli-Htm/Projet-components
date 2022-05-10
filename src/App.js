import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';
import './App.css';

function App() {
  return (
    <div className="App">
<FullName />
<br />
<Address />
<br />
<ProfilePhoto />
    </div>
  );
}

export default App;
