import React, { Component } from 'react';
import './LastRace.css';

class LastRace extends Component {
    constructor(props) {
        super(props);
        this.state = { raceResults: [] };
    }

    async componentWillMount() {
        const response = await fetch('https://ergast.com/api/f1/current/last/results.json');
        var myjson = await response.json();

        console.log(myjson);

        var results = myjson.MRData.RaceTable.Races[0].Results;
        this.setState({ raceResults: results });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <table>
                    {this.state.raceResults.map((item) => {
                        return <tr key={item}>


                            <td class="position">
                                <span class="team-number">
                                    <span class="text">{item.position}</span>
                                    <span class="color"></span>
                                </span>
                            </td>

                            <td class="name">
                                <span class="first-name">{item.Driver.givenName}</span><span class="last-name"> {item.Driver.familyName}</span>
                            </td>
                            <td class="team">{item.Constructor.name}</td>
                            <td class="average-speed">{item.FastestLap.AverageSpeed.speed} Km/h</td>
                            <td class="car"><img src="{}"></img></td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default LastRace;