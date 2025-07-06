function start() {
  inPageStart(); // per page start
}

function openletter() {
  document.body.insertAdjacentHTML("beforebegin", `
    <div id="opnLtr" onclick="document.getElementById('opnLtr').remove();" tabindex="0">
      <img src="/assets/images/sayonara_PriconneEN.png" alt="schedule">
    </div>
  `);
}