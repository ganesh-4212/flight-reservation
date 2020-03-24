import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import QueryString from "query-string";

interface ArrivalDepartureBtnProps {
  text: string;
  isArrival?: boolean;
  min: string;
  max: string;
}
const ArrivalDepartureBtn: React.FC<ArrivalDepartureBtnProps> = ({
  text,
  isArrival = false,
  min,
  max
}) => {
  const history = useHistory();
  const { search } = useLocation();
  const queryObject = QueryString.parse(search);
  const { arrivalMin, arrivalMax, departureMin, departureMax } = queryObject;
  let selected =
    (isArrival === false && min === departureMin && max === departureMax) ||
    (isArrival && min === arrivalMin && max === arrivalMax);

  return (
    <Button
      size="small"
      color={selected ? "primary" : "default"}
      onClick={() => {
        const queryUpdated = isArrival
          ? { arrivalMin: min, arrivalMax: max }
          : { departureMin: min, departureMax: max };
        history.push({
          pathname: "/search",
          search: QueryString.stringify({
            ...queryObject,
            ...queryUpdated
          })
        });
      }}
    >
      {text}
    </Button>
  );
};
export default ArrivalDepartureBtn;
