; (function (root, factory) {
  root.CCER = factory()
})(this, function () {

  const { Schema, Model } = ODMS.dbs["ccers"];

  const { Toolkit } = CCLIBRARIES;
  const { timestampCreate } = Toolkit;

  const statusSchemaMap = {
    timestamp: {
      defaultValue: timestampCreate()
    },
    status: {
      type: "string",
      defaultValue: 'pending',
      enums: ['pending', 'accepted', 'rejected', 'deferred']
    }
  }

  const statusSchema = new Schema(statusSchemaMap)

  const rolesSchemaMap = {
    timestamp: {
      defaultValue: timestampCreate()
    },
    role: {
      type: "string",
      defaultValue: 'undecided',
      enums: ['undecided', 'applicant', 'confessor']
    }
  }

  const roleSchema = new Schema(rolesSchemaMap)

  const confessSNSchemaSchemaMap = {
    timestamp: {
      defaultValue: timestampCreate()
    },
    sn: {
      type: "IdObject"
    }
  }

  const confessSNSchema = new Schema(confessSNSchemaSchemaMap)

  const applicationsSchemaMap = {
    timestamp: {
      defaultValue: timestampCreate()
    },
    applicationId: {
      type: "IdObject"
    }
  }

  const applicationsSchema = new Schema(applicationsSchemaMap)

  const activitiesSchemaMap = {
    activityId: {
      type: "string"
    },
    status: {
      type: "string",
      defaultValue: 'pending',
      enums: ['active', 'inactive']
    }
  }

  const activitiesSchema = new Schema(activitiesSchemaMap)

  const accessSchemaMap = {
    timestamp: {
      defaultValue: timestampCreate()
    },
    email: {
      type: "string"
    }
  }

  const accessSchema = new Schema(accessSchemaMap)

  const emailsSchemaMap = {
    timestamp: {
      defaultValue: timestampCreate()
    },
    email: {
      type: "string"
    }
  }

  const emailsSchema = new Schema(emailsSchemaMap)

  const mergedAccountsSchemaMap = {
    timestamp: {
      defaultValue: timestampCreate()
    },
    userId: {
      type: "IdObject"
    }
  }

  const mergedAccountsSchema = new Schema(mergedAccountsSchemaMap)

  const userInfoSchemaMap = {
    firstName: {
      defaultValue: "",
      type: "string"
    },
    lastName: {
      defaultValue: "",
      type: "string"
    },
    age: {
      type: "number"
    }
  }
  const userInfoSchema = new Schema(userInfoSchemaMap)

  const userContactInfoSchemaMap = {
    email: {
      type: "string"
    },
    mobile: {
      type: "string",
      defaultValue: ""
    },
    facebook: {
      type: "string",
      defaultValue: ""
    },
    twitter: {
      type: "string",
      defaultValue: ""
    }
  }
  const userContactInfoSchema = new Schema(userContactInfoSchemaMap)

  const profilePicSchemaMap = {
    profilePicURL: {
      type: "string"
    }
  }
  const profilePicSchema = new Schema(profilePicSchemaMap)

  const createId = function (entry) {
    return "CCER" + "-" + new Date(entry.timestamp).valueOf();
  }

  const userSchemaMap = {
    profilePicArr: [profilePicSchema],
    userInfoArr: [userInfoSchema],
    userContactInfo: [userContactInfoSchema],
    statusArr: [statusSchema],
    rolesArr: [roleSchema],
    potentialConfessArr: [confessSNSchema],
    applications: [applicationsSchema],
    activities: [activitiesSchema],
    access: [accessSchema],
    emailsArr: [emailsSchema],
    mergedAccountsArr: [mergedAccountsSchema],
    banned: {
      type: "bool",
      default: false
    },
    id: {
      setValue: createId,
      type: "string"
    }
  };


  const userSchema = new Schema(userSchemaMap,
    {
      dbSplit: {
        core: ['userInfoArr', 'userContactInfo', 'activities', 'emailsArr', 'mergedAccountsArr', 'rolesArr', 'key', 'id', '_id', '_v'],
        aux: ['statusArr', 'key', 'id'],
        secret: ['potentialConfessArr', 'key', 'id']
      },
      id: 'id',
      key: 'email',
      base: 'key'
    });

  const model = new Model(userSchema, { dbMain: "CCONE" });

  return model

})