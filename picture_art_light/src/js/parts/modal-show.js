function showModal(overlay, popup) {
  overlay.classList.add('show');
  document.body.classList.add('open');
  popup.classList.add('headShake','animated');
}
module.exports = showModal;
