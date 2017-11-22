export const PageNames = {
  MANAGE_CONTENT_PAGE: 'MANAGE_CONTENT_PAGE',
  MANAGE_PERMISSIONS_PAGE: 'MANAGE_PERMISSIONS_PAGE',
  USER_PERMISSIONS_PAGE: 'USER_PERMISSIONS_PAGE',
};

export const ContentWizardPages = {
  AVAILABLE_CHANNELS: 'AVAILABLE_CHANNELS',
  SELECT_CONTENT: 'SELECT_CONTENT',
  SELECT_DRIVE: 'SELECT_DRIVE',
  SELECT_IMPORT_SOURCE: 'SELECT_IMPORT_SOURCE',
};

export const TaskTypes = {
  REMOTE_IMPORT: 'remoteimport',
  LOCAL_IMPORT: 'localimport',
  LOCAL_EXPORT: 'localexport',
  DELETE_CHANNEL: 'deletechannel',
};

export const TaskStatuses = {
  IN_PROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  QUEUED: 'QUEUED',
  SCHEDULED: 'SCHEDULED',
};

export const TransferTypes = {
  LOCALIMPORT: 'localimport',
  REMOTEIMPORT: 'remoteimport',
  LOCALEXPORT: 'localexport',
};
