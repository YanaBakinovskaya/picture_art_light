function hideModal(overlay, popup) {
  overlay.style.display = 'none';
  document.body.classList.remove('show-modal');
  popup.classList.remove('headShake','animated');
}
module.exports = hideModal;