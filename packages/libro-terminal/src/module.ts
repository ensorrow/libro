import { ManaModule } from '@difizen/mana-app';

import { TerminalConfiguration } from './configuration.js';
import { TerminalConnection } from './connection.js';
import { TerminalManager } from './manager.js';
import { TerminalOption } from './protocol.js';
import { TerminalConnectionFactory } from './protocol.js';
import { TerminalRestAPI } from './restapi.js';
import { TerminalThemeService } from './theme-service.js';
import { LibroTerminalView } from './view.js';

export const TerminalModule = ManaModule.create().register(
  TerminalConnection,
  TerminalManager,
  TerminalRestAPI,
  {
    token: TerminalConnectionFactory,
    useFactory: (ctx) => {
      return (options: TerminalOption) => {
        const child = ctx.container.createChild();
        child.register({ token: TerminalOption, useValue: options });
        return child.get(TerminalConnection);
      };
    },
  },
  TerminalConfiguration,
  TerminalThemeService,
  LibroTerminalView,
);
