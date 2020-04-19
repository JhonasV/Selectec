const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/v1/auth", { target: "http://localhost:5000/" })
  );

  app.use(
    createProxyMiddleware("/api/v1/subjectschedules/*", {
      target: "http://localhost:5000/",
    })
  );

  app.use(
    createProxyMiddleware("/api/v1/auth/*", {
      target: "http://localhost:5000/",
    })
  );
  app.use(
    createProxyMiddleware("/api/v1/subjects/*", {
      target: "http://localhost:5000/",
    })
  );
  app.use(
    createProxyMiddleware("/api/v1/careers/*", {
      target: "http://localhost:5000/",
    })
  );
};
