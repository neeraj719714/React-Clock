const getAngleFromMousePosition = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const rect = document.querySelector(".clock-face").getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
  return angle;
};

export default getAngleFromMousePosition;
