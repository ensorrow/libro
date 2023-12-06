import {
  BaseView,
  view,
  singleton,
  ViewRender,
  inject,
  ViewManager,
  useInject,
  ViewInstance,
  prop,
  URI,
  ConfigurationRegistry,
} from '@difizen/mana-app';
import { SplitPanel } from '@difizen/mana-react';

import { ConfigurationPanelView } from './configuration-panel-view.js';
import { SettingTreeFactoryId, SettingTreeView } from './setting-tree-view.js';

export const SettingEditorComponent: React.FC = () => {
  const viewInstance = useInject<SettingEditorView>(ViewInstance);
  const PanelView = viewInstance.configurationPanel?.view;
  return (
    <SplitPanel id="">
      <SplitPanel.Pane className="" id="" defaultSize={200}>
        {/* TODO: fix */}
        <ViewRender instanceOrFactoryId={SettingTreeFactoryId} />
      </SplitPanel.Pane>
      <SplitPanel.Pane className="" id="" flex={1}>
        {PanelView && <PanelView />}
      </SplitPanel.Pane>
    </SplitPanel>
  );
};

@singleton()
@view('SettingEditor')
export class SettingEditorView extends BaseView {
  override view = SettingEditorComponent;

  protected readonly configurationRegistry: ConfigurationRegistry;
  protected readonly viewManager: ViewManager;

  constructor(
    @inject(ConfigurationRegistry) configurationRegistry: ConfigurationRegistry,
    @inject(ViewManager) viewManager: ViewManager,
  ) {
    super();
    this.configurationRegistry = configurationRegistry;
    this.viewManager = viewManager;
  }

  @prop()
  configurationPanel?: ConfigurationPanelView;

  override async onViewMount() {
    await this.initFileView();
    await this.initPanel();
  }

  async initPanel() {
    const namespace = this.configurationRegistry.getRootNamespaces().at(0);
    if (namespace) {
      this.configurationPanel =
        await this.viewManager.getOrCreateView<ConfigurationPanelView>(
          ConfigurationPanelView,
        );
      this.configurationPanel.configurationNodes =
        this.configurationRegistry.getConfigurationByNamespace([namespace], false);
    }
  }

  async initFileView() {
    const treeView =
      await this.viewManager.getOrCreateView<SettingTreeView>(SettingTreeView);
    // if (!this.viewStorage.canStoreView) {
    treeView.model.rootVisible = false;
    treeView.model.location = new URI('file:///');
    // }
  }
}
