import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList';


const DUMMY_PLACES =[
    {
        id: 'p1',
        title: 'Empire State Building',
        imageUrl: 'https://media.timeout.com/images/101705309/1372/772/image.jpg',
        description: 'One of the most famous sky scrappers in the world',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        imageUrl: 'https://media.timeout.com/images/101705309/1372/772/image.jpg',
        description: 'One of the most famous sky scrappers in the world',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: 'u2'
    }
]
const UserPlaces = () => {
    const userId = useParams().userId;

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;