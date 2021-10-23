export const cleanSummary = (summary: string) =>
  summary.replace(/(<([^>]+)>)/gi, '');

export const humanizeMetaInfo = (metainfo: string[]) => metainfo.join(' | ');
