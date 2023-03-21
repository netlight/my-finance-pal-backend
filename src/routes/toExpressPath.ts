const toExpressPath = (openApiPath: string): string =>
  openApiPath.replaceAll(/({)(.*)(})/g, ":$2");

export default toExpressPath;
