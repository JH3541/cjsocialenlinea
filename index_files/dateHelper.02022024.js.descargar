const dateHelperController = (function () {
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const dayOfWeekNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  function getFormattedDate(date, patternStr) {
    if (!patternStr) {
      patternStr = "M/d/yyyy";
    }
    const day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds(),
      milliseconds = date.getMilliseconds(),
      aaa = hour < 12 ? "AM" : "PM",
      h = aaa === "PM" && hour === 12 ? 12 : hour % 12,
      hh = twoDigitPad(h),
      HH = twoDigitPad(hour),
      mm = twoDigitPad(minute),
      ss = twoDigitPad(second),
      EEEE = dayOfWeekNames[date.getDay()],
      EEE = EEEE.substr(0, 3),
      dd = twoDigitPad(day),
      M = month + 1,
      MM = twoDigitPad(M),
      MMMM = monthNames[month],
      MMM = MMMM.substr(0, 3),
      yyyy = year + "",
      yy = yyyy.substr(2, 2);
    // checks to see if month name will be used
    patternStr = patternStr
      .replace("hh", hh)
      .replace("h", h)
      .replace("HH", HH)
      .replace("H", hour)
      .replace("mm", mm)
      .replace("m", minute)
      .replace("ss", ss)
      .replace("s", second)
      .replace("S", milliseconds)
      .replace("dd", dd)
      .replace("d", day)
      .replace("EEEE", EEEE)
      .replace("EEE", EEE)
      .replace("yyyy", yyyy)
      .replace("yy", yy)
      .replace("aaa", aaa);
    if (patternStr.indexOf("MMM") > -1) {
      patternStr = patternStr.replace("MMMM", MMMM).replace("MMM", MMM);
    } else {
      patternStr = patternStr.replace("MM", MM).replace("M", M.toString());
    }
    return patternStr;
  }

  function twoDigitPad(num) {
    return num < 10 ? "0" + num : num;
  }

  function formatDate(dateTimeStr, template, message, formatPosition) {
    const createdDate = new Date(dateTimeStr);
    const formattedDate = getFormattedDate(createdDate, template);

    return message.replace("{" + formatPosition + "}", formattedDate);
  }

  function printFormattedDate(
    elementId,
    dateTimeStr,
    template,
    message,
    formatPosition
  ) {
    const element = document.getElementById(elementId);

    if (!element) {
      return "";
    }
    element.innerHTML = formatDate(
      dateTimeStr,
      template,
      message,
      formatPosition
    );
  }

  return {
    formatDate: formatDate,
    printFormattedDate: printFormattedDate,
  };
})();
