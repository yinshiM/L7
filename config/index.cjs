/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
 SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  },
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1df09e4ac8394015',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b05b5c9c976b6a5d2ed841c21904f050',

  PROVINCE: '福建',
  CITY: '南平',

  USERS: [
    {
      // 想要发送的人的名字
      name: '/:pig',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxJcP6-bZG-Yhb9pxuzDM0QLYgYM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'vB-Y9bJF2OtubYhbsA5SQJNjr7CKYGvty4e_Dd6EIF0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-11',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '/:pig', year: '2001', date: '12-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '77', year: '2001', date: '12-11',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '02-02',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: 'Lee',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxJcP6-bZG-Yhb9pxuzDM0QLYgYM',
    }
  ],

}

module.exports = USER_CONFIG

