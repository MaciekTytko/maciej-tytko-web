import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import axios from "../../axios";
import { objectToArrayWithId } from "../../helpers/objects";
import useAuth from "../../hooks/useAuth"

// TODO pokazać cały hotel; zrobić autoryzację i wyrzucić błąd przy statusie braku autoryzacji (401) z bazą danych;



function Hotel(props) {
  const { id } = useParams();
  const [auth] = useAuth();
  const [loading, setLoading] = useState(true);
  const [hotel, setHotel] = useState({});
  const [rating, setRating] = useState(5);
  const setTitle = useWebsiteTitle();

  const fetchHotel = async () => {
    try {
      const res = await axios.get(`/hotels/${id}.json`);
      console.log(res.data);
      setHotel(res.data);
      setTitle('Hotel - ' + res.data.name)
    } catch (e) {
      console.log(e.response);
    }
  }

  const rateHotel = async ()=>{
    try {
      const res = await axios.put(`/hotels/${id}/rating.json?auth=${auth.token}`,rating);
      const res2 = await axios.put(`/hotels/${id}/ratingResponds.json?auth=${auth.token}`,rating);
    } catch (e) {
      console.log(e.response);
    }
  }



  useEffect(() => {
    setLoading(true);
    fetchHotel();
    setLoading(false);
  }, []);

  return loading ? <LoadingIcon /> : (
    <>
      <h1>Hotel: {hotel.name}</h1>
      <div className="card-footer">
        {auth
          ? <div className="form-group row mt-4">
            <div className="col">
              <select 
              className="form-control form-select-lg mb-3"
              value={rating}
              onChange={e => setRating(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="col">
              <button className="btn btn-info" onClick={rateHotel}>oceń hotel</button>
            </div>
          </div>
          : null
        }
      </div>



    </>
  )

}

import './AboutMe.scss'


export default function aboutMe(){
  return(
    <div className='AboutMe'>
      <Profile/>
      <Contact/>
      <Blog/>
      <Maps/>
    </div>
  )
}

function Profile(){
  return(
    <div>

    </div>
  )
}

function Blog(){
  return(
    <div>
      
    </div>
  )
}

function Contact(){
  return(
    <div>
      
    </div>
  )
}

function Maps(){
  return(
    <div>
      
    </div>
  )
}