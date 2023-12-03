import { useDateFormatter } from "@react-aria/i18n";
import { Button } from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { VisuallyHidden } from "@react-aria/visually-hidden";

export function CalendarHeader({
  state,
  calendarProps,
  prevButtonProps,
  nextButtonProps,
}) {
  let monthDateFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
    timeZone: state.timeZone,
  });

  return (
    <div className="flex items-center pb-4">
      <VisuallyHidden>
        <h2>{calendarProps["aria-label"]}</h2>
      </VisuallyHidden>
      <Button {...prevButtonProps}>
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      <h2 aria-hidden className="align-center flex-1 text-center text-base">
        {monthDateFormatter.format(
          state.visibleRange.start.toDate(state.timeZone),
        )}
      </h2>
      <Button {...nextButtonProps}>
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
