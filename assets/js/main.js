function start() {
  inPageStart(); // per page start
  jstClock();
}

function jstClock() {
  const tD = new Date(new Date().getTime() + diffOffs(9));
  let mt = tD.getMonth(),
    dd = tD.getDate(),
    yy = tD.getFullYear(),
    hh = tD.getHours(),
    mm = tD.getMinutes(),
    ss = tD.getSeconds();
  mm = addZero(mm);
  ss = addZero(ss);
  document.getElementById("time").innerHTML = hr12(hh) + ":" + mm + ampm(hh) + " JST";
  document.getElementById("date").innerHTML = dd + " " + month(mt) + " " + yy;
  setTimeout(jstClock, 0);
}
function addZero(z) {
  if (z < 10) { z = "0" + z };
  return z;
}
function diffOffs(tz) {
  const dt = new Date();
  let tzDiff = tz * 60 + dt.getTimezoneOffset(),
    diff = tzDiff * 60 * 1000;
  return diff;
}
function hr12(hr) {
  const hrs = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  for (let a = hr; a <= 23; a++) {
    if (hr <= 11) {
      return hr = hrs[a];
    } else if (hr <= 23) {
      ind = a - hrs.length;
      return hr = hrs[ind];
    }
  }
}
function ampm(ap) {
  const apD = ["am", "pm"];
  for (let p = ap; p <= 23; p++) {
    if (ap <= 11) {
      return ap = apD[0];
    } else if (ap <= 23) {
      return ap = apD[1];
    }
  }
}
function month(mth) {
  const mos = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let m = mth; m <= 12; m++) {
    return mth = mos[m];
  }
}