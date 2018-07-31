const errors = Object.freeze({
  invalidAuth: () => {
    return {
    code: 401,
    message: "Invalid authentication credentials."
    }
  },
  missingAuth: () => {
    return {
    code: 401,
    message: "No authtoken provided."
    }
  },
  forbidden: (permission, file) => {
    return {
      code: 403,
      message: "Permission "+permission+"denied on file "+file+"."
    }
  },
  notFound: (permission, file) => {
    return {
    code: 404,
    message: "Resource " + permission + file + " not found."
    }
  },
  conflict: (ressource) => {
    return {
    code: 409,
    message: "Resource " + ressource + " already exists."
    }
  },
  forbidden: () => {
    return {
    code: 403,
    message: "Permission 'xxx' denied on file 'yyy'."
    }
  },
  server: () => {
    return {
    code: 500,
    message: "Internal Server Error."
    }
  }
});

module.exports = errors;