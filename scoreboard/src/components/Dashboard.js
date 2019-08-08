import React from 'react';

const Dashboard = props => {

  const {
    reset,
    strikes,
    balls,
    setStrikes,
    setBalls
  } = props;

  const clickStrike = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    } else {
      reset();
    }
  }

  const clickBall = () => {
    if (balls < 3) {
      setBalls(balls + 1)
    } else {
      reset();
    }
  }

  const clickFoul = () => {
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
      <button onClick={() => clickStrike()}>Strike</button>
      <button onClick={() => clickBall()}>Ball</button>
      <button onClick={() => clickFoul()}>Foul</button>
      <button onClick={() => reset()}>Hit</button>
    </>
  )
}

export default Dashboard;