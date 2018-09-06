// 该文件用于忽略那些文件中不需要加载的less，scss等文件
const ignore = () => {
  const extensions = ['.css', '.scss', '.less', '.png', '.jpg', '.gif'];
  for (let i = 0, len = extensions.length; i < len; i++) {
    require.extensions[extensions[i]] = () => false;
  }
};
module.exports = ignore;
