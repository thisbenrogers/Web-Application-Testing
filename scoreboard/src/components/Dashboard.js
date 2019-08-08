import React from 'react';

const Dashboard = props => {

  const {
    reset,
    strikes,
    balls,
    setStrikes,
    setBalls
  } = props;

  const clickStrike = e => {
    e.preventDefault();
    if (strikes < 2) {
      setStrikes(strikes + 1)
    } else {
      reset();
    }
  }

  const clickBall = e => {
    e.preventDefault();
    if (balls < 3) {
      setBalls(balls + 1)
    } else {
      reset();
    }
  }

  const clickFoul = e => {
    e.preventDefault();
    if (strikes === 1) {
      setStrikes(strikes + 1);
    } else if (strikes === 0) {
      setStrikes(strikes + 2)
    } else {
      return;
    }
  }

  return (
    <>
      <button onClick={e => clickStrike(e)}>Strike</button>
      <button onClick={e => clickBall(e)}>Ball</button>
      <button onClick={e => clickFoul(e)}>Foul</button>
      <button onClick={() => reset()}>Hit</button>
    </>
  )
}

export default Dashboard;