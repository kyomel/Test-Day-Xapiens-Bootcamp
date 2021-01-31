'use strict'

const response = 
({ message, data = "", success = true }) => ( res, status = 0 ) => {
    const payload = { success, message, data };

    if (!status) {
      return res.json(payload);
    }
      return res.status(status).json(payload);
};

module.exports = response;