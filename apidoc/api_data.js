define({ "api": [
  {
    "type": "post",
    "url": "/alarm",
    "title": "create an alarm",
    "name": "createAlarm",
    "group": "Alarm",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the alarm.</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>Datetime of the alarm when the alarm is at a specific date</p>"
          },
          {
            "group": "Parameter",
            "type": "time",
            "optional": false,
            "field": "time",
            "description": "<p>Time of the alarm when it's a reccurring alarm</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "dayofweek",
            "description": "<p>The day the alarm should ring (reccurring alarm)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>If the alarm is active or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/AlarmController.js",
    "groupTitle": "Alarm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the alarm.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>Datetime of the alarm when the alarm is at a specific date</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "time",
            "description": "<p>Time of the alarm when it's a reccurring alarm</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "dayofweek",
            "description": "<p>The day the alarm should ring (reccurring alarm)</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>If the alarm is active or not</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/alarm/:id",
    "title": "delete an alarm",
    "name": "deleteAlarm",
    "group": "Alarm",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/AlarmController.js",
    "groupTitle": "Alarm"
  },
  {
    "type": "get",
    "url": "/alarm",
    "title": "get all alarms",
    "name": "getAlarm",
    "group": "Alarm",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AlarmController.js",
    "groupTitle": "Alarm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the alarm.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>Datetime of the alarm when the alarm is at a specific date</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "time",
            "description": "<p>Time of the alarm when it's a reccurring alarm</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "dayofweek",
            "description": "<p>The day the alarm should ring (reccurring alarm)</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>If the alarm is active or not</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/area",
    "title": "create an area",
    "name": "createArea",
    "group": "Area",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AreaController.js",
    "groupTitle": "Area",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the area.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the area in meters</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the area.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the area in meters</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>The owner of the area</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/area/:id",
    "title": "delete an area",
    "name": "deleteArea",
    "group": "Area",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AreaController.js",
    "groupTitle": "Area"
  },
  {
    "type": "get",
    "url": "/area",
    "title": "get all areas",
    "name": "getArea",
    "group": "Area",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AreaController.js",
    "groupTitle": "Area",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the area.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the area in meters</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>The owner of the area</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/area/:id",
    "title": "update an area",
    "name": "updateArea",
    "group": "Area",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/AreaController.js",
    "groupTitle": "Area",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the area.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the area in meters</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the area.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "radius",
            "description": "<p>The radius of the area in meters</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>The owner of the area</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/box",
    "title": "create Box",
    "name": "createBox",
    "group": "Box",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/BoxController.js",
    "groupTitle": "Box",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "boxtype",
            "description": "<p>The Box Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "x",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "y",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "params",
            "description": "<p>params of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>if the box is active or not</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/box/:id",
    "title": "delete box",
    "name": "deleteBox",
    "group": "Box",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/BoxController.js",
    "groupTitle": "Box",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "boxtype",
            "description": "<p>The Box Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "x",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "y",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "params",
            "description": "<p>params of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>if the box is active or not</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/box",
    "title": "get Box",
    "name": "getBox",
    "group": "Box",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/BoxController.js",
    "groupTitle": "Box",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "boxtype",
            "description": "<p>The Box Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "x",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "y",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "params",
            "description": "<p>params of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>if the box is active or not</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/box/:id",
    "title": "get Box ById",
    "name": "getBoxById",
    "group": "Box",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/BoxController.js",
    "groupTitle": "Box",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "boxtype",
            "description": "<p>The Box Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "x",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "y",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "params",
            "description": "<p>params of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>if the box is active or not</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/box/:id",
    "title": "patch Box",
    "name": "patchBox",
    "group": "Box",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/BoxController.js",
    "groupTitle": "Box",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "boxtype",
            "description": "<p>The Box Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "x",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "y",
            "description": "<p>the position of the box in X</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "params",
            "description": "<p>params of the box</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>if the box is active or not</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/brain/classify",
    "title": "send a question to gladys",
    "name": "classify",
    "group": "Brain",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>the message for Gladys</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/BrainController.js",
    "groupTitle": "Brain"
  },
  {
    "type": "post",
    "url": "/brain/trainnew",
    "title": "re-train the sentence model",
    "name": "train",
    "group": "Brain",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/BrainController.js",
    "groupTitle": "Brain"
  },
  {
    "type": "post",
    "url": "/devicestate",
    "title": "create a deviceState",
    "name": "createDeviceState",
    "group": "DeviceState",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceStateController.js",
    "groupTitle": "DeviceState",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": true,
            "field": "datetime",
            "description": "<p>When the state occurred</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "devicetype",
            "description": "<p>The deviceType ID</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicestate/create",
    "title": "create a deviceState (GET)",
    "name": "createDeviceStateGet",
    "group": "DeviceState",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceStateController.js",
    "groupTitle": "DeviceState",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": true,
            "field": "datetime",
            "description": "<p>When the state occurred</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "devicetype",
            "description": "<p>The deviceType ID</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicestate",
    "title": "get all deviceStates",
    "name": "getDeviceState",
    "group": "DeviceState",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "take",
            "description": "<p>the number of deviceState to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "skip",
            "description": "<p>the number of deviceState to skip</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceStateController.js",
    "groupTitle": "DeviceState",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>When the state occurred</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "devicetype",
            "description": "<p>The deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicestate/filtered",
    "title": "get all deviceStates filtered by date range",
    "name": "getDeviceStateFiltered",
    "group": "DeviceState",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "threshold",
            "optional": false,
            "field": "Pourcentage",
            "description": "<p>of data smoothing, from 0% (no smoothing, all values are displayed), to 98% (maximum smoothing).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>the date from which you want deviceState</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>the date until which you want deviceState</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceStateController.js",
    "groupTitle": "DeviceState",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>When the state occurred</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "devicetype",
            "description": "<p>The deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicestate/filtered/minmax",
    "title": "get min and max deviceStates filtered by date range",
    "name": "getDeviceStateFilteredMinMax",
    "group": "DeviceState",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>the date from which you want deviceState</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>the date until which you want deviceState</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceStateController.js",
    "groupTitle": "DeviceState",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>When the state occurred</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "devicetype",
            "description": "<p>The deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/devicetype",
    "title": "create a deviceType",
    "name": "createDeviceType",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/devicetype/:id",
    "title": "delete deviceType",
    "name": "deleteDeviceType",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType"
  },
  {
    "type": "post",
    "url": "/devicetype/:id/exec",
    "title": "change a deviceType state",
    "name": "execDeviceType",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "description": "<p>This API is not for sensors ! It's only for devices that need to execute an action. Ex: A lamp. If you want to save the state of a sensor, you need to use the POST /devicestate route.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "value",
            "description": "<p>New value to apply to the deviceType</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>When the state occurred</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "devicetype",
            "description": "<p>The deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicetype/:id/exec",
    "title": "change a deviceType state (GET)",
    "name": "execDeviceTypeGet",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "description": "<p>This API is not for sensors ! It's only for devices that need to execute an action. Ex: A lamp. If you want to save the state of a sensor, you need to use the POST /devicestate route.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "value",
            "description": "<p>New value to apply to the deviceType</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the state</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>When the state occurred</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "devicetype",
            "description": "<p>The deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/device/:id/devicetype",
    "title": "get by device",
    "name": "getByDevice",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceController.js",
    "groupTitle": "DeviceType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicetype",
    "title": "get all deviceType",
    "name": "getDeviceType",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "take",
            "description": "<p>the number of deviceType to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "skip",
            "description": "<p>the number of deviceType to skip</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicetype/category",
    "title": "get by category",
    "name": "getDeviceTypeByCategory",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/devicetype/:id",
    "title": "get by id",
    "name": "getDeviceTypeById",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "lastValue",
            "description": "<p>The last value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "lastValueId",
            "description": "<p>The ID of the last deviceState of this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "lastChanged",
            "description": "<p>The last time this deviceType changed his value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType"
  },
  {
    "type": "get",
    "url": "/devicetype/room",
    "title": "get by room",
    "name": "getDeviceTypeByRoom",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "lastValue",
            "description": "<p>The last value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "lastValueId",
            "description": "<p>The ID of the last deviceState of this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "lastChanged",
            "description": "<p>The last time this deviceType changed his value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType"
  },
  {
    "type": "get",
    "url": "/room/:id/devicetype",
    "title": "get devicetype in room",
    "name": "getDeviceTypeInRoom",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n   \"id\": 1,\n   \"name\": \"room\",\n   \"house\": 1,\n   \"deviceTypes\": [\n       {\n           \"name\": \"Light\",\n           \"id\": 1,\n           \"type\": \"binary\",\n           \"category\": \"light\",\n           \"tag\": \"light\",\n           \"unit\": null,\n           \"min\": 0,\n           \"max\": 1,\n           \"display\": 1,\n           \"sensor\": 0,\n           \"identifier\": \"THIS_IS_MY_IDENTIFIER\",\n           \"device\": 1,\n           \"service\": \"test\",\n           \"lastChanged\": null,\n           \"lastValue\": null,\n           \"roomHouse\": 1\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType"
  },
  {
    "type": "patch",
    "url": "/devicetype/:id",
    "title": "patch deviceType",
    "name": "patchDeviceType",
    "group": "DeviceType",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceTypeController.js",
    "groupTitle": "DeviceType",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the deviceType.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the deviceType (binary, temperature, color ...)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify this deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The name of the deviceType for text/voice recognition</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "sensor",
            "description": "<p>If the deviceType is a sensor or not</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>The unit of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "min",
            "description": "<p>The min value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "max",
            "description": "<p>The max value of the deviceType</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "display",
            "description": "<p>If the deviceType should be displayed in the view</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "device",
            "description": "<p>The ID of the device of this deviceType</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/device",
    "title": "create a device",
    "name": "createDevice",
    "group": "Device",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceController.js",
    "groupTitle": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the device.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "description": "<p>The protocol the device is using (zwave, wifi)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The service handling the device (a module name)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identifier",
            "description": "<p>An unique identifier to identify the device</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>The room where the device is</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the device.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "description": "<p>The protocol the device is using (zwave, wifi)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The service handling the device (a module name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify the device</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room",
            "description": "<p>The room where the device is</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/device/:id",
    "title": "delete a device",
    "name": "deleteDevice",
    "group": "Device",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceController.js",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "/device",
    "title": "get devices",
    "name": "getDevice",
    "group": "Device",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "take",
            "description": "<p>the number of device to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "skip",
            "description": "<p>the number of device to skip</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>if you want to filter by service (optional)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/DeviceController.js",
    "groupTitle": "Device",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the device.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "description": "<p>The protocol the device is using (zwave, wifi)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The service handling the device (a module name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify the device</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room",
            "description": "<p>The room where the device is</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/device/:id",
    "title": "update a device",
    "name": "updateDevice",
    "group": "Device",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/DeviceController.js",
    "groupTitle": "Device",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the device.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "description": "<p>The protocol the device is using (zwave, wifi)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The service handling the device (a module name)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "identifier",
            "description": "<p>An unique identifier to identify the device</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>The room where the device is</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the device.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "protocol",
            "description": "<p>The protocol the device is using (zwave, wifi)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>The service handling the device (a module name)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>An unique identifier to identify the device</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room",
            "description": "<p>The room where the device is</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/event",
    "title": "create event",
    "name": "CreateEvent",
    "group": "Event",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/EventController.js",
    "groupTitle": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Event code you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>id of the user concerned by the event (only for user-related event)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "house",
            "description": "<p>id of the house where the events take place</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>id of the room where the events take place</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": true,
            "field": "datetime",
            "description": "<p>If you want to specify a specific datetime when the event took place</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room",
            "description": "<p>Room id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eventtype",
            "description": "<p>Event Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Event code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/event/create",
    "title": "create event (GET)",
    "name": "CreateEventGet",
    "group": "Event",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/EventController.js",
    "groupTitle": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Event code you want to create</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>id of the user concerned by the event (only for user-related event)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "house",
            "description": "<p>id of the house where the events take place</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>id of the room where the events take place</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": true,
            "field": "datetime",
            "description": "<p>If you want to specify a specific datetime when the event took place</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room",
            "description": "<p>Room id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eventtype",
            "description": "<p>Event Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Event code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/event",
    "title": "get all events",
    "name": "GetEvents",
    "group": "Event",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "take",
            "description": "<p>Number of events to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "skip",
            "description": "<p>Where to start (for pagination)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/EventController.js",
    "groupTitle": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room",
            "description": "<p>Room id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eventtype",
            "description": "<p>Event Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Event code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/house",
    "title": "get all houses",
    "name": "GetHouses",
    "group": "House",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/HouseController.js",
    "groupTitle": "House",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "uuid",
            "optional": false,
            "field": "uuid",
            "description": "<p>House unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "postcode",
            "description": "<p>Postcode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the house</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/house",
    "title": "create a house",
    "name": "createHouse",
    "group": "House",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/HouseController.js",
    "groupTitle": "House",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "uuid",
            "description": "<p>House unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the house</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of the house</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "postcode",
            "description": "<p>Postcode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the house</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the house</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "uuid",
            "optional": false,
            "field": "uuid",
            "description": "<p>House unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "postcode",
            "description": "<p>Postcode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the house</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/house/:id",
    "title": "delete a house",
    "name": "deleteHouse",
    "group": "House",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/HouseController.js",
    "groupTitle": "House"
  },
  {
    "type": "get",
    "url": "/house/:id/user",
    "title": "get all user in a house",
    "name": "getUserHouse",
    "group": "House",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/HouseController.js",
    "groupTitle": "House",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/house/:id",
    "title": "update a house",
    "name": "updateHouse",
    "group": "House",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/HouseController.js",
    "groupTitle": "House",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "uuid",
            "optional": false,
            "field": "uuid",
            "description": "<p>House unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the house</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of the house</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "postcode",
            "description": "<p>Postcode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the house</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the house</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "uuid",
            "optional": false,
            "field": "uuid",
            "description": "<p>House unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The address of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "postcode",
            "description": "<p>Postcode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the house</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the house</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/location",
    "title": "create location",
    "name": "createLocation",
    "group": "Location",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/LocationController.js",
    "groupTitle": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": true,
            "field": "datetime",
            "description": "<p>Datetime of the location</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "altitude",
            "description": "<p>Altitude</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "accuracy",
            "description": "<p>Accuracy in meters</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>Datetime of the location</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "altitude",
            "description": "<p>Altitude</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "accuracy",
            "description": "<p>Accuracy in meters</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "user",
            "description": "<p>User ID</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/message/user/:id",
    "title": "Get messages",
    "name": "GetMessages",
    "group": "Message",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "take",
            "description": "<p>Number of elements to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of elements to skip</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>primary key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>Datetime of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sender",
            "description": "<p>Message sender id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "receiver",
            "description": "<p>Message receiver id</p>"
          },
          {
            "group": "Success 200",
            "type": "uuid",
            "optional": false,
            "field": "conversation",
            "description": "<p>Conversation unique ID (identify uniquely a discussion)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/message",
    "title": "Send message",
    "name": "SendMessage",
    "group": "Message",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "receiver",
            "description": "<p>The person you are sending the message too. Put null to contact Gladys.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>primary key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "datetime",
            "description": "<p>Datetime of the message</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sender",
            "description": "<p>Message sender id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "receiver",
            "description": "<p>Message receiver id</p>"
          },
          {
            "group": "Success 200",
            "type": "uuid",
            "optional": false,
            "field": "conversation",
            "description": "<p>Conversation unique ID (identify uniquely a discussion)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/house/:id/mode",
    "title": "change mode",
    "name": "changeMode",
    "group": "Mode",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>Mode code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ModeController.js",
    "groupTitle": "Mode",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Event id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room",
            "description": "<p>Room id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eventtype",
            "description": "<p>Event Type id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Event code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Event name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/mode",
    "title": "create mode",
    "name": "createMode",
    "group": "Mode",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ModeController.js",
    "groupTitle": "Mode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Unique code of the Mode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Unique code of the Mode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/mode/:id",
    "title": "delete mode",
    "name": "deleteMode",
    "group": "Mode",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ModeController.js",
    "groupTitle": "Mode"
  },
  {
    "type": "get",
    "url": "/mode",
    "title": "get all modes",
    "name": "getModes",
    "group": "Mode",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ModeController.js",
    "groupTitle": "Mode",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Unique code of the Mode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/music/flushqueue",
    "title": "Flush Queue",
    "name": "MusicFlushQueue",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/music/currenttrack",
    "title": "Get Current Track",
    "name": "MusicGetCurrentTrack",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the current track</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist of the current track</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/music/muted",
    "title": "Get Muted",
    "name": "MusicGetMuted",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "muted",
            "description": "<p>Returns true if the music is muted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/music/playing",
    "title": "Get Playing",
    "name": "MusicGetPlaying",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "playing",
            "description": "<p>Returns true if the music is playing</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/music/playlist",
    "title": "Get Playlists",
    "name": "MusicGetPlaylist",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the playlist</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/music/queue",
    "title": "Get Queue",
    "name": "MusicGetQueue",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the current track</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "artist",
            "description": "<p>Artist of the current track</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/music/volume",
    "title": "Get Volume",
    "name": "MusicGetVolume",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "volume",
            "description": "<p>Volume of the music</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/next",
    "title": "Next",
    "name": "MusicNext",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/playplaylist",
    "title": "Play playlist",
    "name": "MusicNext",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "identifier",
            "description": "<p>Identifier of the playlist</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/pause",
    "title": "Pause",
    "name": "MusicPause",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/play",
    "title": "Play",
    "name": "MusicPlay",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/previous",
    "title": "Previous",
    "name": "MusicPrevious",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/queue",
    "title": "Queue",
    "name": "MusicQueue",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Unique uri identifying the music to play</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/muted",
    "title": "Set muted",
    "name": "MusicSetMuted",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "muted",
            "description": "<p>true if sound is muted</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/volume",
    "title": "Set Volume",
    "name": "MusicSetVolume",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "volume",
            "description": "<p>Volume level</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/music/stop",
    "title": "Stop",
    "name": "MusicStop",
    "group": "Music",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/MusicController.js",
    "groupTitle": "Music",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the music/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/notification",
    "title": "Create notification",
    "name": "createNotification",
    "group": "Notification",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the notification</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>Text of the notification</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "icon",
            "description": "<p>font-awesome icon. Ex: 'fa fa-fire'</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "iconColor",
            "description": "<p>bg-color, ex: 'bg-yellow',</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "priority",
            "description": "<p>priority from -1 to 2</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/NotificationController.js",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/room",
    "title": "create room",
    "name": "createRoom",
    "group": "Room",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/RoomController.js",
    "groupTitle": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Name of the room</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "permission",
            "description": "<p>Permission</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Name of the room</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "permission",
            "description": "<p>Permission</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/room/:id",
    "title": "delete room",
    "name": "deleteRoom",
    "group": "Room",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/RoomController.js",
    "groupTitle": "Room"
  },
  {
    "type": "get",
    "url": "/room",
    "title": "get rooms",
    "name": "getRooms",
    "group": "Room",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "take",
            "description": "<p>number of rooms to return</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "skip",
            "description": "<p>number of rooms to skip</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/RoomController.js",
    "groupTitle": "Room",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Name of the room</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "permission",
            "description": "<p>Permission</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/room/:id",
    "title": "update room",
    "name": "updateRoom",
    "group": "Room",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/RoomController.js",
    "groupTitle": "Room",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Name of the room</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "permission",
            "description": "<p>Permission</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The Name of the room</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "house",
            "description": "<p>House ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "permission",
            "description": "<p>Permission</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/scenario/:id/export",
    "title": "Export Scenario",
    "name": "exportScenario",
    "group": "Scenario",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ScenarioController.js",
    "groupTitle": "Scenario"
  },
  {
    "type": "post",
    "url": "/scenario",
    "title": "Create Scenario from json",
    "name": "importScenario",
    "group": "Scenario",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ScenarioController.js",
    "groupTitle": "Scenario"
  },
  {
    "type": "patch",
    "url": "/scenario/:id",
    "title": "Patch Scenario from json",
    "name": "updateScenario",
    "group": "Scenario",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ScenarioController.js",
    "groupTitle": "Scenario"
  },
  {
    "type": "post",
    "url": "/script/:id/exec",
    "title": "Execute a script",
    "name": "execScript",
    "group": "Script",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/ScriptController.js",
    "groupTitle": "Script"
  },
  {
    "type": "post",
    "url": "/user/user",
    "title": "Login",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user/:id/house/:id/seen",
    "title": "Mark user as seen",
    "name": "Mark_user_as_seen",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "description": "<p>Mark user as seen in a house</p>",
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/whoami",
    "title": "WhoAmI",
    "name": "WhoAmIUser",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "description": "<p>Return currently connected user</p>",
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "create a user",
    "name": "createUser",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>A Password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "delete a user",
    "name": "deleteUser",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/user",
    "title": "get all users",
    "name": "getUsers",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      },
      {
        "name": "admin"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/user/:id",
    "title": "update a user",
    "name": "updateUser",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>A Password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/user/:id/password",
    "title": "change my password",
    "name": "updateUserPassword",
    "group": "User",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>The old password of the account</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>The new password for the account</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPasswordRepeat",
            "description": "<p>The new password repeated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "gender",
            "description": "<p>gender</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assistantName",
            "description": "<p>The name of your assistant for you</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "preparationTimeAfterWakeUp",
            "description": "<p>Time to prepare after wake up</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "admin",
              "habitant",
              "guest"
            ],
            "optional": false,
            "field": "role",
            "description": "<p>The role of the user in the system</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/weather",
    "title": "get weather",
    "name": "GetWeather",
    "group": "Weather",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude where you want the weather</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude where you want the weather</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>(in hour) If you want to get the weather in the future</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/WeatherController.js",
    "groupTitle": "Weather",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "temperature",
            "description": "<p>temperature</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "humidity",
            "description": "<p>humidity</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weather",
            "description": "<p>The code of the weather (rain, cloud)</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "pressure",
            "description": "<p>pressure</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/module/method",
    "title": "Get Methods",
    "name": "modulegetMethods",
    "group": "module",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "module",
            "description": "<p>slug of the module.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service",
            "description": "<p>name of the gladys API like 'television', 'music'... (Optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "methods",
            "description": "<p>array of the method to be test.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "All",
            "description": "<p>module's methods tested</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ModuleController.js",
    "groupTitle": "module"
  },
  {
    "type": "post",
    "url": "/television/customcommand",
    "title": "Custom Command",
    "name": "televisionCustomCommand",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/fastforward",
    "title": "Fast Forward",
    "name": "televisionFastForward",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/television/channel",
    "title": "Get channel",
    "name": "televisionGetChannel",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>Current channel of the television</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/television/state",
    "title": "Get Current State",
    "name": "televisionGetCurrentState",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "state",
            "description": "<p>State of the television</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/television/mute",
    "title": "Get Muted",
    "name": "televisionGetMuted",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "muted",
            "description": "<p>Returns true if the television is muted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/television/source",
    "title": "Get Sources",
    "name": "televisionGetSources",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "All",
            "description": "<p>television source</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "get",
    "url": "/television/volume",
    "title": "Get Volume",
    "name": "televisionGetVolume",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "volume",
            "description": "<p>Volume of the television</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/openinfo",
    "title": "Open Info",
    "name": "televisionOpenInfo",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/openmenu",
    "title": "Open Menu",
    "name": "televisionOpenMenu",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/opensource",
    "title": "Open Source",
    "name": "televisionOpenSource",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/pause",
    "title": "Pause",
    "name": "televisionPause",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/play",
    "title": "Play",
    "name": "televisionPlay",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/presskey",
    "title": "Press Key",
    "name": "televisionPressKey",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/program/minus",
    "title": "Program Minus",
    "name": "televisionProgramMinus",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/program/plus",
    "title": "Program Plus",
    "name": "televisionProgramPlus",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/program/vod",
    "title": "Program Vod",
    "name": "televisionProgramVod",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/rec",
    "title": "Rec",
    "name": "televisionRec",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/rewind",
    "title": "Rewind",
    "name": "televisionRewind",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/:id/channel",
    "title": "Set channel",
    "name": "televisionSetChannel",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/:id/mute",
    "title": "Set muted",
    "name": "televisionSetMuted",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "muted",
            "description": "<p>true if sound is muted</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/volume",
    "title": "Set Volume",
    "name": "televisionSetVolume",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "volume",
            "description": "<p>Volume level</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/stop",
    "title": "Stop",
    "name": "televisionStop",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/:id/state",
    "title": "switch state",
    "name": "televisionSwitchState",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/volume/down",
    "title": "Volume Down",
    "name": "televisionVolumeDown",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  },
  {
    "type": "post",
    "url": "/television/volume/up",
    "title": "Volume Up",
    "name": "televisionVolumeUp",
    "group": "television",
    "permission": [
      {
        "name": "authenticated"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/TelevisionController.js",
    "groupTitle": "television",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "devicetype",
            "description": "<p>DeviceType ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "room",
            "description": "<p>Room ID</p>"
          }
        ]
      }
    },
    "description": "<p>You can put the devicetype attribute OR the room attribute to determine in which room you want to control the television/which precise deviceType is playing.</p>"
  }
] });
