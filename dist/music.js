const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    loop: 'all',
    audio: [
      {
        name: "往后余生",
        artist: '王贰浪',
        url: 'http://www.ytmp3.cn/down/50547.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '一曲相思',
        artist: '阿悠悠',
        url: 'http://www.ytmp3.cn/down/57630.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
      {
        name: '流浪',
        artist: '苏谭谭',
        url: 'http://www.ytmp3.cn/down/54971.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
      }
    ]
});