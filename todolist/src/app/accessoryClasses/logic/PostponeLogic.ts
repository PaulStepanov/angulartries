import * as moment from 'moment';
import Moment = moment.Moment;

export class PostponeLogic {
  static postponeOneDay(date: Moment) {
    let newDate: Moment;
    if (date.isSame(moment(), 'day') || date.isBefore(moment(), 'day')) {
      newDate = moment().hour(0).minutes(0).second(0).milliseconds(0);
      newDate.add(1, 'days');
    } else {
      newDate = date.clone();
      newDate.add(1, 'days');
    }
    return newDate
  }

  static postponeOneWeek(date: Moment) {
    let newDate: Moment;
    if (date.isSame(moment(), 'day') || date.isBefore(moment(), 'day')) {
      newDate = moment().hour(0).minutes(0).second(0).milliseconds(0);
      newDate.add(1, 'week');
    } else {
      newDate = date.clone();
      newDate.add(1, 'week');
    }
    return newDate;
  }
}
