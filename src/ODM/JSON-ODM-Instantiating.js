; (function (root, factory) {
  root.ODMS = factory()
})(this, function () {

  let dbs = {};

  const startODM = function (name, indexFileIdsObj) {
    dbs[name] = { ...ODM }  // Append to global databases object modeled by the ODM
    dbs[name].startConnection(indexFileIdsObj)  // Start Connection
    return dbs[name]  // For Chainability
  }

  const saveDBs = function () {
    Object.entries(dbs).forEach(([, odm]) => {
      odm.saveDB()
    })
  }

  return {
    dbs,
    startODM,
    saveDBs
  }

})