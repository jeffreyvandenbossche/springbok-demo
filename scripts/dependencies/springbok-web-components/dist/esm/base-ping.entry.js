import { r as registerInstance, h, H as Host } from './index-35b5e8ce.js';

const BasePing = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pong = 'Pong';
  }
  render() {
    return h(Host, null, this.pong);
  }
};

export { BasePing as base_ping };

//# sourceMappingURL=base-ping.entry.js.map