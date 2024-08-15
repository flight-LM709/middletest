import React from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const SolarSystemScreen = () => {
    const clickedPlanet = (planet) => {
        if (planet === 'mercury') {
            alert('You Clicked Mercury!');
        } else if (planet === 'venus') {
            alert('You Clicked Venus!');
        } else if (planet === 'earth') {
            alert('You Clicked Earth!');
        } else if (planet === 'mars') {
            alert('You Clicked Mars!');
        } else if (planet === 'jupiter') {
            alert('You Clicked Jupiter!');
        } else if (planet === 'saturn') {
            alert('You Clicked Saturn!');
        } else if (planet === 'uranus') {
            alert('You Clicked Uranus!');
        } else if (planet === 'neptune') {
            alert('You Clicked Neptune!');
        }
    };

    return (
        <View style={{ flex: 1, }}>

            {/* title view  */}
            <View style={{
                margin: 16,
                alignItems: "center",
            }}>
                <Text style={{
                    fontSize: 30,
                    fontFamily: "serif",
                    textDecorationLine: "underline",
                }}>SOLAR SYSTEM</Text>
            </View>

            {/* view planet */}
            <ScrollView>
                
                
                {/* mercury  */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('mercury') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }}
                    >
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/mercury.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}} >
                                Mercury
                            </Text>
                            <Text>
                            Mercury is the fastest planet, zipping around the sun every 88 earth days
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                
                {/* venus */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('venus') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }} >
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/venus.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                Venus
                            </Text>
                            <Text>
                            Venus spins slowly in the opposite direction from most planets
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                
                {/* earth */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('earth') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }} >
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/earth.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                Earth
                            </Text>
                            <Text>
                            Earth is the only place we know of so far that's inhabited by living things
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* mars */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('mars') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }} >
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/mars.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                Mars
                            </Text>
                            <Text>
                            Mars is a dusty, cold, desert world with a very thin atmosphere
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* jupiter */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('jupiter') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/jupiter.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                Jupiter
                            </Text>
                            <Text>
                            Jupiter is more than twice as massive than the other planets of our solar system combined
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* saturn */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('saturn') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/saturn.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                Saturn
                            </Text>
                            <Text>
                            Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* uranus */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('uranus') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/uranus.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                Uranus
                            </Text>
                            <Text>
                            Uranus rotates at a nearly 90-degree angle from the plane of its orbit
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* neptune */}
                <TouchableOpacity onPress={ ()=> clickedPlanet('neptune') }>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'wheat',
                        borderColor: 'greeen',
                        borderWidth: 1,
                        borderRadius: 20,
                        margin: 16,
                        padding: 16,
                    }}>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/neptune.png')}/>
                        <View style={{
                            flex: 1,
                            marginLeft: 8,
                            marginRight: 8,
                            justifyContent: 'center',
                        }}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                                Neptune
                            </Text>
                            <Text>
                            Neptune is dark, cold, and whipped by supersonic winds
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            
        </View>
    )
};

export default SolarSystemScreen;