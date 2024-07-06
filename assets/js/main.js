function start() {
  inPageStart(); // per page start
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

function isLineupActive(s) {
  if (s == 0) {
    document.getElementById("vodList").style.display = "none";
    document.getElementById("noVod").style.display = "block";
  } else if (s == 1) {
    document.getElementById("vodList").style.display = "block";
    document.getElementById("noVod").style.display = "none";
  }
}

function lineupUpdated(mm, dd, yy) {
  const dt = new Date(new Date(yy, mm, dd).getTime() + diffOffs(9));
  document.getElementById("lineupUpd").innerHTML = dt.getDate() + " " + month(dt.getMonth() - 1) + " " + dt.getFullYear() + " JST";
}

function dailyKaiser() {
  for (let m = 0; m < 31; m++) {
    document.getElementById("dailyKaiser-" + (m + 1)).innerHTML = "Day " + (m + 1);
  }
}

function openletter() {

  let stmt1 =
  "1 of 2" +
  "\n\n" +
  "This Open Message has been released following the shutdown of Princess " +
  "Connect! Re:Dive (Global EN) back in 30 Apr at 1am UTC." +
  "\n\n" +
  "It's been a long road that we took to get the players hyped up when " +
  "it launched last 2020, and everything has paid off in the end. We " +
  "would not be able to go this far were it not because of our dearest " +
  "fans whom through this game has developed their interest in the " +
  "anime as a whole." +
  "\n\n" +
  "And we would also thank the developers, maintainers and partners " +
  "that make up the framework of the game for their unending love " +
  "and passion that they poured to deliver the players the best " +
  "experience that they could never get anywhere else." +
  "\n\n" +
  "As the sun sets around Landosol and the whole of Astraea, and as " +
  "the servers are finally turned off for the last time, we are reminded " +
  "that not all moments last forever. Sometimes, those that did good " +
  "to us must go, leaving us only the memories that we shared." +
  "\n\n" +
  "We at GourmetDayLife / Astraea Centrale would like to thank all " +
  "the developers and partners for making this dream possible, and all " +
  "the players for connecting with each other through events, rankings, " +
  "battles, story and so on.";

  let stmt2 =
  "2 of 2" +
  "\n\n" +
  "We would like to close this Open Message with a sentence that " +
  "brought us to where we are today:" +
  "\n" +
  "「The Battle of Landosol has long ended, and Landosol is at peace. " +
  "But the Gourmet Guild and Co. still ventures forth...」" +
  "\n\n" +
  "Until we meet again, Astraea." +
  "\n\n" +
  "thebelovedmoon" +
  "\n" +
  "GourmetDayLife / Astraea Centrale";

  alert(stmt1);
  alert(stmt2);

}