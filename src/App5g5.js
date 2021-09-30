import React,{useState} from 'react'
import axios from 'axios'
import Gallery from './Gallery';

const apikey="636e1481b4f3c446d26b8eb6ebfe7127"
const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const changehandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response => setData(response.data.photos.photo)
    )
  }
  return (
    <div>
      <center>
          <h2> Gallery Snapshots </h2>
          <form onSubmit={submitHandler}>
            <input size="30" type="text" value={search} onChange={changehandler}/><br /><br />
            <input type="submit" name="search" />
          </form>
          <br />
          {data.length>=1?<Gallery data={data}/>:<h4>no data loaded</h4>}
          
        </center>
    </div>
  )
}

export default App
