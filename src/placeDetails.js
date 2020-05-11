import React, {Component} from 'react';
import axios from 'axios';

class PlaceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            placeDetails: []
        };
    }

    loadData() {
        axios.get("https://roadtrippers.herokuapp.com/api/v1/places/:id")
            .then(
                (result) => {
                     console.log(result);
                    this.setState({
                        isLoaded: true,
                        placeDetails: result.data.places.official_description
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
                            <li key={place.id}>
                                {place.id}
                            </li>
                        </ul>
                    ))}
                </>
            );
        }
    }
}

export default PlaceDetails;