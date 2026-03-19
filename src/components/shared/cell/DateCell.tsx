import { format } from "date-fns";

interface DateCellProps {
  date: string | Date;
  formatString?: string;
}

const DateCell = ({ date, formatString = "MMM dd, yyyy" }: DateCellProps) => {
  if (!date) return <span className="text-sm text-muted-foreground">-</span>;

  const formattedDate = format(new Date(date), formatString);
  return <span className="text-sm">{formattedDate}</span>;
};

export default DateCell;
