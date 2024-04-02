import fetch from 'node-fetch';
import { Game } from "../model/model.js";
import mongoose from "mongoose";


const storeGames = async () => {

    const url = 'https://odds.p.rapidapi.com/v4/sports/icehockey_nhl/odds?regions=us&oddsFormat=american&markets=h2h%2Cspreads%2Ctotals&dateFormat=iso';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0bc9bfac3cmsh9e4d10c83af2714p154bd0jsn5cb890571721',
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
    };

    //Call function to store games to variable
    const games = await getData(url, options);

    //stores data in DB
    saveData(games);


    async function getData(url, options) {
        try {
            const response = await fetch(url, options);
            const data = await response.json();

            const games = [];

            data.forEach(event => {
                games.push({ id: event.id, homeTeam: event.home_team, awayTeam: event.away_team, commence_time: event.commence_time, draftkings: event.bookmakers.find((sportsBook) => sportsBook.key === "draftkings") });
            });

            const gameData = [];
            const todaysDate = new Date().getDate();

            try {
                games.forEach(e => {
                    if (e.commence_time) {
                        let gameDate = new Date(e.commence_time);
                        gameDate = gameDate.getDate();
                        if (todaysDate == gameDate) {
                            let index = games.findIndex(obj => obj.id === e.id);
                            gameData.push(e);
                        }
                    }
                });
            } catch (e) {
                console.error("Error while clearing gameData:\n" + e)
            }
            return gameData;

        } catch (error) {
            console.error(error);
        }
    }

    //function to turn price or point into strings
    function pricePointsToString(priceOrPoint) {
        if (priceOrPoint > 0) {
            priceOrPoint = "+" + priceOrPoint.toString();
        } else if (priceOrPoint < 0) {
            priceOrPoint = priceOrPoint.toString();
        }

        return priceOrPoint;
    }

    //Save upcoming games in DB
    function saveData(games) {
        games.forEach(e => {

            let gameDate = new Date(games[0].commence_time);
            gameDate = `${gameDate.getFullYear()}-${gameDate.getMonth() + 1}-${gameDate.getDate()}`

            try {
                const game = new Game({
                    _id: new mongoose.Types.ObjectId(),
                    game: {
                        homeTeam: e.homeTeam,
                        awayTeam: e.awayTeam,
                        commenceTime: gameDate,
                        odds_before: {
                            h2h:
                            {
                                team1:
                                {
                                    name: e.draftkings.markets[0].outcomes[0].name,
                                    price: pricePointsToString(e.draftkings.markets[0].outcomes[0].price)
                                },
                                team2:
                                {
                                    name: e.draftkings.markets[0].outcomes[1].name,
                                    price: pricePointsToString(e.draftkings.markets[0].outcomes[1].price)
                                }
                            },
                            spreads:
                            {
                                team1:
                                {
                                    name: e.draftkings.markets[1].outcomes[0].name,
                                    price: pricePointsToString(e.draftkings.markets[1].outcomes[0].price),
                                    point: pricePointsToString(e.draftkings.markets[1].outcomes[0].point)
                                },
                                team2:
                                {
                                    name: e.draftkings.markets[1].outcomes[1].name,
                                    price: pricePointsToString(e.draftkings.markets[1].outcomes[1].price),
                                    point: pricePointsToString(e.draftkings.markets[1].outcomes[1].point)
                                }
                            },
                            totals:
                            {
                                over:
                                {
                                    price: pricePointsToString(e.draftkings.markets[2].outcomes[0].price),
                                    point: pricePointsToString(e.draftkings.markets[2].outcomes[0].point)
                                },
                                under:
                                {
                                    price: pricePointsToString(e.draftkings.markets[2].outcomes[1].price),
                                    point: pricePointsToString(e.draftkings.markets[2].outcomes[1].point)
                                }
                            },
                        }
                    }
                });
                game.save();

            } catch (error) {
                console.error("Error trying to save data in db: ", error);
                console.log("current element that caused error:\n " + e)
            }


            console.log("Games have been stored :)")

        });
    }
}
export default storeGames