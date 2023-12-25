import type { LanguageMap } from '.'
import { LanguageKey } from './key'
import { META } from '/@/config/app.config'

export const enLangMap: LanguageMap = {
  [LanguageKey.APP_SLOGAN]: META.en_sub_title,
  [LanguageKey.PAGE_HOME]: 'Home',
  [LanguageKey.CATEGORY_INSIGHT]: 'Insight',
  [LanguageKey.CATEGORY_CODE]: 'Code',
  [LanguageKey.PAGE_ARCHIVE]: 'Archive',
  [LanguageKey.PAGE_GITHUB]: 'GitHub',
  [LanguageKey.PAGE_ABOUT]: 'About',
  [LanguageKey.PAGE_GUESTBOOK]: 'Guestbook',
  [LanguageKey.PAGE_SPONSOR]: 'Sponsor',
  [LanguageKey.PAGE_APP]: 'APP',
  [LanguageKey.PAGE_PHOTOGRAPHY]: 'Photog',
  [LanguageKey.STATISTIC_ARTICLES]: 'Articles',
  [LanguageKey.STATISTIC_COMMENTS]: 'Comments',
  [LanguageKey.STATISTIC_TAGS]: 'Tags',
  [LanguageKey.STATISTIC_TODAY_VIEWS]: 'Today views',
  [LanguageKey.STATISTIC_TOTAL_VIEWS]: 'Total views',
  [LanguageKey.STATISTIC_TOTAL_UPVOTES]: 'Total upvotes',
  [LanguageKey.STATISTIC_AVERAGE_EMOTION]: 'Rating',
  [LanguageKey.EMPTY_PLACEHOLDER]: 'NULL',
  [LanguageKey.NOT_FOUND]: 'Arrives here at last',
  [LanguageKey.BACK_TO_HOME_PAGE]: 'Drive by',
  [LanguageKey.GUESTBOOK_SLOGAN]: 'You have come a long way',
  [LanguageKey.AD]: 'AD',
  [LanguageKey.FEEDBACK]: 'Feedback',
  [LanguageKey.TO_TOP]: 'To top',
  [LanguageKey.TO_BOTTOM]: 'Next screen',
  [LanguageKey.ORIGIN_ORIGINAL]: 'OG',
  [LanguageKey.ORIGIN_REPRINT]: 'RPT',
  [LanguageKey.ORIGIN_HYBRID]: 'HY',
  [LanguageKey.ACTION_ON]: 'on',
  [LanguageKey.ACTION_OFF]: 'off',
  [LanguageKey.MUSIC_PLACEHOLDER]: 'Music player',
  [LanguageKey.SEARCH_PLACEHOLDER]: 'Search...',
  [LanguageKey.CATEGORY_UNCATEGORIZED]: 'Uncategorized',
  [LanguageKey.ANNOUNCEMENT_PLACEHOLDER]: 'No announcements',
  [LanguageKey.TAG_PLACEHOLDER]: 'No tags',
  [LanguageKey.LIST_NO_MORE_DATA]: 'No more',
  [LanguageKey.ARTICLE_PLACEHOLDER]: 'No articles',
  [LanguageKey.ARTICLE_TITLE]: 'Articles',
  [LanguageKey.ARTICLE_VIEWS]: 'views',
  [LanguageKey.ARTICLE_READ_ALL]: 'Show Full Article',
  [LanguageKey.ARTICLE_RENDERING]: 'Rendering...',
  [LanguageKey.ARTICLE_LIST_LOADMORE]: 'Loadmore',
  [LanguageKey.ARTICLE_LIST_LOADING]: 'Loading...',
  [LanguageKey.ARTICLE_FEATURED]: 'featured',
  [LanguageKey.ARTICLE_FEATURED_SHORT]: 'feat',
  [LanguageKey.COMMENT_LIST_EMPTY]: 'Be the first to comment',
  [LanguageKey.COMMENT_UPVOTE]: 'upvote',
  [LanguageKey.COMMENT_DOWNVOTE]: 'downvote',
  [LanguageKey.COMMENT_DELETE]: 'delete',
  [LanguageKey.COMMENT_DELETE_CONFIRM]:
    'Are you sure you want to delete this comment? You cannot undo this action.',
  [LanguageKey.COMMENT_REPLY]: 'reply',
  [LanguageKey.COMMENT_REPLY_CANCEL]: 'cancel reply',
  [LanguageKey.COMMENT_MODERATOR]: 'Moderator',
  [LanguageKey.COMMENT_SORT_OLD]: 'Oldest',
  [LanguageKey.COMMENT_SORT_NEW]: 'Newest',
  [LanguageKey.COMMENT_SORT_HOT]: 'Hottest',
  [LanguageKey.COMMENT_POST_NAME]: 'name',
  [LanguageKey.COMMENT_POST_EMAIL]: 'email',
  [LanguageKey.COMMENT_POST_SITE]: 'site',
  [LanguageKey.COMMENT_POST_CONTENT]: 'content',
  [LanguageKey.COMMENT_POST_PLACEHOLDER]: 'Hit the nail on the head',
  [LanguageKey.COMMENT_POST_ERROR_CONTENT]: 'Content requirements are within 3000 characters!',
  [LanguageKey.QUERY_PARAMS_ERROR]: 'Invalid query params: ',
  [LanguageKey.POST_ACTION_ERROR]: 'Failed! Get error detail in console',
  [LanguageKey.SUBMIT]: 'Submit',
  [LanguageKey.SUBMITTING]: 'Submitting...',
  [LanguageKey.MOMENT_AM]: 'AM',
  [LanguageKey.MOMENT_PM]: 'PM',
  [LanguageKey.MOMENT_JUST_NOW]: 'Just now',
  [LanguageKey.MOMENT_MINUTES]: 'minutes',
  [LanguageKey.MOMENT_HOURS]: 'hours',
  [LanguageKey.MOMENT_WEEKS]: 'weeks',
  [LanguageKey.MOMENT_DAYS]: 'days',
  [LanguageKey.MOMENT_MONTHS]: 'months',
  [LanguageKey.MOMENT_YEAR]: 'year',
  [LanguageKey.MOMENT_AGO]: (args: { date: string }) => `${args.date} ago`
}