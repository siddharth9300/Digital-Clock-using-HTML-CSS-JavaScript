setInterval(() => {
  d = new Date();
  date = d.getDate();
  year = d.getFullYear();

  weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = weekday[d.getDay()];
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month = months[d.getMonth()];
  hour = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  //   millisec = d.getMilliseconds();
  var AmOrPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  hour = hour <= 9 ? "0" + hour : hour;
  min = min <= 9 ? "0" + min : min;
  sec = sec <= 9 ? "0" + sec : sec;
  //   if (millisec <= 9) {
  //     millisec = "00" + millisec;
  //   } else if (millisec <= 99) {
  //     millisec = "0" + millisec;
  //   }
  //   var millisec = millisec <=99 ? millisec="0"+millisec:millisec=millisec;
  document.getElementById("time").innerHTML =
    hour + ":" + min + ":" + sec /*+ ":"+ millisec*/ + " " + AmOrPm;
  document.getElementById("date").innerHTML =
    day + ", " + date + " " + month + " " + year;
    
}, 1);
