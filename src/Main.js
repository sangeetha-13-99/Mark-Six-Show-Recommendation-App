import {useState} from 'react';

let genreObjects={
  'movie':[
{'name':'Shang-Chi and the Legend of the Ten Rings','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg','knowMore':'https://g.co/kgs/W6jbhQ'},
{'name':'Inception','rating':'5/5','image':'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg','knowMore':'https://g.co/kgs/1rJfpq'},
{'name':'The Shawshank Redemption','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg','knowMore':'https://g.co/kgs/c1aoMP'},
{'name':'Guardians of the Galaxy','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg','knowMore':'https://g.co/kgs/JcuwbM'},
{'name':'Avengers: Age of Ultron','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg','knowMore':'https://g.co/kgs/sHBxcZ'}
],
  'Drama':[
    {'name':'Put Your Head on My Shoulder','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/5/57/Put_Your_Head_on_My_Shoulder.jpg','knowMore':'https://g.co/kgs/ojktzp'},
    {'name':'Young and Beautiful','rating':'4.5/5','image':'https://i.mydramalist.com/RJk6Vf.jpg','knowMore':'https://g.co/kgs/BhWaKZ'},
    {'name':'My Girlfriend Is an Alien','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/e/ed/My_Girlfriend_is_an_Alien.jpeg','knowMore':'https://g.co/kgs/TH7U3F'}
  ],
  'sitcom':[
    {'name':'The Big Bang Theory','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/c/ce/The_Big_Bang_Theory_Cast.png','knowMore':'https://g.co/kgs/wgVDM6'},
    {'name':'Friends','rating':'4.5/5','image':'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Friends_season_one_cast.jpg/330px-Friends_season_one_cast.jpg','knowMore':'https://g.co/kgs/ypcC7i'},
  ]
}

export default function Main(){
  let [genreType,setgenreType]=useState('movie');

  function clickhandler(event){
    // console.log(event.target.textContent)

    setgenreType((prev)=>{
      Array.from(document.getElementsByTagName('button')).forEach(element=>{
        if(element.textContent==prev){
        console.log(element.classList.remove('selected'))
        }
      })
     
      return event.target.textContent
    })
    event.target.classList.add('selected')
  }

return (
  <div>
    <p className="aboutApp">click on the genre types to find list of my recommendations and ratings</p>
    <div className="container">
      <div className="genreButtons">
        {Object.keys(genreObjects).map(genre=>{
          console.log(genre)
          return <button key={genre} class="genreButton" onClick={clickhandler}>{genre}</button>
        })}
      </div>
      <div className="genreList">
      {/* {console.log(genreType)} */}
      {genreObjects[genreType].map(genreItem=>{
        return (
          <div key={genreItem.name} className="genreItemBox">
            <img className="genreImage" src={genreItem.image}/>
            <h4 className="genreHeading">Name : {genreItem.name}</h4>
            <div className="spanBox">
              <span className="genreRating">rate : {genreItem.rating}</span>
              <span >
                <a className="genreKnowMore" target="_blank" href={genreItem.knowMore}>Know More</a>
              </span>
            </div> 
          </div>
        )
      })}
    </div>
    </div>
  </div>
  )
}