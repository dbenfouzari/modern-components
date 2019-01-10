import CalendarIcon from "mdi-react/CalendarIcon";
import ChevronLeft from "mdi-react/ChevronLeftIcon";
import ChevronRight from "mdi-react/ChevronRightIcon";
import moment from "moment";
import * as React from "react";
import { Arrows, CalendarNavigation, SelectedMonth } from "./Calendar.styles";

interface NavigationProps {
  currentDateString: string;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

interface ActionProps {
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
}

const NavigationActions = React.memo(
  ({ onPrev, onNext, onToday }: ActionProps) => (
    <Arrows>
      <span onClick={onToday}>
        <span>
          <CalendarIcon size={20} />
        </span>
      </span>
      <span onClick={onPrev}>
        <span>
          <ChevronLeft size={20} />
        </span>
      </span>
      <span onClick={onNext}>
        <span>
          <ChevronRight size={20} />
        </span>
      </span>
    </Arrows>
  )
);

const Navigation = React.memo(
  ({ currentDateString, onNext, onPrev, onToday }: NavigationProps) => (
    <CalendarNavigation>
      <SelectedMonth>{currentDateString}</SelectedMonth>

      <NavigationActions {...{ onPrev, onNext, onToday }} />
    </CalendarNavigation>
  )
);

export default Navigation;
