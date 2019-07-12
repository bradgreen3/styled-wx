import React from 'react';
import ClearDay from './ClearDay';
import ClearNight from "./ClearNight";
import PartlyCloudyNight from "./PartlyCloudyNight";
import PartlyCloudyDay from "./PartlyCloudyDay";
import Cloudy from "./Cloudy";
import Fog from "./Fog";
import Wind from "./Wind";
import Sleet from "./Sleet";
import Snow from "./Snow";
import Rain from "./Rain";
import Lightning from "./Lightning";

const Icon = ({name}) => {

    switch (name) {
        case "clear-day":
            return <ClearDay/>;
        case "clear-night":
            return <ClearNight/>;
        case "rain":
            return <Rain/>;
        case "snow":
            return <Snow/>;
        case "sleet":
            return <Sleet/>;
        case "wind":
            return <Wind/>;
        case "fog":
            return <Fog/>;
        case "cloudy":
            return <Cloudy/>;
        case "partly-cloudy-day":
            return <PartlyCloudyDay/>;
        case "partly-cloudy-night":
            return <PartlyCloudyNight/>;
        case "lightning":
            return <Lightning/>;
        default:
            return <div/>;
    }
};

export default Icon;