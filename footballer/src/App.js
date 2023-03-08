
import './App1.css';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Login from './Main';
import Getdetails from './Get';
import Update from './Put';
import Delete from './delete';


function App() {
  return (
    <div className='App'>
                 <Router>
                    <div class='nav'>
                        <h1>Footballers</h1>
                        <div class='nav-link'>
                    <Link to='/'><button>HOME</button></Link>
                    <Link to='/delete'><button>DELETE</button></Link>
                    <Link to='/put'><button>UPDATE</button></Link>
                    <Link to='/get'><button>VIEW</button></Link>
                    </div>
                    </div>
                <Routes>
                    
                <Route path='/' element={<Login/>}/>
                <Route path='/get' element={<Getdetails/>}/>
                <Route path='/put' element={<Update/>}/>
                <Route path='/delete' element={<Delete/>}/>

                </Routes>
                </Router>

        </div>

  );
}

export default App;
