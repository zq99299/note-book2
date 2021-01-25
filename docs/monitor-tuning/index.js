module.exports = () => {
  return [
    '',
    '00.md',
    {
      title: '基于 JDK 命令行工具的监控',
      collapsable: true,
      children: [
        '01/',
        '01/01.md',
        '01/02.md',
        '01/03.md',
        '01/04.md',
        '01/05.md'
      ]
    },
    {
      title: '基于 JVisualVM 的可视化监控',
      collapsable: true,
      children: [
        '02/',
        '02/01.md',
        '02/02.md'
      ]
    },
    {
      title: '基于 Btrace 的监控调试',
      collapsable: true,
      children: [
        '03/',
        '03/01.md',
        '03/02.md'
      ]
    },
    {
      title: 'Tomcat 性能监控与调优',
      collapsable: true,
      children: [
        '04/',
        '04/01.md',
        '04/02.md',
        '04/03.md',
        '01/04.md'
      ]
    }
  ]
}