import React from 'react';
import './App.css';
import { AppProvider, Loading, Frame } from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import Rankings from './components/Rankings'
import API from './utils/API'

class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            leaderboard: []
        }
    }

    async componentDidMount() {
        this.loadMovies();
    }

    loadMovies = () => {
        this.state.loading = true;
        API.getMovies()
            .then(res => res.data)
            .then(res => {
                const accumulatedTotals = res.reduce(
                    (totals, p) => ({ ...totals, [p.imdbID]: (totals[p.imdbID] || 0) + 1 }),
                    {}
                );

                var tempLeaderboard = []

                for (var id in accumulatedTotals) {
                    tempLeaderboard.push(
                        {
                            movie: res.find(element => element.imdbID === id),
                            frequency: accumulatedTotals[id]
                        }
                    )
                }

                tempLeaderboard.sort((a, b) => (b.frequency - a.frequency))
                this.setState({
                    leaderboard: tempLeaderboard,
                    loading: false
                })
            })
            .then(console.log(this.state.leaderboard))
            .catch(err => console.log(err));
    }

    render() {
        if (this.state.loading) {
            return (
                <AppProvider i18n={en}>
                    <div style={{ height: '100px' }}>
                        <Frame>
                            <Loading />
                        </Frame>
                    </div>
                </AppProvider>
            )
        }
        return (
            <AppProvider i18n={en}>
                <Rankings leaderboard={this.state.leaderboard} />
            </AppProvider>
        )
    }
}

export default Leaderboard