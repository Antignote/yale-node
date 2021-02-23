const STATE_ENUM = {
  // Locked after a failed lock
  1816: 'device_status.lock',
  // Failed to lock
  1815: 'device_status.unlock',
  // Auto-relocked'
  1807: 'device_status.lock',
  // Unlock from inside
  1801: 'device_status.unlock',
  // Unlock from outside, token or keypad
  1802: 'device_status.unlock',
};

export default STATE_ENUM;
