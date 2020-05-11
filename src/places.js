import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Places extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            places: []
        };
    }

    loadData() {
        axios.get("https://roadtrippers.herokuapp.com/api/v1/places")
            //   .then(res => res.json())
            .then(

                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        places: result.data.places
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    componentDidMount() {
        this.loadData();
    }


    render() {
        const { error, isLoaded, places } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                < >
                    {places.map(place => (
                        <ul key={place.id}>
                            <li key={place.name}>
                                {place.name}
                                <Link to={`places/${place.id}`}>  {place.id} </Link>
                            </li>
                        </ul>
                    ))}
                </>
            );
        }
    }
}

export default Places;