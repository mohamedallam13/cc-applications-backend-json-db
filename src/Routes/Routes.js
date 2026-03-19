; (function (root, factory) {
  root.ROUTER = factory()
})(this, function () {

  const {

  } = CONTROLLER

  const Router = {

  }

  function route(path, request) {
    return Router[path](request)
  }


  return {
    route
  }

})