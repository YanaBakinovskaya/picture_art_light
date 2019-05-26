function hideModal(overlay, popup) {
  //overlay.style.display = 'none';
  overlay.classList.remove('show-modal');
  document.body.classList.remove('show');
  popup.classList.remove('headShake','animated');
}
module.exports = hideModal;