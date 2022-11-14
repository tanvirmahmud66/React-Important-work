import { Box, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

export default function DynamicDropDown() {
  const bnGame = ["Cricket", "Kabadi", "Badminton", "Hokey"];
  const inGame = ["Cricket", "Football", "Kabadi", "Chess"];
  const pkGame = ["Cricket", "Hokey", "Squash"];
  const asGame = ["Football", "Cricket", "NRL", "Golf", "Rugby"];
  const atGame = ["Football", "Soccer", "Tennis", "BasketBalls", "AFL"];
  const bzGame = ["Football", "VolleyBall", "Soccer"];
  const jpGame = ["BaseBall", "Sumo Wrestling", "Tennis", "Golf"];


  const [country, setCountry] = useState("");
  const [game, setGame] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  const handleGame = (e) =>{
    setGame(e.target.value);
  }

  return (
    <div className="dropDown-wrapper">
      <Box
        sx={{
          width: "550px",
          height: "600px",
          border: "3px solid lightBlue",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <Stack spacing={2}>
          <TextField
            label="country"
            id="country"
            name="country"
            value={country}
            onChange={handleChange}
            select
            fullWidth
          >
            <MenuItem value="BN">Bangladesh</MenuItem>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="PK">Pakistan</MenuItem>
            <MenuItem value="AS">Australia</MenuItem>
            <MenuItem value="AT">Argentina</MenuItem>
            <MenuItem value="BZ">Brazil</MenuItem>
            <MenuItem value="JP">Japan</MenuItem>
          </TextField>
          <TextField
            label="Game"
            id="game"
            name="game"
            select
            disabled={!country ? true : false}
            fullWidth
          >
            {country == "BN" ? bnGame.map((each)=>{
                return <MenuItem value={each} onChange={handleGame}>{each}</MenuItem>
            }) : null}
            {country == "IN" ? inGame.map((each)=>{
                return <MenuItem value={each} onChange={handleGame}>{each}</MenuItem>
            }) : null}
            {country == "PK" ? pkGame.map((each)=>{
                return <MenuItem value={each} onChange={handleGame}>{each}</MenuItem>
            }) : null}
            {country == "AS" ? asGame.map((each)=>{
                return <MenuItem value={each} onChange={handleGame}>{each}</MenuItem>
            }) : null}
            {country == "AT" ? atGame.map((each)=>{
                return <MenuItem value={each} onChange={handleGame}>{each}</MenuItem>
            }) : null}
            {country == "BZ" ? bzGame.map((each)=>{
                return <MenuItem value={each} onChange={handleGame}>{each}</MenuItem>
            }) : null}
            {country == "JP" ? jpGame.map((each)=>{
                return <MenuItem value={each} onChange={handleGame}>{each}</MenuItem>
            }) : null}
          </TextField>
        </Stack>
      </Box>
    </div>
  );
}
