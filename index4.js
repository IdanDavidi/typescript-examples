const EVENT_TYPES = {
  CLICK: 'click',
  DOUBLE_CLICK: 'double_click',
  // TRIPLE_CLICK = 'triple_click',
};

const EVENT_HANDLERS = {
  [EVENT_TYPES.CLICK]: () => {},
  [EVENT_TYPES.DOUBLE_CLICK]: () => {},
};

function handleEvent(eventType) {
  const handler = EVENT_HANDLERS[eventType];
  handler();
}
