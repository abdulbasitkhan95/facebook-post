import './App.css';
import Post from "./components/Post";
import {useState} from 'react';

function App() {
    const [post, setPost] = useState([])

    const obj = {
        createdBy: 'Kesa Dya',
        name: 'Abdul Basit',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        description: "I'm not feeling good today!",
        images: [
            'https://play-lh.googleusercontent.com/LvJB3SJdelN1ZerrndNgRcDTcgKO49d1A63C5hNJP06rMvsGkei-lwV52eYZJmMknCwW',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Vwnh17gqvUVTcHtwr1JqOSnu88q6xoy-w&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Vwnh17gqvUVTcHtwr1JqOSnu88q6xoy-w&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Vwnh17gqvUVTcHtwr1JqOSnu88q6xoy-w&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Vwnh17gqvUVTcHtwr1JqOSnu88q6xoy-w&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Vwnh17gqvUVTcHtwr1JqOSnu88q6xoy-w&usqp=CAU'
        ],
        createdAt: Date.now()
    }

  return (
    <div className="App">
        <Post data={obj}/>
    </div>
  );
}

export default App;
