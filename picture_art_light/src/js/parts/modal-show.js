function showModal(overlay, popup) {
  overlay.style.display = 'block';
  document.body.classList.add('show-modal');
  popup.classList.add('headShake','animated');
}
module.exports = showModal;
