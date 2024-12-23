test('renders the component correctly', async () => {
    const qqMusic = require('../node');
    await qqMusic.setCookie('to fill');
    try {
        res = await qqMusic.api('search', { key: '昨夜我飞向遥远的火星', t: 0})
        console.log('歌曲', res)
        // song_url = await qqMusic.api('song/url', { id: res.list[0].songmid, mediaId: res.list[0].strMediaMid})
        // console.log('下载链接', song_url)
        // res = await qqMusic.api('search/hot')
        // console.log('热搜词', res)
    
        // console.log('用户detail', res)

        // 刷新登陆
        res = await qqMusic.api('user/refresh')
        console.log('新cookie', res)
    } catch (error) {
    // 处理错误的代码
        console.log('发生错误：', error.message);
    }
    
  });

