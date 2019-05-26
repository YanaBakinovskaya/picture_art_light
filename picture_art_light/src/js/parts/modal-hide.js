function hideModal(overlay, popup) {
  overlay.classList.remove('show');
  document.body.classList.remove('open');
  popup.classList.remove('headShake','animated');
}
module.exports = hideModal;