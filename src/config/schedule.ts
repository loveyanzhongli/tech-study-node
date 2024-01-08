/**
 * @description 定时任务
 */
export type Schedule = {
  /**
   * @description 用户昵称
   */
  nick: string;
  /**
   * @description 用户token
   * @link {@link https://www.pushplus.plus/liaison.html 好友消息}
   */
  token: string;
  /**
   * @description 定时时间
   */
  cron: string;
  /**
   * @description 学习任务配置
   * @example [文章选读, 视听学习, 每日答题]
   */
  taskConfig: [boolean, boolean, boolean];
  /**
   * @description 刷新页面 cookie 的随机时间间隔，单位为分钟页面 cookie 过期时间大概是 4 个小时，设置小于 4 个小时都行
   * @example  [60, 120] 则表示随机取 60 ~ 120 分钟刷新一次
   */
  refreshCookieInterval: [number, number];
};

/**
 * @description 定时任务配置
 */
export const SCHEDULE_CONFIG: Schedule[] = [
  {
    // 若 `Push 配置`中 `enabled` 为 true，任务配置的用户 `token` 为必填项
    /**
     * @description 用户昵称
     */
    nick: '闫忠利',
    /**
     * @description 自己或者好友 token  (-)
     */
    token: 'd74c0b9088b74a11b0aba4719fe79baf',
    /**
     * @description cron 表达式
     * @example '0 0 12 * * ?' 表示12点, ['0 0 12 * * ?', '0 0 13 * * ?'] 表示十二点和十三点
     */
    cron: '0 0 10 * * ?',
     /**
     * @description 学习项目配置
     * @example  [文章选读, 视听学习, 每日答题]
     */
    taskConfig: [true, true, true],
    refreshCookieInterval: [60, 120],
  },
];
