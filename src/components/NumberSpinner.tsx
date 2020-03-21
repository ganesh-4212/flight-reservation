import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IconButton } from "@material-ui/core";
import Colors from "../constants/colors";
interface NumberSpinnerProps {
  value: number;
  onChange: (value: number) => void;
}
const NumberSpinner: React.FC<NumberSpinnerProps> = ({ value, onChange }) => {
  return (
    <div
      style={{
        color: "rgba(0, 0, 0, 0.23)",
        display: "inline-block"
      }}
    >
      <span>Seats </span>
      <IconButton
        aria-label="decrement"
        style={{ color: Colors.Primary[900] }}
        disabled={value <= 1}
        onClick={() => {
          onChange(value - 1);
        }}
      >
        <RemoveIcon style={{ fontSize: 20 }} />
      </IconButton>
      <span style={{ color: "black" }}>{value}</span>
      <IconButton
        aria-label="increment"
        onClick={() => {
          onChange(value + 1);
        }}
        style={{ color: Colors.Primary[900] }}
      >
        <AddIcon style={{ fontSize: 20 }} />
      </IconButton>
    </div>
  );
};

export default NumberSpinner;
