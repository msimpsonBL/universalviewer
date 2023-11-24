import {
  BaseConfig,
  CenterPanelContent,
  CenterPanelOptions,
  DownloadDialogueContent,
  DownloadDialogueOptions,
  ModuleConfig,
  SettingsDialogueContent,
  SettingsDialogueOptions,
  ShareDialogueContent,
  ShareDialogueOptions,
} from "@/content-handlers/iiif/BaseConfig";

type DefaultCenterPanelOptions = CenterPanelOptions & {};

type DefaultCenterPanelContent = CenterPanelContent & {};

type DefaultCenterPanel = {
  options: DefaultCenterPanelOptions;
  content: DefaultCenterPanelContent;
};

type DefaultDownloadDialogueOptions = DownloadDialogueOptions & {};

type DefaultDownloadDialogueContent = DownloadDialogueContent & {};

type DefaultDownloadDialogue = ModuleConfig & {
  options: DefaultDownloadDialogueOptions;
  content: DefaultDownloadDialogueContent;
};

type DefaultShareDialogueOptions = ShareDialogueOptions & {};

type DefaultShareDialogueContent = ShareDialogueContent & {};

type DefaultShareDialogue = ModuleConfig & {
  options: DefaultShareDialogueOptions;
  content: DefaultShareDialogueContent;
};

type DefaultSettingsDialogueOptions = SettingsDialogueOptions & {};

type DefaultSettingsDialogueContent = SettingsDialogueContent & {};

type DefaultSettingsDialogue = ModuleConfig & {
  options: DefaultSettingsDialogueOptions;
  content: DefaultSettingsDialogueContent;
};

type Modules = {
  centerPanel: DefaultCenterPanel;
  downloadDialogue: DefaultDownloadDialogue;
  shareDialogue: DefaultShareDialogue;
  settingsDialogue: DefaultSettingsDialogue;
};

export type Config = BaseConfig & {
  modules: Modules;
};
