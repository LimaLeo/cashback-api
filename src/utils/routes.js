const filter = require('filter-files');

const isRouteFile = (fileName) => /((routes)|(route))\.js$/.test(fileName);

const getFilesRoutes = () => {
  return new Promise((resolve, reject) => {
    filter('./src/api', (err, files) => {
      if (err || !files) {
        reject(err);
      } else {
        const routes = files
          .filter(isRouteFile);
          
        resolve(routes);
      }
    });
  });
}

const addPathBase = (file) => '../' + file
    .replace('src', '')
    .replace('.js', '');

const getRoutesExports = (file) => require(file);

const joinRoutes = (accumulator, item) => {
    return [...accumulator, ...item];
};

const getLoadRoutes = (files) => {
  return files
    .map(file => {
      file = addPathBase(file);
      file = getRoutesExports(file);
      return file;
    })
    .reduce(joinRoutes, []);
}

const routes = async () => {
  try {
    const filesRoutes = await getFilesRoutes();
    const loadRoutes = getLoadRoutes(filesRoutes);
    return loadRoutes;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = routes;
