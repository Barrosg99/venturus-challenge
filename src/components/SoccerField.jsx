/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import TeamContext from '../context/TeamContext';
import ShowPlayer from './ShowPlayer';

export default function SoccerField() {
  // const { team } = useContext(TeamContext);
  const [players, setPlayers] = useState({});
  const team = [
    {
      players: [
        {
          name: 'alexandre Otario pato',
        },
        {
          name: 'alexandre Otario pato',
        },
        {
          name: 'alexandre Otario pato',
        },
        {
          name: 'balbuena NoBueno bemBueno',
        },
      ],
    },
    {
      players: [
        {
          name: 'alexandre Otario pato',
        },
        {
          name: 'alexandre Otario pato',
        },
        {
          name: 'alexandre Otario pato',
        },
        {
          name: 'balbuena NoBueno bemBueno',
        },
      ],
    },
  ];

  function returnInitials(name) {
    const fullName = name.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }

  useEffect(() => {
    const allPlayers = {};
    team.forEach((squad) => {
      squad.players.forEach((player) => {
        if (allPlayers[player.name] > 0) {
          allPlayers[player.name] += 1;
        } else allPlayers[player.name] = 1;
      });
    });

    const playerNames = Object.keys(allPlayers);
    let playedTimes = 0;
    let mostPlayed = playerNames[0];
    let lessPlayed = playerNames[0];
    let mostTimesPlayed = allPlayers[playerNames[0]];
    let lessTimesPlayed = allPlayers[playerNames[0]];

    playerNames.forEach((key) => {
      playedTimes += allPlayers[key];
      if (allPlayers[key] > mostTimesPlayed) {
        mostTimesPlayed = allPlayers[key];
        mostPlayed = key;
      } else if (allPlayers[key] < lessTimesPlayed) {
        lessTimesPlayed = allPlayers[key];
        lessPlayed = key;
      }
    });

    setPlayers({
      mostPlayed: {
        name: returnInitials(mostPlayed),
        percentage: (mostTimesPlayed / playedTimes) * 100,
      },
      lessPlayed: {
        name: returnInitials(lessPlayed),
        percentage: (lessTimesPlayed / playedTimes) * 100,
      },
    });
  }, []);

  return (
    <Container>
      <ShowPlayer
        type="most"
        playerName={players.mostPlayed && players.mostPlayed.name}
        pickRate={players.mostPlayed && `${players.mostPlayed.percentage}%`}
      />
      <div>
        <span />
      </div>
      <ShowPlayer
        type="less"
        playerName={players.mostPlayed && players.lessPlayed.name}
        pickRate={players.mostPlayed && `${players.lessPlayed.percentage}%`}
      />
    </Container>
  );
}
const Container = styled.div`
  background-image: linear-gradient(#ba457c,#683e8e);
  height: 50%;
  display: flex;
  justify-content: space-around;
  border-radius: 11px;

  & > div:nth-child(2){
    background-color: silver;
    width:1px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid silver;
      margin-left: -25px;
    }
  }
`;
