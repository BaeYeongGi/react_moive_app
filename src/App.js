import React from 'react';
import PropTypes from 'prop-types';

const  foodILike = [
    {
        id : 1,
        name : 'Kimchi',
        image : 'https://i.ytimg.com/vi/CqY22Y7hVgE/maxresdefault.jpg',
        rating : 5
    },
    {
        id : 2,
        name : 'Samgyeopsal',
        image : 'http://1.bp.blogspot.com/-UghY4o0ZYOo/VBTxso2HmaI/AAAAAAAAClc/swkXa7YjcEs/s1600/20140909_205029.jpg',
        rating : 4.9
    },
    {
        id : 3,
        name : 'Bibimbap',
        image : 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Korean_cuisine-Bibimbap-01.jpg',
        rating : 4.8,
    },
    {
        id : 4,
        name : 'Doncasu',
        image : 'https://www.maangchi.com/wp-content/uploads/2015/02/donkkaseu-plate.jpg',
        rating : 4.7,
    },       
    {
        id : 5,
        name : 'Kimbap',
        image : 'https://www.thespruceeats.com/thmb/IyxiJdbwFaixy4iolNYTLjBmW_w=/4288x2848/filters:fill(auto,1)/kimbap-korean-sushi-rolls-2118795-Hero-5b7dbdd346e0fb00250718b8.jpg',
        rating : 4.6
    }        
]

function Food({name, picture, rating}){
    return <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
        </div>
}

/* react 에서 가져오는 prop 상태가 맞는지 확인하는 구문  */ 
Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
}


function App() {
  return (
    <div>
        {

        foodILike.map(dish => (
            <Food
                key={dish.id}
                name={dish.name}
                picture={dish.image}
                rating={dish.rating}
            />
        ))
        
        }
    </div>
  );
}

export default App;