enum EventType {
  CLICK = 'click',
  DOUBLE_CLICK = 'double_click',
  // TRIPLE_CLICK = 'triple_click',
}

type EventHandlersMapping = {
  [key in EventType]: Function;
};

const EVENT_HANDLERS: EventHandlersMapping = {
  [EventType.CLICK]: () => {},
  [EventType.DOUBLE_CLICK]: () => {},
};

function handleEvent(eventType: EventType) {
  const handler = EVENT_HANDLERS[eventType];
  handler();
}
