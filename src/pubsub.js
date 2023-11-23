export default (function pubsub() {
  const _event = {};

  const subscribe = (eName, func) => {
    // if eventName does not exist, create event and assign an array
    if (!_event[eName]) _event[eName] = [];
    _event[eName].push(func);
    console.log(_event);
  };

  return {
    subscribe,
  };
})();
