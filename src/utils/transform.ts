import { IEpisode, ISchedule } from '../interface/shows';

export const cleanSummary = (summary: string) =>
  summary.replace(/(<([^>]+)>)/gi, '');

export const humanizeMetaInfo = (metainfo: string[]) => metainfo.join(' | ');

export const handleShowSeasons = (episodes: IEpisode[]) => {
  const seasonNumbers = episodes.map((episode) => episode.season);
  const seasons = [...new Set(seasonNumbers)];

  const showSeasons = seasons.map((item) => ({
    season: item,
    episodes: episodes.filter((episode) => episode.season === item),
  }));

  return showSeasons;
};

export const handleSchedule = (schedule: ISchedule) => {
  if (schedule?.time && schedule?.days) {
    return `${schedule.time} on ${humanizeMetaInfo(schedule.days)}`;
  }
  return undefined;
};
