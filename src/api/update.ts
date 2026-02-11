import { tauriInvoke } from './tauri';

export interface UpdateInfo {
  has_update: boolean;
  latest_version: string;
  current_version: string;
  download_url?: string;
  release_notes?: string;
  published_at?: string;
}

/**
 * 检查Gitee上的更新
 * @param owner Gitee用户名或组织名
 * @param repo 仓库名
 */
export async function checkUpdate(owner: string, repo: string): Promise<UpdateInfo> {
  return tauriInvoke<UpdateInfo>('check_update', { owner, repo });
}

/**
 * 打开下载链接
 * @param url 下载URL
 */
export async function openDownloadUrl(url: string): Promise<void> {
  return tauriInvoke<void>('open_download_url', { url });
}
