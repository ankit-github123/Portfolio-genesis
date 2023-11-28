import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

const CustomDatePicker = (props) => {
  const { tag, ...rest } = props;
  return (
    <div>
      <legend className="text-xs text-light">{tag}</legend>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...rest}
          format="dd/MM/yyyy"
          maxDate={new Date()}
          // onChange={(value) => handleDateChange(value)}
          className="w-full rounded-lg !bg-transparent !border !border-light"
          sx={{
            background: "#1A1A1D",
            "& .MuiPaper-root-MuiPickersPopper-paper": {
              background: "green",
            },
            "& .MuiPickersCalendarHeader-root": {
              background: "green",
            },
            "& .MuiDateCalendar-root": {
              backgroundColor: "white",
            },
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              color: "white",
              padding: "9.5px 14px",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "& .MuiPickersBasePicker-pickerView": {
              minHeight: "20px",
              maxHeight: "20px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "0.5px solid rgba(255,255,255,0.4) !important",
            },
          }}
          openTo="day"
          views={["year", "month", "day"]}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
