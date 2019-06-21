import { DateFormatError } from './dp-errors.js';

export default class DPUpdateState {
  constructor(isOpened, calendarDate, selectedDate) {
    this.isOpened = isOpened;

    if(calendarDate instanceof Date) {
      this.calendarDate = calendarDate;
    }
    else {
      throw new DateFormatError(`Calendar date is type of ${calendarDate.constructor.name} but expected type is Date`);
    }

    if(selectedDate instanceof Date) {
      this.selectedDate = selectedDate;
    }
    // else {
    //   throw new DateFormatError(`Selected date is type of ${selectedDate.constructor.name} but expected type is Date`);
    // }
  }
}