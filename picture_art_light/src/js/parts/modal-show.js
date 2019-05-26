function showModal(overlay, popup) {
  overlay.classList.add('show-modal');
  document.body.classList.add('show');
  popup.classList.add('headShake','animated');
}
module.exports = showModal;
