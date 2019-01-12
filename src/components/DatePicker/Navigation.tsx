import CalendarIcon from "mdi-react/CalendarIcon";
import ChevronLeft from "mdi-react/ChevronLeftIcon";
import ChevronRight from "mdi-react/ChevronRightIcon";
import * as React from "react";
import "../Tooltip";
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
      <span
        onClick={onToday}
        className="tooltip"
        data-tooltip="Aller à aujourd'hui"
      >
        <span>
          <CalendarIcon size={20} />
        </span>
      </span>

      <span onClick={onPrev} className="tooltip" data-tooltip="Mois précédent">
        <span>
          <ChevronLeft size={20} />
        </span>
      </span>

      <span onClick={onNext} className="tooltip" data-tooltip="Mois suivant">
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
