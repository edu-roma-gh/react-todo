import { ButtonSizes } from "../../constants/button";
import { Button } from "../Button";
import { Card } from "../Card";

import "./Result.css";

export const Result = (props) => {
  const { total = 0, completed = 0 } = props;
  return (
    <Card classNames="resultCard">
      <div>
        <h2>Todo Done</h2>
        <span>Keep it up</span>
      </div>
      <Button size={ButtonSizes.LARGE}>
        {completed}/{total}
      </Button>
    </Card>
  );
};
