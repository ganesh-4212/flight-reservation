import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import QueryString from "query-string";

interface DurationFilterBtnProps {
  text: string;
  isArrival?: boolean;
  min: number;
  max: number;
}
const DurationFilterBtn: React.FC<DurationFilterBtnProps> = ({
  text,
  min,
  max
}) => {
  const history = useHistory();
  const { search } = useLocation();
  const queryObject = QueryString.parse(search);
  const { durationMin, durationMax } = queryObject;
  let selected =
    durationMin && durationMax && min === +durationMin && max === +durationMax;

  return (
    <Button
      size="small"
      variant="outlined"
      color={selected ? "primary" : "default"}
      style={{ marginLeft: 15, marginBottom: 10 }}
      onClick={() => {
        history.push({
          pathname: "/search",
          search: QueryString.stringify({
            ...queryObject,
            durationMin: min,
            durationMax: max
          })
        });
      }}
    >
      {text}
    </Button>
  );
};
export default DurationFilterBtn;
